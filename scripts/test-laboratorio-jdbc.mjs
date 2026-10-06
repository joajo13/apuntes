import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { getSubject, getSection, getAggregateSection } from '../js/content.js';
import { renderBlock } from '../js/blocks.js';

const subject = getSubject('laboratorio-1');
const ids = Array.from({ length: 8 }, (_, i) => String(50 + i));
const sections = ids.map(id => getSection(subject.id, id));
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/gi, ' ').trim().toLowerCase();
const banks = sections.flatMap(section => [
  { section, quiz: section.quiz, cards: section.flashcards, suffix: '' },
  { section, quiz: section.quiz2, cards: section.flashcards2, suffix: '2' },
]);

test('eight new lessons retain unique subject identities and correct units', () => {
  const allIds = subject.sections.map(section => section.id);
  assert.equal(new Set(allIds).size, allIds.length);
  assert.deepEqual(subject.sections.slice(-8).map(section => section.id), ids);
  sections.forEach((section, i) => {
    assert.equal(section.unit, i < 4 ? 'jdbc' : i < 6 ? 'dao' : 'diseno-capas');
    assert.ok(subject.units[section.unit]);
    assert.ok(section.criollo.length > 40);
  });
});

test('each new lesson and second bank has the required study inventory', () => {
  for (const { section, quiz, cards, suffix } of banks) {
    assert.equal(quiz.tf.length, 4, `${section.id}/${suffix} TF`);
    assert.equal(quiz.mc.length, 4, `${section.id}/${suffix} MC`);
    assert.equal(quiz.ms.length, 2, `${section.id}/${suffix} MS`);
    assert.equal(cards.length, 6, `${section.id}/${suffix} cards`);
    assert.equal(quiz.tf.filter(question => question.a).length, 2);
  }
});

test('all 256 new question and flashcard IDs are unique and answers are valid', () => {
  const seen = new Set();
  for (const { section, quiz, cards, suffix } of banks) {
    for (const kind of ['tf', 'mc', 'ms']) {
      for (const question of quiz[kind]) {
        assert.match(question.id, new RegExp(`^${kind}${suffix}-${section.id}-\\d+$`));
        assert.ok(!seen.has(question.id), question.id);
        seen.add(question.id);
        assert.ok(question.q.length > 15);
        assert.ok(question.explain.length > 20);
        if (kind === 'tf') assert.equal(typeof question.a, 'boolean');
        else {
          assert.equal(question.options.length, kind === 'mc' ? 4 : 5);
          assert.equal(new Set(question.options).size, question.options.length);
          const correct = kind === 'mc' ? [question.correctIndex] : question.correctIndexes;
          assert.ok(Array.isArray(correct));
          assert.equal(new Set(correct).size, correct.length);
          correct.forEach(index => assert.ok(Number.isInteger(index) && index >= 0 && index < question.options.length));
        }
      }
    }
    for (const card of cards) {
      assert.match(card.id, new RegExp(`^fc${suffix}-${section.id}-\\d+$`));
      assert.ok(!seen.has(card.id), card.id);
      seen.add(card.id);
      assert.ok(card.front.trim().length >= 3 && card.back.length > 20);
    }
  }
  assert.equal(seen.size, 256);
});

test('second banks are distinct, balanced and avoid predictable option lengths', () => {
  const seen = new Set();
  let correctLongest = 0;
  let count = 0;
  for (const { section, quiz, suffix } of banks) {
    for (const question of [...quiz.tf, ...quiz.mc, ...quiz.ms]) {
      const key = normalize(question.q);
      assert.ok(!seen.has(key), `repeated question: ${section.id}/${suffix}: ${question.q}`);
      seen.add(key);
    }
    if (suffix !== '2') continue;
    assert.deepEqual([...new Set(quiz.mc.map(question => question.correctIndex))].sort(), [0, 1, 2, 3]);
    for (const question of quiz.mc) {
      assert.doesNotMatch(question.options.join('\n'), /(?:todas|ninguna) (?:de )?las anteriores/i);
      const lengths = question.options.map(option => option.length);
      if (lengths[question.correctIndex] === Math.max(...lengths)) correctLongest++;
      count++;
    }
  }
  assert.ok(correctLongest / count <= 0.4, `correct option longest: ${correctLongest}/${count}`);
  assert.ok(sections.some(section => section.quiz2.ms.some(question => question.correctIndexes.length === 0)));
});

test('new blocks render, attribute sources, and keep Java examples simple', () => {
  const types = new Set(['p', 'h3', 'ul', 'ol', 'table', 'callout', 'code']);
  for (const section of sections) {
    const sourceText = JSON.stringify(section.blocks);
    assert.match(sourceText, /0114_APU_(?:JDBCQueEsParaQueSirve|AccesoDatosMedianteDAO|DiseEnCapas)_201Q_v1-0\.pdf/);
    assert.match(sourceText, /páginas/);
    assert.doesNotMatch(sourceText, /<script|onerror=|file:\/\/|C:[/\\]|Bearer\s|token=/i);
    section.blocks.forEach((block, index) => {
      assert.ok(types.has(block.type));
      assert.equal(typeof renderBlock(block, index), 'string');
      if (block.type === 'h3') assert.ok(block.criollo?.length > 15, `${section.id}: ${block.text}`);
      if (block.type === 'code') {
        assert.doesNotMatch(block.code, /\/\/|\/\*|PreparedStatement|DataSource|try\s*\(|@Autowired|Stream</);
      }
    });
  }
});

test('source errata remain explicit instead of becoming misleading study answers', () => {
  const statements = JSON.stringify(getSection(subject.id, '51'));
  assert.match(statements, /Errata/);
  assert.match(statements, /false indica un conteo de actualización o ausencia de resultados/);
  assert.match(statements, /docs\.oracle\.com/);
  const dao = JSON.stringify(getSection(subject.id, '55'));
  assert.match(dao, /crearUsuario, crear e insertar/);
  assert.match(dao, /omiten tipos de retorno/);
  const transaction = JSON.stringify(getSection(subject.id, '53'));
  assert.match(transaction, /no muestra commit ni rollback/);
});

test('aggregate quizzes and cards include every new entry', () => {
  for (const [set, quizKey, cardsKey] of [['1', 'quiz', 'flashcards'], ['2', 'quiz2', 'flashcards2']]) {
    const aggregate = getAggregateSection(subject.id, set);
    for (const section of sections) {
      for (const kind of ['tf', 'mc', 'ms']) {
        for (const question of section[quizKey][kind]) {
          const result = aggregate[quizKey][kind].find(item => item.id === question.id);
          assert.equal(result?._sec.id, section.id);
        }
      }
      for (const card of section[cardsKey]) assert.ok(aggregate[cardsKey].some(item => item.id === card.id));
    }
  }
});

test('the existing first-partial practice bank and PDF inventory remain outside this update', () => {
  assert.deepEqual(subject.partials.map(partial => partial.id), ['1', '2', '3', '4', '5']);
  assert.equal(subject.pdfs.length, 18);
  assert.ok(!subject.pdfs.some(pdf => /jdbc|dao|capas/i.test(pdf.path)));
  const report = readFileSync(new URL('../docs/updates/2026-10-06-laboratorio-jdbc-dao-capas.md', import.meta.url), 'utf8');
  assert.match(report, /No se incorpora una solución de la actividad/);
});
