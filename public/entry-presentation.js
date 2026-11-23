// Each fixture may name the control, section or dialog that the Hub promises to show.
// Scroll the embedded product only. Keep the Hub toolbar and directory in place.
(() => {
  function scrollParents(target) {
    const doc = target.ownerDocument;
    const parents = [];
    const parentOf = el => el.parentElement || el.getRootNode().host;
    for (let el = parentOf(target); el; el = parentOf(el)) {
      if (el === doc.scrollingElement) break;
      const overflow = doc.defaultView.getComputedStyle(el).overflowY;
      if (/^(auto|scroll|overlay)$/.test(overflow) && el.scrollHeight > el.clientHeight) parents.push(el);
    }
    if (doc.scrollingElement.scrollHeight > doc.documentElement.clientHeight) parents.push(doc.scrollingElement);
    return parents;
  }

  function reveal(target, block = 'nearest') {
    const doc = target.ownerDocument;
    const win = doc.defaultView;
    for (const scroller of scrollParents(target)) {
      const box = target.getBoundingClientRect();
      const root = scroller === doc.scrollingElement;
      const edge = root ? 0 : scroller.getBoundingClientRect().top + scroller.clientTop;
      const height = root ? win.innerHeight : scroller.clientHeight;
      // Sticky product headers can cover targets that are geometrically in view.
      let top = edge + 8;
      if (edge >= 0 && edge < win.innerHeight) {
        const x = Math.max(0, Math.min(win.innerWidth - 1, box.left + box.width / 2));
        for (let el = doc.elementFromPoint(x, edge + 1); el && el !== scroller; el = el.parentElement) {
          if (!el.contains(target) && ['fixed','sticky'].includes(win.getComputedStyle(el).position)) {
            const bottom = el.getBoundingClientRect().bottom;
            if (bottom < edge + height / 2) top = Math.max(top, bottom + 8);
          }
        }
      }
      const bottom = edge + height - 8;
      let delta = 0;
      if (block === 'start' || box.height >= bottom - top) delta = box.top - top;
      else if (block === 'center') delta = (box.top + box.bottom - top - bottom) / 2;
      else if (box.top < top) delta = box.top - top;
      else if (box.bottom > bottom) delta = box.bottom - bottom;
      if (Math.abs(delta) > 1) scroller.scrollBy({top: delta, behavior: 'instant'});
    }
  }

  window.hubEntryRule = function(module, entry) {
    if (module === 'mentor') return window.hubMentorEntry(entry);
    if (['chat','730','740'].includes(module)) return window.hubChatFeedbackEntry(entry);
    return window.hubLegacyEntry(entry);
  };

  window.presentHubEntry = function(frame, module, entry, done) {
    const doc = frame.contentDocument;
    const rule = window.hubEntryRule(module, {...entry, doc});
    if (!rule) { done(); return () => {}; }
    const controller = new AbortController();
    let timer, prepared = false;
    const deadline = performance.now() + 6500;
    function stop() {
      if (controller.signal.aborted) return;
      controller.abort();
      clearTimeout(timer);
      done();
    }
    for (const type of ['pointerdown','keydown','wheel','touchstart']) {
      doc.addEventListener(type, event => { if (event.isTrusted) stop(); },
        {capture:true, passive:true, signal:controller.signal});
    }
    function advance() {
      if (controller.signal.aborted || frame.contentDocument !== doc) { stop(); return; }
      if (!prepared) prepared = !rule.prepare || rule.prepare(doc);
      const target = prepared && (typeof rule.target === 'function' ? rule.target(doc) : doc.querySelector(rule.target));
      if (target && target.getClientRects().length && doc.defaultView.getComputedStyle(target).visibility !== 'hidden') {
        reveal(target, rule.block);
        stop();
      } else if (performance.now() < deadline) {
        timer = setTimeout(advance, 50);
      } else {
        console.warn('Design Hub entry target unavailable:', entry.screen, entry.scenario);
        stop();
      }
    }
    // Let the product apply its requested breakpoint and mount portals first.
    timer = setTimeout(advance, 35);
    return stop;
  };
})();
