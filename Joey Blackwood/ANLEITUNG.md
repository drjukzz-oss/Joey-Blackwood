# RAFAEL VOSS — DEINE KOMPLETTE ANLEITUNG

Kein Vorwissen nötig. Schritt für Schritt erklärt.

---

## INHALTSVERZEICHNIS

1. Website online stellen (einmalig, ~20 Minuten)
2. Texte ändern
3. Bilder austauschen
4. Sektionen ein- und ausschalten
5. Reviews verwalten
6. Kontaktdaten aktualisieren
7. SEO / Google optimieren
8. Eigene Domain verbinden
9. Wenn etwas nicht klappt

---

## 1. WEBSITE ONLINE STELLEN (einmalig)

Du brauchst nichts zu bezahlen. Du brauchst kein Programm außer einem Browser.

### Schritt 1 — GitHub Konto erstellen

1. Geh auf **github.com**
2. Klick auf „Sign up"
3. E-Mail eingeben, Passwort wählen, Nutzernamen wählen
4. Konto bestätigen (E-Mail kommt sofort)

### Schritt 2 — Repository erstellen (= Ordner für deine Website)

1. Wenn du eingeloggt bist, klick oben rechts auf das **+** Symbol
2. Klick auf „New repository"
3. Bei „Repository name" schreib: `rafael-voss`
4. Stell sicher dass „Public" ausgewählt ist
5. Klick auf den grünen Button „Create repository"

### Schritt 3 — Dateien hochladen

1. Du siehst jetzt eine leere Seite mit dem Text „uploading an existing file"
2. Klick auf **„uploading an existing file"**
3. Zieh alle Dateien aus deinem ZIP-Ordner in das Upload-Fenster
   - **Wichtig:** Auch die Unterordner `fotos/` und `images/` müssen rein
   - Du kannst den gesamten Ordnerinhalt auf einmal reinziehen
4. Scroll runter, klick auf den grünen Button **„Commit changes"**
5. Warte einen Moment — deine Dateien sind jetzt auf GitHub

### Schritt 4 — Netlify Konto erstellen und Website verbinden

1. Geh auf **netlify.com**
2. Klick auf „Sign up" → wähl „Sign up with GitHub"
3. GitHub-Login bestätigen
4. Du siehst jetzt das Netlify-Dashboard
5. Klick auf **„Add new site"** → **„Import an existing project"**
6. Wähl „GitHub"
7. Wähl dein Repository `rafael-voss`
8. Klick auf **„Deploy site"**
9. Warte ~1 Minute

✅ **Fertig! Deine Website ist jetzt online.**

Netlify gibt dir eine automatische Adresse wie `random-name-123.netlify.app`.
Unter dieser Adresse ist deine Seite sofort erreichbar.

---

## 2. TEXTE ÄNDERN

Alle Texte sind in der Datei **`inhalt.js`** — nur diese Datei musst du anfassen.

### So änderst du einen Text:

1. Geh auf **github.com** → dein Repository → klick auf `inhalt.js`
2. Klick auf das **Stift-Symbol** (Bleistift, oben rechts)
3. Suche den Text den du ändern willst (Strg+F zum Suchen)
4. Ändere den Text **zwischen** den Anführungszeichen `'...'`

   **Beispiel vorher:**
   ```
   tagline: 'Für Menschen, die sich nach körperlicher Nähe sehnen.',
   ```
   **Beispiel nachher:**
   ```
   tagline: 'Mein neuer Text hier.',
   ```

5. Scroll runter, klick auf den grünen Button **„Commit changes"**
6. Warte 30 Sekunden → deine Website hat sich aktualisiert

### ⚠️ Wichtige Regeln beim Texte ändern:

- Lass die Anführungszeichen `'...'` immer stehen
- Lass das Komma am Ende der Zeile stehen `,`
- Ändere NICHTS außer dem Text zwischen den Anführungszeichen
- Wenn du ein Apostroph brauchst (z.B. in „kann's"), schreib stattdessen: `kann\`s` (mit Backslash davor)

---

## 3. BILDER AUSTAUSCHEN

### So funktioniert es:

Die Bilder liegen im Ordner **`fotos/`** mit sprechenden Namen:

| Dateiname | Wo auf der Website |
|---|---|
| `startseite-1.png` | Hero-Bild links (erstes) |
| `startseite-2.png` | Hero-Bild rechts (zweites) |
| `uebermich-1.png` | Über mich — großes Bild |
| `uebermich-2.png` | Über mich — kleines Bild links |
| `uebermich-3.png` | Über mich — kleines Bild rechts |
| `service-begleitung.png` | Service-Panel: Begleitung |
| `service-massage.png` | Service-Panel: Massage |
| `service-bondage.png` | Service-Panel: Bondage |
| `service-couples.png` | Service-Panel: Couples |
| `anziehung-1.png` | Körper & Anziehung — großes Bild |
| `anziehung-2.png` | Körper & Anziehung — kleines Bild |
| `galerie-1.png` bis `galerie-6.png` | Galerie-Slideshow |

### Bild tauschen — so geht's:

1. Bereite dein neues Foto vor
2. **Benenne es exakt so wie die Datei die du ersetzen willst**
   - z.B. wenn du das Hero-Bild tauschen willst → dein neues Foto umbenennen zu `startseite-1.png`
3. Geh auf GitHub → dein Repository → klick auf den Ordner `fotos`
4. Klick auf **„Add file"** → **„Upload files"**
5. Lade dein umbenanntes Foto hoch
6. GitHub fragt dich was mit der alten Datei passieren soll → klick einfach „Commit changes"
7. Warte 30 Sekunden → Bild ist getauscht ✅

### Tipps für gute Fotos:

- Hochformat (Portrait) funktioniert am besten
- Mindestens 800×1000 Pixel
- Dateigröße unter 2 MB (sonst lädt die Seite langsam)
- Format: JPG oder PNG — beides funktioniert

---

## 4. SEKTIONEN EIN- UND AUSSCHALTEN

In der Datei `inhalt.js` findest du ganz oben den Bereich **LAYOUT-SCHALTER**.

```javascript
layout: {
  zeige_uebermich:   true,   // Über mich
  zeige_services:    true,   // Services & Angebote
  zeige_zitat:       true,   // Das große Zitat
  zeige_anziehung:   true,   // Körper & Anziehung
  zeige_reviews:     true,   // Kundenstimmen
  zeige_notiz:       true,   // Persönliche Notiz
  zeige_galerie:     true,   // Bildergalerie
},
```

**`true`** = Sektion wird angezeigt
**`false`** = Sektion wird ausgeblendet

### Beispiel — Reviews ausblenden:

Ändere:
```
zeige_reviews:     true,
```
zu:
```
zeige_reviews:     false,
```

Speichere mit „Commit changes" → Sektion ist weg.

---

## 5. REVIEWS VERWALTEN

### Wenn jemand ein Review schreibt:

1. Besucher klickt auf „Review schreiben"
2. Füllt das Formular aus
3. Du bekommst eine **WhatsApp-Nachricht** mit dem Review-Text

### Review veröffentlichen:

1. Öffne `inhalt.js` auf GitHub (Stift-Symbol)
2. Suche den Bereich `reviews:` → `eintraege:`
3. Kopiere einen bestehenden Review-Block:
   ```javascript
   {
     text:   'Der Text des Reviews hier.',
     person: 'Name, Alter · Stadt',
     sterne: 5,
   },
   ```
4. Füge ihn am Ende der Liste ein (vor der letzten `]`)
5. Ersetze Text, Name und Sterne mit dem neuen Review
6. „Commit changes" → Review ist live

### Review löschen:

Den gesamten `{ ... },` Block löschen und speichern.

---

## 6. KONTAKTDATEN AKTUALISIEREN

In `inhalt.js` im Bereich `kontakt:`:

```javascript
kontakt: {
  whatsapp:  '491700000000',  // Deine Nummer ohne + und ohne Leerzeichen
  telegram:  '@DeinUsername',
  email:     'deine@email.de',
  sms:       '+49 170 000 0000',
},
```

**WhatsApp-Nummer richtig eintragen:**
- Deine Nummer: `+49 170 1234567`
- So eintragen: `491701234567` (ohne +, ohne Leerzeichen)

---

## 7. SEO / GOOGLE OPTIMIEREN

In `inhalt.js` im Bereich `seo:`:

```javascript
seo: {
  titel:        'Rafael Voss — Escort & Companion Berlin Kreuzberg',
  beschreibung: 'Deine Beschreibung für Google...',
  keywords:     'Escort Berlin, Escort Kreuzberg, ...',
  url:          'https://deinedomain.de',
  bild:         'fotos/startseite-1.png',
},
```

**Tipps:**
- `titel` — erscheint in Google-Suchergebnissen. Maximal 60 Zeichen.
- `beschreibung` — der kurze Text unter dem Titel bei Google. Maximal 155 Zeichen.
- `keywords` — durch Komma getrennte Suchbegriffe
- `url` — deine echte Domain wenn du eine hast (sonst Netlify-Adresse lassen)

**Nach dem Eintragen:**
Geh auf **search.google.com/search-console** → füge deine URL ein → Google beginnt die Seite zu indexieren.

---

## 8. EIGENE DOMAIN VERBINDEN (optional, ~10€/Jahr)

Eine eigene Domain (z.B. `rafaelvoss.de`) macht die Seite professioneller und hilft bei Google.

### Domain kaufen:

- **IONOS** oder **Namecheap** — günstig, unkompliziert
- `.de` Domain kostet ca. 5–12€/Jahr
- `.com` Domain kostet ca. 10–15€/Jahr

### Domain mit Netlify verbinden:

1. In Netlify: Geh zu deiner Website → „Domain settings" → „Add custom domain"
2. Trag deine Domain ein (z.B. `rafaelvoss.de`)
3. Netlify zeigt dir zwei DNS-Einträge (sog. „Nameserver")
4. Geh zu deinem Domain-Anbieter (IONOS etc.) → DNS-Einstellungen
5. Trag die Netlify-Nameserver ein
6. Warte 1–24 Stunden → Domain ist verbunden

Netlify gibt dir automatisch ein kostenloses SSL-Zertifikat (das Schloss-Symbol in der Browser-Adressleiste).

---

## 9. WENN ETWAS NICHT KLAPPT

### Die Website zeigt meine Änderung nicht:
→ Warte 1–2 Minuten und lade die Seite neu (Strg+Shift+R)
→ Netlify braucht manchmal etwas um sich zu aktualisieren

### Ich habe ausversehen etwas kaputt gemacht:
→ Auf GitHub kannst du jede Änderung rückgängig machen
→ Geh zu deiner Datei → klick auf „History" → wähl eine ältere Version → „Restore"

### Ein Bild wird nicht angezeigt:
→ Prüfe ob der Dateiname exakt stimmt (Groß-/Kleinschreibung!)
→ Prüfe ob die Datei im Ordner `fotos/` liegt

### Ich brauche eine größere Änderung am Design:
→ Schick mir die `inhalt.js` und beschreibe was du willst
→ Ich schicke dir die geänderte Datei zurück → du lädst sie hoch

---

## ZUSAMMENFASSUNG — Die wichtigsten Dateien

| Datei | Was du damit machst |
|---|---|
| `inhalt.js` | Alle Texte, Kontaktdaten, Schalter |
| `fotos/` | Alle Bilder tauschen |
| `index.html` | NIE anfassen — das ist der Motor |
| `gallery.html` | Die private Galerie-Seite |
| `impressum.html` | Impressum — deine echten Daten eintragen |

---

*Bei Fragen — einfach fragen. Die Seite gehört dir.*
