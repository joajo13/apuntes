/**
 * Overlay del buscador (estilo paleta de comandos).
 *
 * Se monta una sola vez desde `nav.js`, así aparece en todas las páginas
 * sin tener que tocar los HTML.
 *
 *   Ctrl+K / Cmd+K  abre        (también la barra `/`)
 *   Esc             cierra
 *   ↑ ↓             navega
 *   Enter           abre el resultado
 *
 * Toda la lógica de búsqueda vive en `buscador.js`; acá solo hay DOM.
 */
import { search, buildIndex, urlDe } from './buscador.js';

let overlay = null;
let input = null;
let listaEl = null;
let resultados = [];
let seleccionado = 0;
let subjectIdActual = null;
let indiceListo = false;

// ---------------------------------------------------------------- helpers

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

// ---------------------------------------------------------------- render

function plantilla() {
  const el = document.createElement('div');
  el.className = 'buscador-overlay';
  el.setAttribute('hidden', '');
  el.innerHTML = `
    <div class="buscador-backdrop" data-cerrar></div>
    <div class="buscador-panel" role="dialog" aria-modal="true" aria-label="Buscar en los apuntes">
      <div class="buscador-campo">
        <svg class="buscador-lupa" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" stroke-width="1.8"/>
          <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <input type="search" class="buscador-input" placeholder="Buscar en los apuntes…"
               autocomplete="off" autocorrect="off" spellcheck="false"
               aria-controls="buscador-lista" aria-autocomplete="list" />
        <button class="buscador-cerrar" type="button" data-cerrar aria-label="Cerrar">✕</button>
      </div>
      <div class="buscador-lista" id="buscador-lista" role="listbox"></div>
      <div class="buscador-pie">
        <span><kbd>↑</kbd><kbd>↓</kbd> navegar</span>
        <span><kbd>↵</kbd> abrir</span>
        <span><kbd>esc</kbd> cerrar</span>
      </div>
    </div>
  `;
  return el;
}

function pintarResultados() {
  if (resultados.length === 0) {
    const q = input.value.trim();
    listaEl.innerHTML = q
      ? `<p class="buscador-vacio">Nada para <strong>${escapeHtml(q)}</strong>.</p>`
      : `<p class="buscador-vacio">Escribí para buscar en las ${escapeHtml(String(cantidadMaterias()))} materias.</p>`;
    return;
  }

  listaEl.innerHTML = resultados
    .map((r, i) => {
      const rotulo = [r.subjectTitle, r.unitTitle].filter(Boolean).join(' · ');
      return `
        <a class="buscador-item${i === seleccionado ? ' is-sel' : ''}"
           href="${urlDe(r)}" role="option" data-i="${i}"
           aria-selected="${i === seleccionado}">
          <span class="buscador-item-rotulo">${escapeHtml(rotulo)}</span>
          <span class="buscador-item-titulo">${escapeHtml(r.sectionTitle)}</span>
          <span class="buscador-item-snippet">${escapeHtml(r.snippet)}</span>
        </a>`;
    })
    .join('');
}

function cantidadMaterias() {
  const idx = buildIndex();
  return new Set(idx.map((r) => r.subjectId)).size;
}

function mover(delta) {
  if (resultados.length === 0) return;
  seleccionado = (seleccionado + delta + resultados.length) % resultados.length;
  pintarResultados();
  listaEl.querySelector('.is-sel')?.scrollIntoView({ block: 'nearest' });
}

// ---------------------------------------------------------------- búsqueda

const buscarDebounced = debounce(() => {
  const q = input.value;
  resultados = q.trim() ? search(q, { subjectId: subjectIdActual }) : [];
  seleccionado = 0;
  pintarResultados();
}, 90);

// ---------------------------------------------------------------- abrir / cerrar

export function abrirBuscador(consultaInicial = '') {
  if (!overlay) return;
  overlay.removeAttribute('hidden');
  document.body.classList.add('buscador-abierto');

  // El índice se arma recién acá, la primera vez: no penaliza la carga de la página.
  if (!indiceListo) {
    buildIndex();
    indiceListo = true;
  }

  if (consultaInicial) input.value = consultaInicial;
  input.focus();
  input.select();
  buscarDebounced();
}

export function cerrarBuscador() {
  if (!overlay) return;
  overlay.setAttribute('hidden', '');
  document.body.classList.remove('buscador-abierto');
}

function estaAbierto() {
  return overlay && !overlay.hasAttribute('hidden');
}

// ---------------------------------------------------------------- montaje

/**
 * Monta el overlay y engancha el teclado global. Idempotente:
 * llamarlo dos veces no duplica nada.
 *
 * @param {object} [opts]
 * @param {string} [opts.subjectId] materia actual, para priorizarla en el ranking
 */
export function montarBuscador({ subjectId = null } = {}) {
  subjectIdActual = subjectId;
  if (overlay) return;

  overlay = plantilla();
  document.body.appendChild(overlay);
  input = overlay.querySelector('.buscador-input');
  listaEl = overlay.querySelector('.buscador-lista');

  input.addEventListener('input', buscarDebounced);

  overlay.addEventListener('click', (e) => {
    if (e.target.closest('[data-cerrar]')) {
      e.preventDefault();
      cerrarBuscador();
    }
  });

  listaEl.addEventListener('mousemove', (e) => {
    const item = e.target.closest('.buscador-item');
    if (!item) return;
    const i = Number(item.dataset.i);
    if (i !== seleccionado) {
      seleccionado = i;
      pintarResultados();
    }
  });

  // Teclas dentro del overlay.
  overlay.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      mover(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      mover(-1);
    } else if (e.key === 'Enter') {
      const sel = resultados[seleccionado];
      if (sel) {
        e.preventDefault();
        window.location.href = urlDe(sel);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      cerrarBuscador();
    }
  });

  // Atajo global.
  document.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && k === 'k') {
      e.preventDefault();
      estaAbierto() ? cerrarBuscador() : abrirBuscador();
      return;
    }
    // `/` abre, salvo que estés tipeando en otro lado.
    if (e.key === '/' && !estaAbierto() && !esCampoDeTexto(e.target)) {
      e.preventDefault();
      abrirBuscador();
    }
  });

  pintarResultados();
}

function esCampoDeTexto(el) {
  if (!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
}
