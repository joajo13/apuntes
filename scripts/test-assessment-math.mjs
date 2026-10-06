/**
 * Dependency-free view/interaction regression. The DOM and CDN entry point are
 * test doubles: this checks render timing, containers, and existing behavior;
 * actual KaTeX layout still needs a browser smoke test.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { getSection } from '../js/content.js';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const clone = value => JSON.parse(JSON.stringify(value));

class Element {
  constructor(document, id = '', attributes = '') {
    this.document = document;
    this.id = id;
    this.listeners = new Map();
    this.attributes = new Map([...attributes.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]));
    this.dataset = { idx: this.attributes.get('data-idx') };
    this.disabled = /\bdisabled\b/.test(attributes);
    const classes = new Set((this.attributes.get('class') || '').split(/\s+/));
    this.classList = {
      add: value => classes.add(value),
      remove: value => classes.delete(value),
      contains: value => classes.has(value),
      toggle(value, force = !classes.has(value)) {
        if (force) classes.add(value);
        else classes.delete(value);
      },
    };
    this.style = { setProperty() {} };
    this._html = '';
    this.buttons = [];
  }
  set innerHTML(html) {
    this._html = html;
    for (const match of html.matchAll(/<[\w-]+\b([^>]*\bid="([^"]+)"[^>]*)>/g)) {
      this.document.elements.set(match[2], new Element(this.document, match[2], match[1]));
    }
    this.buttons = [...html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)].map(match => {
      const id = /\bid="([^"]+)"/.exec(match[1])?.[1];
      const button = id ? this.document.getElementById(id) : new Element(this.document, '', match[1]);
      button._html = match[2];
      return button;
    });
  }
  get innerHTML() { return this._html; }
  addEventListener(type, callback) { this.listeners.set(type, callback); }
  click() { if (!this.disabled) this.listeners.get('click')?.(); }
  getAttribute(name) { return this.attributes.get(name); }
  setAttribute(name, value) { this.attributes.set(name, value); }
  querySelectorAll(selector) {
    assert.equal(selector, 'button');
    return this.buttons;
  }
}

function runView(view, { section = mathSection(), set = '1', aggregate = false,
  type = '', readyState = 'interactive', cdn = true, state = null,
  subjectId = 'math-test' } = {}) {
  const calls = [];
  const listeners = new Map();
  const document = {
    readyState,
    elements: new Map(),
    getElementById(id) { return this.elements.get(id); },
    addEventListener(type, callback, options) { listeners.set(type, { callback, options }); },
    querySelectorAll(selector) {
      assert.equal(selector, '#options button');
      return this.getElementById('options').buttons;
    },
    querySelector(selector) {
      const index = /data-idx="(\d+)"/.exec(selector)?.[1];
      return this.getElementById('options').buttons.find(button => button.dataset.idx === index);
    },
  };
  for (const id of ['quiz-header', 'quiz-body', 'quiz-summary', 'quiz-bottom',
    'fc-header', 'fc-stage', 'fc-summary', 'fc-bottom']) {
    document.elements.set(id, new Element(document, id));
  }
  const values = new Map(state ? [['study-app-state', JSON.stringify(state)]] : []);
  const window = {};
  const installRenderer = () => {
    window.renderMathInElement = (element, options) => {
      assert.ok(element, 'render a real container');
      calls.push({ id: element.id, html: element.innerHTML,
        optionsHTML: element.id === 'quiz-body' ? document.getElementById('options')?.innerHTML : '',
        options: clone(options) });
    };
  };
  if (cdn) installRenderer();
  const context = {
    document, window, URLSearchParams,
    localStorage: { getItem: key => values.get(key), setItem: (key, value) => values.set(key, value) },
    location: {
      search: `?subject=${subjectId}&id=${aggregate ? '__all__' : section.id}&set=${set}${type ? `&type=${type}` : ''}`,
      replace(url) { throw Error(`unexpected redirect: ${url}`); },
    },
    renderNav() {},
    getCurrentSubject: () => ({ id: subjectId }),
    getSection: () => section,
    getAggregateSection: () => ({ ...section, id: '__all__' }),
    getNextSectionWith: () => ({ id: 'next', title: 'Siguiente $z$' }),
  };
  const source = read(`js/${view}.js`).replace(/^import[\s\S]*?from '[^']+';\n/gm, '');
  runInNewContext(`${read('js/katex-init.js').replace(/export /g, '')}\n${read('js/storage.js').replace(/export /g, '')}\n${source}`, context);
  return {
    document, calls, installRenderer,
    el: id => document.getElementById(id),
    state: () => JSON.parse(values.get('study-app-state') || '{}'),
    start() {
      const listener = listeners.get('DOMContentLoaded');
      assert.ok(listener, 'wait for deferred KaTeX scripts');
      assert.equal(listener.options.once, true);
      document.readyState = 'interactive';
      listener.callback();
      listeners.delete('DOMContentLoaded');
    },
    key(key) { listeners.get('keydown')?.callback({ key, preventDefault() {} }); },
  };
}

function mathSection() {
  const bank = label => ({
    tf: [{ id: `tf-${label}`, q: `${label} $x=1$`, a: true, explain: `${label} $$x^2=1$$`, _sec: { id: '1', title: 'Tema $x$' } }],
    mc: [{ id: `mc-${label}`, q: `${label} $y=2$`, options: ['$y=2$', '$y=3$'], correctIndex: 0, explain: `${label} $y^2=4$` }],
    ms: [{ id: `ms-${label}`, q: `${label} $z>0$`, options: ['$z=1$', '$z=-1$', '$z=2$'], correctIndexes: [0, 2], explain: `${label} $$z\\in\\{1,2\\}$$` }],
  });
  const cards = label => [
    { id: `${label}-1`, front: `${label} $x$`, back: `${label} $$x^2$$` },
    { id: `${label}-2`, front: `${label} $y$`, back: `${label} $$y^2$$` },
  ];
  return { id: '1', title: 'Sección $x$', quiz: bank('original'), quiz2: bank('nuevo'),
    flashcards: cards('original'), flashcards2: cards('nuevo') };
}

function lastRender(view, id) {
  const call = view.calls.filter(call => call.id === id).at(-1);
  assert.ok(call, `renderMath called for ${id}`);
  return call;
}

function choose(view, indices, multi = false) {
  const buttons = view.el('options').buttons;
  for (const index of indices) buttons[index].click();
  if (multi) view.el('check-btn').click();
  assert.ok(buttons.every(button => button.disabled), 'answer locks options');
}

test('assessment pages reuse the exact section KaTeX assets, integrity, and defer order', () => {
  const assets = html => html.split('\n').filter(line => line.includes('cdn.jsdelivr.net/npm/katex@'));
  const expected = assets(read('seccion.html'));
  assert.equal(expected.length, 3);
  for (const page of ['quiz', 'flashcards']) {
    assert.deepEqual(assets(read(`${page}.html`)), expected);
    assert.match(read(`js/${page}.js`), /import \{ renderMath \} from '\.\/katex-init\.js'/);
  }
});

for (const view of ['quiz', 'flashcards']) {
  for (const readyState of ['loading', 'interactive']) {
    test(`${view} waits for deferred CDN scripts from ${readyState}`, () => {
      const app = runView(view, { cdn: false, readyState });
      assert.equal(app.document.title, undefined);
      assert.equal(app.calls.length, 0);
      app.installRenderer();
      app.start();
      assert.ok(app.calls.length >= 2);
    });
  }
  test(`${view} can initialize when the document is already complete`, () => {
    assert.ok(runView(view, { readyState: 'complete' }).calls.length >= 2);
  });
}

for (const set of ['1', '2']) {
  test(`quiz bank ${set}: renders stems/options/feedback/summary and preserves scoring`, () => {
    const section = mathSection();
    const original = JSON.stringify(section);
    const app = runView('quiz', { section, set });
    app.start();
    assert.match(lastRender(app, 'quiz-header').html, /Sección \$x\$/);
    assert.match(lastRender(app, 'quiz-body').html, new RegExp(`${set === '2' ? 'nuevo' : 'original'} \\$x=1\\$`));
    choose(app, [1]);
    assert.match(lastRender(app, 'explanation').html, /\$\$x\^2=1\$\$/);
    app.el('next-btn').click();
    assert.match(lastRender(app, 'quiz-body').optionsHTML, /\$y=2\$/);
    choose(app, [0]);
    assert.match(lastRender(app, 'explanation').html, /\$y\^2=4\$/);
    app.el('next-btn').click();
    assert.match(lastRender(app, 'quiz-body').optionsHTML, /\$z=-1\$/);
    choose(app, [1], true);
    const feedback = lastRender(app, 'explanation').html;
    assert.match(feedback, /Correctas:<\/strong> \$z=1\$ · \$z=2\$/);
    assert.match(feedback, /\$\$z\\in/);
    app.el('next-btn').click();
    const summary = lastRender(app, 'quiz-summary').html;
    assert.match(summary, /Preguntas erradas/);
    assert.match(summary, /Elegiste: \$z=-1\$/);
    assert.match(summary, /Siguiente quiz: next\. Siguiente \$z\$/);
    const saved = app.state().subjects['math-test'].sections[`1${set === '2' ? '::v2' : ''}`].lastQuizScore;
    assert.equal(saved.correct, 1);
    assert.equal(saved.total, 3);
    assert.equal(JSON.stringify(section), original, 'rendering does not rewrite bank data');
  });

  test(`flashcard bank ${set}: renders both faces on each insertion, flip, repeat and summary`, () => {
    const app = runView('flashcards', { set });
    app.start();
    assert.match(lastRender(app, 'fc-header').html, /Sección \$x\$/);
    assert.match(lastRender(app, 'fc-stage').html, /\$x\$/);
    assert.match(lastRender(app, 'fc-stage').html, /\$\$x\^2\$\$/);
    app.el('flashcard').click();
    assert.ok(app.el('flashcard').classList.contains('is-flipped'));
    app.key(' ');
    assert.ok(!app.el('flashcard').classList.contains('is-flipped'));
    app.el('repaso-btn').click();
    assert.match(lastRender(app, 'fc-stage').html, /\$\$y\^2\$\$/);
    app.el('sabia-btn').click();
    assert.match(lastRender(app, 'fc-stage').html, /\$\$x\^2\$\$/);
    app.el('sabia-btn').click();
    assert.match(lastRender(app, 'fc-summary').html, /100% sabidas/);
    assert.match(lastRender(app, 'fc-summary').html, /Siguiente \$z\$/);
    const known = app.state().subjects['math-test'].sections[`1${set === '2' ? '::v2' : ''}`].knownFlashcards;
    assert.deepEqual(known, set === '2' ? ['nuevo-2', 'nuevo-1'] : ['original-2', 'original-1']);
  });
}

test('aggregate checkpoint, resume, and final topic/error summaries retain rendering and storage', () => {
  const section = mathSection();
  section.quiz = { tf: Array.from({ length: 26 }, (_, i) => ({ ...section.quiz.tf[0], id: `tf-${i}` })) };
  const app = runView('quiz', { section, aggregate: true });
  app.start();
  for (let i = 0; i < 25; i++) {
    choose(app, [1]);
    app.el('next-btn').click();
  }
  assert.match(lastRender(app, 'quiz-body').html, /Checkpoint/);
  assert.match(lastRender(app, 'quiz-body').html, /Tema \$x\$/);
  const progress = app.state().examProgress['math-test']['__all__::quiz'];
  assert.equal(progress.current, 25);
  assert.equal(progress.lastMilestone, 25);
  const resumed = runView('quiz', { section, aggregate: true, state: app.state() });
  resumed.start();
  resumed.el('resume-continue').click();
  assert.match(lastRender(resumed, 'quiz-body').html, /\$x=1\$/);
  choose(resumed, [0]);
  resumed.el('next-btn').click();
  assert.match(lastRender(resumed, 'quiz-summary').html, /Tema \$x\$/);
  assert.equal(resumed.state().examProgress['math-test']['__all__::quiz'], undefined);
  assert.equal(resumed.state().subjects['math-test'].sections.__all__.lastQuizScore.correct, 1);
});

for (const set of ['1', '2']) {
  for (const cdn of [true, false]) {
    test(`plain Java bank ${set}, CDN ${cdn}: original text, handlers and persistence are unchanged`, () => {
      const section = getSection('laboratorio-1', '50');
      const original = JSON.stringify(section);
      const quiz = set === '2' ? section.quiz2 : section.quiz;
      const app = runView('quiz', { section, set, cdn, subjectId: 'laboratorio-1' });
      app.start();
      let total = 0;
      for (const kind of ['tf', 'mc', 'ms']) {
        for (const q of quiz[kind]) {
          assert.ok(app.el('quiz-body').innerHTML.includes(q.q));
          if (kind !== 'tf') for (const option of q.options) assert.ok(app.el('options').innerHTML.includes(option));
          choose(app, kind === 'tf' ? [q.a ? 0 : 1] : kind === 'mc' ? [q.correctIndex] : q.correctIndexes, kind === 'ms');
          assert.ok(app.el('explanation').innerHTML.includes(q.explain));
          app.el('next-btn').click();
          total++;
        }
      }
      const saved = app.state().subjects['laboratorio-1'].sections[`50${set === '2' ? '::v2' : ''}`].lastQuizScore;
      assert.equal(saved.correct, total);
      assert.equal(saved.total, total);
      const fc = runView('flashcards', { section, set, cdn, subjectId: 'laboratorio-1' });
      fc.start();
      for (const card of section[set === '2' ? 'flashcards2' : 'flashcards']) {
        assert.ok(fc.el('fc-stage').innerHTML.includes(card.front));
        assert.ok(fc.el('fc-stage').innerHTML.includes(card.back));
        fc.el('sabia-btn').click();
      }
      assert.match(fc.el('fc-summary').innerHTML, /100% sabidas/);
      assert.equal(JSON.stringify(section), original);
      if (!cdn) assert.equal(app.calls.length + fc.calls.length, 0);
      for (const { options } of [...app.calls, ...fc.calls]) {
        assert.deepEqual(options.delimiters, [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }]);
        assert.equal(options.throwOnError, false);
        assert.equal(options.ignoredTags, undefined, 'preserve KaTeX defaults that ignore code/pre');
      }
    });
  }
}

test('CDN failure leaves math source visible and quiz/card controls usable', () => {
  const quiz = runView('quiz', { cdn: false, type: 'mc' });
  quiz.start();
  assert.match(quiz.el('quiz-body').innerHTML, /\$y=2\$/);
  choose(quiz, [0]);
  assert.match(quiz.el('explanation').innerHTML, /\$y\^2=4\$/);
  quiz.el('next-btn').click();
  assert.match(quiz.el('quiz-summary').innerHTML, /100% correctas/);
  const cards = runView('flashcards', { cdn: false });
  cards.start();
  assert.match(cards.el('fc-stage').innerHTML, /\$\$x\^2\$\$/);
  cards.el('flashcard').click();
  assert.ok(cards.el('flashcard').classList.contains('is-flipped'));
});

for (const set of ['1', '2']) {
  test(`multi-select bank ${set}: zero correct choices are explained and still score correctly`, () => {
    const section = mathSection();
    section[set === '2' ? 'quiz2' : 'quiz'].ms[0].correctIndexes = [];
    const app = runView('quiz', { section, set, type: 'ms' });
    app.start();
    assert.match(app.el('quiz-body').innerHTML, /Marcá las opciones correctas; <strong>puede no haber ninguna<\/strong>/);
    assert.doesNotMatch(app.el('quiz-body').innerHTML, /una o más/);
    choose(app, [], true);
    assert.match(app.el('explanation').innerHTML, /Bien · explicación/);
    app.el('next-btn').click();
    const saved = app.state().subjects['math-test'].sections[`1${set === '2' ? '::v2' : ''}`].lastQuizScore;
    assert.equal(saved.correct, 1);
    assert.equal(saved.total, 1);
  });
}
