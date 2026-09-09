/**
 * Renderiza el masthead editorial compartido entre vistas.
 *
 * Uso:
 *   import { renderNav } from './nav.js';
 *   renderNav({ active: 'home', subject });     // subject opcional
 *
 * `active`: 'home' | 'pdfs' | 'inicio'.
 * `subject`: objeto Subject o null. Si null, se asume vista raíz (selector).
 *
 * Además monta el buscador (Ctrl+K), que por eso queda disponible en todas
 * las páginas sin tocar los HTML.
 */
import { montarBuscador, abrirBuscador } from './buscador-ui.js';

const BOTON_BUSCAR = `
  <button type="button" class="btn-ghost touch-target masthead-buscar" data-abrir-buscador
          aria-label="Buscar en los apuntes" title="Buscar (Ctrl+K)">
    <svg viewBox="0 0 20 20" aria-hidden="true" width="15" height="15">
      <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
    <span class="masthead-buscar-txt">Buscar</span>
    <kbd class="masthead-buscar-kbd">Ctrl K</kbd>
  </button>
`;

export function renderNav({ active = 'home', subject = null } = {}) {
  const nav = document.createElement('nav');
  nav.className = 'masthead';

  if (!subject) {
    // Vista raíz: index.html
    nav.innerHTML = `
      <div class="masthead-inner">
        <a href="index.html" class="masthead-title">Apuntes</a>
        <div class="masthead-acciones">
          <span class="meta masthead-up" style="font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;">
            Universidad de Palermo
          </span>
          ${BOTON_BUSCAR}
        </div>
      </div>
    `;
  } else {
    const subjectHome = `materia.html?subject=${subject.id}`;
    const isActiveHome = active === 'home';
    const isActivePdfs = active === 'pdfs';

    const pdfsLink = subject.pdfs && subject.pdfs.length > 0
      ? `<a href="pdfs.html?subject=${subject.id}"
            class="btn-ghost touch-target ${isActivePdfs ? 'masthead-link-active' : ''}"
            style="padding:0.4rem 0.85rem;font-size:.78rem;letter-spacing:.06em;">
           Ver PDFs
         </a>`
      : '';

    nav.innerHTML = `
      <div class="masthead-inner">
        <div class="masthead-crumbs">
          <a href="index.html" class="masthead-back">← Materias</a>
          <span class="sep"></span>
          <a href="${subjectHome}"
             class="masthead-title ${isActiveHome ? 'masthead-link-active' : ''}"
             style="font-style:italic;">${subject.title}</a>
        </div>
        <div class="masthead-acciones">
          ${BOTON_BUSCAR}
          ${pdfsLink}
        </div>
      </div>
    `;
  }
  document.body.prepend(nav);

  montarBuscador({ subjectId: subject ? subject.id : null });
  nav.querySelector('[data-abrir-buscador]')?.addEventListener('click', () => abrirBuscador());
}
