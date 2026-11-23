// Compile the same reviewed header and animated control used by the mentor site.
// Supply a checkout with dependencies installed and the commit pinned by mentor/source.json.
import {execFileSync} from 'node:child_process';
import {readFileSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
const repo=fileURLToPath(new URL('../',import.meta.url));
if(!process.argv[2])throw Error('Pass the mentor prototype checkout as the first argument');
const source=path.resolve(process.argv[2]);
const app=path.join(source,'app');
const require=createRequire(path.join(app,'build.cjs'));
const {sourceCommit}=JSON.parse(readFileSync(path.join(repo,'public/mentor/source.json')));
const read=file=>execFileSync('git',['-C',source,'show',sourceCommit+':app/'+file],{encoding:'utf8',maxBuffer:8e6});
const stylesheet=require('postcss').parse(readFileSync(path.join(repo,'public/mentor/app.css'),'utf8'));
const headerSelectors=/identity-|\.xt-topbar|\.xt-logo|\.fr-icon\b|\.fr-header-actions|\.fr-message-entry|\.xm-account-menu|\.xt-member-card__badge|^#xt742$|^:root$|^\.sr-only$/;
stylesheet.walkRules(rule=>{
  if(rule.parent.type==='atrule' && rule.parent.name.includes('keyframes'))return;
  rule.selectors=rule.selectors.filter(s=>headerSelectors.test(s));
  if(!rule.selector){rule.remove();return;}
  rule.selector=rule.selector.replaceAll('body[data-xt-device]','.header-device').replaceAll(':root',':host');
});
stylesheet.walkAtRules(at=>{
  if(at.name.includes('keyframes')&&!at.params.includes('identity')||at.nodes?.length===0||at.name==='font-face')at.remove();
});
const css=readFileSync(path.join(repo,'scripts/account-header/base.css'),'utf8')+'\n'+stylesheet.toString()+ '\n'+readFileSync(path.join(repo,'scripts/account-header/host.css'),'utf8');
let header=read('MentorHeader.tsx');
function replace(before,after){if(!header.includes(before))throw Error('Header source changed at '+before);header=header.replace(before,after);}
replace("import './identity.css';",'');
replace('}).finished;', "}).finished.catch(error=>{if(error.name!=='AbortError')throw error;});");
replace('if(thumb.current) onSettled?.(current);','onSettled?.(requested.current);');
replace('function IdentitySwitch({role, onSwitch}', 'function IdentitySwitch({role, onSwitch, onSettled}');
replace('<IdentityTrack role={role} onSwitch={onSwitch}/>','<IdentityTrack role={role} onSwitch={onSwitch} onSettled={onSettled}/>');
replace('const header = useRef','useEffect(()=>{if(p.openRequest)setOpen(true);},[p.openRequest]);\n  const header = useRef');
replace('<a href="https://x-talent-design-hub.x-talent.workers.dev/" target="_blank" rel="noreferrer">','<a href="/" onClick={e=>{e.preventDefault();p.onHome();}}>');
header=header.replaceAll('href="https://xtalent-chat-654.bonny80.chatgpt.site/?scene=list"','href="?screen=chat" onClick={e=>{e.preventDefault();act(p.onChat);}}');
replace('aria-label="站內聊聊"><MessageSquare size={20}/>', 'aria-label={"站內聊聊"+(p.chatCount?"，"+p.chatCount+" 則未讀":"")} aria-current={p.chatActive?"page":undefined}><MessageSquare size={20}/>{p.chatCount>0&&<small className="inbox-count">{p.chatCount>99?"99+":p.chatCount}</small>}');
replace('<a href={aboutUrl} target="_blank" rel="noreferrer">','<a href={aboutUrl} onClick={e=>{e.preventDefault();act(p.onAbout);}}>');
replace('aria-label="通知" onClick','aria-label="通知" aria-expanded={p.noticeOpen} onClick');
replace('</nav>\n        {!p.guest&&<IdentitySwitch','{p.extraItems}</nav>\n        {!p.guest&&<IdentitySwitch');
replace('onSwitch={p.onSwitch}/>', 'onSwitch={p.onSwitch} onSettled={p.onSwitchSettled}/>');
const plugins=[{name:'approved-header',setup(b){
  b.onResolve({filter:/^mentor-header-source$/},()=>({path:'header',namespace:'source'}));
  b.onLoad({filter:/.*/,namespace:'source'},()=>({contents:header,loader:'tsx',resolveDir:app}));
  b.onResolve({filter:/^account-header-styles$/},()=>({path:'styles',namespace:'header-css'}));
  b.onLoad({filter:/.*/,namespace:'header-css'},()=>({contents:css,loader:'text'}));
  // Keep the real Radix popover in the same shadow tree as its trigger and styles.
  b.onLoad({filter:/\/components\/ui\/popover\.tsx$/},()=>({contents:read('src/components/ui/popover.tsx').replaceAll('PopoverPrimitive.Portal','React.Fragment'),loader:'tsx',resolveDir:path.join(app,'src/components/ui')}));
}}];
const built=await require('esbuild').build({entryPoints:[path.join(repo,'scripts/account-header/entry.tsx')],bundle:true,format:'iife',minify:true,write:false,
  nodePaths:[path.join(app,'node_modules')],jsx:'automatic',alias:{'@':path.join(app,'src'),react:path.join(app,'node_modules/react'),'react-dom':path.join(app,'node_modules/react-dom'),'lucide-react':path.join(app,'node_modules/lucide-react')},define:{'process.env.NODE_ENV':'"production"'},plugins});
writeFileSync(path.join(repo,'public/shared/account-header.js'),built.outputFiles[0].contents);
