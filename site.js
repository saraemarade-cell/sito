/* Love Sun Beauty — shared "Come vuoi contattarci?" popup
   Injected on every page so "Chiama Ora" works in header + CTA finale. */
(function () {
  if (window.lsCallChoice) return;
  var modal = document.createElement('div');
  modal.id = 'ls-call-modal';
  modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:99999;align-items:center;justify-content:center;background:rgba(0,0,0,.55);';
  modal.innerHTML =
    '<div style="background:#fff;border-radius:16px;padding:28px;max-width:340px;width:90%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.35);">' +
      '<h3 style="font-size:18px;font-weight:700;color:#111;margin:0 0 6px;">Come vuoi contattarci?</h3>' +
      '<p style="font-size:13px;color:#666;margin:0 0 20px;">Scegli come metterti in contatto con noi</p>' +
      '<a href="tel:0314682567" style="display:flex;align-items:center;justify-content:center;gap:10px;text-decoration:none;background:#ED1E88;color:#fff;padding:14px;border-radius:10px;font-size:15px;font-weight:700;margin-bottom:12px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z"/></svg> Chiama 031 4682567</a>' +
      '<a href="https://wa.me/393473983337" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:10px;text-decoration:none;background:#25D366;color:#fff;padding:14px;border-radius:10px;font-size:15px;font-weight:700;"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.06c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.8-.11-.42-.13-.95-.31-1.64-.61-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.97s.74-2.11 1-2.4c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.59.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.42.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.65-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.69-.17 1.37z"/></svg> WhatsApp 347 398 3337</a>' +
      '<button type="button" style="margin-top:16px;background:none;border:none;color:#999;font-size:13px;cursor:pointer;">Annulla</button>' +
    '</div>';
  function attach() {
    if (!document.body) { document.addEventListener('DOMContentLoaded', attach); return; }
    document.body.appendChild(modal);
    modal.querySelector('button').addEventListener('click', window.lsCloseCall);
  }
  window.lsCallChoice = function (e) { if (e) { e.preventDefault(); } modal.style.display = 'flex'; };
  window.lsCloseCall = function () { modal.style.display = 'none'; };
  document.addEventListener('click', function (e) { if (e.target === modal) { window.lsCloseCall(); } });
  attach();
})();

/* Love Sun Beauty — shared header behaviour
   Transparent header over the hero → solid on scroll, with logo swap.
   Works on every page (home + internal). */
(function () {
  var h = document.querySelector('header');
  if (!h) return;
  var logo = h.querySelector('.header-logo-img');
  var dark = 'img/logo-nero-rosa.webp';
  var light = 'img/logo-bianco-rosa.webp';
  var hero = document.querySelector('.hero');
  var nav = h.querySelector('nav');

  /* ── Mobile hamburger (built here so every page gets it) ── */
  var toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Apri o chiudi il menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  h.appendChild(toggle);

  function setLogo() {
    if (!logo) return;
    logo.src = (h.classList.contains('scrolled') || h.classList.contains('nav-open')) ? dark : light;
  }
  toggle.addEventListener('click', function () {
    var open = h.classList.toggle('nav-open');
    /* Reuse the proven "scrolled" white-header state so the open drawer
       is always solid and legible, even at the top of the page. */
    if (open) {
      h.classList.add('scrolled');
    } else {
      update();
    }
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    setLogo();
  });
  /* Close the drawer after tapping a real navigation link */
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        h.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        setLogo();
      });
    });
  }

  function threshold() {
    /* Mobile/tablet: header must become solid as soon as the page leaves the
       very top — transparent ONLY when scrollY is 0. */
    if (window.innerWidth <= 960) return 2;
    var hh = h.offsetHeight || 70;
    if (hero) return Math.max(40, hero.offsetHeight - hh - 10);
    return window.innerHeight * 0.6;
  }
  function update() {
    if (window.scrollY > threshold()) {
      h.classList.add('scrolled');
    } else {
      h.classList.remove('scrolled');
    }
    setLogo();
  }
  setLogo();
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 960 && h.classList.contains('nav-open')) {
      h.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    update();
  });
})();
