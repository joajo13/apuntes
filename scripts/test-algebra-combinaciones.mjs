import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { getSubject, getSection, getAggregateSection } from '../js/content.js';
import { renderBlock } from '../js/blocks.js';

const subject = getSubject('algebra-lineal');
const ids = Array.from({ length: 6 }, (_, i) => String(48 + i));
const sections = ids.map(id => getSection(subject.id, id));
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/gi, ' ').trim().toLowerCase();
const banks = sections.flatMap(section => [
  { section, quiz: section.quiz, cards: section.flashcards, suffix: '' },
  { section, quiz: section.quiz2, cards: section.flashcards2, suffix: '2' },
]);
const strings = value => typeof value === 'string' ? [value] : Array.isArray(value) ? value.flatMap(strings) : value && typeof value === 'object' ? Object.values(value).flatMap(strings) : [];
const textOf = id => strings(getSection(subject.id, id).blocks).join('\n');
const combine = (vectors, coefficients) => vectors[0].map((_, i) => vectors.reduce((sum, vector, j) => sum + coefficients[j] * vector[i], 0));
const det3 = a => a[0][0] * (a[1][1] * a[2][2] - a[1][2] * a[2][1]) - a[0][1] * (a[1][0] * a[2][2] - a[1][2] * a[2][0]) + a[0][2] * (a[1][0] * a[2][1] - a[1][1] * a[2][0]);

test('unit eight has six stable lessons and leaves earlier unit boundaries intact', () => {
  assert.equal(subject.units['8'], 'Combinaciones entre vectores');
  assert.deepEqual(subject.sections.filter(section => section.unit === '8').map(section => section.id), ids);
  assert.deepEqual(subject.sections.filter(section => section.unit === '6').map(section => section.id), ['42', '43', '44', '45', '46', '47']);
  assert.equal(new Set(subject.sections.map(section => section.id)).size, subject.sections.length);
  assert.equal(subject.pdfs.length, 9);
  assert.ok(!subject.pdfs.some(pdf => /combinaciones/i.test(pdf.path)));
  for (const section of sections) {
    assert.equal(section.unit, '8');
    assert.ok(section.title.length > 10 && section.criollo.length > 25);
  }
});

test('both banks provide 120 valid questions and 72 cards without duplicate identities', () => {
  const seen = new Set();
  let questions = 0, cardCount = 0;
  for (const { section, quiz, cards, suffix } of banks) {
    assert.deepEqual([quiz.tf.length, quiz.mc.length, quiz.ms.length, cards.length], [4, 4, 2, 6]);
    for (const kind of ['tf', 'mc', 'ms']) {
      for (const question of quiz[kind]) {
        assert.match(question.id, new RegExp(`^${kind}${suffix}-${section.id}-\\d+$`));
        assert.ok(!seen.has(question.id), question.id);
        seen.add(question.id);
        assert.ok(question.q.trim().length > 10 && question.explain.trim().length > 10);
        if (kind === 'tf') assert.equal(typeof question.a, 'boolean');
        else {
          assert.equal(question.options.length, kind === 'mc' ? 4 : 5);
          assert.equal(new Set(question.options).size, question.options.length);
          const correct = kind === 'mc' ? [question.correctIndex] : question.correctIndexes;
          assert.ok(Array.isArray(correct));
          assert.equal(new Set(correct).size, correct.length);
          correct.forEach(index => assert.ok(Number.isInteger(index) && index >= 0 && index < question.options.length));
        }
        questions++;
      }
    }
    for (const card of cards) {
      assert.match(card.id, new RegExp(`^fc${suffix}-${section.id}-\\d+$`));
      assert.ok(!seen.has(card.id), card.id);
      seen.add(card.id);
      assert.ok(card.front.trim().length >= 3 && card.back.trim().length > 0);
      cardCount++;
    }
  }
  assert.deepEqual([questions, cardCount, seen.size], [120, 72, 192]);
});

test('new study identities do not overlap previous algebra content', () => {
  const collect = section => [section.quiz, section.quiz2].flatMap(quiz => quiz ? [...(quiz.tf || []), ...(quiz.mc || []), ...(quiz.ms || [])] : []).concat(section.flashcards || [], section.flashcards2 || []).map(item => item.id);
  const old = new Set(subject.sections.filter(section => !ids.includes(section.id)).flatMap(collect));
  for (const id of sections.flatMap(collect)) assert.ok(!old.has(id), id);
});

test('new banks balance keys and avoid repeated prompts or uniquely long correct choices', () => {
  const seen = new Set();
  let longest = 0, total = 0;
  for (const { quiz, suffix } of banks) {
    assert.equal(quiz.tf.filter(question => question.a).length, 2);
    for (const question of [...quiz.tf, ...quiz.mc, ...quiz.ms]) {
      const normalized = normalize(question.q);
      assert.ok(!seen.has(normalized), question.q);
      seen.add(normalized);
    }
    if (suffix !== '2') continue;
    assert.deepEqual([...new Set(quiz.mc.map(question => question.correctIndex))].sort(), [0, 1, 2, 3]);
    for (const question of quiz.mc) {
      assert.doesNotMatch(question.options.join('\n'), /(?:todas|ninguna) (?:de )?las anteriores/i);
      const lengths = question.options.map(option => option.length);
      if (lengths[question.correctIndex] > Math.max(...lengths.filter((_, i) => i !== question.correctIndex))) longest++;
      total++;
    }
  }
  assert.ok(longest / total <= 0.45, `correct uniquely longest: ${longest}/${total}`);
  assert.ok(sections.some(section => section.quiz2.ms.some(question => question.correctIndexes.length === 0)));
});

test('original lesson blocks render and include source pages and criollo headings', () => {
  const allowed = new Set(['p', 'h3', 'ul', 'ol', 'table', 'callout', 'math']);
  for (const section of sections) {
    const text = strings(section.blocks).join('\n');
    assert.match(text, /Combinaciones entre vectores|CombinacionesEntreVectores/);
    assert.match(text, /páginas|página|pp\./);
    assert.doesNotMatch(text, /<script|onerror=|file:\/\/|C:[/\\]|Bearer\s|token=/i);
    for (const [i, block] of section.blocks.entries()) {
      assert.ok(allowed.has(block.type));
      assert.equal(typeof renderBlock(block, i), 'string');
      if (block.type === 'h3') assert.ok(block.criollo?.length > 15);
    }
    for (const value of strings(section)) assert.doesNotMatch(value, /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/);
  }
});

test('prerequisites and confirmed source errors are distinguished from the new notes', () => {
  const doc = readFileSync(new URL('../docs/updates/2026-10-06-algebra-combinaciones.md', import.meta.url), 'utf8');
  assert.match(doc, /unidad 7/i);
  const content = strings(sections.slice(0, 3).map(section => section.blocks)).join('\n');
  assert.match(content, /unidad 7|unidad anterior|unidad previa/i);
  assert.match(content, /8\.6/);
  assert.match(content, /errata|error|corrección/i);
});

test('aggregate quizzes and cards contain every new question and flashcard', () => {
  for (const [set, qKey, fKey] of [['1', 'quiz', 'flashcards'], ['2', 'quiz2', 'flashcards2']]) {
    const aggregate = getAggregateSection(subject.id, set);
    for (const section of sections) {
      for (const kind of ['tf', 'mc', 'ms']) {
        for (const question of section[qKey][kind]) assert.equal(aggregate[qKey][kind].find(item => item.id === question.id)?._sec.id, section.id);
      }
      for (const card of section[fKey]) assert.ok(aggregate[fKey].some(item => item.id === card.id));
    }
  }
});

test('the original vector combination in section48 is correct', () => {
  assert.deepEqual(combine([[1, -1, 2], [0, 3, 1]], [2, -1]), [2, -5, 3]);
  assert.ok(textOf('48').includes('(2,-5,3)'));
});

test('the original matrix combination uses corresponding entries', () => {
  const a = [1, 0, -1, 2, 1, 0], b = [0, 2, 1, -1, 0, 3];
  assert.deepEqual(combine([a, b], [3, -2]), [3, -4, -5, 8, 3, -6]);
  assert.ok(textOf('48').includes('3A-2B='));
  assert.ok(textOf('48').includes('3&-4&-5'));
  assert.ok(textOf('48').includes('8&3&-6'));
});

test('span membership in section49 checks all three coordinates', () => {
  const u = [1, 0, 2], v = [0, 1, -1];
  assert.deepEqual(combine([u, v], [2, 3]), [2, 3, 1]);
  assert.notDeepEqual(combine([u, v], [2, 3]), [2, 3, 2]);
  assert.ok(textOf('49').includes('z=2x-y'));
});

test('the section50 generating formula and corrected source coefficients agree', () => {
  for (const [x, y] of [[4, -2], [0, 1], [1, 0], [-6, 8]]) {
    assert.deepEqual(combine([[1, 1], [1, -1]], [(x + y) / 2, (x - y) / 2]), [x, y]);
  }
  assert.deepEqual(combine([[1, 2], [3, 4]], [1.5, -0.5]), [0, 1]);
  assert.deepEqual(combine([[1, 2], [3, 4]], [2.5, -0.5]), [1, 3]);
  assert.ok(textOf('50').includes('(3/2,-1/2)'));
});

test('the section51 and52 dependence relations and independent system are correct', () => {
  assert.deepEqual(combine([[2, -1, 3], [-4, 2, -6]], [2, 1]), [0, 0, 0]);
  assert.equal(det3([[1, 0, 1], [0, 1, 1], [1, 1, 0]]), -2);
  assert.deepEqual(combine([[1, 1, 0], [0, 1, 1], [2, 1, -1]], [-2, 1, 1]), [0, 0, 0]);
  assert.ok(textOf('52').includes('t(-2,1,1)'));
});

test('the section53 determinants and redundant generator example are correct', () => {
  assert.equal(det3([[1, 0, 1], [1, 1, 0], [0, 1, 2]]), 3);
  assert.equal(det3([[1, 0, 1], [1, 1, 2], [0, 1, 1]]), 0);
  assert.deepEqual(combine([[1, 1, 0], [0, 1, 1], [1, 0, 2]], [2, -1, 2]), [4, 1, 3]);
  assert.deepEqual(combine([[1, 0], [0, 1], [2, -3]], [-2, 3, 1]), [0, 0]);
  assert.ok(textOf('53').includes('(4,1,3)'));
});
