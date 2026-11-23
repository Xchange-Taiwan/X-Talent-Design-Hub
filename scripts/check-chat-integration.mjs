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
  let source = fs.readFileSync(path.join(root,'chat',file));
  if (file === 'app.js') {
    const code = source.toString();
    const hooks = /^[ \t]*\/\* HUB_ACCOUNT_START \*\/[\s\S]*?\/\* HUB_ACCOUNT_END \*\/\n/gm;
    assert.equal(Array.from(code.matchAll(hooks)).length, 4, 'The chat adapter has four explicit integration points');
    source = Buffer.from(code.replace(hooks,''));
  }
  const actual = crypto.createHash('sha256').update(source).digest('hex');
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

for(const role of ['mentor','mentee']){const screen=data.screens.find(s=>s.id===role+'-reservations');assert.equal(screen.module,'chat');assert.equal(screen.chatRole,role);assert.ok(screen.tickets.includes('847'));}
assert.ok(hub.includes("p.chatRole?'booking-'+p.chatRole"));
console.log('Both legacy booking entry points retain URLs and use the shared #847 role-aware cards.');
