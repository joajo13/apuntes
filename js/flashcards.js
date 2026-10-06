import { renderNav } from './nav.js';
import { renderMath } from './katex-init.js';
import { getCurrentSubject, getSection, getNextSectionWith, getAggregateSection } from './content.js';
import { markFlashcard } from './storage.js';

let subject;
let section;
let cards;
let isV2 = false;
let isAggregate = false;
let fcFeature = 'flashcards';
let setSuffix = '';
let backLink = '';
let storageSectionId;
let queue;
let total = 0;
let knownThisSession = 0;
let flipped = false;

// Los módulos y los scripts defer de KaTeX terminan antes de DOMContentLoaded.
if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main, { once: true });
}

function main() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const subjectParam = params.get('subject');
  isV2 = params.get('set') === '2';
  fcFeature = isV2 ? 'flashcards2' : 'flashcards';
  setSuffix = isV2 ? '&set=2' : '';

  if (id && !subjectParam) {
    location.replace(`flashcards.html?subject=sistemas-y-metodos&id=${encodeURIComponent(id)}${setSuffix}`);
    return;
  }

  subject = getCurrentSubject();
  if (!subject) {
    location.replace('index.html');
    return;
  }

  isAggregate = id === '__all__';
  section = isAggregate
    ? getAggregateSection(subject.id, params.get('set'))
    : getSection(subject.id, id);
  if (!section) {
    location.replace(`materia.html?subject=${subject.id}`);
    return;
  }
  cards = section[fcFeature];
  if (!cards) {
    location.replace(`seccion.html?subject=${subject.id}&id=${section.id}`);
    return;
  }
  storageSectionId = isV2 ? `${section.id}::v2` : section.id;
  backLink = isAggregate
    ? `${subject.resumen ? 'resumen' : 'materia'}.html?subject=${subject.id}`
    : `seccion.html?subject=${subject.id}&id=${section.id}`;

  renderNav({ active: 'home', subject });

  document.title = `Flashcards: ${section.title}`;
  document.getElementById('fc-header').innerHTML = `
    <a href="${backLink}" class="masthead-back">← ${isAggregate ? 'Volver' : 'Volver a la sección'}</a>
    <div class="section-header" style="margin-bottom:0;">
      <div class="section-header-eyebrow">
        <span class="num">${isAggregate ? '∑' : section.id}</span>
        <span>${isAggregate
          ? (isV2 ? 'Repaso integral · banco nuevo' : 'Repaso integral')
          : (isV2 ? 'Tarjetas de repaso · banco nuevo' : 'Tarjetas de repaso')}</span>
      </div>
      <h1 class="section-header-title" style="font-size:clamp(1.8rem,4.5vw,2.6rem);">${section.title}</h1>
      <p id="fc-progress" class="meta" style="margin-top:1rem;letter-spacing:0.06em;text-transform:uppercase;font-size:0.74rem;"></p>
    </div>
  `;

  renderMath(document.getElementById('fc-header'));

  queue = [...cards];
  total = queue.length;

  if (total === 0) {
    document.getElementById('fc-stage').innerHTML = `
      <div class="info-callout w-full"><p>Esta sección aún no tiene flashcards cargadas.</p></div>
    `;
  } else {
    renderCard();
    document.getElementById('fc-bottom').innerHTML = `
      <button id="repaso-btn" class="btn-ghost touch-target" style="padding:0.95rem 1.25rem;">
        ↻ Repasar
      </button>
      <button id="sabia-btn" class="btn btn-accent touch-target" style="padding:0.95rem 1.25rem;background:var(--forest);border-color:var(--forest);">
        ✓ La sabía
      </button>
    `;
    document.getElementById('repaso-btn').addEventListener('click', () => answer(false));
    document.getElementById('sabia-btn').addEventListener('click', () => answer(true));
    document.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        flipCurrent();
      }
    });
  }
}

function renderCard() {
  flipped = false;
  document.getElementById('fc-progress').textContent =
    `Quedan ${queue.length} · ${knownThisSession} sabidas`;
  const card = queue[0];
  document.getElementById('fc-stage').innerHTML = `
    <div class="w-full">
      <div id="flashcard" class="flashcard w-full h-80 cursor-pointer fade-in">
        <div class="flashcard-inner h-full">
          <div class="flashcard-face front">
            <p class="flashcard-front-text">${card.front}</p>
          </div>
          <div class="flashcard-face back">
            <p class="flashcard-back-text">${card.back}</p>
          </div>
        </div>
      </div>
      <p class="meta text-center mt-4" style="font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;">
        Tocá la tarjeta · espacio para dar vuelta
      </p>
    </div>
  `;
  renderMath(document.getElementById('fc-stage'));
  document.getElementById('flashcard').addEventListener('click', flipCurrent);
}

function flipCurrent() {
  flipped = !flipped;
  document.getElementById('flashcard').classList.toggle('is-flipped', flipped);
}

function answer(known) {
  const card = queue.shift();
  if (known) {
    knownThisSession++;
    markFlashcard(subject.id, storageSectionId, card.id, true);
  } else {
    queue.push(card);
  }
  if (queue.length === 0) {
    renderSummary();
  } else {
    renderCard();
  }
}

function renderSummary() {
  document.getElementById('fc-stage').classList.add('hidden');
  document.getElementById('fc-bottom').innerHTML = '';
  const s = document.getElementById('fc-summary');
  s.classList.remove('hidden');
  const seccionLink = backLink;
  const quizLink = `quiz.html?subject=${subject.id}&id=${section.id}${setSuffix}`;
  const fcLink = `flashcards.html?subject=${subject.id}&id=${section.id}${setSuffix}`;
  const nextSection = isAggregate
    ? null
    : getNextSectionWith(subject.id, section.id, fcFeature);
  const nextLink = nextSection
    ? `flashcards.html?subject=${subject.id}&id=${nextSection.id}${setSuffix}`
    : null;
  const pct = Math.round((knownThisSession / total) * 100);
  s.innerHTML = `
    <div class="result-card fade-in">
      <p class="result-card-label">Sesión cerrada</p>
      <p class="result-card-score">${knownThisSession}<span style="color:var(--muted);font-style:normal;font-size:0.55em;letter-spacing:-0.02em;"> ⁄ </span>${total}</p>
      <p class="result-card-meta"><em>${pct}% sabidas</em></p>
    </div>
    ${nextSection ? `
      <a href="${nextLink}" class="btn btn-accent touch-target" style="display:block;margin-top:2.5rem;">
        Siguientes flashcards: ${nextSection.id}. ${nextSection.title} →
      </a>
    ` : ''}
    <div class="flex flex-col md:flex-row gap-3 ${nextSection ? 'mt-3' : 'mt-10'}">
      <a href="${fcLink}" class="${nextSection ? 'btn-ghost' : 'btn btn-accent'} touch-target md:flex-1">Reiniciar</a>
      <a href="${quizLink}" class="btn-ghost touch-target md:flex-1">Hacer quiz</a>
      <a href="${seccionLink}" class="btn-ghost touch-target md:flex-1">${isAggregate ? 'Volver' : 'Volver a la sección'}</a>
    </div>
  `;
  renderMath(s);
}
