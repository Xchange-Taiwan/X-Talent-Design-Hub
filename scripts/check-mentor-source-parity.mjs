// Compare the Hub against the actual mentor prototype checkout, including composed scene lists.
// Usage: node scripts/check-mentor-source-parity.mjs ../sites/xtalent-mentor-742
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../public/',import.meta.url));
const read = name => readFileSync(path.join(root,name),'utf8');
const sourceRoot = process.argv[2] || path.resolve(root,'../../sites/xtalent-mentor-742');
const app = path.resolve(sourceRoot,'app');
const {build} = createRequire(path.join(app,'package.json'))('esbuild');
const compiled = await build({
  stdin:{contents:"export {scenes} from './model'; export {mentorComponents} from './mentor-component-registry';",resolveDir:app},
  bundle:true,write:false,format:'esm',platform:'node',
  alias:{'@':path.join(app,'src')},loader:{'.jpg':'empty','.png':'empty','.webp':'empty'}
});
const {scenes,mentorComponents} = await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].contents).toString('base64'));
const runtime = vm.createContext({window:{}});
for(const [,file] of read('index.html').matchAll(/<script src="([^"?]+)(?:\?[^"]*)?"><\/script>/g)){
  if(!['lucide.min.js','inspector.js','hub.js'].includes(file)) vm.runInContext(read(file),runtime,{filename:file});
}
const {HUB_DATA:hub,MENTOR_SCREENS:routes,hubScreenSource} = runtime.window;
const imported = JSON.parse(read('mentor/source.json'));
const mapped = new Set();
for(const screen of hub.screens){
  for(const [scenario] of screen.scenarios){
    const source = routes[screen.id]?.scenes[scenario] || (screen.module==='identity' && scenario);
    if(!source) continue;
    const evidence = hubScreenSource(screen,scenario);
    assert.equal(new URL(evidence.source).searchParams.get('scene'),source,screen.id+'/'+scenario);
    assert.equal(evidence.commit,imported.sourceCommit);
    assert.ok(evidence.version.startsWith('v'+imported.siteVersion+' · '));
    mapped.add(source);
  }
}
const missing = scenes.map(([scene])=>scene).filter(scene=>!mapped.has(scene));
assert.deepEqual(missing,[],'Source scenarios without a routable Hub entry: '+missing.join(', '));
for(const canonical of mentorComponents){
  const matches = hub.components.filter(c=>c.sourceComponent?.id===canonical.id);
  assert.equal(matches.length,1,'Expected exactly one canonical component for '+canonical.id);
  const [component] = matches;
  assert.deepEqual(structuredClone(component.sourceComponent),canonical,'Incorrect source contract for '+canonical.id);
  assert.ok(component.screens.length && component.selector,'No inspectable Hub example for '+canonical.id);
}
console.log('Compared the prototype source to the Hub: '+scenes.length+' source scenarios and '+mentorComponents.length+' canonical component definitions.');
