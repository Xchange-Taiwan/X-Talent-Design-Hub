// Run against a served Design Hub. Optional arguments select a device and screen IDs.
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium} = createRequire(import.meta.url)(process.env.HUB_PLAYWRIGHT_MODULE || 'playwright');
const [base, device = 'desktop', ...only] = process.argv.slice(2);
if (!base) throw Error('Pass a running Design Hub URL');
const viewport = {desktop:{width:1550,height:960}, tablet:{width:768,height:1024}, mobile:{width:390,height:844}}[device];
assert.ok(viewport, 'Unsupported device');
const browser = await chromium.launch(process.env.HUB_BROWSER_CHANNEL ? {channel:process.env.HUB_BROWSER_CHANNEL} : {});
const failures = [];
let checked = 0, targeted = 0;
try {
  const page = await browser.newPage();
  await page.goto(base,{waitUntil:'domcontentloaded'});
  const fixtures = await page.evaluate(() => HUB_DATA.screens.flatMap(s => s.scenarios.map(([scenario]) => ({screen:s.id,scenario}))));
  const todo = only.length ? fixtures.filter(entry => only.includes(entry.screen)) : fixtures;
  await page.close();
  await Promise.all(Array.from({length:1}, async () => {
    const context = await browser.newContext({viewport});
    const page = await context.newPage();
    // Keep local fixture assets cached across scenarios. Skip remote fonts and analytics.
    const network=await context.newCDPSession(page);
    await network.send('Network.enable');
    await network.send('Network.setBlockedURLs',{urls:['*fonts.googleapis.com*','*fonts.gstatic.com*','*googletagmanager.com*']});
    const url=new URL(base);url.search=new URLSearchParams({device});
    await page.goto(url.href,{waitUntil:'domcontentloaded'});
    await page.locator('#loading').waitFor({state:'hidden'});
    let warnings = [];
    page.on('console', event => { if (event.text().includes('Design Hub entry target unavailable')) warnings.push(event.text()); });
    page.on('pageerror', error => warnings.push(error.message));
    while (todo.length) {
      const entry = todo.shift();
      warnings = [];
      try {
        await page.evaluate(({screen,scenario})=>{
          const select=document.querySelector('#scenario');
          if(new URL(location.href).searchParams.get('screen')!==screen){
            document.querySelector('#screen-list button[data-screen="'+screen+'"]').click();
            if(select.value===scenario)return;
          }
          select.value=scenario;
          select.dispatchEvent(new Event('change',{bubbles:true}));
        },entry);
        await page.locator('#loading').waitFor({state:'hidden', timeout:45000});
        const state = await page.evaluate(entry => {
          const iframe = document.querySelector('#product'), doc = iframe.contentDocument;
          const explicit = window.hubScenarioDestination(entry.screen,entry.scenario) || entry;
          if (explicit.screen==='mentor-calendar' && ['empty','schedule'].includes(explicit.scenario))
            Object.assign(explicit,{screen:'mentor-plans',scenario:explicit.scenario==='empty'?'plan-schedule-empty':'plan-schedule'});
          const source = new URL(iframe.src);
          const module = source.pathname.startsWith('/mentor/') ? 'mentor' : source.searchParams.get('module');
          const rule = window.hubEntryRule(module,{...explicit,doc});
          const target = rule && (typeof rule.target === 'function' ? rule.target(doc) : doc.querySelector(rule.target));
          function inView(el) {
            const box = el.getBoundingClientRect();
            let top=0, bottom=doc.defaultView.innerHeight;
            for(let parent=el.parentElement;parent;parent=parent.parentElement){
              if(/^(auto|scroll|hidden|clip)$/.test(doc.defaultView.getComputedStyle(parent).overflowY)){
                const bounds=parent.getBoundingClientRect();top=Math.max(top,bounds.top);bottom=Math.min(bottom,bounds.bottom);
              }
            }
            return box.height>0 && box.width>0 && Math.min(box.bottom,bottom)>Math.max(box.top,top);
          }
          return {named:!!rule, visible:!!target && inView(target), rendered:!!doc.body?.innerText.trim(),
            overflow:doc.documentElement.scrollWidth-doc.documentElement.clientWidth};
        },entry);
        if (state.named) targeted++;
        assert.ok(state.rendered,'empty product');
        assert.ok(!state.named || state.visible,'feature outside visible canvas');
        assert.ok(state.overflow<=2,'horizontal overflow '+state.overflow+'px');
        assert.deepEqual(warnings,[]);
      } catch (error) {
        const frameState=await page.evaluate(()=>{const f=document.querySelector('#product');return f?.contentDocument?.URL+' '+f?.contentDocument?.readyState;}).catch(()=>'');
        failures.push(entry.screen+'/'+entry.scenario+' — '+error.message.split('\n').slice(0,8).join(' ')+' '+frameState+(warnings.length?' '+warnings.join(' '):''));
        console.error(failures.at(-1));
      }
      checked++;
    }
    await context.close();
  }));
} finally {await browser.close();}
console.log(device+' — '+checked+' scenarios, '+targeted+' with feature targets, '+failures.length+' failures');
if(failures.length) process.exitCode=1;
