import { renderNav } from './nav.js';
import { renderMath } from './katex-init.js';
import { getCurrentSubject, getSection, getNextSectionWith, getAggregateSection } from './content.js';
import {
  saveQuizScore,
  getExamProgress,
  saveExamProgress,
  clearExamProgress,
} from './storage.js';

// Cada cuántas preguntas se muestra una card de resumen intermedio en los
// exámenes integrales. Solo aplica a id=__all__ (cientos de preguntas).
const MILESTONE = 25;

let subject;
let section;
let quizData;
let isV2 = false;
let isAggregate = false;
let quizFeature = 'quiz';
let setSuffix = '';
let typeFilter = null;
let typeSuffix = '';
let backLink = '';
let progressKey = '';
let questions;
let current = 0;
let correct = 0;
let lastMilestone = -1;
let wrongAnswers = [];

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
  quizFeature = isV2 ? 'quiz2' : 'quiz';
  setSuffix = isV2 ? '&set=2' : '';
  const typeParam = params.get('type');
  typeFilter = ['tf', 'mc', 'ms'].includes(typeParam) ? typeParam : null;
  typeSuffix = typeFilter ? `&type=${typeFilter}` : '';

  if (id && !subjectParam) {
    location.replace(`quiz.html?subject=sistemas-y-metodos&id=${encodeURIComponent(id)}${setSuffix}${typeSuffix}`);
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
  quizData = section[quizFeature];
  if (!quizData) {
    location.replace(`seccion.html?subject=${subject.id}&id=${section.id}`);
    return;
  }

  backLink = isAggregate
    ? `${subject.resumen ? 'resumen' : 'materia'}.html?subject=${subject.id}`
    : `seccion.html?subject=${subject.id}&id=${section.id}`;

  renderNav({ active: 'home', subject });

  questions = [
    ...((quizData.tf ?? []).map((q) => ({ ...q, kind: 'tf' }))),
    ...((quizData.mc ?? []).map((q) => ({ ...q, kind: 'mc' }))),
    ...((quizData.ms ?? []).map((q) => ({ ...q, kind: 'ms' }))),
  ].filter((q) => !typeFilter || q.kind === typeFilter);

  document.title = `Quiz: ${section.title}`;
  const typeLabel = typeFilter === 'mc' ? ' · solo multiple choice'
    : typeFilter === 'ms' ? ' · solo multi-select'
    : typeFilter === 'tf' ? ' · solo V/F' : '';
  const eyebrowLabel = (isAggregate
    ? (isV2 ? 'Examinación integral · banco nuevo' : 'Examinación integral')
    : (isV2 ? 'Examinación · banco nuevo' : 'Examinación')) + typeLabel;
  document.getElementById('quiz-header').innerHTML = `
    <a href="${backLink}" class="masthead-back">← ${isAggregate ? 'Volver' : 'Volver a la sección'}</a>
    <div class="section-header" style="margin-bottom:1.5rem;">
      <div class="section-header-eyebrow">
        <span class="num">${isAggregate ? '∑' : section.id}</span>
        <span>${eyebrowLabel}</span>
      </div>
      <h1 class="section-header-title" style="font-size:clamp(1.8rem,4.5vw,2.6rem);">${section.title}</h1>
      <div class="quiz-progress">
        <span class="count" id="progress-text"></span>
        <div class="bar" id="progress-bar" style="--progress:0%"></div>
      </div>
    </div>
  `;

  renderMath(document.getElementById('quiz-header'));

  progressKey = ['__all__', quizFeature, typeFilter].filter(Boolean).join('::');

  if (questions.length === 0) {
    document.getElementById('quiz-body').innerHTML = `
      <div class="info-callout mt-6"><p>Esta sección aún no tiene preguntas cargadas.</p></div>
    `;
    return;
  }

  // Solo los exámenes integrales guardan progreso y ofrecen reanudar.
  const saved = isAggregate ? getExamProgress(subject.id, progressKey) : null;
  const resumable = saved
    && saved.total === questions.length
    && saved.current > 0
    && saved.current < questions.length;

  if (resumable) {
    renderResumePrompt(saved);
  } else {
    if (isAggregate && saved) clearExamProgress(subject.id, progressKey);
    renderQuestion();
  }
}

// Vuelca el estado en curso a localStorage (solo exámenes integrales).
function persist() {
  if (!isAggregate) return;
  saveExamProgress(subject.id, progressKey, {
    current,
    correct,
    lastMilestone,
    wrong: wrongAnswers,
    total: questions.length,
  });
}

// Card de reanudación: continuar donde se dejó o empezar de nuevo.
function renderResumePrompt(saved) {
  const answered = saved.current;
  const wrong = (saved.wrong || []).length;
  const done = saved.correct;
  const pct = answered > 0 ? Math.round((done / answered) * 100) : 0;
  document.getElementById('quiz-bottom').innerHTML = '';
  document.getElementById('quiz-body').innerHTML = `
    <div class="question-card fade-in">
      <p class="eyebrow no-rule" style="margin-bottom:0.85rem;">
        <span style="background:none;width:0;height:0;"></span>
        Examen en curso
      </p>
      <p class="question-stem" style="margin-bottom:0.4rem;">Dejaste este examen a medias.</p>
      <p class="meta" style="margin-bottom:1.2rem;color:var(--ink-2);font-family:var(--font-reading);font-style:italic;">
        Ibas por la pregunta ${answered + 1} de ${questions.length} · ${done} correctas y ${wrong} incorrectas hasta acá (${pct}%).
      </p>
      <div class="flex flex-col md:flex-row gap-3">
        <button id="resume-continue" class="btn btn-accent touch-target md:flex-1">
          Continuar desde la ${answered + 1}
        </button>
        <button id="resume-restart" class="btn-ghost touch-target md:flex-1">
          Empezar de nuevo
        </button>
      </div>
    </div>
  `;
  document.getElementById('resume-continue').addEventListener('click', () => {
    current = saved.current;
    correct = saved.correct;
    lastMilestone = typeof saved.lastMilestone === 'number' ? saved.lastMilestone : -1;
    wrongAnswers = Array.isArray(saved.wrong) ? saved.wrong : [];
    renderQuestion();
  });
  document.getElementById('resume-restart').addEventListener('click', () => {
    clearExamProgress(subject.id, progressKey);
    current = 0;
    correct = 0;
    lastMilestone = -1;
    wrongAnswers = [];
    renderQuestion();
  });
}

function renderQuestion() {
  const q = questions[current];
  document.getElementById('progress-text').textContent =
    `Pregunta ${current + 1} de ${questions.length}`;
  document.getElementById('progress-bar').style
    .setProperty('--progress', `${(current / questions.length) * 100}%`);

  const opts = q.kind === 'tf'
    ? [{ text: 'Verdadero', value: true }, { text: 'Falso', value: false }]
    : q.options.map((text, i) => ({ text, value: i }));

  const helpText = q.kind === 'ms'
    ? `<p class="meta" style="margin:0.4rem 0 1rem;letter-spacing:.06em;text-transform:uppercase;font-size:.72rem;">Marcá las opciones correctas; <strong>puede no haber ninguna</strong> · 5 posibles</p>`
    : '';

  document.getElementById('quiz-body').innerHTML = `
    <div class="question-card fade-in">
      <p class="eyebrow no-rule" style="margin-bottom:0.85rem;">
        <span style="background:none;width:0;height:0;"></span>
        Pregunta N.º ${String(current + 1).padStart(2, '0')}
      </p>
      <p class="question-stem">${q.q}</p>
      ${helpText}
      <div id="options"></div>
      <div id="explanation" class="hidden info-callout" style="margin-top:1.1rem;"></div>
    </div>
  `;
  const optsContainer = document.getElementById('options');

  if (q.kind === 'ms') {
    renderMultiSelect(optsContainer, opts, q);
  } else {
    renderSingleSelect(optsContainer, opts, q);
  }
  renderMath(document.getElementById('quiz-body'));
}

function renderSingleSelect(optsContainer, opts, q) {
  optsContainer.innerHTML = opts
    .map((o, i) => `
      <button data-idx="${i}" class="quiz-option touch-target">
        ${o.text}
      </button>
    `).join('');

  optsContainer.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => handleAnswer(btn, opts, q));
  });

  document.getElementById('quiz-bottom').innerHTML = `
    <button id="next-btn" class="btn btn-accent touch-target" disabled
            style="opacity:0.4;">Siguiente</button>
  `;
  document.getElementById('next-btn').addEventListener('click', advance);
}

function renderMultiSelect(optsContainer, opts, q) {
  optsContainer.innerHTML = opts
    .map((o, i) => `
      <button data-idx="${i}" class="quiz-option quiz-option-ms touch-target" aria-pressed="false">
        <span class="ms-marker" aria-hidden="true"></span>
        <span class="ms-text">${o.text}</span>
      </button>
    `).join('');

  optsContainer.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!pressed));
      btn.classList.toggle('option-selected', !pressed);
    });
  });

  document.getElementById('quiz-bottom').innerHTML = `
    <button id="check-btn" class="btn btn-accent touch-target">Comprobar</button>
    <button id="next-btn" class="btn btn-accent touch-target hidden"
            style="margin-left:0.5rem;">Siguiente</button>
  `;
  document.getElementById('check-btn').addEventListener('click',
    () => handleMultiAnswer(optsContainer, opts, q));
  document.getElementById('next-btn').addEventListener('click', advance);
}

function handleAnswer(btn, opts, q) {
  const chosen = opts[Number(btn.dataset.idx)].value;
  const correctValue = q.kind === 'tf' ? q.a : q.correctIndex;
  const isCorrect = chosen === correctValue;

  document.querySelectorAll('#options button').forEach((b) => (b.disabled = true));
  btn.classList.add(isCorrect ? 'option-correct' : 'option-wrong');

  if (!isCorrect) {
    const correctIdx = opts.findIndex((o) => o.value === correctValue);
    document.querySelector(`#options button[data-idx="${correctIdx}"]`).classList.add('option-correct');
    recordWrong(q, opts[Number(btn.dataset.idx)].text);
  } else {
    correct++;
  }

  const exp = document.getElementById('explanation');
  exp.innerHTML = `
    <span class="eyebrow no-rule" style="display:block;margin-bottom:0.4em;">
      ${isCorrect ? 'Bien · explicación' : 'Por qué fallaste'}
    </span>
    <p>${q.explain}</p>
  `;
  renderMath(exp);
  exp.classList.remove('hidden');

  const nextBtn = document.getElementById('next-btn');
  nextBtn.disabled = false;
  nextBtn.style.opacity = '1';
}

function handleMultiAnswer(optsContainer, opts, q) {
  const buttons = Array.from(optsContainer.querySelectorAll('button'));
  const chosenIdx = buttons
    .map((b, i) => (b.getAttribute('aria-pressed') === 'true' ? i : -1))
    .filter((i) => i !== -1);
  const correctSet = new Set(q.correctIndexes);
  const chosenSet = new Set(chosenIdx);
  const isCorrect =
    chosenSet.size === correctSet.size &&
    [...chosenSet].every((i) => correctSet.has(i));

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    const wasChosen = chosenSet.has(i);
    const isRight = correctSet.has(i);
    btn.classList.remove('option-selected');
    if (isRight) {
      btn.classList.add('option-correct');
    } else if (wasChosen) {
      btn.classList.add('option-wrong');
    }
  });

  if (isCorrect) {
    correct++;
  } else {
    const chosenText = chosenIdx.length === 0
      ? '(no marcaste ninguna)'
      : chosenIdx.map((i) => opts[i].text).join(' · ');
    recordWrong(q, chosenText);
  }

  const exp = document.getElementById('explanation');
  const correctText = q.correctIndexes.map((i) => opts[i].text).join(' · ');
  exp.innerHTML = `
    <span class="eyebrow no-rule" style="display:block;margin-bottom:0.4em;">
      ${isCorrect ? 'Bien · explicación' : 'Por qué fallaste'}
    </span>
    <p style="margin-bottom:0.55em;"><strong>Correctas:</strong> ${correctText}</p>
    <p>${q.explain}</p>
  `;
  renderMath(exp);
  exp.classList.remove('hidden');

  const checkBtn = document.getElementById('check-btn');
  const nextBtn = document.getElementById('next-btn');
  checkBtn.classList.add('hidden');
  nextBtn.classList.remove('hidden');
}

// Nombre legible del tema (sección de origen) de una pregunta del examen integral.
function secTitleOf(q) {
  return q._sec ? `${q._sec.id}. ${q._sec.title}` : 'General';
}

// Guarda una pregunta errada con su índice y su tema para las cards de resumen.
function recordWrong(q, chosenText) {
  wrongAnswers.push({
    idx: current,
    q: q.q,
    chosenText,
    explain: q.explain,
    secTitle: secTitleOf(q),
  });
}

function advance() {
  current++;
  persist();
  if (current >= questions.length) {
    renderSummary();
  } else if (isAggregate && current % MILESTONE === 0 && current !== lastMilestone) {
    renderMilestone();
  } else {
    renderQuestion();
  }
}

// Card de checkpoint cada MILESTONE preguntas: aciertos/errores del tramo y
// acumulados, y los temas con más errores para repasar.
function renderMilestone() {
  const prev = lastMilestone < 0 ? 0 : lastMilestone;
  lastMilestone = current;
  persist();

  const blockWrong = wrongAnswers.filter((w) => w.idx >= prev && w.idx < current);
  const blockTotal = current - prev;
  const blockCorrect = blockTotal - blockWrong.length;
  const blockPct = Math.round((blockCorrect / blockTotal) * 100);

  const totalWrong = wrongAnswers.length;
  const totalCorrect = correct;
  const totalPct = Math.round((totalCorrect / current) * 100);

  // Temas a repasar: acumulado de errores por sección, de mayor a menor.
  const byTopic = new Map();
  for (const w of wrongAnswers) {
    byTopic.set(w.secTitle, (byTopic.get(w.secTitle) || 0) + 1);
  }
  const topics = [...byTopic.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);

  let verdict;
  if (blockPct >= 85) verdict = 'Vas muy bien';
  else if (blockPct >= 65) verdict = 'Buen ritmo';
  else if (blockPct >= 45) verdict = 'A afinar';
  else verdict = 'Conviene frenar y repasar';

  document.getElementById('progress-text').textContent =
    `Pregunta ${current + 1} de ${questions.length}`;
  document.getElementById('progress-bar').style
    .setProperty('--progress', `${(current / questions.length) * 100}%`);

  const topicsBlock = topics.length > 0 ? `
    <section class="mt-8">
      <div class="unit-header">
        <span class="unit-header-num">↻</span>
        <span class="unit-header-title">Temas para repasar</span>
        <span class="unit-header-meta">por errores acumulados</span>
      </div>
      <div class="grid grid-cols-1 gap-2">
        ${topics.map(([title, n]) => `
          <div class="surface-card" style="padding:0.8rem 1.1rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;">
            <span style="font-family:var(--font-reading);color:var(--ink);">${title}</span>
            <span class="meta" style="color:var(--error);white-space:nowrap;">${n} ${n === 1 ? 'error' : 'errores'}</span>
          </div>
        `).join('')}
      </div>
    </section>
  ` : `
    <div class="info-callout mt-8"><p>Sin errores hasta acá. Impecable — seguí así.</p></div>
  `;

  document.getElementById('quiz-body').innerHTML = `
    <div class="result-card fade-in">
      <p class="result-card-label">Checkpoint · llevás ${current} de ${questions.length}</p>
      <p class="result-card-score">${blockCorrect}<span style="color:var(--muted);font-style:normal;font-size:0.55em;letter-spacing:-0.02em;"> ⁄ </span>${blockTotal}</p>
      <p class="result-card-meta">en las últimas ${blockTotal} · ${blockPct}% · <em>${verdict}</em></p>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-4">
      <div class="surface-card" style="padding:1rem 1.2rem;text-align:center;">
        <p class="meta" style="text-transform:uppercase;letter-spacing:.06em;font-size:.7rem;margin-bottom:0.3rem;">Correctas totales</p>
        <p style="font-family:var(--font-display,serif);font-size:1.8rem;color:var(--ink);">${totalCorrect}</p>
      </div>
      <div class="surface-card" style="padding:1rem 1.2rem;text-align:center;">
        <p class="meta" style="text-transform:uppercase;letter-spacing:.06em;font-size:.7rem;margin-bottom:0.3rem;">Incorrectas totales</p>
        <p style="font-family:var(--font-display,serif);font-size:1.8rem;color:var(--error);">${totalWrong}</p>
      </div>
    </div>
    <p class="meta text-center mt-3" style="color:var(--ink-2);">Acumulado: ${totalPct}% correctas</p>
    ${topicsBlock}
  `;

  document.getElementById('quiz-bottom').innerHTML = `
    <button id="milestone-continue" class="btn btn-accent touch-target">Seguir · pregunta ${current + 1}</button>
  `;
  renderMath(document.getElementById('quiz-body'));
  document.getElementById('milestone-continue').addEventListener('click', renderQuestion);
}

function renderSummary() {
  saveQuizScore(subject.id, isV2 ? `${section.id}::v2` : section.id, { correct, total: questions.length });
  // El examen terminó: se limpia el progreso para que "Reintentar" arranque limpio.
  if (isAggregate) clearExamProgress(subject.id, progressKey);
  document.getElementById('quiz-body').classList.add('hidden');
  document.getElementById('quiz-bottom').innerHTML = '';
  const summary = document.getElementById('quiz-summary');
  summary.classList.remove('hidden');
  const pct = Math.round((correct / questions.length) * 100);
  const seccionLink = backLink;
  const quizLink = `quiz.html?subject=${subject.id}&id=${section.id}${setSuffix}${typeSuffix}`;
  const fcLink = `flashcards.html?subject=${subject.id}&id=${section.id}${setSuffix}`;
  const nextSection = isAggregate
    ? null
    : getNextSectionWith(subject.id, section.id, quizFeature);
  const nextLink = nextSection
    ? `quiz.html?subject=${subject.id}&id=${nextSection.id}${setSuffix}${typeSuffix}`
    : null;

  let verdict = '';
  if (pct === 100) verdict = 'Impecable';
  else if (pct >= 80) verdict = 'Muy bien';
  else if (pct >= 60) verdict = 'Aceptable';
  else if (pct >= 40) verdict = 'A revisar';
  else verdict = 'A leer otra vez';

  // Temas a repasar (solo examen integral): errores agrupados por sección.
  let topicsSummary = '';
  if (isAggregate && wrongAnswers.length > 0) {
    const byTopic = new Map();
    for (const w of wrongAnswers) {
      byTopic.set(w.secTitle, (byTopic.get(w.secTitle) || 0) + 1);
    }
    const topics = [...byTopic.entries()].sort((a, b) => b[1] - a[1]);
    topicsSummary = `
      <section class="mt-12">
        <div class="unit-header">
          <span class="unit-header-num">↻</span>
          <span class="unit-header-title">Temas que deberías tocar</span>
          <span class="unit-header-meta">${topics.length} ${topics.length === 1 ? 'tema' : 'temas'}</span>
        </div>
        <div class="grid grid-cols-1 gap-2">
          ${topics.map(([title, n]) => `
            <div class="surface-card" style="padding:0.85rem 1.15rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;">
              <span style="font-family:var(--font-reading);color:var(--ink);">${title}</span>
              <span class="meta" style="color:var(--error);white-space:nowrap;">${n} ${n === 1 ? 'error' : 'errores'}</span>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  summary.innerHTML = `
    <div class="result-card fade-in">
      <p class="result-card-label">Resultado</p>
      <p class="result-card-score">${correct}<span style="color:var(--muted);font-style:normal;font-size:0.55em;letter-spacing:-0.02em;"> ⁄ </span>${questions.length}</p>
      <p class="result-card-meta">${pct}% correctas · <em>${verdict}</em></p>
    </div>
    ${topicsSummary}
    ${wrongAnswers.length > 0 ? `
      <section class="mt-12">
        <div class="unit-header">
          <span class="unit-header-num">!</span>
          <span class="unit-header-title">Preguntas erradas</span>
          <span class="unit-header-meta">${wrongAnswers.length} ${wrongAnswers.length === 1 ? 'item' : 'items'}</span>
        </div>
        <div class="grid grid-cols-1 gap-4 stagger-rise">
          ${wrongAnswers.map((w) => `
            <div class="surface-card" style="padding:1.25rem 1.4rem;">
              ${isAggregate && w.secTitle ? `<p class="eyebrow no-rule" style="margin-bottom:0.5rem;font-size:.68rem;"><span style="background:none;width:0;height:0;"></span>${w.secTitle}</p>` : ''}
              <p class="font-medium mb-2" style="font-family:var(--font-reading);font-size:1.05rem;color:var(--ink);">${w.q}</p>
              <p class="meta" style="color:var(--error);">Elegiste: ${w.chosenText}</p>
              <p class="meta" style="margin-top:0.55em;color:var(--ink-2);font-style:italic;font-family:var(--font-reading);">${w.explain}</p>
            </div>
          `).join('')}
        </div>
      </section>
    ` : ''}
    ${nextSection ? `
      <a href="${nextLink}" class="btn btn-accent touch-target" style="display:block;margin-top:2.5rem;">
        Siguiente quiz: ${nextSection.id}. ${nextSection.title} →
      </a>
    ` : ''}
    <div class="flex flex-col md:flex-row gap-3 ${nextSection ? 'mt-3' : 'mt-10'}">
      <a href="${quizLink}" class="${nextSection ? 'btn-ghost' : 'btn btn-accent'} touch-target md:flex-1">Reintentar</a>
      <a href="${fcLink}" class="btn-ghost touch-target md:flex-1">Flashcards</a>
      <a href="${seccionLink}" class="btn-ghost touch-target md:flex-1">${isAggregate ? 'Volver' : 'Volver a la sección'}</a>
    </div>
  `;
  renderMath(summary);
}
