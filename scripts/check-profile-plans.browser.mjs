// Run against a served Hub: node scripts/check-profile-plans.browser.mjs http://localhost:8000
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const {chromium} = require(process.env.HUB_PLAYWRIGHT_MODULE || 'playwright');
const base = process.argv[2];
if (!base) throw Error('Pass the URL of the Hub to test');

const viewports = [
  ['desktop', 1550, 900],
  ['desktop', 1380, 640],
  ['tablet', 768, 1024],
  ['mobile', 390, 844],
];
const plans = [
  {name: '作品集與職涯方向', duration: 60, price: '免費'},
  {name: 'UX 模擬面試', duration: 45, price: 'NT$ 600'},
];

// Scroll the product page itself. An automatic locator click could silently scroll
// a clipped sidebar into view and hide the regression from this check.
async function revealButton(button) {
  return button.evaluate(async el => {
    const product = el.closest('.xt-product');
    const scrollBox = product.getBoundingClientRect();
    const target = el.getBoundingClientRect();
    product.scrollTop += target.top + target.height / 2 - (scrollBox.top + product.clientHeight * 0.65);
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const box = el.getBoundingClientRect();
    return [box.left + 3, box.right - 3].every(x =>
      [box.top + 3, box.bottom - 3].every(y => el.contains(document.elementFromPoint(x, y))));
  });
}

const browser = await chromium.launch(process.env.HUB_BROWSER_CHANNEL ? {channel: process.env.HUB_BROWSER_CHANNEL} : {});
try {
  for (const [device, width, height] of viewports) {
    const layout = `${device} ${width}×${height}`;
    const page = await browser.newPage({viewport: {width, height}});
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const url = new URL(base);
    url.search = new URLSearchParams({view: 'screens', screen: 'public-profile', scenario: 'default',
      device, mode: 'play', memberRole: 'mentee', person: 'jamie'});
    await page.goto(url.href, {waitUntil: 'domcontentloaded'});
    await page.locator('#loading').waitFor({state: 'hidden'});
    const product = page.frameLocator('#product');
    const rail = product.locator('.xc-public .mp-booking');
    const cards = rail.locator('.xc-plan-card');
    await cards.last().waitFor();
    assert.equal(await cards.count(), plans.length, layout + ': available plans');

    const geometry = await rail.evaluate(aside => {
      const container = aside.querySelector('.xc-plan-rail');
      const lastCard = container.lastElementChild.getBoundingClientRect();
      const bottom = Math.min(aside.getBoundingClientRect().bottom, container.getBoundingClientRect().bottom);
      const product = aside.closest('.xt-product');
      return {
        overflow: [aside, container].map(el => Math.max(0, el.scrollHeight - el.clientHeight)),
        clipped: Math.max(0, lastCard.bottom - bottom),
        horizontalOverflow: product.scrollWidth - product.clientWidth,
      };
    });
    assert.ok(geometry.overflow.every(px => px <= 1), layout + ': nested plan scrolling ' + geometry.overflow);
    assert.ok(geometry.clipped <= 1, layout + ': final card clipped by ' + geometry.clipped + 'px');
    assert.ok(geometry.horizontalOverflow <= 1, layout + ': product overflows horizontally');

    for (const [index, plan] of plans.entries()) {
      const card = cards.nth(index);
      const description = card.locator(':scope > p');
      const duration = card.locator('.xc-plan-kicker');
      const price = card.locator('.xc-plan-price strong');
      assert.ok(await card.getByRole('heading', {name: plan.name, exact: true}).isVisible(), layout + ': plan title');
      assert.ok(await duration.isVisible(), layout + ': hidden duration for ' + plan.name);
      assert.match(await duration.innerText(), new RegExp(plan.duration + '\\s*分鐘'));
      assert.ok(await description.isVisible(), layout + ': hidden description for ' + plan.name);
      const descriptionText = (await description.innerText()).trim();
      assert.ok(descriptionText.length, layout + ': missing description for ' + plan.name);
      assert.ok(await price.isVisible(), layout + ': hidden price for ' + plan.name);
      assert.equal((await price.innerText()).trim(), plan.price);
      const availability = card.locator('.xc-plan-next');
      assert.ok(await availability.isVisible(), layout + ': hidden availability for ' + plan.name);
      assert.match(await availability.innerText(), /\d{1,2}\/\d{1,2}.*\d{1,2}:\d{2}/);
      const button = card.getByRole('button', {name: '選擇方案'});
      assert.ok(await revealButton(button), layout + ': page scroll cannot reveal the entire button for ' + plan.name);
      await button.click();
      const dialog = product.getByRole('dialog', {name: '預約會談'});
      await dialog.waitFor();
      const selected = dialog.locator('.xc-selected-plan');
      assert.equal(await selected.locator('h3').innerText(), plan.name);
      assert.equal(await selected.locator('p').innerText(), descriptionText);
      assert.equal(await selected.locator('strong').innerText(), plan.price);
      assert.ok(await dialog.locator('.xc-calendar').isVisible(), layout + ': calendar for ' + plan.name);
      await page.keyboard.press('Escape');
      await dialog.waitFor({state: 'hidden'});
    }
    assert.deepEqual(errors, [], layout + ': runtime errors');
    console.log(layout + ': complete free and paid cards, page scrolling, both booking dialogs');
    await page.close();
  }
} finally {
  await browser.close();
}
