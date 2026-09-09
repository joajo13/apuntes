/**
 * Motor de búsqueda de los apuntes.
 *
 * No toca el DOM a propósito: se puede correr en node y testear solo.
 * La UI vive en `buscador-ui.js`.
 *
 * Uso:
 *   import { search } from './buscador.js';
 *   const resultados = search('integrales por partes', { subjectId: 'analisis-matematico-2' });
 *
 * El índice se arma solo la primera vez que se busca y queda cacheado.
 */
import { SUBJECTS } from './content.js';

// ---------------------------------------------------------------- normalización

/**
 * Baja a minúscula y saca tildes **preservando la longitud del string**.
 *
 * Lo de la longitud no es capricho: los offsets que devuelve una búsqueda
 * sobre el texto normalizado se usan para cortar el snippet sobre el texto
 * original. Si `_fold` corriera los índices, los snippets saldrían movidos.
 */
export function _fold(str) {
  let out = '';
  for (const ch of str) {
    const plano = ch.normalize('NFD')[0].toLowerCase();
    // Si el plegado cambió el largo (emoji, símbolo raro), dejamos el original.
    out += plano.length === ch.length ? plano : ch;
  }
  return out;
}

/** Saca tags HTML y entidades. */
function stripHtml(str) {
  return str
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    // A espacio, no a `<`/`>`: los apuntes escriben placeholders como
    // `&lt;host&gt;`, y decodificarlos dejaría texto que parece un tag.
    // La palabra de adentro igual queda buscable.
    .replace(/&lt;|&gt;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

/**
 * Deja legible el LaTeX: tira los comandos (`\int`, `\operatorname`) y la
 * puntuería de fórmula, pero conserva las palabras sueltas. Así
 * `$\operatorname{sen} x$` queda como "sen x" y sigue siendo buscable.
 */
function stripLatex(str) {
  return str
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[$\\{}^_~&]/g, ' ');
}

function limpiar(str) {
  return stripLatex(stripHtml(String(str))).replace(/\s+/g, ' ').trim();
}

// ---------------------------------------------------------------- índice

/** Junta el texto buscable de un bloque. Los tipos sin texto devuelven ''. */
function textoDeBloque(b) {
  if (!b || typeof b !== 'object') return '';
  switch (b.type) {
    case 'h3':
      return [b.text, b.criollo].filter(Boolean).join(' ');
    case 'p':
    case 'callout':
      return b.text || '';
    case 'ul':
    case 'ol':
      return (b.items || []).join(' ');
    case 'figure':
    case 'plot':
      return b.caption || '';
    case 'table':
      return [...(b.headers || []), ...(b.rows || []).flat()].join(' ');
    default:
      // math, code, mermaid: puro símbolo, no aporta a la búsqueda.
      return '';
  }
}

let _cache = null;

/**
 * Arma el índice plano: un registro por sección, con su texto ya limpio.
 * Es idempotente y cachea, así que llamarlo de más no cuesta.
 */
export function buildIndex({ force = false } = {}) {
  if (_cache && !force) return _cache;

  const registros = [];
  for (const subject of SUBJECTS) {
    const units = subject.units || {};
    for (const section of subject.sections || []) {
      // El cuerpo va aparte del título: el snippet sale de acá, así no
      // desperdicia su primera línea repitiendo el título que ya se muestra arriba.
      const cuerpo = limpiar(
        [section.criollo || '', ...(section.blocks || []).map(textoDeBloque)].join(' ')
      );
      const partes = [section.title || '', cuerpo];
      registros.push({
        cuerpo,
        subjectId: subject.id,
        subjectTitle: subject.title,
        sectionId: section.id,
        sectionTitle: limpiar(section.title || ''),
        unitTitle: units[section.unit] || '',
        criollo: limpiar(section.criollo || ''),
        texto: limpiar(partes.join(' ')),
      });
    }
  }

  // Se pliega una sola vez acá, no en cada búsqueda.
  for (const r of registros) {
    r._t = _fold(r.sectionTitle);
    r._u = _fold(`${r.unitTitle} ${r.criollo}`);
    r._b = _fold(r.texto);
    r._c = _fold(r.cuerpo);
  }

  _cache = registros;
  return _cache;
}

// ---------------------------------------------------------------- búsqueda

const PESO_TITULO = 12;
const PESO_UNIDAD = 4;
const PESO_CUERPO = 1;
const BONUS_FRASE_TITULO = 20;
/**
 * Premia que el título sea *sobre* lo buscado y no que apenas lo mencione:
 * cuanto más ocupa la consulta del título, más suma. Así "Regla de L'Hôpital"
 * le gana a "Guía de ejercicios — Regla de L'Hôpital" cuando buscás "hopital".
 */
const BONUS_TITULO_AJUSTADO = 15;
const BONUS_MATERIA_ACTUAL = 8;

function escaparRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Cuántos caracteres del token se exigen. Recortar a la raíz es lo que hace
 * que "integrales" encuentre "integración" y "concavidad" encuentre "cóncava":
 * el castellano deriva mucho por sufijo y sin esto la búsqueda se vuelve
 * literal de más. Los tokens cortos quedan intactos.
 */
const PREFIJO_MAX = 6;

function raiz(token) {
  return token.length > PREFIJO_MAX ? token.slice(0, PREFIJO_MAX) : token;
}

/**
 * Un token matchea al principio de una palabra: "integral" encuentra
 * "integrales", pero "sen" no se cuela dentro de "presentación".
 */
function regexToken(token) {
  return new RegExp(`(^|[^a-z0-9])${escaparRegex(raiz(token))}`);
}

function recortarSnippet(texto, textoPlegado, token, largo = 160) {
  const re = regexToken(token);
  const m = re.exec(textoPlegado);
  if (!m) return texto.slice(0, largo).trim();

  // El match incluye el separador de adelante; el término arranca después.
  const inicioTermino = m.index + m[0].length - token.length;
  let desde = Math.max(0, inicioTermino - Math.floor(largo / 3));
  let hasta = Math.min(texto.length, desde + largo);

  // No cortar palabras por la mitad.
  if (desde > 0) {
    const esp = texto.indexOf(' ', desde);
    if (esp !== -1 && esp < inicioTermino) desde = esp + 1;
  }
  if (hasta < texto.length) {
    const esp = texto.lastIndexOf(' ', hasta);
    if (esp > inicioTermino) hasta = esp;
  }

  const cuerpo = texto.slice(desde, hasta).trim();
  return `${desde > 0 ? '…' : ''}${cuerpo}${hasta < texto.length ? '…' : ''}`;
}

/**
 * Busca en todas las materias.
 *
 * @param {string} query        lo que escribió el usuario
 * @param {object} [opts]
 * @param {string} [opts.subjectId]  materia en la que está parado (la sube en el ranking)
 * @param {number} [opts.limit=30]   máximo de resultados
 * @param {Array}  [opts.index]      índice ya armado (para los tests)
 * @returns {Array<{subjectId,subjectTitle,sectionId,sectionTitle,unitTitle,texto,snippet,score}>}
 */
export function search(query, { subjectId = null, limit = 30, index = null } = {}) {
  const q = _fold(String(query || '')).trim();
  if (!q) return [];

  const tokens = q.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const registros = index || buildIndex();
  const regexes = tokens.map(regexToken);
  const frase = q;

  const hits = [];
  for (const r of registros) {
    let score = 0;
    let todos = true;

    for (const re of regexes) {
      const enTitulo = re.test(r._t);
      const enUnidad = re.test(r._u);
      const enCuerpo = re.test(r._b);

      // AND: si un token no está en ningún lado, la sección no cuenta.
      if (!enTitulo && !enUnidad && !enCuerpo) {
        todos = false;
        break;
      }
      if (enTitulo) score += PESO_TITULO;
      if (enUnidad) score += PESO_UNIDAD;
      if (enCuerpo) score += PESO_CUERPO;
    }
    if (!todos) continue;

    if (r._t.includes(frase)) {
      score += BONUS_FRASE_TITULO;
      score += Math.round(BONUS_TITULO_AJUSTADO * (frase.length / Math.max(r._t.length, 1)));
    }
    if (subjectId && r.subjectId === subjectId) score += BONUS_MATERIA_ACTUAL;

    hits.push({ r, score });
  }

  hits.sort((a, b) => b.score - a.score || a.r.sectionTitle.localeCompare(b.r.sectionTitle));

  return hits.slice(0, limit).map(({ r, score }) => {
    // El snippet sale del primer token que aparezca en el cuerpo; si la
    // consulta solo pegaba en el título, arranca por el principio del cuerpo.
    const tokenUtil = tokens.find((t) => regexToken(t).test(r._c)) || tokens[0];
    return {
      subjectId: r.subjectId,
      subjectTitle: r.subjectTitle,
      sectionId: r.sectionId,
      sectionTitle: r.sectionTitle,
      unitTitle: r.unitTitle,
      texto: r.texto,
      snippet: recortarSnippet(r.cuerpo, r._c, tokenUtil),
      score,
    };
  });
}

/** URL de la sección, para que la UI no tenga que saber el routing. */
export function urlDe(resultado) {
  return `seccion.html?subject=${encodeURIComponent(resultado.subjectId)}&id=${encodeURIComponent(resultado.sectionId)}`;
}
