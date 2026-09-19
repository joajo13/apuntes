// Separate from study-app-state: checking a plan task never marks an apunte read.
export const STORAGE_KEY = 'apuntes-plan-parciales-2026-v1';

export function createProgress(storage, allowedIds) {
  const allowed = new Set(allowedIds);
  let completed = new Set();
  const pending = new Map();
  let persistent = Boolean(storage);
  function readLatest() {
    const raw = storage?.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    try {
      const saved = JSON.parse(raw);
      if (saved?.version === 1 && Array.isArray(saved.completed)) {
        return new Set(saved.completed.filter(id => allowed.has(id)));
      }
    } catch { /* A damaged value must not prevent the next valid save. */ }
    return null;
  }
  try {
    completed = readLatest() ?? completed;
  } catch { persistent = false; }
  return {
    get persistent() { return persistent; },
    has(id) { return completed.has(id); },
    count(ids) { return [...new Set(ids)].filter(id => completed.has(id)).length; },
    set(id, checked) {
      if (!allowed.has(id) || typeof checked !== 'boolean') return;
      pending.set(id, checked);
      if (checked) completed.add(id); else completed.delete(id);
      try {
        if (!storage) throw new Error('Storage unavailable');
        // Reconcile other open tabs rather than overwriting their newer checks.
        completed = readLatest() ?? completed;
        for (const [pendingId, value] of pending) {
          if (value) completed.add(pendingId); else completed.delete(pendingId);
        }
        storage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, completed: [...completed] }));
        pending.clear();
        persistent = true;
      } catch { persistent = false; }
    },
  };
}
