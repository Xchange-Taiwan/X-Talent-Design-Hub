import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import path from 'node:path';

const root = path.resolve(process.argv[2] || 'public');
const context = vm.createContext({ window: {}, console });
for (const file of ['registry.js', 'frontend-registry.js', 'component-map.js', 'chat-registry.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
}
const data = context.window.HUB_DATA;
const chat = data.screens.filter(s => s.id === 'chat');
assert.equal(chat.length, 1, 'Chat must have one registered screen');
assert.equal(chat[0].scenarios.length, 60);
assert.equal(new Set(chat[0].scenarios.map(([id]) => id)).size, 60);
for (const id of chat[0].components) {
  assert.equal(data.components.filter(c => c.id === id).length, 1);
  assert.ok(context.window.HUB_COMPONENT_MAP.newDesigns[id]);
}
const provenance = JSON.parse(fs.readFileSync(path.join(root, 'chat/integration.json')));
for (const [file, hash] of Object.entries(provenance.sourceFiles)) {
  const actual = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, 'chat', file))).digest('hex');
  assert.equal(actual, hash, `Approved source differs: ${file}`);
}
const preview = fs.readFileSync(path.join(root, 'chat/preview.html'), 'utf8');
assert.equal((preview.match(/hub-bridge\.js/g) || []).length, 1);
for (const match of preview.matchAll(/(?:src|href)="(\.\/[^"?]+)(?:\?[^" ]*)?"/g)) {
  assert.ok(fs.existsSync(path.resolve(root, 'chat', match[1])), `Missing asset: ${match[1]}`);
}
const hub = fs.readFileSync(path.join(root, 'hub.js'), 'utf8');
assert.equal((hub.match(/if\(p\.module==='chat'\)/g) || []).length, 1);
assert.equal((hub.match(/doc\.addEventListener\('click'/g) || []).length, 1);
console.log('Chat integration: 60 unique scenarios, component registration, approved source hashes and local entry assets verified.');
