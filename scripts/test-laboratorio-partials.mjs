import test from 'node:test';
import assert from 'node:assert/strict';

import { getPartial, getSubject } from '../js/content.js';

const subject = getSubject('laboratorio-1');
const partials = subject?.partials || [];

function collectStrings(value) {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
}

function normalizeText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/gi, ' ')
    .trim()
    .toLowerCase();
}

test('Laboratorio 1 ofrece exactamente cinco parciales de practica navegables', () => {
  assert.equal(partials.length, 5);
  assert.deepEqual(partials.map(partial => partial.id), ['1', '2', '3', '4', '5']);

  for (const partial of partials) {
    assert.equal(getPartial('laboratorio-1', partial.id), partial);
    assert.match(partial.title, new RegExp(`N.º ${partial.id}$`));
    assert.ok(partial.blurb?.length > 40, `falta una descripcion util en el parcial ${partial.id}`);
  }
});

test('cada parcial tiene diez preguntas y combina los tres formatos de evaluacion', () => {
  for (const partial of partials) {
    assert.equal(partial.questions.length, 10, `cantidad del parcial ${partial.id}`);
    const counts = partial.questions.reduce((acc, question) => {
      acc[question.kind] = (acc[question.kind] || 0) + 1;
      return acc;
    }, {});
    assert.ok(counts.tf >= 2, `faltan V/F en el parcial ${partial.id}`);
    assert.ok(counts.mc >= 3, `faltan multiple choice en el parcial ${partial.id}`);
    assert.ok(counts.open >= 2, `faltan desarrollos en el parcial ${partial.id}`);
  }
});

test('las preguntas cerradas tienen respuestas validas y devoluciones explicativas', () => {
  for (const partial of partials) {
    for (const [index, question] of partial.questions.entries()) {
      assert.ok(question.q?.length > 20, `consigna corta en ${partial.id}.${index + 1}`);

      if (question.kind === 'tf') {
        assert.equal(typeof question.a, 'boolean', `respuesta V/F invalida en ${partial.id}.${index + 1}`);
        assert.ok(question.explain?.length > 35, `explicacion insuficiente en ${partial.id}.${index + 1}`);
      } else if (question.kind === 'mc') {
        assert.equal(question.options?.length, 4, `opciones invalidas en ${partial.id}.${index + 1}`);
        assert.ok(Number.isInteger(question.correctIndex), `indice invalido en ${partial.id}.${index + 1}`);
        assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
        assert.equal(new Set(question.options).size, question.options.length, `opciones repetidas en ${partial.id}.${index + 1}`);
        assert.ok(question.explain?.length > 35, `explicacion insuficiente en ${partial.id}.${index + 1}`);
      } else if (question.kind === 'open') {
        assert.ok(question.model?.length > 100, `respuesta modelo insuficiente en ${partial.id}.${index + 1}`);
      } else {
        assert.fail(`tipo desconocido ${question.kind} en ${partial.id}.${index + 1}`);
      }
    }
  }
});

test('el banco no repite consignas y respeta el corte del primer parcial en S40', () => {
  const questions = partials.flatMap(partial => partial.questions.map(question => question.q));
  assert.equal(new Set(questions.map(normalizeText)).size, 50);

  const assessedText = collectStrings(partials).join('\n');
  assert.doesNotMatch(assessedText, /\b(?:Strategy|Template Method|State|Singleton|ArrayList|HashMap|checked exceptions?|unchecked exceptions?)\b/i);
});

test('los cinco modelos recorren los nucleos del temario confirmado', () => {
  const text = partials.map(partial => `${partial.blurb}\n${partial.questions.map(question => question.q).join('\n')}`).join('\n');
  for (const topic of [
    /IDE|Eclipse/i,
    /char|String|tipo(?:s)? (?:de )?dato|arreglo/i,
    /if|for|while|do\.\.\.while|break|continue|estructura de control/i,
    /JDK|JRE|JVM|bytecode/i,
    /herencia|sobrecarga|sobreescritura/i,
    /cardinalidad|direccionalidad|agregacion|agregación|composicion|composición/i,
    /clase abstracta|interfaz/i,
    /composicion por sobre la herencia|composición por sobre la herencia/i,
  ]) assert.match(text, topic);
});
