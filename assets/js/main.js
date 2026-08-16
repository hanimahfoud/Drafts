/* =========================================================
   Dr. Javad Vahidi — site behaviour
   Language switching (EN/FA/AR + RTL), theme, rendering,
   filtering, scroll-spy, reveal animations, counters.
   ========================================================= */
(function () {
  'use strict';

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.prototype.slice.call((c || document).querySelectorAll(s));
  const svg = (name) => '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';

  const STORE_LANG  = 'jv-lang';
  const STORE_THEME = 'jv-theme';

  let lang = 'en';

  /* -------------------------------------------------
     THEME
     ------------------------------------------------- */
  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(STORE_THEME); } catch (e) {}
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved || (prefersDark ? 'dark' : 'light'));

    $('#themeToggle').addEventListener('click', function () {
      setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem(STORE_THEME, t); } catch (e) {}
  }

  /* -------------------------------------------------
     LANGUAGE
     ------------------------------------------------- */
  function initLang() {
    let saved = null;
    try { saved = localStorage.getItem(STORE_LANG); } catch (e) {}
    setLang(I18N[saved] ? saved : 'en');

    $$('.lang-switch button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.dataset.lang); });
    });
  }

  function setLang(l) {
    if (!I18N[l]) l = 'en';
    lang = l;
    const pack = I18N[l];

    document.documentElement.setAttribute('lang', l);
    document.documentElement.setAttribute('dir', pack._dir);
    document.title = pack.docTitle;

    $$('[data-i18n]').forEach(function (el) {
      const v = pack[el.dataset.i18n];
      if (typeof v === 'string') el.innerHTML = v;
    });

    $$('.lang-switch button').forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.lang === l);
    });

    try { localStorage.setItem(STORE_LANG, l); } catch (e) {}

    renderAll();
    relocaliseCounters();
  }

  /* Numbers already counted keep their value but adopt the new locale's digits. */
  function relocaliseCounters() {
    $$('.metric-num').forEach(function (el) {
      if (el.dataset.done === '1') el.textContent = formatNum(parseInt(el.dataset.count, 10) || 0);
    });
  }

  function formatNum(n) {
    const loc = lang === 'fa' ? 'fa-IR' : (lang === 'ar' ? 'ar-EG' : 'en-US');
    try { return new Intl.NumberFormat(loc).format(n); } catch (e) { return String(n); }
  }

  /* -------------------------------------------------
     RENDERING
     ------------------------------------------------- */
  function renderAll() {
    renderCards('#philCards', SITE_DATA.philosophy);
    renderResearch();
    renderPublications();
    renderBooks();
    renderTeaching();
    renderProfiles();
    applyFilter(currentFilter);
    observeReveals();
  }

  function renderResearch() {
    renderCards('#researchCards', SITE_DATA.research);
  }

  /* Shared icon-card renderer for the philosophy and research grids. */
  function renderCards(selector, items) {
    const host = $(selector);
    if (!host) return;
    host.innerHTML = items.map(function (r) {
      const c = r[lang] || r.en;
      return '<article class="card reveal">' +
               '<span class="card-ico">' + svg(r.icon) + '</span>' +
               '<h3>' + c.t + '</h3>' +
               '<p>' + c.d + '</p>' +
             '</article>';
    }).join('');
  }

  function renderPublications() {
    const host = $('#pubList');
    if (!host) return;
    host.innerHTML = SITE_DATA.publications.map(function (p) {
      const venue = (p.venue && (p.venue[lang] || p.venue.en)) || '';
      const tags  = (p.tags || []).map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
      // <bdi> isolates Latin bibliographic runs inside RTL layouts so that
      // punctuation and separators stay where they belong.
      const title = p.url
        ? '<a href="' + p.url + '" target="_blank" rel="noopener"><bdi>' + p.title + '</bdi></a>'
        : '<bdi>' + p.title + '</bdi>';

      return '<li class="pub reveal" data-type="' + p.type + '">' +
               '<span class="pub-num" aria-hidden="true"></span>' +
               '<div class="pub-body">' +
                 '<h3 class="pub-title">' + title + '</h3>' +
                 '<p class="pub-meta"><bdi>' + p.authors + '</bdi> · <bdi class="pub-venue">' + venue + '</bdi></p>' +
                 '<div class="pub-tags"><span class="tag tag-year">' + p.year + '</span>' + tags + '</div>' +
               '</div>' +
             '</li>';
    }).join('');
  }

  function renderBooks() {
    const host = $('#booksGrid');
    if (!host) return;

    if (!SITE_DATA.books.length) {
      host.innerHTML = '<p class="empty-note reveal">' + I18N[lang].booksEmpty + '</p>';
      return;
    }

    host.innerHTML = SITE_DATA.books.map(function (b) {
      const c = b[lang] || b.en;
      return '<article class="book reveal">' +
               '<span class="book-spine">' + svg('book') + '</span>' +
               '<div><h3>' + c.t + '</h3><p>' + c.s + '</p></div>' +
             '</article>';
    }).join('');
  }

  function renderTeaching() {
    const courses = SITE_DATA.courses[lang] || SITE_DATA.courses.en;
    const supers  = SITE_DATA.supervision[lang] || SITE_DATA.supervision.en;
    const li = function (t) { return '<li>' + t + '</li>'; };

    const cl = $('#coursesList');
    const sl = $('#superList');
    if (cl) cl.innerHTML = courses.map(li).join('');
    if (sl) sl.innerHTML = supers.map(li).join('');
  }

  function renderProfiles() {
    const host = $('#profileGrid');
    if (!host) return;
    host.innerHTML = SITE_DATA.profiles.map(function (p) {
      return '<a class="profile-card reveal" href="' + p.url + '" target="_blank" rel="noopener">' +
               '<span class="profile-ico">' + svg(p.icon) + '</span>' +
               '<span class="profile-text"><strong><bdi>' + p.name + '</bdi></strong>' +
                 '<span class="profile-meta"><bdi>' + p.meta + '</bdi></span></span>' +
               '<span class="profile-arrow">' + svg('arrow') + '</span>' +
             '</a>';
    }).join('');
  }

  /* -------------------------------------------------
     PUBLICATION FILTER
     ------------------------------------------------- */
  let currentFilter = 'all';

  function initFilters() {
    const bar = $('#pubFilters');
    if (!bar) return;
    bar.addEventListener('click', function (e) {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      currentFilter = btn.dataset.filter;
      $$('.chip', bar).forEach(function (c) { c.classList.toggle('is-active', c === btn); });
      applyFilter(currentFilter);
    });
  }

  function applyFilter(f) {
    $$('#pubList .pub').forEach(function (el) {
      el.hidden = !(f === 'all' || el.dataset.type === f);
    });
  }

  /* -------------------------------------------------
     NAVIGATION
     ------------------------------------------------- */
  function initNav() {
    const header = $('#siteHeader');
    const nav    = $('#siteNav');
    const toggle = $('#navToggle');
    const toTop  = $('#toTop');

    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    let ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        const y = window.scrollY;
        header.classList.toggle('is-stuck', y > 12);
        toTop.classList.toggle('is-visible', y > 620);
        spy();
        sweepReveals();
        ticking = false;
      });
    }, { passive: true });
  }

  function spy() {
    const links = $$('.site-nav a');
    let active = '';
    links.forEach(function (a) {
      const sec = document.querySelector(a.getAttribute('href'));
      if (sec && sec.getBoundingClientRect().top <= 140) active = a.getAttribute('href');
    });
    links.forEach(function (a) {
      a.classList.toggle('is-current', a.getAttribute('href') === active);
    });
  }

  /* -------------------------------------------------
     REVEAL ON SCROLL
     ------------------------------------------------- */
  let revealObserver = null;

  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            revealObserver.unobserve(en.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    }
    $$('.reveal').forEach(function (el, i) {
      if (el.classList.contains('is-in')) return;
      el.style.transitionDelay = Math.min(i % 8, 7) * 60 + 'ms';
      revealObserver.observe(el);
    });
  }

  /* Safety net: the IntersectionObserver can miss elements that flick past
     during a fast or programmatic scroll. Anything that has reached the
     viewport is revealed unconditionally, so content can never stay hidden. */
  function sweepReveals() {
    const limit = window.innerHeight;
    $$('.reveal:not(.is-in)').forEach(function (el) {
      if (el.getBoundingClientRect().top < limit) {
        el.classList.add('is-in');
        if (revealObserver) revealObserver.unobserve(el);
      }
    });
  }

  function markStaticReveals() {
    $$('.section-head, .about-grid > *, .metric, .teach-col, .contact-card, .pub-cta')
      .forEach(function (el) { el.classList.add('reveal'); });
  }

  /* -------------------------------------------------
     COUNTERS
     ------------------------------------------------- */
  function initCounters() {
    const nums = $$('.metric-num');
    if (!nums.length) return;

    const run = function (el) {
      const target = parseInt(el.dataset.count, 10) || 0;
      const dur = 1400;
      const t0 = performance.now();
      const step = function (now) {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = formatNum(Math.round(target * eased));
        if (p < 1) { requestAnimationFrame(step); } else { el.dataset.done = '1'; }
      };
      requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) { nums.forEach(run); return; }

    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.5 });

    nums.forEach(function (n) { io.observe(n); });
  }

  /* -------------------------------------------------
     PORTRAIT FALLBACK
     ------------------------------------------------- */
  function initPortrait() {
    const img = $('#portraitImg');
    if (!img) return;
    const fail = function () { img.classList.add('is-missing'); };
    img.addEventListener('error', fail);
    if (img.complete && img.naturalWidth === 0) fail();
  }

  /* -------------------------------------------------
     BOOT
     ------------------------------------------------- */
  function boot() {
    initTheme();
    markStaticReveals();
    initLang();          // triggers renderAll()
    initFilters();
    initNav();
    initCounters();
    initPortrait();
    spy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
