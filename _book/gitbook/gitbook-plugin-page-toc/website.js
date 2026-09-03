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
    da: { toc: 'P\u00e5 denne side', related: 'Relaterede emner', prev: 'Forrige', next: 'N\u00e6ste' },
    en: { toc: 'On this page', related: 'Related topics', prev: 'Previous', next: 'Next' }
  };

  /* A trailing "Se også:" / "See also:" / "Relaterede emner:" paragraph that
     is immediately followed by a <ul> of links is lifted into the panel as
     "Relaterede emner".  Inline sentences ("Se også kuldebroer langs ...")
     are prose and are left alone. */
  var RELATED_LABEL = /^(se ogs\u00e5|relaterede emner|see also|related topics)\s*:?\s*$/i;

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

    var related = collectRelated(section);
    var hasToc = headings.length >= 2;

    /* Pages without a usable heading structure still get an (empty, hidden
       from a11y) aside so that the content column does not jump sideways
       when navigating between pages with and without a panel. */
    if (!hasToc && !related.length) {
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
    aside.setAttribute('aria-label', hasToc ? s.toc : s.related);

    var entries = [];

    if (hasToc) {
      var title = document.createElement('h2');
      title.textContent = s.toc;
      aside.appendChild(title);

      var ul = document.createElement('ul');
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
    }

    if (related.length) {
      var rTitle = document.createElement('h2');
      rTitle.className = 'page-toc-related-title';
      rTitle.textContent = s.related;
      aside.appendChild(rTitle);

      var rUl = document.createElement('ul');
      rUl.className = 'page-toc-related';
      related.forEach(function (r) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = r.href;
        a.textContent = r.text;
        a.addEventListener('click', navigateViaHonKit);
        li.appendChild(a);
        rUl.appendChild(li);
      });
      aside.appendChild(rUl);
    }

    wrapper.appendChild(aside);

    spyHeadings = entries;
    updateSpy();
  }

  function collectRelated(section) {
    var out = [];
    var seen = {};
    Array.prototype.forEach.call(section.querySelectorAll('p'), function (p) {
      if (!RELATED_LABEL.test((p.textContent || '').trim())) return;
      var ul = p.nextElementSibling;
      if (!ul || ul.tagName !== 'UL') return;
      /* marked so CSS can hide the originals while the panel is visible */
      p.classList.add('page-related-src');
      ul.classList.add('page-related-src');
      Array.prototype.forEach.call(ul.querySelectorAll('li'), function (li) {
        var a = li.querySelector('a[href]');
        if (!a) return;
        var key = a.href;
        if (seen[key]) return;
        seen[key] = 1;
        out.push({ href: a.getAttribute('href'), text: (a.textContent || '').trim() });
      });
    });
    return out;
  }

  /* HonKit's client-side navigation only intercepts clicks on links inside
     .page-inner, the summary and the prev/next arrows.  The panel lives
     outside .page-inner, so a plain click would do a full page reload
     (white flash, sidebar rebuilt, scroll position lost).  Proxy the click
     through a hidden link inside .page-inner so HonKit's delegated handler
     picks it up; if nothing intercepts it, the default action still
     navigates normally. */
  function navigateViaHonKit(ev) {
    if (ev.defaultPrevented || ev.button !== 0 ||
        ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
    var inner = document.querySelector('.book-body .page-inner');
    if (!inner || !window.gitbook) return;
    ev.preventDefault();
    var proxy = document.createElement('a');
    proxy.href = this.getAttribute('href');
    proxy.style.display = 'none';
    inner.appendChild(proxy);
    proxy.click();
    if (proxy.parentNode) proxy.parentNode.removeChild(proxy);
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

  /* HonKit swaps the whole .book element on client side navigation.  The
     observer callback runs as a microtask, i.e. before the next paint, so
     the panel and pagination are in place in the very first frame of the
     new page.  Never defer this with a timer (one-frame flash). */
  function watchBook() {
    var book = document.querySelector('.book');
    if (!book || !book.parentNode || !window.MutationObserver) return;
    new MutationObserver(function () {
      build();
      bindScroll();
    }).observe(book.parentNode, { childList: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  if (window.gitbook && gitbook.events) {
    gitbook.events.bind('page.change', function () {
      build();
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
