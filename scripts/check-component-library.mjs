// Check the catalog the same way the Hub loads it, including Storybook deep links.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const root=new URL('../public/',import.meta.url);
const read=file=>readFileSync(new URL(file,root),'utf8');
const context=vm.createContext({window:{}});
for(const [,path] of read('index.html').matchAll(/<script src="([^"?]+)(?:\?[^"]*)?"><\/script>/g)){
  if (['lucide.min.js','hub.js','inspector.js'].includes(path)) continue;
  vm.runInContext(read(path),context,{filename:path});
}
const {HUB_DATA:data,HUB_COMPONENT_MAP:map,MENTOR_REFERENCES:references}=context.window;
const baseline=JSON.parse(read('storybook-baseline.json'));
const stories=new Set(baseline.stories.map(s=>s.id));
const ids=xs=>xs.map(x=>x.id);
for(const xs of [data.screens,data.components,data.tickets]) assert.equal(new Set(ids(xs)).size,xs.length);
for(const screen of data.screens){
  assert.ok(screen.components.length,screen.id+' has no catalog');
  assert.equal(new Set(screen.components).size,screen.components.length);
  for(const ticket of screen.tickets)assert.ok(data.tickets.some(t=>t.id===ticket),screen.id+' #'+ticket);
  for(const id of screen.components)assert.ok(data.components.some(c=>c.id===id&&c.screens.includes(screen.id)),screen.id+'/'+id);
}
for (const reference of Object.values(references)) {
  assert.ok(!data.screens.some(s=>s.id===reference.id),reference.id+' must be a library reference');
  assert.ok(reference.componentIds.length,reference.id+' has no examples');
  assert.equal(new Set(reference.componentIds).size,reference.componentIds.length);
  for (const id of reference.componentIds) assert.ok(data.components.some(c=>c.id===id),reference.id+'/'+id);
}
for(const c of data.components){
  assert.ok(c.rules.length,c.id+' has no specification');
  if (c.referenceId) assert.ok(references[c.referenceId]?.componentIds.includes(c.id),c.id+' has no matching reference');
  assert.ok(c.screens.length || c.referenceId,c.id+' has no screen or design reference');
  for(const id of Object.keys(c.examples||{})) assert.ok(c.screens.includes(id),c.id+' example is not product usage: '+id);
  for(const id of c.screens){
    const screen=data.screens.find(s=>s.id===id);
    assert.ok(screen?.components.includes(c.id),c.id+'/'+id);
    const example=c.examples?.[id];
    if(example)assert.ok(screen.scenarios.some(([key])=>key===example),c.id+'/'+example);
  }
  assert.ok(map.existing[c.id]||map.newDesigns[c.id],c.id);
}
for (const id of ['avatar-policy','gallery-question-type']) {
  const example=data.components.find(c=>c.id===id);
  assert.equal(example.referenceId,'mentor-components',id);
  assert.equal(example.screens.length,0,id+' is a gallery-only comparison');
}
const release=JSON.parse(read('mentor/source.json'));
assert.equal(context.window.MENTOR_RELEASE.version,release.siteVersion);
assert.equal(context.window.MENTOR_RELEASE.commit,release.sourceCommit);
for(const screen of data.screens){
  for(const [key] of screen.scenarios){
    const source=context.window.hubScreenSource(screen,key);
    assert.ok(source.source && source.version && source.date,screen.id+'/'+key);
    if(source.mentorScene){
      assert.equal(new URL(source.source).searchParams.get('scene'),source.mentorScene);
      assert.equal(source.commit,release.sourceCommit);
    }
  }
}
for(const item of [...Object.values(map.existing),...Object.values(map.newDesigns).flatMap(c=>c.reuse)]){
  assert.ok(stories.has(new URL(item.url).searchParams.get('path')?.split('/').pop()),item.url);
}
for(const id of ['hold-countdown','order-summary','payment-method','receipt-email']){
  assert.ok(data.screens.find(s=>s.id==='booking-payment').components.includes(id),id);
}
console.log(data.screens.length+' screens, '+data.components.length+' components; bidirectional usage, scenarios and Storybook references verified.');
