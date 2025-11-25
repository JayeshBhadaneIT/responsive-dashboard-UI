document.addEventListener('DOMContentLoaded', () => {

  const q = (s, c = document) => c.querySelector(s);
  const qa = (s, c = document) => Array.from(c.querySelectorAll(s));

  const ham = q('#hamburger');
  const nav = q('#slideNav');
  const ovl = q('#overlay');
  const navClose = q('#closeNav');

  function openNav() {
    nav.classList.add('open');
    ovl.classList.add('show');
    nav.setAttribute('aria-hidden', 'false');
    ovl.setAttribute('aria-hidden', 'false');
    ham.setAttribute('aria-expanded', 'true');
    const f = nav.querySelector('.nav-list-btn');
    if (f) f.focus();
  }

  function closeNav() {
    nav.classList.remove('open');
    ovl.classList.remove('show');
    nav.setAttribute('aria-hidden', 'true');
    ovl.setAttribute('aria-hidden', 'true');
    ham.setAttribute('aria-expanded', 'false');
    ham.focus();
  }

  if (ham) ham.addEventListener('click', () => {
    ham.getAttribute('aria-expanded') === 'true' ? closeNav() : openNav();
  });

  if (navClose) navClose.addEventListener('click', closeNav);
  if (ovl) ovl.addEventListener('click', closeNav);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeNav();
      hidePopups();
    }
  });

  const sBtn = q('#searchBtn');
  const nBtn = q('#notifBtn');
  const pBtn = q('#profileBtn');

  const sPn = q('#searchPanel');
  const nPn = q('#notifPanel');
  const pPn = q('#profilePanel');

  const pBtns = [sBtn, nBtn, pBtn].filter(Boolean);
  const pPns = [sPn, nPn, pPn].filter(Boolean);

  function hidePopups() {
    pPns.forEach(p => {
      p.classList.remove('open');
      p.setAttribute('aria-hidden', 'true');
    });
    pBtns.forEach(b => b.setAttribute('aria-expanded', 'false'));
  }

  function togglePn(pn, btn) {
    const isOpen = pn.classList.contains('open');
    hidePopups();
    if (!isOpen) {
      pn.classList.add('open');
      pn.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-expanded', 'true');
      const inp = pn.querySelector('input,button,[tabindex]');
      if (inp) setTimeout(() => inp.focus(), 60);
    }
  }

  if (sBtn && sPn) sBtn.addEventListener('click', () => togglePn(sPn, sBtn));
  if (nBtn && nPn) nBtn.addEventListener('click', () => togglePn(nPn, nBtn));
  if (pBtn && pPn) pBtn.addEventListener('click', () => togglePn(pPn, pBtn));

  document.addEventListener('click', e => {
    const inside = e.target.closest('#searchPanel,#notifPanel,#profilePanel,#searchBtn,#notifBtn,#profileBtn');
    if (!inside) hidePopups();
  });

  const tabs = qa('.tab-btn');
  const pnls = qa('[data-panel]');
  const title = q('#panel-heading');

  let progDone = false;

  function runProg(val = 72) {
    if (progDone) return;
    const c = q('#progressCircle');
    const num = q('#progressNumber');
    if (!c || !num) return;
    progDone = true;

    const r = 48;
    const circ = 2 * Math.PI * r;

    c.setAttribute('stroke-dasharray', circ.toFixed(2));
    c.style.strokeDashoffset = circ;

    const dur = 1000;
    const start = performance.now();

    function step(t) {
      const x = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - x, 3);
      const pct = Math.round(e * val);

      num.textContent = pct + '%';
      c.style.strokeDashoffset = circ * (1 - pct / 100);

      if (x < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function setTab(btn) {
    const name = btn.dataset.tab;

    tabs.forEach(b => {
      const act = b === btn;
      b.classList.toggle('active', act);
      b.setAttribute('aria-selected', act);
    });

    pnls.forEach(p => {
      const show = p.dataset.panel === name;
      p.hidden = !show;
      p.setAttribute('aria-hidden', !show);
    });

    title.textContent = name === 'overview' ? 'Overview' : 'Activity';

    if (name === 'overview') runProg();
  }

  tabs.forEach(b => b.addEventListener('click', () => setTab(b)));

  const initTab = tabs.find(b => b.classList.contains('active')) || tabs[0];
  if (initTab) setTab(initTab);

  const cards = qa('.card');
  cards.forEach(card => {
    const extra = card.querySelector('.extra');
    if (extra) extra.setAttribute('aria-hidden', 'true');
    card.setAttribute('aria-expanded', 'false');

    function openC() {
      card.classList.add('open');
      card.setAttribute('aria-expanded', 'true');
      if (extra) {
        extra.style.maxHeight = extra.scrollHeight + 'px';
        extra.setAttribute('aria-hidden', 'false');
      }
    }

    function closeC() {
      card.classList.remove('open');
      card.setAttribute('aria-expanded', 'false');
      if (extra) {
        extra.style.maxHeight = extra.scrollHeight + 'px';
        void extra.offsetHeight;
        extra.style.maxHeight = '0px';
        extra.setAttribute('aria-hidden', 'true');
      }
    }

    function toggleC() {
      card.classList.contains('open') ? closeC() : openC();
    }

    card.addEventListener('click', e => {
      if (e.target.closest('button,a,input')) return;
      toggleC();
    });

    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleC();
      }
    });

    if (extra) {
      extra.addEventListener('transitionend', ev => {
        if (ev.propertyName === 'max-height' && !card.classList.contains('open')) {
          extra.style.maxHeight = '';
        }
      });
    }
  });

  const ea = q('#earlyAccessBtn');
  if (ea) {
    ea.addEventListener('click', () => {
      ea.textContent = 'Requested';
      ea.disabled = true;
      ea.setAttribute('aria-pressed', 'true');
    });
  }

  const exp = q('#exportBtn');
  const share = q('#shareBtn');

  if (exp) {
    exp.addEventListener('click', () => {
      exp.textContent = 'Exporting...';
      exp.disabled = true;
      setTimeout(() => {
        exp.textContent = 'Export';
        exp.disabled = false;
      }, 1200);
    });
  }

  if (share) {
    share.addEventListener('click', () => {
      share.textContent = 'Shared';
      share.disabled = true;
      setTimeout(() => {
        share.textContent = 'Share';
        share.disabled = false;
      }, 1200);
    });
  }

  document.addEventListener('keydown', e => {
    const a = document.activeElement.tagName;
    if (e.key === '/' && a !== 'INPUT' && a !== 'TEXTAREA') {
      const si = q('#searchInput');
      if (si) {
        e.preventDefault();
        togglePn(sPn, sBtn);
        setTimeout(() => si.focus(), 60);
      }
    }
  });

  nav.setAttribute('aria-hidden', 'true');
  ovl.setAttribute('aria-hidden', 'true');
  ham.setAttribute('aria-expanded', 'false');
  hidePopups();

});
