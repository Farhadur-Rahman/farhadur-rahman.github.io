/* ============================================================
   SIDEBAR.JS  —  Toggle + scroll-spy navigation
   ============================================================ */

(function () {

  const sidebar = document.getElementById('sidebar');
  const toggle  = document.getElementById('sidebar-toggle');
  const overlay = document.getElementById('sidebar-overlay');
  const content = document.getElementById('main-content');

  if (!sidebar || !toggle) return;

  // ── Detect mobile ──────────────────────────────────────────
  const isMobile = () => window.innerWidth <= 768;

  // ── Toggle sidebar ─────────────────────────────────────────
  toggle.addEventListener('click', () => {
    if (isMobile()) {
      // Mobile: slide in/out as overlay
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('visible');
    } else {
      // Desktop: collapse and expand main content
      sidebar.classList.toggle('collapsed');
      updateContentMargin();
    }
  });

  // ── Close on overlay click (mobile) ────────────────────────
  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
    });
  }

  // ── Update main content margin on desktop ──────────────────
  function updateContentMargin() {
    if (!content || isMobile()) return;
    const collapsed = sidebar.classList.contains('collapsed');
    content.style.marginLeft = collapsed ? '0' : '';
    toggle.style.left = collapsed
      ? '1rem'
      : 'calc(var(--sidebar-w, 280px) + 1rem)';
  }

  // ── Scroll Spy: highlight active nav link ──────────────────
  const navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');

  if (navLinks.length > 0) {
    const sections = Array.from(navLinks)
      .map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    function onScroll() {
      const scrollY = window.scrollY + 120;
      let current = sections[0];

      sections.forEach(sec => {
        if (sec.offsetTop <= scrollY) current = sec;
      });

      navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current.id) {
          a.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  // ── Close sidebar when nav link clicked (mobile) ───────────
  navLinks.forEach(a => {
    a.addEventListener('click', () => {
      if (isMobile()) {
        sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('visible');
      }
    });
  });

  // ── Handle resize ──────────────────────────────────────────
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      // Reset mobile classes on desktop resize
      sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('visible');
      updateContentMargin();
    }
  });

})();
