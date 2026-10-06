import test from 'node:test';
import assert from 'node:assert/strict';
import { getSubject, getSection, getAggregateSection } from '../js/content.js';
import { renderBlock } from '../js/blocks.js';

const subject = getSubject('algebra-lineal');
const ids = ['54', '55', '56', '57'];
const sections = ids.map(id => getSection(subject.id, id));
const text = id => JSON.stringify(getSection(subject.id, id).blocks);
const banks = sections.flatMap(section => [
  { section, quiz: section.quiz, cards: section.flashcards, suffix: '' },
  { section, quiz: section.quiz2, cards: section.flashcards2, suffix: '2' },
]);

test('unit seven precedes unit eight without renumbering earlier lessons', () => {
  assert.equal(subject.units['7'], 'Espacios vectoriales');
  assert.deepEqual(subject.sections.filter(s => s.unit === '7').map(s => s.id), ids);
  assert.ok(subject.sections.findIndex(s => s.id === '47') < subject.sections.findIndex(s => s.id === '54'));
  assert.ok(subject.sections.findIndex(s => s.id === '57') < subject.sections.findIndex(s => s.id === '48'));
  assert.equal(new Set(subject.sections.map(s => s.id)).size, subject.sections.length);
  assert.equal(subject.pdfs.length, 9);
});

test('both space banks contain eighty questions and forty-eight cards with valid keys', () => {
  const seen = new Set();
  let questionCount = 0, cardCount = 0;
  for (const { section, quiz, cards, suffix } of banks) {
    assert.deepEqual([quiz.tf.length, quiz.mc.length, quiz.ms.length, cards.length], [4, 4, 2, 6]);
    for (const kind of ['tf', 'mc', 'ms']) for (const q of quiz[kind]) {
      assert.match(q.id, new RegExp(`^${kind}${suffix}-${section.id}-\\d+$`));
      assert.ok(!seen.has(q.id), q.id); seen.add(q.id);
      assert.ok(q.q.trim().length > 10 && q.explain.trim().length > 10);
      if (kind === 'tf') assert.equal(typeof q.a, 'boolean');
      else {
        assert.equal(q.options.length, kind === 'mc' ? 4 : 5);
        assert.equal(new Set(q.options).size, q.options.length);
        const correct = kind === 'mc' ? [q.correctIndex] : q.correctIndexes;
        assert.ok(Array.isArray(correct));
        assert.equal(new Set(correct).size, correct.length);
        correct.forEach(i => assert.ok(Number.isInteger(i) && i >= 0 && i < q.options.length));
      }
      questionCount++;
    }
    for (const card of cards) {
      assert.match(card.id, new RegExp(`^fc${suffix}-${section.id}-\\d+$`));
      assert.ok(!seen.has(card.id), card.id); seen.add(card.id);
      assert.ok(card.front.trim() && card.back.trim()); cardCount++;
    }
  }
  assert.deepEqual([questionCount, cardCount, seen.size], [80, 48, 128]);
});

test('space banks are distinct and balanced', () => {
  const prompts = new Set();
  for (const { quiz } of banks) {
    assert.equal(quiz.tf.filter(q => q.a).length, 2);
    assert.deepEqual([...new Set(quiz.mc.map(q => q.correctIndex))].sort(), [0, 1, 2, 3]);
    for (const q of [...quiz.tf, ...quiz.mc, ...quiz.ms]) {
      assert.ok(!prompts.has(q.q), q.q); prompts.add(q.q);
    }
  }
  assert.ok(sections.some(s => s.quiz2.ms.some(q => q.correctIndexes.length === 0)));
});

test('space content renders with original source attribution and heading explanations', () => {
  for (const s of sections) {
    assert.equal(s.unit, '7');
    assert.ok(s.criollo.length > 25);
    assert.match(text(s.id), /Espacios vectoriales/);
    assert.match(text(s.id), /páginas/);
    assert.doesNotMatch(text(s.id), /<script|onerror=|file:\/\/|Bearer\s|token=/i);
    for (const [i, block] of s.blocks.entries()) {
      assert.equal(typeof renderBlock(block, i), 'string');
      if (block.type === 'h3') assert.ok(block.criollo?.length > 15);
    }
  }
});

test('unit-eight prerequisites now resolve to the new unit-seven lessons', () => {
  assert.match(text('48'), /subject=algebra-lineal&amp;id=54/);
  assert.match(text('49'), /subject=algebra-lineal&amp;id=56/);
  assert.doesNotMatch(text('48') + text('49'), /todavía no incorporada|no está incorporada/);
  assert.ok(getSection(subject.id, '54') && getSection(subject.id, '56'));
});

test('aggregate study routes include all new space exercises and cards', () => {
  for (const [set, qKey, fKey] of [['1', 'quiz', 'flashcards'], ['2', 'quiz2', 'flashcards2']]) {
    const all = getAggregateSection(subject.id, set);
    for (const s of sections) {
      for (const kind of ['tf', 'mc', 'ms']) for (const q of s[qKey][kind]) assert.equal(all[qKey][kind].find(x => x.id === q.id)?._sec.id, s.id);
      for (const card of s[fKey]) assert.ok(all[fKey].some(x => x.id === card.id));
    }
  }
});

test('the section54 arithmetic satisfies the illustrated distributive law', () => {
  const u = [2, -1], v = [-3, 4], alpha = -2;
  const sum = u.map((x, i) => x + v[i]);
  assert.deepEqual(sum, [-1, 3]);
  assert.deepEqual(u.map(x => alpha * x), [-4, 2]);
  assert.deepEqual(sum.map(x => alpha * x), u.map((x, i) => alpha * x + alpha * v[i]));
  assert.ok(text('54').includes('(2,-6)'));
});

test('the section55 opposite and nonzero-matrix counterexample are valid', () => {
  const u = [4, -2, 1];
  assert.deepEqual(u.map(x => -x), [-4, 2, -1]);
  const a = [[0, 3], [0, 0]], b = [[0, -4], [0, 0]];
  const product = a.map(row => b[0].map((_, col) => row.reduce((sum, value, k) => sum + value * b[k][col], 0)));
  assert.deepEqual(product, [[0, 0], [0, 0]]);
  assert.notDeepEqual(a, product); assert.notDeepEqual(b, product);
  assert.ok(text('55').includes('AB='));
});

test('the section56 fixed-direction example is closed under the checked operations', () => {
  const v = [2, -1, 3];
  const at = t => v.map(x => x * t);
  assert.deepEqual(at(2).map((x, i) => x + at(-1)[i]), at(1));
  assert.deepEqual(at(2).map(x => -2 * x), at(-4));
  assert.ok(text('56').includes('(2t,-t,3t)'));
});

test('the section57 intersection and union counterexample check out', () => {
  for (const t of [-2, 0, 3]) {
    const [x, y, z] = [t, t, -t];
    assert.equal(x - y, 0); assert.equal(y + z, 0);
  }
  const [x, y] = [2, -3];
  assert.ok(x !== 0 && y !== 0);
  assert.ok(text('57').includes('(t,t,-t)'));
  assert.ok(text('57').includes('(2,-3)'));
});
