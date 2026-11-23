// Run against a served Hub, for example: node scripts/check-account-entrypoints.browser.mjs http://localhost:8000
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.HUB_PLAYWRIGHT_MODULE||'playwright');
const base=process.argv[2];
if(!base)throw Error('Pass the URL of the Hub to test');
const browser=await chromium.launch(process.env.HUB_BROWSER_CHANNEL?{channel:process.env.HUB_BROWSER_CHANNEL}:{});
const layouts={desktop:[1580,960],tablet:[768,1024],mobile:[390,844]};
try {
  for(const [device,[width,height]] of Object.entries(layouts)){
    const page=await browser.newPage({viewport:{width,height}});
    const errors=[];page.on('pageerror',error=>errors.push(error.message));
    const product=page.frameLocator('#product');
    const trigger=product.getByRole('button',{name:/帳號選單，目前身分/});
    const menu=product.locator('.identity-menu:visible');
    const role=()=>menu.locator('.identity-options').getAttribute('data-active');
    async function visit(screen,scenario='default'){
      const url=new URL(base);url.search=new URLSearchParams({screen,scenario,device});
      await page.goto(url.href,{waitUntil:'domcontentloaded'});
      await page.locator('#loading').waitFor({state:'hidden'});
    }
    // Start from the ordinary directory, exactly as someone selecting it in the sidebar would.
    await visit('mentor-search');
    await trigger.click();assert.equal(await role(),'mentee');
    await menu.getByRole('button',{name:'切換為導師'}).click();
    await menu.getByRole('button',{name:'導師管理後台'}).waitFor();
    assert.equal(await role(),'mentor');
    assert.equal(new URL(page.url()).searchParams.get('screen'),'mentor-search');
    await menu.getByRole('button',{name:'導師管理後台'}).click();
    await product.locator('.identity-header[data-role=mentor]').waitFor();
    await trigger.click();await menu.getByRole('button',{name:'切換為學員'}).click();
    await menu.getByRole('button',{name:'切換為導師'}).waitFor();
    for(const [id,scenario] of [['favorites','default'],['chat','list'],['mentee-growth','growth'],['home','mentee-cta'],['mentor-reservations','history'],['mentee-reservations','history']]){
      await visit(id,scenario);await trigger.click();
      await menu.getByRole('heading',{name:'身分切換'}).waitFor();
      const box=await menu.boundingBox();assert.ok(box.x>=0 && box.x+box.width<=width+1,id+' account menu outside viewport');
    }
    await visit('mentor-search','guest');await product.getByRole('button',{name:'登入',exact:true}).waitFor();assert.equal(await trigger.count(),0);
    assert.deepEqual(errors,[],device+' runtime exceptions');
    console.log(device+': directory, account switch, workspace, saved mentors, chat, growth, reservations, guest.');
    await page.close();
  }
} finally {await browser.close();}
