import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { SUBJECTS } from '../js/content.js';
import { DAYS, GUIDES, WORKBOOK } from '../js/plan-data.js';
import { CHAPTERS } from '../js/plan-content.js';

const root = new URL('../', import.meta.url);
const page = readFileSync(new URL('plan-parciales.html', root), 'utf8');
const html = [page, ...DAYS.flatMap(d => d.tasks.map(t => t.html)), ...CHAPTERS.map(c => c.html)].join('\n');
const ids = new Set([...page.matchAll(/id="([^"]+)"/g), ...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));
GUIDES.forEach(g => ids.add('guia-' + g.id));
CHAPTERS.forEach(c => ids.add(c.id));

test('all internal source and workbook links resolve inside the static site', () => {
  const urls = [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1].replaceAll('&amp;', '&'));
  urls.push(WORKBOOK);
  for (const href of urls) {
    if (/^https:/.test(href)) continue;
    assert.ok(!/^\w+:/.test(href), `unexpected protocol: ${href}`);
    if (href.startsWith('#')) { assert.ok(ids.has(href.slice(1)), `missing anchor: ${href}`); continue; }
    const url = new URL(href, 'https://example.test/apuntes/');
    assert.ok(existsSync(new URL(url.pathname.replace('/apuntes/', ''), root)), `missing file: ${href}`);
    if (url.pathname.endsWith('/seccion.html')) {
      const subject = SUBJECTS.find(s => s.id === url.searchParams.get('subject'));
      assert.ok(subject, `missing subject: ${href}`);
      assert.ok(subject.sections.some(s => String(s.id) === url.searchParams.get('id')), `missing section: ${href}`);
    }
  }
});

test('guide exercise, reading and solution sections exist', () => {
  const subject = SUBJECTS.find(s => s.id === 'analisis-matematico-2');
  for (const guide of GUIDES) {
    for (const id of [guide.section, ...guide.readings, guide.solution].filter(id => id !== null)) {
      assert.ok(subject.sections.some(s => String(s.id) === String(id)), `${guide.id}: S${id}`);
    }
  }
});
