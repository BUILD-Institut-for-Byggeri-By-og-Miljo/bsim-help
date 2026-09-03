/* ------------------------------------------------------------------
 * BSim help -- sidebar accordion.
 *
 * Wraps every group of li.chapter items that follows an li.header into a
 * <ul class="accordion-section">, gives the header a rotating chevron and
 * toggles the group with the `hidden` attribute (no max-height animation:
 * some groups have 75+ items and scrollHeight measuring is unreliable
 * while MathJax is still typesetting).
 *
 * Open/closed state is remembered per group in sessionStorage; the group
 * that owns the current page is always forced open.
 *
 * HonKit's client side navigation replaces the whole <div class="book">
 * element, so we re-init both on gitbook's `page.change` event and on a
 * MutationObserver watching the parent of .book.
 * ------------------------------------------------------------------ */
(function () {
  var STORE_PREFIX = 'bsim-sidebar:';

  /* Last known scroll offset of .book-summary.  HonKit restores the offset
     itself right after swapping the DOM, but at that moment the chapters are
     still ungrouped (and hidden by our CSS guard), so the list is far too
     short and the restore gets clamped to ~0.  We keep our own copy and
     re-apply it once the groups are rebuilt; with the same groups open the
     layout is identical, so the menu does not move. */
  var lastSidebarScroll = null;

  function trackSidebarScroll(pane) {
    if (pane.dataset.scrollTracked) return;
    pane.dataset.scrollTracked = '1';
    pane.addEventListener('scroll', function () {
      lastSidebarScroll = pane.scrollTop;
    }, { passive: true });
  }

  var CARET =
    '<svg class="accordion-caret" viewBox="0 0 24 24" width="16" height="16" ' +
    'aria-hidden="true" focusable="false" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<polyline points="9 5 16 12 9 19"></polyline></svg>';

  function readState(key) {
    try {
      return sessionStorage.getItem(STORE_PREFIX + key);
    } catch (e) {
      return null;
    }
  }

  function writeState(key, open) {
    try {
      sessionStorage.setItem(STORE_PREFIX + key, open ? '1' : '0');
    } catch (e) {
      /* private mode / file:// -- state is simply not remembered */
    }
  }

  function setOpen(header, section, open) {
    header.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) section.removeAttribute('hidden');
    else section.setAttribute('hidden', '');
  }

  function initAccordions() {
    var summary = document.querySelector('.book-summary ul.summary');
    if (!summary) return;

    var headers = summary.querySelectorAll('li.header');
    var activeLi = null;

    Array.prototype.forEach.call(headers, function (header) {
      if (header.dataset.accordionInit) return;
      header.dataset.accordionInit = '1';

      var siblings = [];
      var el = header.nextElementSibling;
      while (el && !el.classList.contains('header')) {
        if (el.tagName === 'LI' && !el.classList.contains('divider')) {
          siblings.push(el);
        }
        el = el.nextElementSibling;
      }
      if (siblings.length === 0) return;

      var label = (header.textContent || '').trim();

      /* rebuild the header content: text + chevron */
      header.textContent = '';
      var title = document.createElement('span');
      title.className = 'accordion-title';
      title.textContent = label;
      header.appendChild(title);
      header.insertAdjacentHTML('beforeend', CARET);

      var section = document.createElement('ul');
      section.className = 'accordion-section';
      header.parentNode.insertBefore(section, siblings[0]);
      siblings.forEach(function (s) {
        if (s.classList.contains('active')) activeLi = s;
        section.appendChild(s);
      });

      var hasActive = !!section.querySelector('.active') ||
        section.classList.contains('active');

      var stored = readState(label);
      var open = hasActive || stored === '1';
      if (hasActive) writeState(label, true);

      header.classList.add('accordion-header');
      setOpen(header, section, open);

      header.addEventListener('click', function () {
        var nowOpen = header.getAttribute('aria-expanded') !== 'true';
        setOpen(header, section, nowOpen);
        writeState(label, nowOpen);
      });
    });

    if (!activeLi) activeLi = summary.querySelector('li.chapter.active');

    var pane = document.querySelector('.book-summary');
    if (pane) {
      if (!pane.dataset.scrollRestored) {
        pane.dataset.scrollRestored = '1';
        if (lastSidebarScroll !== null) pane.scrollTop = lastSidebarScroll;
      }
      trackSidebarScroll(pane);
    }
    scrollActiveIntoView(activeLi);
  }

  function scrollActiveIntoView(activeLi) {
    if (!activeLi) return;
    var pane = document.querySelector('.book-summary');
    if (!pane) return;
    var a = activeLi.getBoundingClientRect();
    var p = pane.getBoundingClientRect();
    if (a.top >= p.top && a.bottom <= p.bottom) return;   /* already visible */
    var offset = (activeLi.offsetTop || 0) -
      Math.max(0, (pane.clientHeight - activeLi.offsetHeight) / 2);
    pane.scrollTop = Math.max(0, offset);
  }

  /* HonKit links to the book root as a directory ("..", "../"): the page
     title in .book-header and the "Introduction" entry in the summary.  A
     web server resolves that to index.html; the offline viewer's virtual
     host serves files only and would show an empty error page.  Point such
     links at index.html explicitly - harmless on the web, essential offline. */
  function fixDirectoryLinks() {
    var links = document.querySelectorAll('.book-summary a[href], .book-header a[href]');
    Array.prototype.forEach.call(links, function (a) {
      var href = a.getAttribute('href');
      if (!href || /^(#|[a-z]+:)/i.test(href)) return;
      var u;
      try { u = new URL(href, document.baseURI); } catch (e) { return; }
      if (u.origin !== window.location.origin) return;
      if (u.pathname.charAt(u.pathname.length - 1) !== '/') return;
      var fixedHref = href.replace(/\/?(?=(?:[?#]|$))/, '/index.html');
      a.setAttribute('href', fixedHref);
      if (a.parentNode && a.parentNode.dataset && a.parentNode.dataset.path === href) {
        a.parentNode.dataset.path = fixedHref;
      }
    });
  }

  function boot() {
    fixDirectoryLinks();
    initAccordions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  if (window.gitbook && gitbook.events) {
    gitbook.events.bind('page.change', function () {
      fixDirectoryLinks();
      initAccordions();
    });
  }

  /* HonKit swaps the whole .book element on client side navigation and
     fires page.change later (asynchronously).  A MutationObserver callback
     is a microtask: it runs right after the swap and BEFORE the browser
     paints, so the raw, unprocessed sidebar is never shown.  Never defer
     this with a timer - that caused a one-frame flash of the fully
     expanded menu on every page change. */
  function watchBook() {
    var book = document.querySelector('.book');
    if (!book || !book.parentNode || !window.MutationObserver) return;
    new MutationObserver(function (records) {
      carryToolbar(records);
      fixDirectoryLinks();
      initAccordions();
    }).observe(book.parentNode, { childList: true });
  }

  /* The header toolbar (menu toggle, language picker, font settings) is not
     part of the page HTML: HonKit creates the buttons with script and, on a
     client-side page change, removes and re-creates them in its page.change
     handler - which fires some time AFTER the DOM swap.  Until then the new
     header is empty, so the icons visibly disappear and pop back in.  Move
     the existing buttons from the outgoing page into the incoming header
     before the first paint; HonKit's own re-creation then replaces them in
     place without a visible gap. */
  function carryToolbar(records) {
    var oldBook = null;
    var newBook = null;
    Array.prototype.forEach.call(records || [], function (r) {
      Array.prototype.forEach.call(r.removedNodes, function (n) {
        if (n.nodeType === 1 && n.classList.contains('book')) oldBook = n;
      });
      Array.prototype.forEach.call(r.addedNodes, function (n) {
        if (n.nodeType === 1 && n.classList.contains('book')) newBook = n;
      });
    });
    if (!oldBook || !newBook) return;
    var target = newBook.querySelector('.book-header');
    if (!target || target.querySelector('.js-toolbar-action')) return;
    var buttons = oldBook.querySelectorAll('.book-header .js-toolbar-action');
    var anchor = target.querySelector('h1');
    Array.prototype.forEach.call(buttons, function (b) {
      if (anchor) target.insertBefore(b, anchor);
      else target.appendChild(b);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watchBook);
  } else {
    watchBook();
  }
})();
