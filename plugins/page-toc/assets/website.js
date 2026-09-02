/* ------------------------------------------------------------------
 * BSim help -- "On this page" panel with scroll spy, plus a compact
 * prev/next pagination row underneath the content.
 *
 * Pure client side: nothing is generated at build time, so the panel
 * also works for pages rendered by HonKit's ajax navigation (which
 * replaces the whole <div class="book"> element).
 * ------------------------------------------------------------------ */
(function () {
  var STRINGS = {
    /* Danish letters are written as \u escapes so this asset stays pure
       ASCII no matter which charset the host serves .js files with. */
    da: { toc: 'P\u00e5 denne side', prev: 'Forrige', next: 'N\u00e6ste' },
    en: { toc: 'On this page', prev: 'Previous', next: 'Next' }
  };

  var spyHeadings = null;   /* [{el, link}] for the page currently shown */
  var spyRaf = 0;

  function lang() {
    var l = (document.documentElement.getAttribute('lang') || '').toLowerCase();
    if (l.indexOf('da') === 0) return 'da';
    if (l.indexOf('en') === 0) return 'en';
    var p = (window.location.pathname || '').toLowerCase();
    if (p.indexOf('/da/') !== -1) return 'da';
    return 'en';
  }

  function strings() {
    return STRINGS[lang()] || STRINGS.en;
  }

  /* ---------------- "On this page" ------------------------------- */

  function buildToc() {
    spyHeadings = null;

    var wrapper = document.querySelector('.book-body .page-wrapper');
    var inner = wrapper && wrapper.querySelector('.page-inner');
    if (!wrapper || !inner) return;

    var old = wrapper.querySelector(':scope > .page-toc');
    if (old) old.parentNode.removeChild(old);

    var section = inner.querySelector('.markdown-section');
    if (!section) return;

    var headings = [];
    Array.prototype.forEach.call(section.querySelectorAll('h2, h3'), function (h) {
      if (h.id && (h.textContent || '').trim()) headings.push(h);
    });

    /* Pages without a usable heading structure still get an (empty, hidden
       from a11y) aside so that the content column does not jump sideways
       when navigating between pages with and without a panel. */
    if (headings.length < 2) {
      var filler = document.createElement('aside');
      filler.className = 'page-toc page-toc-empty';
      filler.setAttribute('aria-hidden', 'true');
      wrapper.appendChild(filler);
      return;
    }

    var s = strings();
    var aside = document.createElement('aside');
    aside.className = 'page-toc';
    aside.setAttribute('role', 'complementary');
    aside.setAttribute('aria-label', s.toc);

    var title = document.createElement('h2');
    title.textContent = s.toc;
    aside.appendChild(title);

    var ul = document.createElement('ul');
    var entries = [];

    headings.forEach(function (h) {
      var li = document.createElement('li');
      li.className = 'page-toc-' + h.tagName.toLowerCase();
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = (h.textContent || '').trim();
      a.addEventListener('click', function () {
        setCurrent(a);
      });
      li.appendChild(a);
      ul.appendChild(li);
      entries.push({ el: h, link: a });
    });

    aside.appendChild(ul);
    wrapper.appendChild(aside);

    spyHeadings = entries;
    updateSpy();
  }

  function setCurrent(link) {
    if (!spyHeadings) return;
    spyHeadings.forEach(function (e) {
      if (e.link === link) e.link.setAttribute('aria-current', 'true');
      else e.link.removeAttribute('aria-current');
    });
  }

  function updateSpy() {
    spyRaf = 0;
    if (!spyHeadings || !spyHeadings.length) return;
    var current = spyHeadings[0].link;
    for (var i = 0; i < spyHeadings.length; i++) {
      var top = spyHeadings[i].el.getBoundingClientRect().top;
      if (top <= 120) current = spyHeadings[i].link;
      else break;
    }
    setCurrent(current);
  }

  function requestSpy() {
    if (spyRaf || !spyHeadings) return;
    spyRaf = window.requestAnimationFrame
      ? window.requestAnimationFrame(updateSpy)
      : window.setTimeout(updateSpy, 50);
  }

  /* ---------------- compact prev/next ---------------------------- */

  function buildPagination() {
    var inner = document.querySelector('.book-body .page-wrapper .page-inner');
    var bodyEl = document.querySelector('.book-body');
    if (!inner || !bodyEl) return;
    if (inner.querySelector(':scope > .page-pagination')) return;

    /* HonKit renders the arrows as siblings of .body-inner, i.e. as direct
       children of .book-body. */
    var links = bodyEl.querySelectorAll(':scope > a.navigation');
    if (!links.length) return;

    var s = strings();
    var row = document.createElement('div');
    row.className = 'page-pagination';

    Array.prototype.forEach.call(links, function (a) {
      var label = document.createElement('span');
      label.className = 'page-pagination-label';
      label.textContent = a.classList.contains('navigation-prev') ? s.prev : s.next;
      if (a.classList.contains('navigation-prev')) a.appendChild(label);
      else a.insertBefore(label, a.firstChild);
      a.style.marginRight = '';
      row.appendChild(a);
    });

    inner.appendChild(row);
  }

  /* ---------------- wiring --------------------------------------- */

  function build() {
    buildPagination();
    buildToc();
  }

  function bindScroll() {
    ['.book-body .body-inner', '.book-body'].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (el) el.addEventListener('scroll', requestSpy, { passive: true });
    });
    window.addEventListener('scroll', requestSpy, { passive: true });
    window.addEventListener('resize', requestSpy, { passive: true });
    window.addEventListener('hashchange', requestSpy);
  }

  function boot() {
    build();
    bindScroll();
    watchBook();
  }

  /* HonKit swaps the whole .book element on client side navigation. */
  function watchBook() {
    var book = document.querySelector('.book');
    if (!book || !book.parentNode || !window.MutationObserver) return;
    new MutationObserver(function () {
      setTimeout(function () { build(); bindScroll(); }, 0);
    }).observe(book.parentNode, { childList: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  if (window.gitbook && gitbook.events) {
    gitbook.events.bind('page.change', function () {
      setTimeout(build, 0);
    });
    /* MathJax changes heading offsets after typesetting */
    gitbook.events.bind('page.change', function () {
      setTimeout(requestSpy, 800);
    });
  }

  window.addEventListener('load', function () {
    setTimeout(requestSpy, 200);
  });
})();
