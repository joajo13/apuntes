import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const read = p => readFileSync(new URL('../' + p, import.meta.url), 'utf8');

test('plan has entry points on home and only intended subject pages', () => {
  assert.match(read('index.html'), /href="plan-parciales.html"/);
  assert.match(read('materia.html'), /id="materia-plan"/);
  const js = read('js/materia.js');
  assert.match(js, /\['analisis-matematico-2', 'laboratorio-1'\]/);
  assert.match(js, /href="plan-parciales.html"/);
  assert.match(js, /href="parciales.html\?subject=/);
});
test('plan has accessible landmarks and isolated styles / module', () => {
  const html = read('plan-parciales.html');
  for (const id of ['cronograma', 'ejercitacion', 'manual', 'save-status']) assert.ok(html.includes(`id="${id}"`));
  assert.match(html, /lang="es"/);
  assert.match(html, /css\/plan-parciales.css/);
  assert.match(html, /js\/plan-parciales.js/);
  assert.match(read('js/plan-parciales.js'), /createProgress/);
  assert.match(read('css/plan-parciales.css'), /prefers-reduced-motion/);
});
test('public workbook is a real PDF and site has no local drive links', () => {
  const path = new URL('../pdfs/planes/cuadernillo-analisis-parcial-2026-10-01.pdf', import.meta.url);
  assert.ok(existsSync(path));
  assert.equal(readFileSync(path).subarray(0, 5).toString(), '%PDF-');
  for (const file of ['plan-parciales.html', 'js/plan-parciales.js']) assert.doesNotMatch(read(file), /[A-Z]:[\\/]|file:\/\//);
});

test('anchor targets clear the shared sticky masthead (58px at desktop)', () => {
  const margins = [...read('css/plan-parciales.css').matchAll(/scroll-margin-top:\s*(\d+)px/g)].map(m => Number(m[1]));
  assert.equal(margins.length, 3);
  assert.ok(margins.every(value => value >= 80));
});
