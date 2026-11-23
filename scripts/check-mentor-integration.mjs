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
const flows={'mentor-growth':'#746','mentor-bookings':'#842','mentor-plans':'#837','mentor-income':'#843','booking-payment':'#841','team-support':'#829','feedback-tip':'#834'};
assert.deepEqual(data.screens.map(s=>s.id).join(),[...original.map(s=>s.id),...Object.keys(flows),'mentor-audit','mentor-components'].join());
assert.equal(new Set(data.screens.map(s=>s.id)).size,data.screens.length);
for (const screen of original) {
  const current = data.screens.find(s=>s.id===screen.id);
  assert.equal(current.module,screen.module);
  assert.equal(current.route,screen.route);
  for(const [key,label] of screen.scenarios)assert.equal(current.scenarios.find(([k])=>k===key)?.[1],label);
  if(!routes[screen.id])assert.deepEqual(JSON.parse(JSON.stringify(current)),screen);
}
// Links saved before #839 / #890 must open the same directory and account menu as the new scenarios.
const directory=routes['mentor-search'];
for (const [legacy,source] of Object.entries({default:'mentor-search',guest:'mentor-search',menu:'mentor-search',empty:'mentor-search-empty','no-ratings':'mentor-search'})) {
  assert.equal(directory.scenes[legacy],source,'Stale directory entry: '+legacy);
}
for(const scenario of ['default','one','empty-favorites'])assert.equal(routes.favorites.scenes[scenario],'mentor-search');
assert.equal(routes.favorites.marker,'main.p2-favorites');
const nativeTickets={favorites:'#753',history:'#834','mentor-reservations':'#842','mentee-reservations':'#834','mentor-search':'#839','mentor-audit':'#742','mentor-components':'#742'};
for(const [id,entry] of Object.entries(routes)){
  const screen=data.screens.find(s=>s.id===id);
  for(const key of Object.keys(entry.scenes)){
    assert.equal(screen.scenarios.filter(([v])=>v===key).length,1);
    const page=context.window.mentorEntryPath(id,key)+'index.html';
    assert.ok(existsSync(new URL(page,root)),page);
  }
  assert.equal(entry.ticket,flows[id]??nativeTickets[id]??(id==='public-profile'?'#840':entry.role==='mentee'?'#828':'#830'));
}
for (const [role,page] of [['mentor','bookings'],['mentee','mentee-bookings']]) {
  const entry=routes[role+'-reservations'];
  assert.equal(entry.bookingPage,page);
  const scenarios=original.find(s=>s.id===role+'-reservations').scenarios;
  for(const [key] of scenarios)assert.ok(entry.scenes[key],role+' booking alias missing its native state: '+key);
}
assert.equal(routes.history.scenes.default,'mentee-history');
for(const key of ['form','rating','failure'])assert.equal(routes.history.scenes[key],undefined,'Keep the specific #730 diagnostic fixture');
for(const scene of ['mentee-history','tip-feedback','tip-feedback-paid','tip-checkout','tip-success']){
  assert.equal(routes['feedback-tip'].scenes[scene],scene);
}
assert.equal(routes['mentor-form'].scenes['owner-edit'],'owner-edit');
for(const [key,source] of Object.entries({'name-edit':'owner-edit','service-open':'complete','work-filled':'complete','education-filled':'complete'})){
  assert.equal(routes['mentor-form'].scenes[key],source);
  const page=context.window.mentorEntryPath('mentor-form',key)+'index.html';
  assert.match(read(page).toString(),/legacy-states\.js/);
}
assert.equal(context.window.hubScenarioDestination('mentor-welcome','personal-profile').screen,'mentor-calendar');
assert.equal(context.window.hubScenarioDestination('mentor-welcome','booking-settings').scenario,'plan-schedule');
assert.equal(routes['mentee-edit'].scenes.default,'mentee-edit');
assert.equal(routes['mentor-calendar'].scenes.owner,'owner-filled');
assert.equal(data.screens.find(s=>s.id==='mentor-calendar').name,'我的導師頁面');
assert.equal(routes['mentor-plans'].scenes['plan-schedule'],'plan-schedule');
assert.equal(routes['mentor-calendar'].sourceScreen,'public-profile');
assert.equal(routes['public-profile'].scenes.default,'public-plans');
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
