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

  function boot() {
    initAccordions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  if (window.gitbook && gitbook.events) {
    gitbook.events.bind('page.change', function () {
      setTimeout(initAccordions, 0);
    });
  }

  /* HonKit swaps the whole .book element on client side navigation. */
  function watchBook() {
    var book = document.querySelector('.book');
    if (!book || !book.parentNode || !window.MutationObserver) return;
    new MutationObserver(function () {
      setTimeout(initAccordions, 0);
    }).observe(book.parentNode, { childList: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watchBook);
  } else {
    watchBook();
  }
})();
