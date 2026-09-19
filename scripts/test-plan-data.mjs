import test from 'node:test';
import assert from 'node:assert/strict';

import * as data from '../js/plan-data.js';
import * as content from '../js/plan-content.js';

test('public plan exports its calendar, guide inventory and workbook', () => {
  assert.ok(Array.isArray(data.DAYS), 'DAYS must be an array');
  assert.ok(Array.isArray(data.GUIDES), 'GUIDES must be an array');
  assert.equal(data.WORKBOOK, 'pdfs/planes/cuadernillo-analisis-parcial-2026-10-01.pdf');
});

test('calendar starts at D2 on 19 September and ends on 1 October, without overdue 17/18 tasks', () => {
  assert.equal(data.DAYS?.length, 13);
  const dates = Array.from({ length: 13 }, (_, index) => new Date(Date.UTC(2026, 8, 19 + index)).toISOString().slice(0, 10));
  assert.deepEqual(data.DAYS.map(day => day.date), dates);
  assert.equal(data.DAYS[0].tasks[0].subject, 'math');
  assert.match(data.DAYS[0].tasks[0].html, /D2/);
  assert.match(data.DAYS[0].tasks[0].html, /a–g/);
  assert.equal(data.DAYS.at(-1).tasks[0].minutes, 40);
});

test('required workload before October is 990 math + 540 Java + 190 pauses', () => {
  assert.ok(data.DAYS, 'calendar available');
  const totals = { math: 0, java: 0, breaks: 0 };
  for (const day of data.DAYS.filter(day => day.date < '2026-10-01' && !day.optional)) {
    totals.breaks += day.breaks;
    for (const task of day.tasks) totals[task.subject] += task.minutes;
    assert.ok(day.tasks.reduce((sum, task) => sum + task.minutes, day.breaks) <= 180);
  }
  assert.deepEqual(totals, { math: 990, java: 540, breaks: 190 });
  assert.equal(Object.values(totals).reduce((a, b) => a + b), 1720);
});

test('Sundays remain optional with no required progress tasks', () => {
  assert.ok(data.DAYS, 'calendar available');
  const sundays = data.DAYS.filter(day => ['2026-09-20', '2026-09-27'].includes(day.date));
  assert.equal(sundays.length, 2);
  for (const day of sundays) {
    assert.equal(day.optional, true);
    assert.equal(day.breaks, 0);
    assert.deepEqual(day.tasks, []);
    assert.match(day.note, /opcional/i);
  }
});

test('tasks have unique stable identities, positive minutes and actionable descriptions', () => {
  assert.ok(data.DAYS, 'calendar available');
  const seen = new Set();
  for (const day of data.DAYS) {
    assert.ok(day.label && day.title && typeof day.note === 'string');
    for (const task of day.tasks) {
      assert.equal(task.id, `${day.date}-${task.subject}`);
      assert.ok(!seen.has(task.id));
      seen.add(task.id);
      assert.ok(['math', 'java'].includes(task.subject));
      assert.ok(task.minutes > 0 && task.title && task.html.length > 100);
    }
  }
});

test('guide inventory preserves 148 main items and five extras with exact source identifiers', () => {
  assert.ok(data.GUIDES, 'guides available');
  const range = (prefix, letters) => [...letters].map(letter => prefix + letter);
  const expected = {
    D2: ['1', ...range('2', 'abcdefgh'), '3', '4', ...range('5', 'abc'), '6', '7'],
    I0: [...range('1', 'abcdefgh'), '2', '3', '4'],
    I1: [...range('1', 'abcdefg'), ...range('2', 'abcdefg'), ...range('3', 'abcdefg'), ...range('4', 'abcd')],
    ID: [...range('1', 'abcdef'), '2', '3', '4', ...range('5', 'abcd'), '6', ...range('7', 'abcdefg'), '8', '9'],
    IM: [...range('1', 'abcdefg'), '2a', '2b', '3a'],
    V2: [...range('1', 'abcdefghij'), '2a', '2b', ...range('3', 'abcde'), '4a', '4b'],
    P0: [...range('1', 'abcdefghijklmnopqr'), '2', '3', '4', '5', '6', '7'],
    D1: [...range('1', 'abcdefgh'), '2', '3', '4', '5', '6', ...range('7', 'abcdef'), '8'],
    A: ['1', '2', '3', '4', '5'],
  };
  assert.deepEqual(data.GUIDES.map(guide => guide.id), Object.keys(expected));
  const seen = new Set();
  for (const guide of data.GUIDES) {
    assert.deepEqual(guide.items.map(item => item.id), expected[guide.id].map(id => `${guide.id}-${id}`));
    assert.equal(guide.count, guide.items.length);
    assert.ok(guide.description && guide.title);
    for (const item of guide.items) {
      assert.ok(!seen.has(item.id));
      seen.add(item.id);
      assert.ok(item.label && item.detail);
    }
  }
  assert.equal(data.GUIDES.filter(guide => guide.id !== 'A').reduce((sum, guide) => sum + guide.count, 0), 148);
  assert.equal(seen.size, 153);
});

test('guide source sections, pages and delayed solutions are explicit', () => {
  assert.ok(data.GUIDES, 'guides available');
  assert.deepEqual(data.GUIDES.map(({ id, section, page }) => [id, section, page]), [
    ['D2', 8, 8], ['I0', 62, 11], ['I1', 17, 12], ['ID', 21, 14], ['IM', 32, 17],
    ['V2', 37, 18], ['P0', 11, 2], ['D1', 5, 5], ['A', 20, 20],
  ]);
  for (const guide of data.GUIDES) {
    assert.ok(Array.isArray(guide.readings));
    assert.ok(guide.readings.every(Number.isInteger));
    assert.ok(guide.solution === null || Number.isInteger(guide.solution));
  }
});

test('all five compact Java sessions retain their drill times', () => {
  assert.ok(data.DAYS, 'calendar available');
  const expected = {
    '2026-09-19': [10, 25, 20, 15],
    '2026-09-21': [20, 20, 20, 35, 15],
    '2026-09-22': [30, 35, 20, 15, 10],
    '2026-09-23': [15, 15, 60, 20],
    '2026-09-24': [20, 70, 30],
  };
  for (const [date, minutes] of Object.entries(expected)) {
    const task = data.DAYS.find(day => day.date === date).tasks.find(task => task.subject === 'java');
    for (const time of minutes) assert.match(task.html, new RegExp(`${time} min`));
    assert.equal(minutes.reduce((a, b) => a + b), task.minutes);
  }
});

test('reference chapters retain all substantive material with hidden diagnostic answers', () => {
  assert.ok(Array.isArray(content.CHAPTERS), 'CHAPTERS must be an array');
  const ids = content.CHAPTERS.map(chapter => chapter.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const id of ['empeza', 'cobertura', 'refuerzo', 'lecturas', 'recorrido', 'java', 'metodo', 'alternativas', 'simulacro', 'erratas', 'pendientes']) assert.ok(ids.includes(id), id);
  const html = content.CHAPTERS.map(chapter => chapter.html).join('\n');
  assert.match(html, /<details[^>]*>[\s\S]*DF1[\s\S]*0,61[\s\S]*2,025[\s\S]*<\/details>/);
  for (let index = 1; index <= 7; index++) assert.match(html, new RegExp(`J${index}`));
  assert.match(html, /120 minutos continuos/);
  assert.match(html, /28–40 horas/);
  assert.match(html, /22\/9 a las 20:00/);
  assert.match(html, /22 y 23/);
});

test('public data contains no machine paths, private audits or executable markup', async () => {
  assert.ok(data.DAYS && data.GUIDES && content.CHAPTERS, 'public data available');
  const text = JSON.stringify([data, content]);
  assert.doesNotMatch(text, /C:[/\\]|file:\/\/|auditoria-[a-z-]+\.md|Key Learnings|<script|onerror=/i);
  const html = [...data.DAYS.flatMap(day => day.tasks.map(task => task.html)), ...content.CHAPTERS.map(chapter => chapter.html)].join('\n');
  for (const match of html.matchAll(/href="(seccion\.html[^\"]+)"/g)) assert.match(match[1], /subject=(analisis-matematico-2|laboratorio-1)&(?:amp;)?id=\d+/);
  for (const match of html.matchAll(/<a[^>]+href="https:\/\/palermo\.blackboard\.com[^\"]*"[^>]*>(.*?)<\/a>/g)) assert.match(match[0], /iniciar sesión|requiere acceso/i);
  const sourceUrls = [
    "https://palermo.blackboard.com/ultra/courses/_96316_1/file/_5725041_1?courseId=_96316_1",
    "https://palermo.blackboard.com/ultra/courses/_96316_1/file/_5725042_1?courseId=_96316_1",
    "https://palermo.blackboard.com/ultra/courses/_96316_1/file/_5725045_1?courseId=_96316_1",
    "https://palermo.blackboard.com/ultra/courses/_95920_1/file/_5651386_1?courseId=_95920_1",
    "https://palermo.blackboard.com/ultra/courses/_95920_1/file/_5651387_1?courseId=_95920_1",
    "https://palermo.blackboard.com/ultra/courses/_95920_1/file/_5651388_1?courseId=_95920_1",
    "https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/",
    "https://www.psychologicalscience.org/journals/psychological-science/0956797615617778/",
    "https://dev.java/learn/generics/wildcards/",
    "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashSet.html",
    "https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html",
    "https://palermo.blackboard.com/ultra/courses/_96316_1/outline",
    "https://palermo.blackboard.com/ultra/courses/_95920_1/outline"
  ];
  for (const url of sourceUrls) assert.ok(html.includes(url.replaceAll('&', '&amp;')) || html.includes(url), `missing source: ${url}`);
});

test('mixed-subject errata route each section to the correct matter', () => {
  const html = content.CHAPTERS.find(chapter => chapter.id === 'erratas').html;
  for (const id of [18, 37, 38]) assert.match(html, new RegExp(`subject=analisis-matematico-2&amp;id=${id}`));
  assert.match(html, /subject=laboratorio-1&amp;id=49/);
  assert.doesNotMatch(html, /subject=laboratorio-1&amp;id=(18|37|38)/);
});

test('reference prose does not promise progress states the checkboxes do not have', () => {
  const html = content.CHAPTERS.find(chapter => chapter.id === 'recorrido').html;
  assert.doesNotMatch(html, /En las listas de este sitio, «Intentado»/);
});
