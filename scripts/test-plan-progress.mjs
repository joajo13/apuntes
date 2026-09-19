import test from 'node:test';
import assert from 'node:assert/strict';
import { createProgress, STORAGE_KEY } from '../js/plan-progress.js';

function memoryStorage(initial) {
  const values = new Map(initial ? [[STORAGE_KEY, initial]] : []);
  return { getItem: k => values.get(k) ?? null, setItem: (k, v) => values.set(k, v), values };
}
const ids = ['day-math', 'D2-1', 'I0-1a'];

test('new progress starts empty and uses an isolated key', () => {
  const p = createProgress(memoryStorage(), ids);
  assert.equal(p.count(ids), 0);
  assert.notEqual(STORAGE_KEY, 'study-app-state');
  assert.equal(p.persistent, true);
});
test('checking and unchecking survive a new controller / reload', () => {
  const storage = memoryStorage();
  const p = createProgress(storage, ids);
  p.set('D2-1', true);
  assert.equal(createProgress(storage, ids).has('D2-1'), true);
  p.set('D2-1', false);
  assert.equal(createProgress(storage, ids).has('D2-1'), false);
});
test('unknown IDs and non-boolean values cannot inflate progress', () => {
  const storage = memoryStorage(JSON.stringify({ version: 1, completed: ['D2-1', 'bad', 'D2-1', 12] }));
  const p = createProgress(storage, ids);
  assert.equal(p.count(ids), 1);
  p.set('bad', true);
  p.set('I0-1a', 'yes');
  assert.equal(p.count(ids), 1);
});
test('invalid JSON, shape, or version start safely empty', () => {
  for (const value of ['broken', 'null', '[]', '{"version":2,"completed":["D2-1"]}', '{"version":1,"completed":"D2-1"}']) {
    assert.equal(createProgress(memoryStorage(value), ids).count(ids), 0);
  }
});
test('unavailable storage still supports session progress and reports not saved', () => {
  const storage = { getItem() { throw Error('blocked'); }, setItem() { throw Error('quota'); } };
  for (const s of [storage, null]) {
    const p = createProgress(s, ids);
    p.set('D2-1', true);
    assert.equal(p.has('D2-1'), true);
    assert.equal(p.persistent, false);
  }
});
test('quota failure keeps the current check without claiming persistence', () => {
  const p = createProgress({ getItem: () => null, setItem() { throw Error('quota'); } }, ids);
  p.set('day-math', true);
  assert.equal(p.has('day-math'), true);
  assert.equal(p.persistent, false);
});
test('existing subject progress is never modified', () => {
  const s = memoryStorage();
  s.setItem('study-app-state', '{"subjects":{"math":"untouched"}}');
  createProgress(s, ids).set('D2-1', true);
  assert.equal(s.getItem('study-app-state'), '{"subjects":{"math":"untouched"}}');
});

test('two open tabs preserve unrelated checks and do not resurrect unchecked items', () => {
  const s = memoryStorage();
  const a = createProgress(s, ids);
  const b = createProgress(s, ids);
  a.set('D2-1', true);
  b.set('I0-1a', true);
  assert.equal(createProgress(s, ids).count(ids), 2);
  a.set('D2-1', false);
  b.set('day-math', true);
  const reloaded = createProgress(s, ids);
  assert.equal(reloaded.has('D2-1'), false);
  assert.equal(reloaded.count(ids), 2);
});
test('recovering storage merges both pending local changes and another tab updates', () => {
  const s = memoryStorage();
  const normalWrite = s.setItem;
  const a = createProgress(s, ids);
  const b = createProgress(s, ids);
  s.setItem = () => { throw Error('temporary quota'); };
  a.set('D2-1', true);
  s.setItem = normalWrite;
  b.set('I0-1a', true);
  a.set('day-math', true);
  assert.equal(a.persistent, true);
  assert.equal(createProgress(s, ids).count(ids), 3);
});
