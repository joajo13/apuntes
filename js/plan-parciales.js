import { renderNav } from './nav.js';
import { renderMath } from './katex-init.js';
import { DAYS, GUIDES, WORKBOOK } from './plan-data.js';
import { CHAPTERS } from './plan-content.js';
import { createProgress } from './plan-progress.js';

const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const taskIds = DAYS.flatMap(day => day.tasks.map(task => task.id));
const exerciseIds = GUIDES.flatMap(guide => guide.items.map(item => item.id));
let storage;
try { storage = window.localStorage; } catch { storage = null; }
const progress = createProgress(storage, [...taskIds, ...exerciseIds]);
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Argentina/Buenos_Aires', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
const requestedDay = new URLSearchParams(location.search).get('day');
let selected = DAYS.find(day => day.date === requestedDay) || DAYS.find(day => day.date === today) || DAYS[0];
const sectionLink = id => `seccion.html?subject=analisis-matematico-2&id=${id}`;
const minutes = n => n >= 60 ? `${Math.floor(n / 60)} h${n % 60 ? ` ${n % 60} min` : ''}` : `${n} min`;

renderNav({ active: 'plan', subject: null });
document.getElementById('plan-days').innerHTML = DAYS.map(day => `<button type="button" data-day="${day.date}" aria-pressed="${day === selected}"><span>${escape(day.label)}${day.date === today ? ' · hoy' : ''}</span><small data-day-status="${day.date}"></small></button>`).join('');
document.getElementById('plan-guides').innerHTML = GUIDES.map(guide => `
  <details class="plan-guide" id="guia-${guide.id}" ${guide.id === 'D2' ? 'open' : ''}>
    <summary><span class="plan-guide-code">${escape(guide.id)}</span><span><span class="plan-guide-title">${escape(guide.title)}</span><span class="plan-guide-count" data-guide-count="${guide.id}"></span></span></summary>
    <div class="plan-guide-body">
      <p>${escape(guide.description)}</p>
      <div class="plan-guide-links"><a href="${sectionLink(guide.section)}">${guide.id === 'A' ? 'Enunciados y soluciones' : 'Enunciados'} →</a><a href="${WORKBOOK}#page=${guide.page}" target="_blank" rel="noopener">Cuadernillo · p${guide.page} ↗</a>${guide.solution ? `<a href="${sectionLink(guide.solution)}">Corregir después →</a>` : ''}</div>
      <div class="plan-guide-readings">Lectura previa: ${guide.readings.map(id => `<a href="${sectionLink(id)}">S${id}</a>`).join(' · ')}${guide.id === 'I0' ? ' · Teoría y resolución U3 en las lecturas del manual (Blackboard).' : ''}${guide.id === 'P0' ? ' · Sin resolución local completa: comprobar hipótesis y límite.' : ''}</div>
      <div class="plan-checklist">${guide.items.map(item => `<label><input type="checkbox" data-progress="${escape(item.id)}" aria-label="${escape(guide.id + ' · ' + item.label)}" ${progress.has(item.id) ? 'checked' : ''}><span><strong>${escape(item.label)}</strong>${item.detail ? `<small>${escape(item.detail)}</small>` : ''}</span></label>`).join('')}</div>
    </div>
  </details>`).join('');

document.getElementById('plan-chapters').innerHTML = CHAPTERS.map(chapter => `<details class="plan-chapter" id="${escape(chapter.id)}"><summary>${escape(chapter.title)}</summary><div class="plan-prose">${chapter.html}</div></details>`).join('');

function renderDay() {
  document.querySelectorAll('[data-day]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.day === selected.date)));
  const total = selected.tasks.reduce((sum, task) => sum + task.minutes, 0) + selected.breaks;
  document.getElementById('plan-day').innerHTML = `
    <header class="plan-day-header"><p class="eyebrow">${escape(selected.label)} · 2026</p><h3>${escape(selected.title)}</h3><p>${total ? `${minutes(total)} en total${selected.breaks ? ` · incluye ${selected.breaks} min de pausas` : ''} · sin contar exámenes` : 'Sin estudio obligatorio · rescate opcional hasta 3 h'}</p></header>
    ${selected.tasks.map(task => `<section class="plan-task ${task.subject}"><label class="plan-task-head"><input type="checkbox" data-progress="${task.id}" aria-label="Completar ${escape(selected.label + ': ' + task.title)}" ${progress.has(task.id) ? 'checked' : ''}><span><span class="plan-task-subject">${task.subject === 'math' ? 'Análisis II' : 'Laboratorio I'} · ${task.minutes} min</span><span class="plan-task-title">${escape(task.title)}</span></span></label><div class="plan-task-body">${task.html}</div></section>`).join('')}
    ${selected.tasks.length ? '' : '<div class="plan-rest"><h4>Descansar también es parte.</h4><p>No hay nada que marcar como pendiente hoy. Usá el rescate solo si lo necesitás.</p></div>'}
    ${selected.note ? `<div class="plan-day-note">${escape(selected.note)}</div>` : ''}`;
  renderMath(document.getElementById('plan-day'));
}

function updateCounts() {
  document.querySelectorAll('input[data-progress]').forEach(input => { input.checked = progress.has(input.dataset.progress); });
  const done = progress.count(taskIds);
  document.getElementById('day-progress').textContent = `${done} de ${taskIds.length} bloques diarios completados`;
  const bar = document.getElementById('day-progress-bar');
  bar.max = taskIds.length;
  bar.value = done;
  const mainIds = GUIDES.filter(g => g.id !== 'A').flatMap(g => g.items.map(i => i.id));
  const extras = GUIDES.find(g => g.id === 'A').items.map(i => i.id);
  document.getElementById('exercise-progress').textContent = `${progress.count(mainIds)} / ${mainIds.length} ítems · ${progress.count(extras)} / ${extras.length} extras`;
  for (const guide of GUIDES) document.querySelector(`[data-guide-count="${guide.id}"]`).textContent = `${progress.count(guide.items.map(i => i.id))} / ${guide.count} corregidos · p${guide.page}`;
  for (const day of DAYS) {
    const ids = day.tasks.map(task => task.id);
    const finished = ids.length > 0 && progress.count(ids) === ids.length;
    const button = document.querySelector(`[data-day="${day.date}"]`);
    button.classList.toggle('is-complete', finished);
    const total = day.tasks.reduce((sum, task) => sum + task.minutes, 0) + day.breaks;
    button.querySelector('small').textContent = finished ? '✓ Completo' : !total ? 'Descanso' : minutes(total);
  }
  const status = document.getElementById('save-status');
  status.classList.toggle('is-warning', !progress.persistent);
  status.textContent = progress.persistent ? 'Guardado local · Solo en este navegador y dispositivo. No se sincroniza; si borrás los datos del sitio, se pierde. No modifica el progreso de tus apuntes.' : 'No se pudo guardar en este navegador. Las marcas funcionan en esta pestaña, pero pueden perderse al recargar. No se modificó el progreso de tus apuntes.';
}

document.getElementById('plan-days').addEventListener('click', event => {
  const button = event.target.closest('[data-day]');
  if (!button) return;
  selected = DAYS.find(day => day.date === button.dataset.day);
  const url = new URL(location.href);
  url.searchParams.set('day', selected.date);
  history.replaceState(null, '', url);
  renderDay();
});
document.querySelector('.plan-shell').addEventListener('change', event => {
  if (!event.target.matches('input[data-progress]')) return;
  progress.set(event.target.dataset.progress, event.target.checked);
  updateCounts();
});

function revealHash(hash = location.hash) {
  let target;
  try { target = document.getElementById(decodeURIComponent(hash.slice(1))); } catch { return; }
  if (!target) return;
  for (let el = target; el; el = el.parentElement) if (el.tagName === 'DETAILS') el.open = true;
}
window.addEventListener('hashchange', () => revealHash());
document.querySelector('.plan-shell').addEventListener('click', event => {
  const anchor = event.target.closest('a[href^="#"]');
  // A previously visited target can be closed manually without changing its hash.
  // Open it before native scrolling, even when hashchange will not fire again.
  if (anchor) revealHash(anchor.getAttribute('href'));
});
renderDay();
updateCounts();
revealHash();
// Defer math enhancement until the CDN auto-render script has loaded as well.
if (document.readyState === 'complete') renderMath(document.querySelector('.plan-shell'));
else window.addEventListener('load', () => renderMath(document.querySelector('.plan-shell')), { once: true });
