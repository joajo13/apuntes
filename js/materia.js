import { renderNav } from './nav.js';
import { getCurrentSubject, getAggregateSection } from './content.js';
import { getSectionState } from './storage.js';

const subject = getCurrentSubject();

if (!subject) {
  location.replace('index.html');
} else {
  document.title = `${subject.title} — Apuntes`;
  renderNav({ active: 'home', subject });
  document.getElementById('materia-title').textContent = subject.title;
  document.getElementById('materia-subtitle').textContent = subject.subtitle || '';

  const eyebrow = document.getElementById('materia-eyebrow');
  if (eyebrow) {
    const totalSecs = subject.sections.length;
    const totalUnits = Object.keys(subject.units || {}).length;
    const bits = [
      'Materia',
      totalUnits > 0 ? `${totalUnits} unidad${totalUnits === 1 ? '' : 'es'}` : null,
      `${totalSecs} secci${totalSecs === 1 ? 'ón' : 'ones'}`,
    ].filter(Boolean);
    eyebrow.innerHTML = bits.map((b) => `<span>${b}</span>`).join(' · ');
  }

  renderPlanEntry();
  renderPartialsEntry();
  renderSections();
  renderResumenEntry();
  renderAutoevalEntry();
}

function renderPlanEntry() {
  const host = document.getElementById('materia-plan');
  if (!host) return;
  if (!['analisis-matematico-2', 'laboratorio-1'].includes(subject.id)) { host.remove(); return; }
  host.innerHTML = `<a href="plan-parciales.html" class="folio-card" style="display:block;">
    <div class="folio-card-body">
      <p class="eyebrow mb-3">19 sep → 1 oct · Plan de parciales</p>
      <h2 class="folio-card-title">Tu próxima sesión de estudio</h2>
      <p class="folio-card-dek">Cronograma diario de Análisis II y Laboratorio I, ejercitación ordenada, lecturas y cuadernillo. Con progreso guardado en este navegador.</p>
      <p class="meta mt-4" style="color:var(--accent)">Abrir el plan →</p>
    </div>
  </a>`;
}

function renderAutoevalEntry() {
  const host = document.getElementById('materia-autoeval');
  if (!host) return;
  const agg = getAggregateSection(subject.id, '2');
  const q = agg && agg.quiz2;
  const nMc = q ? (q.mc?.length || 0) : 0;
  const nMs = q ? (q.ms?.length || 0) : 0;
  const nQ = q ? (q.tf?.length || 0) + nMc + nMs : 0;
  const nF = agg ? (agg.flashcards2 || []).length : 0;
  if (nQ === 0 && nF === 0) { host.remove(); return; }
  const quizLink = `quiz.html?subject=${subject.id}&id=__all__&set=2`;
  const fcLink = `flashcards.html?subject=${subject.id}&id=__all__&set=2`;
  host.innerHTML = `
    <div class="folio-card" style="display:block;">
      <div class="folio-card-body">
        <div class="folio-card-meta" style="margin-bottom:0.5rem;">
          <span class="quiz">Autoevaluación integral · sin pistas</span>
        </div>
        <h3 class="folio-card-title">Ponete a prueba con toda la materia</h3>
        <p class="folio-card-dek">El quiz y las flashcards nuevas de todas las secciones, juntas en una sola tanda. Opciones parejas: no se adivina por la forma. Podés ir directo a un tipo de pregunta.</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:1rem;">
          ${nQ > 0 ? `<a href="${quizLink}" class="btn btn-accent touch-target">Quiz integral · ${nQ}</a>` : ''}
          ${nMc > 0 ? `<a href="${quizLink}&type=mc" class="btn-ghost touch-target">Solo multiple choice · ${nMc}</a>` : ''}
          ${nMs > 0 ? `<a href="${quizLink}&type=ms" class="btn-ghost touch-target">Solo multi-select · ${nMs}</a>` : ''}
          ${nF > 0 ? `<a href="${fcLink}" class="btn-ghost touch-target">Flashcards · ${nF}</a>` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderResumenEntry() {
  const host = document.getElementById('materia-resumen');
  if (!host) return;
  if (!subject.resumen) { host.remove(); return; }
  host.innerHTML = `
    <a href="resumen.html?subject=${subject.id}" class="folio-card" style="display:block;">
      <div class="folio-card-body">
        <div class="folio-card-meta" style="margin-bottom:0.5rem;">
          <span class="quiz">Resumen final</span>
        </div>
        <h3 class="folio-card-title">Resumen para el final</h3>
        <p class="folio-card-dek">Toda la materia condensada para repasar antes del final, con cada tema enlazado a su sección completa.</p>
      </div>
    </a>
  `;
}

function renderPartialsEntry() {
  const host = document.getElementById('materia-parciales');
  if (!host) return;
  const partials = subject.partials || [];
  if (partials.length === 0) {
    host.remove();
    return;
  }
  const n = partials.length;
  host.innerHTML = `
    <a href="parciales.html?subject=${subject.id}" class="folio-card" style="display:block;">
      <div class="folio-card-body">
        <div class="folio-card-meta" style="margin-bottom:0.5rem;">
          <span class="quiz">Parciales de práctica</span>
        </div>
        <h3 class="folio-card-title">${n} ${n === 1 ? 'parcial' : 'parciales'} de práctica</h3>
        <p class="folio-card-dek">Exámenes que cruzan todos los temas de la materia. Cerradas autocorregidas y desarrollo con respuesta modelo.</p>
      </div>
    </a>
  `;
}

function sectionCard(section) {
  const state = getSectionState(subject.id, section.id);
  const hasQuiz = !!section.quiz;
  const hasFc = !!section.flashcards;

  const meta = [];
  meta.push(state.read
    ? '<span class="read">✓ Leída</span>'
    : '<span class="unread">Sin leer</span>');

  const score = state.lastQuizScore;
  if (hasQuiz) {
    meta.push(score
      ? `<span class="quiz">Quiz · ${score.correct}/${score.total}</span>`
      : '<span class="quiz">Quiz</span>');
  }
  if (hasFc) {
    const total = section.flashcards.length;
    const known = state.knownFlashcards.length;
    meta.push(`<span class="fc">Flashcards · ${known}/${total}</span>`);
  }

  const dek = section.criollo
    ? `<p class="folio-card-dek">${section.criollo}</p>`
    : '<p class="folio-card-dek">&nbsp;</p>';

  return `
    <a href="seccion.html?subject=${subject.id}&id=${section.id}"
       class="folio-card">
      <div class="folio-card-num">${section.id}</div>
      <div class="folio-card-body">
        <h3 class="folio-card-title">${section.title}</h3>
        ${dek}
        <div class="folio-card-meta">${meta.join('')}</div>
      </div>
    </a>
  `;
}

function groupByUnit(sections) {
  const groups = new Map();
  for (const s of sections) {
    const key = s.unit || 'sin-unidad';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(s);
  }
  return groups;
}

function unitBlock(unit, sections) {
  const unitTitle = subject.units[unit] || '';
  const isOrphan = unit === 'sin-unidad';
  const heading = isOrphan
    ? `<div class="unit-header">
         <span class="unit-header-num">·</span>
         <span class="unit-header-title">Secciones</span>
         <span class="unit-header-meta">${sections.length} ${sections.length === 1 ? 'item' : 'items'}</span>
       </div>`
    : `<div class="unit-header">
         <span class="unit-header-num">${unit}</span>
         <span class="unit-header-title">${unitTitle}</span>
         <span class="unit-header-meta">${sections.length} ${sections.length === 1 ? 'item' : 'items'}</span>
       </div>`;

  return `
    <section>
      ${heading}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-rise">
        ${sections.map(sectionCard).join('')}
      </div>
    </section>
  `;
}

function renderSections() {
  const groups = groupByUnit(subject.sections);
  document.getElementById('sections-grid').innerHTML =
    Array.from(groups.entries()).map(([unit, list]) => unitBlock(unit, list)).join('');
}
