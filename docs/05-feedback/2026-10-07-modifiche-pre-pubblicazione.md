# Modifiche pre-pubblicazione — analisi e proposta

Fonte: `Modifiche_sito_LOVESUN_pre_pubblicazione (1).docx` (CLIENTE, ottobre 2026)
Stato: **WAITING_FOR_APPROVAL**

---

## 1. Stato attuale rilevato (MATERIALE)

Audit del sito così come è ora:

| Elemento | Stato |
|---|---|
| Telefono | un solo numero su tutto il sito: `031 4682567` (Bregnano) |
| WhatsApp | un solo numero: `347 3983337` — 49 link, incluso `sede-carugate.html` |
| Modale "Come vuoi contattarci?" | esiste in `site.js`, iniettata su tutte le pagine, ma **nessuna pagina la richiama** (`lsCallChoice` non compare in nessun HTML): codice morto |
| CTA header | 32 "Chiama Ora" + 11 "Chiama — 031 4682567" hardcoded |
| Orari | Bregnano `Lun–Sab 9:00–21:00 · Dom 9:00–17:00`; Carugate `Mar/Mer/Ven/Sab 9:00–20:00 · Gio 9:00–21:00` — ripetuti in 16 pagine |
| `quadrifacciale` | presente in `faq.html`, `sede-bregnano.html`, `sede-carugate.html`, `solarium.html` |
| Formule illimitate | `faq.html`, `offerte.html`, `solarium.html` |
| Massaggi da rimuovere | `index.html`, `massaggi.html` |

Nota: `333 123 4567` (20 occorrenze) è solo un `placeholder` dei form, non un numero reale. `03959640131` è la P.IVA.

---

## 2. Interventi sistemici (da fare alla radice, non pagina per pagina)

### S1 — Contatti separati per sede (punto 1 del documento, "stessa logica in tutte le pagine")
Il sito non ha build step: header e footer sono duplicati in 16 file. La soluzione corretta non è duplicare 16 volte due coppie di pulsanti, ma:

- riscrivere la modale già presente in `site.js` in **due blocchi sede** (Bregnano: Chiama + WhatsApp — Carugate: Chiama + WhatsApp);
- **collegarla** alle CTA "Chiama Ora" dell'header di tutte le pagine (oggi non è collegata a nulla);
- nelle sezioni di contatto esplicite (`contatti.html`, `sede-*.html`, "Dove siamo", FAQ prenotazioni) i due numeri restano in chiaro, non dietro la modale.

Effetto: un solo punto di verità per i numeri, coerenza garantita su tutte le pagine, nessuna CTA ambigua.

### S2 — Orari e macchinari per sede
Orari e dotazione macchinari sono ripetuti in molte pagine. Vengono allineati a un'unica versione (quella del documento) e verificati con un controllo automatico finale, così da chiudere il punto 10.

### S3 — Rimozione di tutto ciò che non è realmente attivo
Formule illimitate (solarium, offerte, FAQ), massaggi eliminati, "cera elastica", "protocolli specifici anti-age", seduta lunga e ciclo 5 sedute massaggi. Dove il documento chiede di sostituire con "consulenza personalizzata", si usa una formulazione unica e coerente su tutte le pagine.

---

## 3. Interventi per pagina

| # | Pagina / file | Interventi | Dipende da dati mancanti |
|---|---|---|---|
| 1 | `index.html` | contatti per sede; riscrittura laser (fototipi/peli pigmentati); allineamento abbronzatura/4+4 giorni; frequenza 4 settimane, controlli 3 settimane; "fino al 90%"; pacchetti laser reali; FAQ laser (10 D / 12 U); T-Shape 2 come trattamento unico + durata 30'–1h30 + foto; solarium macchinari per sede + formule reali; ceretta pacchetti; massaggi (rimozioni, connettivale/cellulite, Rituale Relax con Piume, 45' effettivi ~1h cabina, karité); viso (Peptidi, Pulizia Profonda, Skin Test in evidenza, crema al posto del siero); "Dove siamo" orari + contatti per sede | D1, D2, D3, D4, D5, D6 |
| 2 | `pulizia-viso.html` | elenco 6 trattamenti; Pulizia Specifica → maschera in alginato (80% impurità); anti-age → Vitamina C / Peptidi / Fili di Collagene; solo prezzi singoli, via abbonamenti e percorsi | D5 |
| 3 | `pedicure.html` | + Stretching Piedi 20'; + Pedicure SPA con scrub | D5 |
| 4 | `offerte.html` | elimina abbonamenti solarium illimitati e ogni formula non attiva | D4 |
| 5 | `sede-bregnano.html` | frase "a Como … sette giorni su sette" da rendere coerente; orari reali | D7 |
| 6 | `sede-carugate.html` | fisso + WhatsApp corretti; orari; via quadrifacciale, 2 esafacciali | D1 |
| 7 | `chi-siamo.html` | "Dove siamo": orari, telefono e WhatsApp distinti per sede | D1 |
| 8 | `faq.html` | prenotazioni per sede; **nuova FAQ policy di cancellazione** (testo fornito); laser; T-Shape; solarium; ceretta (liposolubile + brasiliana, via elastica); viso; massaggi; pagamenti (+ acconto 20% oltre 2h); sedi | D1 |
| 9 | `contatti.html` | ristrutturazione in due blocchi sede con indirizzo, orari, fisso, WhatsApp e pulsanti Chiama / Scrivici su WhatsApp dedicati | D1 |
| 10 | `solarium.html` | macchinari per sede; foto lettino C20; formule reali, via illimitato | D4, D6 |
| 11 | `cerette.html` | prezzi zone invariati + pacchetti reali | D3 |
| 12 | `massaggi.html` | come index (rimozioni, durata, karité, Rituale Relax, formule) | D5 |
| 13 | `trattamenti-corpo.html` | T-Shape 2 come trattamento unico, durata, immagini | D6 |

---

## 4. Dati mancanti — servono dal cliente (non vengono inventati)

| ID | Dato | Blocca |
|---|---|---|
| **D1** | Carugate: numero fisso e numero WhatsApp corretti | contatti su tutte le pagine, FAQ, sedi, chi siamo |
| **D2** | Pacchetti laser reali: DONNA e UOMO, con zone comprese, numero sedute e prezzo | home, epilazione laser |
| **D3** | Pacchetti ceretta già in uso nei centri (zone + prezzo) | home, cerette |
| **D4** | Elenco esatto degli abbonamenti solarium che restano attivi (oltre la singola seduta) | solarium, offerte, FAQ |
| **D5** | Prezzi/durate dei servizi nuovi o riorganizzati: Peptidi, Pulizia Viso Profonda (ultrasuoni + Hydro), Fili di Collagene, Vitamina C, Rituale Relax con Piume, Stretching Piedi 20', Pedicure SPA con scrub | viso, pedicure, massaggi |
| **D6** | Immagini: foto reali T-Shape 2; foto sostitutiva del lettino C20 | home, trattamenti corpo, solarium |
| **D7** | Bregnano, frase "centro estetico a Como con orari flessibili sette giorni su sette": con i nuovi orari la sede **è** aperta 7 giorni su 7, quindi va chiarito cosa è da correggere — il riferimento a "Como" (Bregnano è provincia di Como, non città)? Serve la formulazione desiderata. |  sede Bregnano |

## 5. Punti da chiarire

- **Orari Bregnano**: i nuovi orari (Lun–Ven 8:30–21:00, Sab 8:30–19:00, Dom 9:00–15:00) cambiano apertura e chiusura rispetto a oggi (9:00–21:00 / Dom 9:00–17:00). Confermo che sono quelli definitivi?
- **Laser, numero sedute**: la home deve riportare "mediamente 10 / 12 sedute" e le FAQ "circa 10 / 12". Uso una formulazione identica in entrambe per evitare nuove incoerenze.
- **Acconto 20% e policy di cancellazione**: vanno soltanto nelle FAQ, o anche richiamati nella pagina Contatti / nei form di prenotazione?

---

## 6. Modalità di lavoro proposta

Procedo in lotti, così ogni blocco è verificabile:

1. **Lotto A — sistemico contatti** (`site.js` + CTA header su 16 pagine + `contatti.html`): sbloccato appena arriva D1.
2. **Lotto B — orari, sedi, macchinari, policy FAQ**: nessun dato mancante tranne D7, posso partire subito.
3. **Lotto C — contenuti laser / T-Shape / solarium / massaggi / viso / pedicure** (testi e rimozioni): posso fare subito tutte le riscritture e le rimozioni; prezzi e pacchetti restano segnaposto fino a D2–D5.
4. **Lotto D — immagini**: alla consegna di D6.
5. **Controllo finale** (punto 10) con verifica automatica delle informazioni ripetute.

---

## 7. Stato di avanzamento — 7 ottobre 2026

### Applicato

**Orari (tutte le 16 pagine)**
- Bregnano: `Lun–Ven 8:30–21:00 · Sab 8:30–19:00 · Dom 9:00–15:00`
- Carugate: `Mar–Mer 9:00–20:00 · Gio 9:00–21:00 · Ven 9:00–19:00 · Sab 9:00–18:00 · Lun e Dom chiuso`
- allineati footer, FAQ orari, box sede in `index.html`, hero e blocchi di `sede-bregnano.html` e `sede-carugate.html`

**Sede Bregnano**
- claim hero corretto: era *"centro estetico a Como … sei giorni su sette"* (anche in contrasto con i nuovi orari) → ora *"a Bregnano, in provincia di Como: aperto sette giorni su sette, dalle 8:30"*
- descrizione sede riallineata ai nuovi orari

**Solarium / macchinari**
- Carugate: rimossa la lampada viso quadrifacciale, inserite **2 lampade viso esafacciali** (`sede-carugate.html`, `solarium.html`, `faq.html`)
- FAQ "Che apparecchi avete?" riscritta **per sede** invece di "entrambe le sedi"
- rimosse tutte le formule illimitate: card "Mensile illimitato" e relativa opzione form in `solarium.html`, FAQ in `faq.html`, voci in `offerte.html`

**Epilazione laser** (`index.html`, `epilazione-laser.html`, `faq.html`)
- descrizione riscritta: laser a diodo, lavora **principalmente sui peli pigmentati/scuri**; peli bianchi, rossi o privi di pigmento non vengono letti correttamente
- rimosso in tutto il sito il claim "adatto a tutti i fototipi"
- esposizione solare uniformata: la pelle abbronzata **non è una controindicazione**, stop al sole **4 giorni prima e 4 giorni dopo**. Eliminata la vecchia indicazione contraddittoria "4 settimane prima e dopo"
- sedute: **10 donna / 12 uomo**, frequenza **ogni 4 settimane**, controlli ogni 3 settimane (al posto di "6–8 sedute ogni 4–8 settimane")
- risultati: "epilazione definitiva **fino al 90%**", senza claim assoluti

**T-Shape 2** (`trattamenti-corpo.html`, `index.html`, `faq.html`)
- non è più presentato come somma di trattamenti separati: la sezione "Radiofrequenza + Lipolaser" è diventata "tecnologie che agiscono insieme nella stessa seduta", **senza CTA di prenotazione autonome**
- durata **30 minuti – 1 ora e 30** in base alle zone, indicata in pagina, negli step e in FAQ
- rimosso il claim "combina quattro tecnologie" come elenco di trattamenti distinti

**Massaggi** (`massaggi.html`, `index.html`, `faq.html`)
- eliminati Balinese, Ayurvedico, Hot Stone e Cellulisy
- connettivale: aggiunto il riferimento agli **inestetismi della cellulite**
- aggiunto **Rituale Relax con Piume** (card + opzioni form)
- Candle Massage: **burro di karité** al posto della cera di soia
- durata: **45 minuti effettivi, circa 1 ora di occupazione cabina**
- formule: eliminata la seduta lunga e il ciclo 5 sedute; al loro posto "Pacchetti e promozioni consigliati su valutazione personalizzata"
- FAQ frequenza: rimosso "una volta al mese" → valutazione personalizzata in cabina

**Trattamenti viso** (`pulizia-viso.html`, `index.html`, `faq.html`)
- elenco riordinato sui 6 trattamenti reali: Pulizia Viso Base, Specifica, Profonda con ultrasuoni e Hydro, Vitamina C, Peptidi, Fili di Collagene
- Pulizia Specifica: "principi attivi e protocolli dedicati" → **maschera in alginato, fino all'80% delle impurità**
- eliminata la voce generica "protocolli specifici anti-age", sostituita dai tre trattamenti reali
- **Skin Test Viso** messo in evidenza come punto di partenza della consulenza, in entrambe le sedi
- fase finale: **applicazione della crema**, rimosso il riferimento al siero
- formule: solo seduta singola; eliminati abbonamenti e percorsi standard, percorsi su consulenza

**Pedicure**
- aggiunti **Pedicure SPA con scrub** e **Stretching Piedi (20 minuti)**, con relative opzioni nei form

**Ceretta**
- FAQ: **cera liposolubile e cera brasiliana**, eliminato il riferimento alla cera elastica

**FAQ: nuovi contenuti**
- nuova FAQ **"Qual è la policy di cancellazione degli appuntamenti?"** con il testo fornito dal cliente
- FAQ "Come cancellare o spostare" riallineata alla policy (prima diceva solo "avvisare 24 ore prima", senza conseguenze)
- **acconto 20%** per appuntamenti oltre le 2 ore, inserito sia in "Devo pagare per prenotare?" sia in "Quali metodi di pagamento accettate?", che prima affermavano "nessun pagamento anticipato"
- "Come posso prenotare?" riorganizzata in **due blocchi sede** distinti

### Verifiche fatte
- nessuna occorrenza residua di: `illimitat`, `cera elastica`, `Cellulisy`, `Balinese`, `Ayurvedico`, `Hot Stone`, `cera di soia`, `protocolli specifici anti-age`, `6–8 sedute`, `4–8 settimane`, `tutti i fototipi`
- bilanciamento `<div>` verificato su tutte le 11 pagine modificate

### Non applicato — in attesa di dati (vedi §4)
- **D1** numeri Carugate: **fisso ricevuto il 7 ottobre 2026 → `02 7709 5069`**, inserito in `site.js`, nel footer di tutte le 16 pagine, nella FAQ prenotazioni e nel pulsante di `sede-carugate.html`. Resta da avere il **WhatsApp di Carugate**
- **D2** pacchetti laser DONNA/UOMO: sezione segnalata in pagina con nota visibile
- **D3** pacchetti ceretta: nota visibile in pagina
- **D4** abbonamenti solarium attivi: note visibili in `solarium.html` e `offerte.html`
- **D5** prezzi dei servizi nuovi
- **D6** immagini T-Shape 2 e foto lettino C20

---

## 8. Lotto A — contatti per sede (applicato, in attesa dei numeri Carugate)

### Fonte di verità unica
`site.js` apre con l'oggetto **`window.LS_SEDI`**: nome, provincia, indirizzo, orari, telefono e WhatsApp delle due sedi. Modificando solo quelle righe si aggiornano, su tutte le 16 pagine, l'header, le CTA finali e il pulsante WhatsApp flottante. Per Carugate `tel` e `wa` sono `null`: finché restano così, la riga compare come "numero da inserire" e non è cliccabile.

### Comportamento
Tutte le CTA di contatto aprono una **modale di scelta sede** con, per ciascuna sede, un pulsante telefono dedicato e un pulsante WhatsApp dedicato, più indirizzo e orari. Era già presente in `site.js` una modale analoga, ma **non era collegata a nessun pulsante** e conteneva un solo numero.

Prima: 49 link `wa.me` e 32 CTA "Chiama Ora" puntavano tutti al numero di Bregnano, su entrambe le sedi.
Dopo: nessun numero hardcoded nelle pagine. Fallback senza JavaScript: `contatti.html`.

### Eccezione: le pagine sede
Su `sede-bregnano.html` i pulsanti chiamano e scrivono **direttamente a Bregnano** (`Chiama Bregnano — 031 4682567`, `WhatsApp Bregnano — 347 398 3337`): su una pagina di sede la scelta sarebbe un passaggio inutile. Su `sede-carugate.html` i pulsanti restano in attesa dei numeri e per ora aprono la modale.

### Footer
La colonna "Love Sun Beauty Carugate" riportava i numeri di Bregnano su tutte le 16 pagine. Ora mostra `numero fisso da inserire` / `WhatsApp da inserire` evidenziati, così l'errore non può passare inosservato in pubblicazione.

### Verifica mancante
In questo ambiente non è disponibile né un server locale né Node, e il pannello di preview esegue i file locali come snapshot statici senza caricare `site.js`. **Il comportamento della modale va provato aprendo `index.html` nel browser** e cliccando "Chiama Ora": controllo di sintassi statico fatto (parentesi bilanciate), prova funzionale no.

---

## 9. Correzioni successive (stessa giornata)

Il primo passaggio sugli orari aveva coperto solo i blocchi in formato footer. Una seconda ricerca per **formato** (tabelle giorno-per-giorno, liste compatte, card sede) ha trovato altri blocchi rimasti ai vecchi orari o ai numeri di Bregnano:

| File | Blocco | Correzione |
|---|---|---|
| `chi-siamo.html` | card "Dove siamo" ×2 | orari aggiornati per entrambe le sedi; Carugate con il proprio fisso `02 7709 5069` (prima aveva quello di Bregnano) |
| `contatti.html` | `orari-table` ×2 | orari aggiornati; Carugate con il proprio fisso |
| `sede-bregnano.html` | tabella giorno-per-giorno | 8:30 Lun–Ven, Sab fino alle 19:00, Dom 9:00–15:00 |
| `sede-carugate.html` | tabella giorno-per-giorno | Ven 9:00–19:00, Sab 9:00–18:00 |
| `sede-carugate.html` | box contatti hero | fisso `02 7709 5069`, WhatsApp in attesa |
| `index.html` | box sede Carugate | fisso corretto; orari `Mar/Mer 9–20 · Gio 9–21 · Ven 9–19 · Sab 9–18` |
| `solarium.html` | badge di sede sulle card apparecchi | quadrifacciale → Solo Bregnano; esafacciale → 2 postazioni a Carugate; doccia STAND-UP → entrambe le sedi (prima solo Bregnano) |

**Lezione per il controllo finale (§10 del documento del cliente):** la stessa informazione è scritta in **formati diversi** nelle varie pagine (`Lun–Sab 9:00–21:00`, `Lunedì – Sabato · 9:00 – 21:00`, `<td>Lunedì</td><td>9:00 – 21:00</td>`, `Lun/Dom: Chiuso`). Cercare una sola stringa non basta: il controllo va fatto per formato, non per testo.

### Stato numeri
- Bregnano: `031 4682567` · WhatsApp `+39 347 3983337` — confermati, invariati
- Carugate: `02 7709 5069` — inserito ovunque
- Carugate WhatsApp: **in stand-by** su richiesta del cliente. Compare come `da inserire` evidenziato in `site.js`, footer ×16, card sede di `chi-siamo.html` e `contatti.html`, box hero e pulsante di `sede-carugate.html`

---

## 10. Pagina Contatti — riorganizzazione in due blocchi (punto 9 del documento)

Il passaggio precedente aveva solo **aggiornato i dati** dentro le card esistenti: la struttura restava quella vecchia, con informazioni in comune fra le due sedi. È proprio ciò che il cliente non vuole.

### Cosa è stato rimosso
La sezione **"Canali di contatto"** (3 card: Telefono, WhatsApp, Treatwell), che presentava:
- una card *Telefono* con i due numeri impilati, senza dire quale fosse di quale sede;
- una card *WhatsApp* con **un solo numero valido per entrambe** le sedi;
- il pulsante "Chiama ora" non collegato a niente.

Rimosso anche il CSS ormai inutilizzato (`.channels-grid`, `.channel-card`, `.btn-channel*`).

### Cosa c'è ora
Una sola sezione con **due blocchi nettamente distinti**, intestati `LOVESUN BREGNANO` e `LOVESUN CARUGATE`. Ciascun blocco contiene, e nulla è condiviso:

| | Bregnano | Carugate |
|---|---|---|
| Indirizzo | Via per Lazzate 7, 22070 Bregnano (CO) | Via del Ginestrino 16, 20061 Carugate (MI) |
| Mappa | iframe sede | iframe sede |
| Orari | Lun–Ven 8:30–21:00 · Sab 8:30–19:00 · Dom 9:00–15:00 | Mar/Mer 9:00–20:00 · Gio 9:00–21:00 · Ven 9:00–19:00 · Sab 9:00–18:00 · Lun e Dom chiuso |
| Fisso | 031 4682567 | 02 7709 5069 |
| WhatsApp | +39 347 398 3337 | in attesa |
| Pulsante Chiama | `tel:0314682567` | `tel:0277095069` |
| Pulsante WhatsApp | `wa.me/393473983337` | disattivato finché manca il numero |
| Prenota online | Treatwell Bregnano | Treatwell Carugate |

Su questa pagina i pulsanti chiamano e scrivono **direttamente**, senza passare dalla modale di scelta sede: la sede è già esplicita nel blocco.

Le sezioni successive sono state rinumerate (form contatto → 3, social → 4, trust bar → 5, CTA finale → 6).

### Note
- I pulsanti "Prenota online" hanno ancora `href="#"`: servono gli **URL Treatwell** delle due sedi (erano già segnalati come da sostituire nella versione precedente della pagina).
- Il WhatsApp di Carugate resta in stand-by: il pulsante è presente ma disattivato, con etichetta esplicita.

---

## 11. Footer — link Privacy Policy e Cookie Policy

Nel footer le due voci erano **testo semplice**, non link, su tutte le 16 pagine. Lo stesso valeva per il "Privacy Policy" nel disclaimer sotto i form (11 pagine).

Gli URL reali sono stati letti dal sito in produzione (`lovesun.it/contatti/`): il cliente usa **iubenda**, ID documento `49388135`.

| Voce | URL | Stato |
|---|---|---|
| Privacy Policy | `https://www.iubenda.com/privacy-policy/49388135` | ✅ funziona — linkata nel footer ×16 e nei disclaimer form ×11 |
| Cookie Policy | `https://www.iubenda.com/privacy-policy/49388135/cookie-policy` | ❌ **"Documento inesistente"** |

### Il documento Cookie Policy non esiste su iubenda
Verificato aprendo l'URL: iubenda risponde *"Questo documento non è stato trovato. Se sei il titolare del sito, verifica le impostazioni nella tua dashboard di iubenda."* Lo stesso vale con i parametri usati dal sito in produzione (`?an=no&s_ck=false&newmarkup=yes`).

**Quindi il link "Cookie Policy" del sito attualmente online è rotto**: non è un problema introdotto da questo rifacimento.

Per non pubblicare un link a una pagina di errore, la voce è rimasta testo semplice con un commento HTML accanto che riporta l'URL corretto da attivare. Appena il documento è pubblicato dalla dashboard iubenda, basta sostituire lo `<span>` con l'`<a>` già scritto nel commento.

**Azione per il cliente:** pubblicare la Cookie Policy su iubenda (account del documento `49388135`). È anche un adempimento normativo, non solo un link mancante.

---

## 12. Rimozione dei contatti generici

Erano rimasti blocchi di contatto **non riferiti a una sede**, del tipo `Tel. 031 4682567 / WhatsApp +39 347 3983337`, in due punti:

| File | Blocco | Azione |
|---|---|---|
| `contatti.html` | lista accanto al form "Scrivici un messaggio" | lista rimossa. Il testo introduttivo ora rimanda ai numeri dei due blocchi sede qui sopra e chiede di indicare la sede nel modulo |
| `offerte.html` | `contact-list` accanto al form "Prenota la tua offerta" | numeri rimossi; restano `info@lovesun.it` e un rimando alla pagina Contatti |

### Numeri non più ripetuti nello stesso blocco
Nei due blocchi sede di `contatti.html` il numero era scritto due volte: una come riga di testo (`Telefono fisso — 031 4682567`) e una nell'etichetta del pulsante (`Chiama — 031 4682567`). Le righe di testo sono state rimosse: il numero vive nell'etichetta del pulsante, che è anche l'elemento cliccabile. Il pulsante WhatsApp ora riporta il numero nell'etichetta (`WhatsApp — 347 398 3337`), così il requisito del documento ("inserire WhatsApp" + "pulsante collegato al numero corretto") è soddisfatto da un solo elemento.

Resta in ogni blocco `info@lovesun.it`, che è effettivamente comune alle due sedi ed è l'unico contatto condiviso dichiarato come tale.

### Dove i contatti in chiaro restano, volutamente
- `chi-siamo.html`, card "Dove siamo": righe `Tel.` e `WhatsApp` per ciascuna sede, senza pulsanti. Non sono generiche — ogni card ha i propri numeri.
- footer di tutte le pagine: colonna Bregnano e colonna Carugate separate, ciascuna con i propri numeri.

---

## 13. Pagina Contatti — social e Treatwell collegati

URL letti dal sito in produzione (`lovesun.it`), non inventati.

### Social
| Canale | URL | Dove |
|---|---|---|
| Facebook | `facebook.com/lovesunsolarium/` | card social + footer (già presente) |
| Instagram | `instagram.com/lovesunsolarium/` | card social |
| TikTok | `tiktok.com/@lovesunsolariumofficial` | card social + **footer di tutte le 16 pagine** (era `href="#"`) |

Le etichette dei pulsanti riportavano handle inventati (`@lovesun_official`, "Love Sun Beauty Centro Estetico"): sostituite con gli handle reali.

### Treatwell — una pagina per sede
| Sede | URL |
|---|---|
| Bregnano | `treatwell.it/salone/lovesun-solarium-bregnano/` |
| Carugate | `treatwell.it/salone/lovesun-solarium-carugate/` |

Entrambe verificate: si aprono sulla scheda salone con l'elenco servizi e prenotazione. Collegate ai pulsanti "Prenota online" dei due blocchi sede e al box Treatwell della sezione social, dove il singolo pulsante generico è stato sdoppiato in **Prenota — Bregnano** e **Prenota — Carugate**.

Esiste anche `treatwell.it/salone/lovesun-solarium/` (senza sede): non usato, perché il documento chiede link per sede.

### ⚠️ Due Instagram diversi — serve una decisione
- il footer del sito in costruzione punta a **`instagram.com/lovesun.beauty`**
- il sito in produzione punta a **`instagram.com/lovesunsolarium`**

Non so quale sia l'account attivo, quindi **non ho modificato il footer**: la card social usa `lovesunsolarium` (quello in produzione), il footer resta su `lovesun.beauty`. Va uniformato dopo conferma del cliente.

### ⚠️ Numero di recensioni
Il sito dichiarava "419 recensioni verificate · media 4.9/5". Su Treatwell oggi: **2.290 recensioni Bregnano** e **1.036 Carugate**, media 4,9/5. Il box Treatwell è stato aggiornato con i dati reali per sede, ma il numero è destinato a crescere: **la trust bar e gli altri punti che citano "419 recensioni" vanno rivisti**, e sarebbe meglio evitare un numero fisso scritto a mano nel codice.

---

## 14. Interventi del 7 ottobre — secondo blocco

### Home — claim orari
`Orari flessibili / Aperto fino alle 21:00` → **`Aperti 7 giorni su 7 / Bregnano anche la domenica`**. Il vecchio claim era generico e, dopo l'aggiornamento degli orari, anche impreciso: Carugate chiude alle 21:00 solo il giovedì.

### Epilazione laser — sezione Risultati
Inserite le due foto fornite dal cliente al posto dei placeholder:
- `img/epil-laser/ascella-prima.webp` — Prima
- `img/epil-laser/ascella-dopo.webp` — Dopo

L'etichetta diceva *"Dopo 6 sedute"*, numero in contrasto con le 10/12 sedute del documento: sostituita con *"Dopo il ciclo di sedute"*. Le immagini sono in `img/epil-laser/` (senza spazio nel nome) perché le cartelle esistenti con spazi — `img/epil laser/` — richiederebbero URL-encoding e nel sito non è mai usato.

Resta la nota: **verificare il consenso scritto della cliente** prima della pubblicazione.

### CTA Treatwell per sede
| Dove | Prima | Ora |
|---|---|---|
| `sede-bregnano.html` | `<button>` senza link | link alla scheda Treatwell Bregnano |
| `sede-carugate.html` | `<button>` senza link | link alla scheda Treatwell Carugate |
| `offerte.html` (8 CTA) | `treatwell.it/` generico | `contatti.html`, dove si sceglie la sede |

Nota: `treatwell.it/salone/lovesun-solarium/` **reindirizza a Bregnano**, non è una pagina valida per entrambe le sedi. Per questo le CTA delle offerte passano dalla pagina Contatti invece di scegliere arbitrariamente una sede.

### Pagine servizi — CTA legate alla sede scelta
Nuovo blocco in `site.js`. In ogni blocco di prenotazione (card nella hero e form "Prenota") la select della sede ora governa i pulsanti **Treatwell** e **WhatsApp** dello stesso blocco:

- sede = Bregnano → Treatwell Bregnano, WhatsApp Bregnano
- sede = Carugate → Treatwell Carugate, WhatsApp Carugate (quando il numero sarà inserito)
- sede non scelta → Treatwell Bregnano, WhatsApp apre la modale di scelta sede

Funziona per rilevamento automatico: la select della sede è riconosciuta perché è l'unica che contiene entrambe le sedi fra le opzioni, e lo "scope" è il primo antenato che contiene anche le CTA. Nessun URL o numero scritto nelle pagine: tutto da `window.LS_SEDI`. Coperte 9 pagine servizi, 4 CTA ciascuna.

⚠️ **Da verificare nel browser**: come per la modale, in questo ambiente non è possibile eseguire il JavaScript.

### FAQ — rimosso il box contatti generico
Sidebar "Non hai trovato risposta?": i tre contatti in chiaro (`031 4682567`, `+39 347 3983337`, `info@lovesun.it`) sono stati sostituiti da un rimando alla pagina Contatti. Il pulsante WhatsApp resta e apre la modale di scelta sede.

---

## 15. CTA Treatwell slegate da una sede — differenziate

Richiesta: dove una CTA Treatwell non è legata a una sede precisa, non sceglierne una d'ufficio ma proporle entrambe.

### Pagina Offerte
Ogni offerta aveva un solo pulsante "Approfitta ora". Ora ogni card ha **due pulsanti affiancati**: `Prenota — Bregnano` e `Prenota — Carugate`, ciascuno sulla scheda Treatwell della propria sede. 4 offerte × 2 = 8 CTA, tutte con destinazione esplicita.

### Pagine servizi — niente più default a Bregnano
Prima, se la sede non era selezionata, il pulsante Treatwell portava comunque a Bregnano. Ora apre la **modale di scelta sede in versione Treatwell**: stessa modale dei contatti, con un pulsante "Prenota su Treatwell" per sede. Lo stesso vale per il WhatsApp.

`site.js` espone quindi due funzioni: `lsCallChoice()` (telefono/WhatsApp) e `lsTreatwellChoice()` (prenotazione), che riusano la stessa finestra cambiandone il contenuto.

### Etichette che seguono la scelta
Quando una sede viene selezionata, l'etichetta del pulsante diventa `Treatwell — Bregnano` o `Treatwell — Carugate`: la destinazione è leggibile prima del clic, non solo dopo.

### Due falsi positivi evitati
Lo script governa solo i pulsanti **senza destinazione propria**:
- un `<a href>` già scritto a mano verso una sede precisa non viene toccato (pagine sede);
- un `<button>` **avvolto** in un `<a href>` nemmeno — altrimenti il "Prenota Ora" delle pagine sede, che ha la classe `btn-treatwell-hero` solo per ragioni di stile, sarebbe stato dirottato su Treatwell.

---

## 16. Epilazione laser — pacchetti reali DONNA (8 ottobre 2026)

Ricevuta dal cliente la grafica "PACCHETTO LASER DONNA". La sezione "Formule e Pacchetti" conteneva pacchetti inventati in fase di wireframe (Singola Seduta / Pacchetto 6 Sedute / Total Body, tutti "Su richiesta"): sostituiti con i tre pacchetti reali.

| Pacchetto | Zone comprese | Prezzo |
|---|---|---|
| Inguine + Ascelle | inguine, ascelle | **59,00 € al mese** per 12 mesi |
| Inguine + Ascelle + Gamba Intera ⭐ | inguine, ascelle, gamba intera | **99,00 € al mese** per 12 mesi |
| Total Body | gamba intera, inguine, ascelle, braccia, baffetti, mento | **169,00 € al mese** per 12 mesi |

Il titolo della sezione è diventato **"Pacchetto Laser Donna"**, coerente con la grafica del cliente.

### Formula di pagamento
I pacchetti sono a **rata mensile per 12 mesi**, non a prezzo unico: è una formula diversa da quella ipotizzata nel wireframe ("tariffa agevolata a pacchetto"). La dicitura "al mese · per 12 mesi" è riportata su ogni card, perché l'impegno di durata è un'informazione che la cliente deve vedere prima di contattare il centro.

### ⚠️ Mancano i pacchetti UOMO
Il documento al punto 1 chiede esplicitamente **"Pacchetti DONNA" e "Pacchetti UOMO"**. È arrivata solo la grafica donna. In pagina è rimasta una nota visibile che lo segnala.

Resta inoltre da chiarire: le FAQ dicono che gli uomini fanno mediamente **12 sedute** contro le 10 delle donne — se i pacchetti uomo avranno una durata diversa dai 12 mesi, va verificata la coerenza fra le due informazioni.

---

## 17. Epilazione laser — pacchetti UOMO (8 ottobre 2026)

Arrivata anche la grafica "PACCHETTO LASER UOMO". **D2 è chiuso.**

| Pacchetto | Zone comprese | Prezzo |
|---|---|---|
| Petto + Schiena | petto, schiena | **119,00 € al mese** per 12 mesi |
| Petto + Schiena + Gambe | petto, schiena, gambe | **149,00 € al mese** per 12 mesi |

### Struttura della sezione
La sezione si chiama ora **"Pacchetti Laser"** e contiene due gruppi etichettati: *Pacchetto Laser Donna* (3 card) e *Pacchetto Laser Uomo* (2 card). La griglia uomo usa la variante `.pacchetti-grid.due` a 2 colonne: con 2 card dentro una griglia da 3 sarebbe rimasto un vuoto a destra, leggibile come "manca qualcosa".

Nessun badge "Più scelto" sui pacchetti uomo: il cliente non ha indicato quale sia il più venduto, e inventarlo sarebbe una scelta commerciale non sua.

### Nota sulla coerenza
Le FAQ dicono che gli uomini fanno mediamente **12 sedute** contro le 10 delle donne, ma entrambi i pacchetti durano **12 mesi**. Con una seduta ogni 4 settimane, 12 mesi corrispondono a circa 13 sedute: il conto regge per entrambi. Nessuna incoerenza da correggere.

---

## 18. Correzione — testo barrato sotto i prezzi

Nelle card dei pacchetti laser la dicitura "per 12 mesi" appariva **barrata**: avevo riusato la classe `.pacchetto-prezzo-old`, che nel wireframe serve per il prezzo pieno barrato accanto allo scontato e porta `text-decoration: line-through`.

Introdotta una classe dedicata `.pacchetto-nota` (stesso corpo e colore, senza barratura) e applicata a tutte le didascalie che **non** sono confronti di prezzo.

Lo stesso difetto era presente in altre pagine, in parte da prima e in parte in card aggiunte in questo lavoro:

| File | Didascalie corrette |
|---|---|
| `epilazione-laser.html` | "per 12 mesi" ×5 |
| `pulizia-viso.html` | "prima del trattamento", "per seduta", "dopo la consulenza" |
| `massaggi.html` | "per seduta", "dopo la consulenza" |
| `cerette.html` | "per area" |
| `nail-center.html` | "per seduta" ×2 |
| `pedicure.html` | "per seduta" |

Restano barrate — correttamente — solo le diciture che sono davvero confronti di prezzo: `invece di [prezzo singole]` in `cerette.html`, `nail-center.html` e `pedicure.html`. In `solarium.html` le didascalie avevano già un `text-decoration:none` inline e non sono state toccate.

---

## 19. Solarium — prezzi delle singole sedute (8 ottobre 2026)

Ricevuto il listino reale (fonte: scheda Treatwell). La card generica "Singola seduta — Su richiesta" non poteva reggere: il prezzo **cambia per apparecchio**. Sostituita con un listino.

| Seduta | Durata | Prezzo |
|---|---|---|
| Lettino Solare | 30 min | € 16 |
| Solarium Viso | 15 min | € 7 |
| Doccia Bassa Pressione | 15 min | € 10 |
| Doccia Alta Pressione | 15 min | € 12 |

La sezione si chiama ora "Prezzi e formule": prima il listino delle singole, poi la card del pacchetto 10 sedute. **Il prezzo del pacchetto resta da confermare.**

### ⚠️ Durate: due numeri diversi sulla stessa pagina
Le card degli apparecchi dicono **13 min** per lampade e docce e **15 min** per i lettini; il listino Treatwell dice **15 min** per viso e docce e **30 min** per il lettino.

Ipotesi più probabile: Treatwell indica la **durata dello slot di prenotazione** (cabina, vestizione), le card il **tempo di esposizione**. È lo stesso schema già accettato per i massaggi (45 min effettivi / 1 ora di cabina).

Non avendo conferma, non ho riscritto le durate delle card: ho aggiunto al listino la precisazione che i minuti indicati sono quelli della prenotazione e che il tempo di esposizione lo imposta lo staff. **Da verificare con il centro**: se i 13 minuti sono superati, vanno aggiornati anche le card apparecchi di `solarium.html` e l'elenco nelle FAQ.

---

## 20. Solarium — abbonamenti reali (8 ottobre 2026)

Ricevuta la grafica "ABBONAMENTO LAMPADE — senza scadenza, non nominativo". **D4 è chiuso.**

| Abbonamento | Sedute | Prezzo pieno | Prezzo |
|---|---|---|---|
| Viso con collagene | 10 visi | 70,00 € | **55,00 €** |
| Doccia bassa con collagene | 10 docce | 100,00 € | **80,00 €** |
| Doccia alta con collagene | 10 docce | 120,00 € | **95,00 €** |
| Lettino alta pressione | 10 lettini | 160,00 € | **135,00 €** |

I prezzi pieni barrati corrispondono esattamente a 10 × il prezzo della singola seduta del listino (7, 10, 12, 16 €): le due fonti sono coerenti. Qui la classe `abbonamento-prezzo-old` con barratura è usata correttamente, perché è davvero un confronto di prezzo.

### Due condizioni corrette
La card generica diceva *"Valide 6 mesi dall'acquisto"* e *"Cedibile a un familiare"*. La grafica dice **senza scadenza** e **non nominativo**, che è più ampio: non solo un familiare, chiunque. Entrambe le diciture sono state sostituite ed è stato aggiunto un titolo di gruppo che le riporta.

### Pulizia collegata
Nel form era rimasta l'opzione **"Abbonamento mensile"**, residuo della formula illimitata rimossa il 7 ottobre. Eliminata. Le opzioni del form elencano ora i quattro abbonamenti reali.

Griglia a 4 colonne (`.abbonamenti-grid.quattro`), che scende a 2 sotto i 1100px e a 1 sotto i 620px.

---

## 21. Offerte — sezione Abbonamenti rimossa (8 ottobre 2026)

Eliminata la sezione "ABBONAMENTI / Abbonamenti vantaggiosi" (Essential €79, Benessere €149, Sun Only €49): erano formule inventate in fase di wireframe, mai confermate. Rimosse anche le tre voci corrispondenti nel menu a tendina del form. Sezioni rinumerate (form → 4, trust bar → 5, CTA finale → 6).

## 22. DA FARE — lavoro aperto all'8 ottobre 2026

### Materiali ricevuti ma non ancora applicati
1. **Abbonamento lampade, variante Bregnano**: identica a quella pubblicata tranne l'ultima card, **Lettino BASSA pressione** invece di alta (stessi prezzi: 160,00 € → 135,00 €). Coerente con la dotazione: Bregnano ha il lettino ERGOLINE a bassa pressione, Carugate il C-VENTI ad alta. Serve quindi distinguere l'abbonamento lettino per sede in `solarium.html`.
2. **Pacchetti cerette** (chiude D3): 81 € → **55 €** (gamba intera, inguine, ascelle, sopracciglia, baffetti, braccia) · 53 € → **40 €** (gamba intera, inguine, ascelle) · 45 € → **36 €** (mezza gamba, inguine, ascelle) · 38 € → **28 €** (inguine, ascelle, baffetti, sopracciglia). Da inserire in `cerette.html`.

### PDF listino Carugate — NON leggibile in questo ambiente
`Carugate Listino Prezzi 2026-stampa.pdf` (9 MB) è un PDF **di sole immagini**: `pdftotext` restituisce zero righe e non sono disponibili né `pdftoppm`/`pdfimages` (poppler incompleto), né Python, né Node per fare OCR o rendering. Il contenuto non è stato letto, quindi i prezzi che mancano (viso, pedicure, massaggi: dato D5) **non sono stati inseriti**.

Alternative possibili: esportare il listino in un formato testuale, oppure inviare le pagine come immagini, oppure installare poppler completo.

---

## 23. Listino 2026 — letto e applicato (8 ottobre 2026)

### Come è stato letto il PDF
`Carugate Listino Prezzi 2026-stampa.pdf` è un PDF di sole immagini: `pdftotext` restituisce zero caratteri e mancano `pdftoppm`/`pdfimages`. Le due pagine sono state **estratte come JPEG** scansionando il file per i marcatori JPEG (FFD8…FFD9) con PowerShell, poi **schiarite ×7** con `System.Drawing`, perché il testo è stampato in tinta scurissima su fondo scuro.

### Solarium — listino rimosso, abbonamenti differenziati per sede
Su richiesta, il listino delle singole sedute è stato tolto: resta solo la sezione abbonamenti, divisa in due gruppi.

**Validi in entrambe le sedi**: Viso con collagene 70 → **55 €**, Doccia bassa con collagene 100 → **80 €**, Doccia alta con collagene 120 → **95 €**.

**Lettino, diverso per sede** (160 → **135 €** in entrambi i casi), con badge di sede:
- Bregnano → **lettino bassa pressione** (ERGOLINE)
- Carugate → **lettino alta pressione** (C-VENTI)

La distinzione segue la dotazione reale già pubblicata. Le due grafiche differivano solo in quella card.

### Durate solarium — risolto
Il listino 2026 dice *"viso e docce fino 15 min, lettino fino a 30 min"*: conferma i tempi di Treatwell e smentisce i **13 minuti** che il sito riportava in 8 punti fra `solarium.html` e `faq.html`. Tutti allineati a "fino a 15 / fino a 30 min".

### Listini inseriti
| Pagina | Contenuto |
|---|---|
| `cerette.html` | listino donna (10 zone) e uomo (4 zone), con doppio prezzo **cera tradizionale · brasiliana**; più i 4 pacchetti dalla grafica: 81→55 €, 53→40 €, 45→36 €, 38→28 € |
| `nail-center.html` | ricostruzioni, refill, semipermanente e manicure, decorazioni, rimozioni e riparazioni (28 voci), con le note su onicofagiche +5 € e refill dopo la quinta settimana +5 € |
| `pulizia-viso.html` | 6 trattamenti viso + 3 voci laminazione ciglia/sopracciglia |
| `pedicure.html` | 5 voci pedicure |
| `massaggi.html` | 7 massaggi da 50 min + 3 mirati (30/30/20 min) |

### ⚠️ Tre discrepanze fra listino e documento del cliente
1. **Durata massaggi**: il documento di ottobre chiedeva "45 minuti effettivi"; il listino 2026 dice **50 min**. Ho seguito il listino, che è il documento più recente, e allineato anche la FAQ. **Da confermare.**
2. **Hot Stone e massaggio con bambù**: il listino li riporta (65 € e 70 €), ma il documento chiedeva esplicitamente di **eliminare Hot Stone**. Ho seguito il documento: Hot Stone non compare, il bambù sì. **Da confermare.**
3. **Nomi dei trattamenti viso**: il listino usa "Splendour/Vitamina C/Cell Vital" e "Luxury Peptide", il documento "Trattamento Vitamina C" e "Trattamento Peptidi". Nelle card descrittive restano i nomi del documento, nel listino quelli commerciali del centro.

### Dato in più trovato nel listino
Il retro del listino riporta, per Carugate: **02 77095069** e **+39 331 1093564**. Il secondo è un numero nuovo, mai visto prima: potrebbe essere il WhatsApp di Carugate, ma il listino non lo dichiara. **Non è stato inserito**: serve conferma.

---

## 24. Cerette — listino prezzi rimosso (8 ottobre 2026)

Su richiesta, il listino per zona (donna 10 voci, uomo 4 voci, con doppio prezzo tradizionale/brasiliana) è stato tolto dalla pagina.

Al suo posto **l'elenco delle zone senza prezzi**, diviso in Donna e Uomo e costruito sulle zone reali del listino 2026 — non più sulle aree inventate in fase di wireframe ("bikini integrale", "dita dei piedi", "area personalizzata"). La distinzione fra cera tradizionale e brasiliana resta nel testo introduttivo, senza cifre.

Rimosso anche il CSS `.listino-*` rimasto inutilizzato su questa pagina.

**Restano i 4 pacchetti** (81→55 €, 53→40 €, 45→36 €, 38→28 €): sono le promozioni dalla grafica del cliente, non un listino, e la richiesta precedente era di pubblicarle.

---

## 25. Rifiniture ai listini (8 ottobre 2026)

### Tag e titoli: non sono più "formule"
Le sezioni erano etichettate come al tempo del wireframe, quando contenevano pacchetti ipotetici. Ora contengono listini, e l'intestazione lo dice:

| Pagina | Prima | Ora |
|---|---|---|
| `nail-center.html` | Formule e Pacchetti · "Scegli il trattamento più adatto a te" | **Listino · "Prezzi del Nail Center"** |
| `pulizia-viso.html` | Formule · "Scegli il trattamento più adatto" | **Listino · "Prezzi dei trattamenti viso"** |
| `pedicure.html` | Formule · "Scegli il trattamento più adatto" | **Listino · "Prezzi della pedicure"** |
| `massaggi.html` | Formule · "Scegli la durata e la formula" | **Listino · "Prezzi dei massaggi"** |

Rinominati anche i divisori di sezione da "PACCHETTI" a "LISTINO".

### Hot Stone reintegrato
Aggiunto al listino massaggi (50 min, **65 €**). Per coerenza è tornato anche fra le card dei trattamenti, insieme al **massaggio con bambù** (70 €) che il listino riporta e che non era mai stato pubblicato. Questo **supera l'istruzione del documento di ottobre** che chiedeva di eliminare Hot Stone: prevale l'indicazione più recente.

### Nail Center — quattro blocchi con prezzo di ingresso
Le 28 voci erano troppe da leggere di fila. Ora sono **quattro categorie**, ciascuna con il prezzo più basso in evidenza:

| Categoria | A partire da |
|---|---|
| Ricostruzioni | 65 € |
| Refill | 55 € |
| Semipermanente e manicure | 20 € |
| Decorazioni | 5 € |

Le voci di decorazione simili sono state accorpate (decori classici, Swarovski e french elaborata stanno su una riga sola, tutte "da 5 €"). **Rimozioni e riparazioni** non sono più un elenco: una riga di testo dice che hanno un costo a parte a partire da 5 € e che la riparazione entro le due settimane è gratuita.

### Menu a tendina dei form — trattamenti reali
In tutte le pagine servizi il menu "tipo di trattamento" conteneva voci inventate in fase di wireframe (es. "Trattamento anti-acne", "Percorso 4 sedute", "Nail art", "Total body"). Ora elenca i trattamenti reali, con il prezzo dove aiuta a scegliere:

- **pulizia-viso**: Skin Test + 6 trattamenti + 3 laminazioni
- **pedicure**: 5 voci di listino + Stretching Piedi
- **massaggi**: 8 massaggi da 50 min + 3 mirati, con durata
- **cerette**: 10 zone donna, 3 uomo, più "Pacchetto cerette"
- **nail-center**: le 4 categorie con "da …" + rimozione/riparazione
- **epilazione-laser**: i 5 pacchetti reali donna/uomo + zona singola + consulenza
- **trattamenti-corpo**: T-Shape 2 corpo e viso + 7 voci di listino corpo
- **pressoterapia**: aggiunte le due sedute singole (25 € e 45 €) accanto ai pacchetti

---

## 26. Form semplificati e Nail Center ridisegnato (8 ottobre 2026)

### Campo "tipo di trattamento" rimosso da tutti i form
Eliminato il menu a tendina di selezione del trattamento in **17 form** su 12 pagine, incluse `offerte.html` ("Offerta richiesta") e `pressoterapia.html` ("Pacchetto di interesse").

Nei form resta: nome, email, telefono/WhatsApp, **sede preferita** e messaggio. La sede va mantenuta: è l'unico dato che non si può ricavare altrimenti, ed è ciò che governa le CTA Treatwell e WhatsApp del blocco (vedi §14).

Questo elimina anche un problema a monte: ogni menu andava aggiornato a mano a ogni variazione di listino, e nessuno se ne sarebbe ricordato.

### Nail Center — niente listino, quattro blocchi
Il listino dettagliato è stato sostituito da **quattro card** con il solo prezzo di ingresso, ciascuna con icona, categoria, cifra in evidenza e una riga che spiega da cosa dipende il prezzo:

| | A partire da |
|---|---|
| Ricostruzioni | **65 €** |
| Refill | **55 €** |
| Manicure e semipermanente | **20 €** |
| Decorazioni | **5 €** |

Sotto, una riga di testo raccoglie le condizioni: onicofagiche e refill dopo la quinta settimana + 5 €, rimozioni e riparazioni a partire da 5 €, riparazione entro due settimane gratuita, preventivo esatto in sede.

Sezione rinominata da "Listino / Prezzi del Nail Center" a **"Prezzi / Quanto costa"**, coerente con il fatto che non è più un listino. Rimosso il CSS `.listino-*` ormai inutilizzato su questa pagina.

---

## 27. Scelta sede: un canale per pulsante (8 ottobre 2026)

La finestra di scelta sede mostrava per ogni sede **sia** il telefono **sia** il WhatsApp, indipendentemente dal pulsante premuto: chi cliccava "Chiama Ora" si trovava davanti quattro pulsanti invece di due.

Ora la finestra ha tre modalità, tutte sulla stessa struttura:

| Pulsante premuto | Titolo | Cosa mostra |
|---|---|---|
| Chiama Ora | "Quale sede vuoi chiamare?" | solo i due numeri di telefono |
| WhatsApp | "A quale sede vuoi scrivere?" | solo i due numeri WhatsApp |
| Treatwell | "In quale sede vuoi prenotare?" | solo le due schede Treatwell |

`site.js` espone quindi `lsCallChoice()`, `lsWaChoice()` e `lsTreatwellChoice()`. Le etichette dei pulsanti nella finestra non ripetono più la parola "Chiama" o "WhatsApp", che è già nel titolo: mostrano direttamente il numero.

Nelle pagine, i 61 CTA WhatsApp puntano a `lsWaChoice` e i 41 CTA telefono a `lsCallChoice`. La distinzione è stata fatta sull'origine del markup: gli `<a>` nati da link `wa.me` e i pulsanti con classe `btn-wa` / `hbc-wa` / `hib-btn-wa` sono WhatsApp, i `<button>` con l'icona del telefono sono chiamate.
