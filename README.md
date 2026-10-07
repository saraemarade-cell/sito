# Love Sun Beauty — sito

Sito statico multipagina (HTML + CSS + JS, senza build step).

## Struttura

- `index.html` — home
- pagine trattamento: `epilazione-laser.html`, `massaggi.html`, `nail-center.html`, `pedicure.html`, `pressoterapia.html`, `pulizia-viso.html`, `solarium.html`, `trattamenti-corpo.html`, `cerette.html`
- pagine sede: `sede-bregnano.html`, `sede-carugate.html`
- istituzionali: `chi-siamo.html`, `contatti.html`, `faq.html`, `offerte.html`
- `brand.css` — design system condiviso (token, componenti, responsive)
- `site.js` — comportamenti condivisi
- `img/`, `fonts/` — asset

## Sviluppo locale

Nessuna dipendenza: apri `index.html` nel browser, oppure servi la cartella con un server statico.

```bash
python -m http.server 8000
```
