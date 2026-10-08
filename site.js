/* Love Sun Beauty — contatti per sede
   ──────────────────────────────────────────────────────────────────────
   UNICA FONTE DI VERITÀ per telefono e WhatsApp delle due sedi.
   Modificando SOLO questo oggetto si aggiornano, su tutte le pagine:
   il pulsante "Chiama Ora" dell'header, il pulsante "WhatsApp"
   dell'header, le CTA finali e il pulsante WhatsApp flottante.

   Se un numero manca, metti `null`: la riga compare come "numero da
   inserire" e non è cliccabile, invece di puntare al numero sbagliato.
   ────────────────────────────────────────────────────────────────────── */
window.LS_SEDI = [
  {
    nome: 'Bregnano',
    prov: 'CO',
    indirizzo: 'Via per Lazzate 7',
    orari: 'Lun–Ven 8:30–21:00 · Sab 8:30–19:00 · Dom 9:00–15:00',
    tel: '0314682567',
    telLabel: '031 4682567',
    wa: '393473983337',
    waLabel: '+39 347 398 3337'
    ,treatwell: 'https://www.treatwell.it/salone/lovesun-solarium-bregnano/'
  },
  {
    nome: 'Carugate',
    prov: 'MI',
    indirizzo: 'Via del Ginestrino 16',
    orari: 'Mar–Mer 9:00–20:00 · Gio 9:00–21:00 · Ven 9:00–19:00 · Sab 9:00–18:00',
    tel: '0277095069',
    telLabel: '02 7709 5069',
    wa: '393311093564',
    waLabel: '+39 331 109 3564'
    ,treatwell: 'https://www.treatwell.it/salone/lovesun-solarium-carugate/'
  }
];

(function () {
  if (window.lsCallChoice) return;

  var ICON_TEL = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z"/></svg>';
  var ICON_WA = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.06c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.8-.11-.42-.13-.95-.31-1.64-.61-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.97s.74-2.11 1-2.4c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.59.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.42.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.65-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.69-.17 1.37z"/></svg>';

  var BTN = 'display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;padding:12px;border-radius:9px;font-size:14px;font-weight:700;border:none;cursor:pointer;';
  var BTN_TEL = BTN + 'background:#ED1E88;color:#fff;';
  var BTN_WA = BTN + 'background:#25D366;color:#fff;';
  var BTN_OFF = BTN + 'background:#f0f0f0;color:#999;cursor:not-allowed;';
  /* Un blocco per sede, con il solo canale richiesto: niente doppioni. */
  function sedeBlock(s, mode) {
    var azione;
    if (mode === 'wa') {
      azione = s.wa
        ? '<a href="https://wa.me/' + s.wa + '" target="_blank" rel="noopener" style="' + BTN_WA + '">' + ICON_WA + s.waLabel + '</a>'
        : '<span style="' + BTN_OFF + '" title="Numero da inserire">' + ICON_WA + 'Numero da inserire</span>';
    } else {
      azione = s.tel
        ? '<a href="tel:' + s.tel + '" style="' + BTN_TEL + '">' + ICON_TEL + s.telLabel + '</a>'
        : '<span style="' + BTN_OFF + '" title="Numero da inserire">' + ICON_TEL + 'Numero da inserire</span>';
    }
    return '<div style="text-align:left;padding:16px 0;border-top:1px solid #eee;">' +
             '<div style="font-size:15px;font-weight:800;color:#111;margin-bottom:2px;">LOVESUN ' + s.nome.toUpperCase() + '</div>' +
             '<div style="font-size:12px;color:#888;margin-bottom:4px;">' + s.indirizzo + ', ' + s.nome + ' (' + s.prov + ')</div>' +
             '<div style="font-size:11px;color:#aaa;line-height:1.5;margin-bottom:12px;">' + s.orari + '</div>' +
             azione +
           '</div>';
  }

  function treatwellBlock(s) {
    return '<div style="text-align:left;padding:16px 0;border-top:1px solid #eee;">' +
             '<div style="font-size:15px;font-weight:800;color:#111;margin-bottom:2px;">LOVESUN ' + s.nome.toUpperCase() + '</div>' +
             '<div style="font-size:12px;color:#888;margin-bottom:12px;">' + s.indirizzo + ', ' + s.nome + ' (' + s.prov + ')</div>' +
             '<a href="' + s.treatwell + '" target="_blank" rel="noopener" style="' + BTN + 'background:#00b67a;color:#fff;">Prenota su Treatwell</a>' +
           '</div>';
  }

  var modal = document.createElement('div');
  modal.id = 'ls-call-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Scegli la sede da contattare');
  modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:99999;align-items:center;justify-content:center;background:rgba(0,0,0,.55);padding:20px;overflow:auto;';
  modal.innerHTML =
    '<div style="background:#fff;border-radius:16px;padding:26px;max-width:380px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.35);">' +
      '<h3 data-ls-title style="font-size:18px;font-weight:800;color:#111;margin:0 0 4px;text-align:center;">Quale sede vuoi contattare?</h3>' +
      '<p data-ls-sub style="font-size:13px;color:#666;margin:0 0 6px;text-align:center;">Ogni sede ha i suoi numeri</p>' +
      '<div data-ls-body>' + window.LS_SEDI.map(sedeBlock).join('') + '</div>' +
      '<button type="button" style="margin-top:16px;width:100%;background:none;border:none;color:#999;font-size:13px;cursor:pointer;">Annulla</button>' +
    '</div>';

  function attach() {
    if (!document.body) { document.addEventListener('DOMContentLoaded', attach); return; }
    document.body.appendChild(modal);
    modal.querySelector('button[type="button"]').addEventListener('click', window.lsCloseCall);
  }

  function render(mode) {
    var titoli = {
      tel: ['Quale sede vuoi chiamare?', 'Ogni sede ha il suo numero di telefono'],
      wa: ['A quale sede vuoi scrivere?', 'Ogni sede ha il suo numero WhatsApp'],
      treatwell: ['In quale sede vuoi prenotare?', 'Ogni sede ha la sua agenda su Treatwell']
    };
    var t = titoli[mode] || titoli.tel;
    var blocchi = window.LS_SEDI.map(function (s) {
      return mode === 'treatwell' ? treatwellBlock(s) : sedeBlock(s, mode);
    }).join('');
    var titolo = t[0], sub = t[1];
    modal.querySelector('[data-ls-title]').textContent = titolo;
    modal.querySelector('[data-ls-sub]').textContent = sub;
    modal.querySelector('[data-ls-body]').innerHTML = blocchi;
  }

  window.lsCallChoice = function (e) { if (e) { e.preventDefault(); } render('tel'); modal.style.display = 'flex'; };
  window.lsWaChoice = function (e) { if (e) { e.preventDefault(); } render('wa'); modal.style.display = 'flex'; };
  window.lsTreatwellChoice = function (e) { if (e) { e.preventDefault(); } render('treatwell'); modal.style.display = 'flex'; };
  window.lsCloseCall = function () { modal.style.display = 'none'; };
  document.addEventListener('click', function (e) { if (e.target === modal) { window.lsCloseCall(); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { window.lsCloseCall(); } });
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
  /* L'altezza reale dell'header diventa una variabile CSS: il pannello del
     menu parte esattamente sotto la barra, qualunque sia lo zoom. */
  function misuraHeader() {
    document.documentElement.style.setProperty('--header-h', (h.offsetHeight || 64) + 'px');
  }
  misuraHeader();
  window.addEventListener('resize', misuraHeader);

  /* Con il pannello aperto la pagina sotto non deve scorrere. */
  function bloccaScroll(attivo) {
    if (attivo) {
      window.__lsScrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = '-' + window.__lsScrollY + 'px';
      document.body.style.width = '100%';
    } else if (document.body.style.position === 'fixed') {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, window.__lsScrollY || 0);
    }
  }

  function chiudiMenu() {
    if (!h.classList.contains('nav-open')) return;
    h.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    bloccaScroll(false);
    update();
    setLogo();
  }
  window.lsChiudiMenu = chiudiMenu;

  toggle.addEventListener('click', function () {
    var open = h.classList.toggle('nav-open');
    /* Reuse the proven "scrolled" white-header state so the open drawer
       is always solid and legible, even at the top of the page. */
    if (open) {
      h.classList.add('scrolled');
      misuraHeader();
    } else {
      update();
    }
    bloccaScroll(open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    setLogo();
  });

  /* Chiusura: tocco sul velo, tasto Esc. */
  document.addEventListener('click', function (e) {
    if (!h.classList.contains('nav-open')) return;
    if (!h.contains(e.target)) { chiudiMenu(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { chiudiMenu(); }
  });
  /* Il tocco su un link di navigazione chiude il pannello e sblocca lo scroll.
     Il link "Estetica Base" (href="#") apre il sottomenu: non deve chiudere. */
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (a.getAttribute('href') === '#') { return; }
        chiudiMenu();
      });
    });
  }

  function threshold() {
    /* Mobile/tablet: header must become solid as soon as the page leaves the
       very top — transparent ONLY when scrollY is 0. */
    if (window.innerWidth <= 1024) return 2;
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
    /* Tornando alla barra orizzontale il pannello va chiuso e lo scroll sbloccato,
     altrimenti la pagina resta congelata. 1024px = soglia dell'hamburger. */
    if (window.innerWidth > 1024) { chiudiMenu(); }
    misuraHeader();
    update();
  });
})();

/* Love Sun Beauty — CTA Treatwell e WhatsApp legate alla sede scelta
   ──────────────────────────────────────────────────────────────────────
   Nei blocchi di prenotazione (card nella hero e form "Prenota") c'è una
   select con la sede. Appena la cliente sceglie Bregnano o Carugate, i
   pulsanti "Treatwell" e "WhatsApp" dello STESSO blocco puntano a quella
   sede. Se la sede non è scelta ("-- Seleziona --" o "Indifferente"):
   entrambi i pulsanti aprono la modale di scelta sede, invece di
   mandare a una sede arbitraria.
   Nessun numero o URL scritto nelle pagine: tutto da window.LS_SEDI.
   ────────────────────────────────────────────────────────────────────── */
(function () {
  var SEL_TW = '.hbc-tw, .btn-treatwell, .btn-treatwell-hero, .hib-btn-treatwell';
  var SEL_WA = '.hbc-wa, .btn-wa, .hib-btn-wa';

  function sedeFromText(t) {
    if (!t) return null;
    if (/bregnano/i.test(t)) return window.LS_SEDI[0];
    if (/carugate/i.test(t)) return window.LS_SEDI[1];
    return null; /* "-- Seleziona --", "Indifferente", ecc. */
  }

  /* La select della sede: quella che offre entrambe le sedi fra le opzioni. */
  function isSedeSelect(sel) {
    var txt = sel.textContent || '';
    return /bregnano/i.test(txt) && /carugate/i.test(txt);
  }

  /* Risale al primo antenato che contiene anche almeno una CTA da governare. */
  function scopeOf(sel) {
    var n = sel.parentElement;
    while (n && n !== document.body) {
      if (n.querySelector(SEL_TW) || n.querySelector(SEL_WA)) return n;
      n = n.parentElement;
    }
    return null;
  }

  /* Un link già scritto a mano verso una sede precisa non va toccato. */
  function isLinkEsplicito(el) {
    var h = el.getAttribute("href");
    if (h && h !== "#") { return true; }
    /* Anche un <button> avvolto in un <a href> ha già la sua destinazione. */
    var a = el.closest("a[href]");
    return !!(a && a.getAttribute("href") !== "#");
  }

  /* Etichetta: "Treatwell" diventa "Treatwell — Bregnano", e torna indietro. */
  function etichetta(el, sede) {
    if (!el.dataset.lsLabel) { el.dataset.lsLabel = el.textContent.trim(); }
    var base = el.dataset.lsLabel;
    el.textContent = sede ? base + ' — ' + sede.nome : base;
  }

  function apply(scope, sede) {
    scope.querySelectorAll(SEL_TW).forEach(function (el) {
      if (isLinkEsplicito(el)) return;
      el.dataset.lsHref = sede ? sede.treatwell : '';
      el.dataset.lsKind = 'tw';
      el.removeAttribute('onclick');
      etichetta(el, sede);
    });
    scope.querySelectorAll(SEL_WA).forEach(function (el) {
      if (isLinkEsplicito(el)) return;
      el.dataset.lsHref = (sede && sede.wa) ? 'https://wa.me/' + sede.wa : '';
      el.dataset.lsKind = 'wa';
      el.removeAttribute('onclick');
      /* Carugate senza WhatsApp: lo diciamo invece di mandare al numero sbagliato. */
      if (sede && !sede.wa) {
        el.title = 'WhatsApp ' + sede.nome + ': numero da inserire';
      } else {
        el.removeAttribute('title');
      }
    });
  }

  function bind(sel) {
    var scope = scopeOf(sel);
    if (!scope) return;
    function sync() { apply(scope, sedeFromText(sel.value || (sel.options[sel.selectedIndex] || {}).text)); }
    sel.addEventListener('change', sync);
    sync();
  }

  function clickHandler(e) {
    var el = e.target.closest('[data-ls-kind]');
    if (!el) return;
    e.preventDefault();
    var href = el.dataset.lsHref;
    if (!href) {
      /* Sede non ancora scelta: invece di mandare a una sede a caso, la facciamo scegliere. */
      if (el.dataset.lsKind === 'tw') { window.lsTreatwellChoice(e); } else { window.lsWaChoice(e); }
      return;
    }
    window.open(href, '_blank', 'noopener');
  }

  function init() {
    if (!window.LS_SEDI) return;
    document.querySelectorAll('select').forEach(function (sel) {
      if (isSedeSelect(sel)) bind(sel);
    });
    document.addEventListener('click', clickHandler);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
