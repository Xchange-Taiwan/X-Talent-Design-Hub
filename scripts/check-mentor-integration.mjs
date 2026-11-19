import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync, existsSync} from 'node:fs';
import vm from 'node:vm';

const root = new URL('../public/',import.meta.url);
const read = path => readFileSync(new URL(path,root));
const context = vm.createContext({window:{}});
for (const file of ['registry.js','frontend-registry.js','component-map.js','chat-registry.js']) {
  vm.runInContext(read(file).toString(),context);
}
const data = context.window.HUB_DATA;
const original = structuredClone(data.screens);
vm.runInContext(read('mentor/registry.js').toString(),context);
const routes = context.window.MENTOR_SCREENS;
assert.deepEqual(data.screens.map(s=>s.id).join(),original.map(s=>s.id).join());
for (const screen of original) {
  const current = data.screens.find(s=>s.id===screen.id);
  assert.equal(current.module,screen.module);
  assert.equal(current.route,screen.route);
  for(const [key,label] of screen.scenarios)assert.equal(current.scenarios.find(([k])=>k===key)?.[1],label);
  if(!routes[screen.id])assert.deepEqual(JSON.parse(JSON.stringify(current)),screen);
}
for(const [id,entry] of Object.entries(routes)){
  const screen=data.screens.find(s=>s.id===id);
  for(const key of Object.keys(entry.scenes)){
    assert.equal(screen.scenarios.filter(([v])=>v===key).length,1);
    const page=context.window.mentorEntryPath(id,key)+'index.html';
    assert.ok(existsSync(new URL(page,root)),page);
  }
  assert.equal(entry.ticket,entry.role==='mentee'?'#828':'#830');
}
assert.equal(routes['mentor-form'].scenes['owner-edit'],'owner-edit');
assert.equal(routes['mentee-edit'].scenes.default,'mentee-edit');
assert.deepEqual(Object.keys(routes['mentor-calendar'].scenes),['owner-return']);
assert.equal(routes['mentor-calendar'].sourceScreen,'public-profile');
assert.equal(routes['public-profile'],undefined);
const {hashes} = JSON.parse(read('mentor/source.json'));
for(const [file,expected] of Object.entries(hashes))assert.equal(createHash('sha256').update(read('mentor/'+file)).digest('hex'),expected);
console.log('Mentor integration passed: unique routes, role contracts, legacy scenarios and imported assets.');

// Welcome hands off to the original calendar and its lazy-loaded modules.
const checked = new Set();
function checkImports(filename) {
  if(checked.has(filename))return;
  checked.add(filename);
  const bundle=read('frontend/'+filename).toString();
  for(const match of bundle.matchAll(/(?:from\s*|import\s*(?:\(\s*)?)["']\.\/([^"']+\.js)["']/g)){
    checkImports(match[1]);
  }
}
checkImports('app.js');
console.log('Original frontend import graph resolved ('+checked.size+' modules).');
