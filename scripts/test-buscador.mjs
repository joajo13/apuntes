/**
 * Tests del motor de búsqueda. Se corre con node a secas, sin dependencias:
 *
 *   node scripts/test-buscador.mjs
 *
 * Sale con código 1 si algo falla, así sirve para CI si algún día hay.
 */
import { buildIndex, search, _fold } from '../js/buscador.js';
import { SUBJECTS } from '../js/content.js';

let pasaron = 0;
const fallaron = [];

function check(nombre, fn) {
  try {
    fn();
    pasaron++;
    console.log(`  ok   ${nombre}`);
  } catch (err) {
    fallaron.push({ nombre, msg: err.message });
    console.log(`  FALLA ${nombre}\n        ${err.message}`);
  }
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function assertEq(actual, esperado, msg) {
  if (actual !== esperado) {
    throw new Error(`${msg}\n        esperaba: ${JSON.stringify(esperado)}\n        obtuvo:   ${JSON.stringify(actual)}`);
  }
}

console.log('\nMotor de búsqueda\n');

// ---------------------------------------------------------------- normalización

check('_fold saca tildes y baja a minúscula', () => {
  assertEq(_fold("L'Hôpital"), "l'hopital", 'las tildes tienen que caer');
  assertEq(_fold('ÁNGULO'), 'angulo', 'mayúsculas con tilde');
  assertEq(_fold('descomposición'), 'descomposicion', 'ó en el medio');
});

check('_fold preserva la longitud (los offsets del snippet dependen de eso)', () => {
  const casos = ["L'Hôpital", 'Análisis Matemático', 'función', 'ñandú', 'ÁÉÍÓÚ'];
  for (const c of casos) {
    assertEq(_fold(c).length, c.length, `la longitud cambió en "${c}"`);
  }
});

// ---------------------------------------------------------------- índice

const index = buildIndex();

check('el índice cubre todas las secciones de todas las materias', () => {
  const totalSecciones = SUBJECTS.reduce((n, s) => n + s.sections.length, 0);
  assertEq(index.length, totalSecciones, 'faltan o sobran registros');
  assert(totalSecciones > 200, `esperaba muchas secciones, hay ${totalSecciones}`);
});

check('cada registro trae lo necesario para navegar y mostrar', () => {
  for (const r of index) {
    assert(r.subjectId, 'falta subjectId');
    assert(r.sectionId, `falta sectionId en ${r.subjectId}`);
    assert(r.subjectTitle, `falta subjectTitle en ${r.subjectId}`);
    assert(typeof r.sectionTitle === 'string' && r.sectionTitle.length > 0, `falta sectionTitle en ${r.subjectId}/${r.sectionId}`);
    assert(typeof r.texto === 'string', `falta texto en ${r.subjectId}/${r.sectionId}`);
  }
});

check('el texto indexado no arrastra tags HTML ni comandos de LaTeX', () => {
  const conBasura = index.filter((r) => /<\/?[a-z]+>|\\[a-zA-Z]{2,}/.test(r.texto));
  assertEq(conBasura.length, 0, `quedaron ${conBasura.length} registros sucios, p.ej. ${conBasura[0]?.subjectId}/${conBasura[0]?.sectionId}`);
});

check('el cuerpo de la sección entra al índice, no solo el título', () => {
  const r = index.find((x) => x.subjectId === 'analisis-matematico-2' && x.sectionId === '15');
  assert(_fold(r.texto).includes('ilate'), 'ILATE está en un callout del cuerpo y tiene que estar indexado');
});

// ---------------------------------------------------------------- búsqueda

check('encuentra una sección por su título', () => {
  const res = search('integracion por partes', { index });
  assert(res.length > 0, 'no devolvió nada');
  assertEq(res[0].subjectId, 'analisis-matematico-2', 'materia equivocada');
  assertEq(res[0].sectionId, '15', 'sección equivocada');
});

check('encuentra la tabla de integrales inmediatas', () => {
  const res = search('tabla integrales inmediatas', { index });
  assert(res.length > 0, 'no devolvió nada');
  assertEq(res[0].sectionId, '23', 'esperaba la sección 23');
});

check('tolera la familia de la palabra: "integrales por partes" encuentra "Integración por partes"', () => {
  const res = search('integrales por partes', { index });
  assert(res.length > 0, 'no devolvió nada');
  assertEq(res[0].sectionId, '15', 'esperaba la sección de integración por partes');
});

check('"derivadas parciales" encuentra la sección aunque el título diga "derivada"', () => {
  const res = search('derivadas parciales', { index });
  assert(res.length > 0, 'no devolvió nada');
  assert(/derivadas parciales/i.test(res[0].sectionTitle), `vino "${res[0].sectionTitle}"`);
});

check('ignora las tildes: "hopital" encuentra L\'Hôpital', () => {
  const res = search('hopital', { index });
  assert(res.length > 0, 'no devolvió nada');
  assertEq(res[0].sectionId, '10', 'esperaba la sección de la Regla de L\'Hôpital');
});

check('exige todas las palabras (AND, no OR)', () => {
  const res = search('hopital ornitorrinco', { index });
  assertEq(res.length, 0, 'una palabra que no existe tiene que anular el resultado');
});

check('una palabra inventada no devuelve nada', () => {
  assertEq(search('xyzzyqwerty', { index }).length, 0, 'no debería inventar resultados');
});

check('una consulta vacía no devuelve nada', () => {
  assertEq(search('', { index }).length, 0, 'vacío es vacío');
  assertEq(search('   ', { index }).length, 0, 'solo espacios es vacío');
});

check('matchea por prefijo de palabra, no por pedazo suelto', () => {
  const res = search('integral', { index });
  assert(res.length > 0, '"integral" tiene que encontrar "integrales"');
  const conPresentacion = search('sen', { index });
  const falsoPositivo = conPresentacion.some((r) => /presentaci/i.test(r.sectionTitle) && !/\bsen/i.test(r.texto));
  assert(!falsoPositivo, '"sen" no debería matchear dentro de "presentación"');
});

check('el título pesa más que el cuerpo', () => {
  const res = search('barrow', { index });
  assert(res.length > 0, 'no devolvió nada');
  assert(/barrow/i.test(res[0].sectionTitle), `esperaba un título con Barrow, vino "${res[0].sectionTitle}"`);
});

check('prioriza la materia actual sin esconder las otras', () => {
  const todas = search('derivada', { index });
  assert(todas.length > 0, 'no devolvió nada');
  const materias = new Set(todas.map((r) => r.subjectId));
  assert(materias.size > 1, 'derivada aparece en más de una materia');

  const desdeAm1 = search('derivada', { index, subjectId: 'analisis-matematico' });
  assertEq(desdeAm1[0].subjectId, 'analisis-matematico', 'la materia actual tiene que quedar arriba');
  const otras = new Set(desdeAm1.map((r) => r.subjectId));
  assert(otras.size > 1, 'las otras materias no tienen que desaparecer, solo bajar');
});

check('devuelve un snippet con el término adentro', () => {
  const res = search('ilate', { index });
  assert(res.length > 0, 'no devolvió nada');
  assert(res[0].snippet && res[0].snippet.length > 0, 'snippet vacío');
  assert(_fold(res[0].snippet).includes('ilate'), `el snippet no contiene el término: "${res[0].snippet}"`);
});

check('el snippet no repite el título de la sección', () => {
  const res = search('integracion por partes', { index });
  const top = res[0];
  const inicioSnippet = _fold(top.snippet.replace(/^…/, '').trim());
  const titulo = _fold(top.sectionTitle);
  assert(
    !inicioSnippet.startsWith(titulo),
    `el snippet arranca repitiendo el título: "${top.snippet.slice(0, 70)}…"`
  );
  assert(top.snippet.length > 0, 'snippet vacío');
});

check('corta la cantidad de resultados', () => {
  const res = search('de', { index, limit: 10 });
  assert(res.length <= 10, `devolvió ${res.length}, esperaba 10 como mucho`);
});

check('la unidad viaja en el resultado para poder rotular', () => {
  const res = search('integracion por partes', { index });
  assertEq(res[0].unitTitle, 'Métodos de integración', 'el rótulo de unidad tiene que venir resuelto');
});

// ---------------------------------------------------------------- resumen

console.log(`\n${pasaron} pasaron, ${fallaron.length} fallaron\n`);
if (fallaron.length > 0) process.exit(1);
