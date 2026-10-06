import test from 'node:test';
import assert from 'node:assert/strict';
import { getSubject, getSection, getAggregateSection } from '../js/content.js';
import { renderBlock } from '../js/blocks.js';

const subject = getSubject('algebra-lineal');
const ids = Array.from({ length: 6 }, (_, i) => String(42 + i));
const sections = ids.map(id => getSection(subject.id, id));
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/gi, ' ').trim().toLowerCase();
const dot = (a, b) => a.reduce((sum, value, i) => sum + value * b[i], 0);
const subtract = (a, b) => a.map((value, i) => value - b[i]);
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = vector => Math.sqrt(dot(vector, vector));
const lessonText = id => JSON.stringify(getSection(subject.id, id).blocks);
const newBanks = sections.flatMap(section => [
  { section, quiz: section.quiz, cards: section.flashcards, suffix: '' },
  { section, quiz: section.quiz2, cards: section.flashcards2, suffix: '2' },
]);

test('unit six appends six uniquely identified lessons without adding source PDFs', () => {
  assert.equal(subject.units['6'], 'Rectas y planos');
  assert.deepEqual(subject.sections.slice(-6).map(section => section.id), ids);
  assert.equal(new Set(subject.sections.map(section => section.id)).size, subject.sections.length);
  assert.equal(subject.pdfs.length, 9);
  assert.ok(!subject.pdfs.some(pdf => /rectas|planos/.test(pdf.path)));
  for (const section of sections) {
    assert.equal(section.unit, '6');
    assert.ok(section.title.length > 10);
    assert.ok(section.criollo.length > 30);
  }
});

test('both study banks contain 120 valid questions and 72 flashcards', () => {
  const seen = new Set();
  let questions = 0;
  let cards = 0;
  for (const { section, quiz, cards: flashcards, suffix } of newBanks) {
    assert.equal(quiz.tf.length, 4);
    assert.equal(quiz.mc.length, 4);
    assert.equal(quiz.ms.length, 2);
    assert.equal(flashcards.length, 6);
    for (const kind of ['tf', 'mc', 'ms']) {
      for (const question of quiz[kind]) {
        assert.match(question.id, new RegExp(`^${kind}${suffix}-${section.id}-\\d+$`));
        assert.ok(!seen.has(question.id), question.id);
        seen.add(question.id);
        assert.ok(question.q.trim().length > 10);
        assert.ok(question.explain.trim().length > 15);
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
    for (const card of flashcards) {
      assert.match(card.id, new RegExp(`^fc${suffix}-${section.id}-\\d+$`));
      assert.ok(!seen.has(card.id), card.id);
      seen.add(card.id);
      assert.ok(card.front.trim().length >= 3 && card.back.trim().length > 0);
      cards++;
    }
  }
  assert.equal(questions, 120);
  assert.equal(cards, 72);
  assert.equal(seen.size, 192);
});

test('new study identities cannot collide with earlier lessons', () => {
  const collect = section => [section.quiz, section.quiz2].flatMap(quiz => quiz ? [...(quiz.tf || []), ...(quiz.mc || []), ...(quiz.ms || [])] : []).concat(section.flashcards || [], section.flashcards2 || []).map(item => item.id);
  const old = new Set(subject.sections.filter(section => !ids.includes(section.id)).flatMap(collect));
  for (const id of sections.flatMap(collect)) assert.ok(!old.has(id), id);
});

test('alternate banks use distinct prompts and balanced answer positions', () => {
  const seen = new Set();
  let longest = 0;
  let count = 0;
  for (const { quiz, suffix } of newBanks) {
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
      const distractorLengths = lengths.filter((_, index) => index !== question.correctIndex);
      if (lengths[question.correctIndex] > Math.max(...distractorLengths)) longest++;
      count++;
    }
  }
  assert.ok(longest / count <= 0.45, `correct option longest: ${longest}/${count}`);
  assert.ok(sections.some(section => section.quiz2.ms.some(question => question.correctIndexes.length === 0)));
});

test('lesson blocks render with source attribution and criollo headings', () => {
  const allowed = new Set(['p', 'h3', 'ul', 'ol', 'table', 'callout', 'math']);
  for (const section of sections) {
    const text = JSON.stringify(section.blocks);
    assert.match(text, /Rectas.y.planos|Rectas-y-planos/i);
    assert.match(text, /páginas|pp\.|página/);
    assert.doesNotMatch(text, /<script|onerror=|file:\/\/|C:[/\\]|Bearer\s|token=/i);
    for (const [index, block] of section.blocks.entries()) {
      assert.ok(allowed.has(block.type));
      assert.equal(typeof renderBlock(block, index), 'string');
      if (block.type === 'h3') assert.ok(block.criollo?.length > 15);
      if (block.type === 'math') {
        assert.ok(block.latex.length > 2);
        assert.doesNotMatch(block.latex, /[\u0000-\u001f]/);
      }
    }
  }
});

test('lessons retain nondegeneracy conditions and explicit source errata', () => {
  for (const id of ['42', '43', '46', '47']) {
    assert.match(JSON.stringify(getSection(subject.id, id).blocks), /cero|nul[oa]|\\ne/);
  }
  const planeText = JSON.stringify(getSection(subject.id, '44').blocks);
  assert.match(planeText, /errata|error|signo|tipeo/i);
  assert.match(planeText, /6\.4/);
  assert.match(planeText, /6\.5/);
});

test('aggregate assessments incorporate both new banks', () => {
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

test('section 42 worked line uses one parameter consistently', () => {
  const a = [1, -2, 3], b = [3, 1, -1], direction = [2, 3, -4];
  assert.deepEqual(subtract(b, a), direction);
  assert.deepEqual(a.map((value, i) => value + 2 * direction[i]), [5, 4, -5]);
  assert.ok(lessonText('42').includes('(1,-2,3)+t(2,3,-4)'));
  assert.ok(lessonText('42').includes('(5,4,-5)'));
});

test('section 43 worked plane contains its points and has an orthogonal displacement', () => {
  const n = [2, -1, 1], a = [1, -2, 3], b = [2, 0, 3];
  assert.equal(dot(n, a), 7);
  assert.equal(dot(n, b), 7);
  assert.equal(dot(n, subtract(b, a)), 0);
  assert.ok(lessonText('43').includes('2x-y+z=7'));
});

test('section 44 worked three-point plane and parallel constants are consistent', () => {
  const a = [1, 0, 1], b = [3, 1, 1], c = [1, 1, 2];
  const n = cross(subtract(b, a), subtract(c, a));
  assert.deepEqual(n, [1, -2, 2]);
  [a, b, c].forEach(point => assert.equal(dot(n, point), 3));
  assert.deepEqual(cross(n, [2, -4, 4]), [0, 0, 0]);
  assert.notEqual(10, 2 * 3);
  assert.equal(6, 2 * 3);
  assert.ok(lessonText('44').includes('x-2y+2z=3'));
});

test('section 45 worked intersection and triple products are correct', () => {
  const n1 = [1, 1, 0], n2 = [0, 1, 1], point = [2, 2, 0];
  const direction = cross(n1, n2);
  assert.deepEqual(direction, [1, -1, 1]);
  assert.equal(dot(n1, point), 4);
  assert.equal(dot(n2, point), 2);
  assert.equal(dot(n1, direction), 0);
  assert.equal(dot(n2, direction), 0);
  const planeNormal = cross([1, 0, 1], [0, 1, 1]);
  assert.equal(dot(planeNormal, [2, 3, 5]), 0);
  assert.equal(dot(planeNormal, [2, 3, 6]), 1);
  assert.ok(lessonText('45').includes('(2,2,0)+t(1,-1,1)'));
});

test('section 46 worked point-line distance matches the perpendicular foot', () => {
  const p = [2, 2, 2], r = [1, -1, 0], v = [2, 1, 0];
  const displacement = subtract(p, r);
  assert.deepEqual(cross(displacement, v), [-2, 4, -5]);
  const distance = norm(cross(displacement, v)) / norm(v);
  assert.ok(Math.abs(distance - 3) < 1e-12);
  const t = dot(displacement, v) / dot(v, v);
  assert.equal(t, 1);
  const foot = r.map((value, i) => value + t * v[i]);
  assert.deepEqual(foot, [3, 0, 0]);
  assert.equal(dot(subtract(p, foot), v), 0);
  assert.equal(norm(subtract(p, foot)), 3);
  assert.ok(lessonText('46').includes('M=(3,0,0)'));
});

test('section 47 worked point-plane distance matches its projected point', () => {
  const p = [3, 0, 1], n = [2, -1, 2], d = 5;
  const residual = dot(n, p) - d;
  assert.equal(residual, 3);
  assert.equal(Math.abs(residual) / norm(n), 1);
  const foot = p.map((value, i) => value - residual * n[i] / dot(n, n));
  assert.ok(Math.abs(dot(n, foot) - d) < 1e-12);
  assert.ok(Math.abs(norm(subtract(p, foot)) - 1) < 1e-12);
  assert.ok(lessonText('47').includes('2x-y+2z=5'));
});
