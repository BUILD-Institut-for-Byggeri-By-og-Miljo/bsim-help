(function () {
  function initAccordions() {
    var headers = document.querySelectorAll('.book-summary ul.summary li.header');

    headers.forEach(function (header) {
      if (header.dataset.accordionInit) return;
      header.dataset.accordionInit = '1';

      var siblings = [];
      var el = header.nextElementSibling;
      while (el && !el.classList.contains('header')) {
        if (el.tagName === 'LI') siblings.push(el);
        el = el.nextElementSibling;
      }

      if (siblings.length === 0) return;

      var hasActive = siblings.some(function (s) {
        return s.classList.contains('active') || s.querySelector('.active');
      });

      var container = document.createElement('ul');
      container.className = 'accordion-section';
      var open = hasActive;
      container.style.maxHeight = open ? '9999px' : '0';

      header.parentNode.insertBefore(container, siblings[0]);
      siblings.forEach(function (s) { container.appendChild(s); });

      header.classList.add('accordion-header');
      header.setAttribute('aria-expanded', open ? 'true' : 'false');

      header.addEventListener('click', function () {
        open = !open;
        header.setAttribute('aria-expanded', open ? 'true' : 'false');
        container.style.maxHeight = open ? container.scrollHeight + 'px' : '0';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordions);
  } else {
    initAccordions();
  }

  if (window.gitbook && gitbook.events) {
    gitbook.events.bind('page.change', function () {
      setTimeout(initAccordions, 0);
    });
  }
})();
