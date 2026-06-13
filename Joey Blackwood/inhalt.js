/*
╔══════════════════════════════════════════════════════════════════╗
║   JOEY BLACKWOOD — INHALT, TEXTE & EINSTELLUNGEN                ║
║                                                                  ║
║   Hier kannst du ALLES anpassen:                                 ║
║   • Texte & Kontaktdaten                                         ║
║   • Sektionen ein- und ausschalten                               ║
║   • Reviews verwalten                                            ║
║                                                                  ║
║   WICHTIG: Lass die Anführungszeichen (' ') immer stehen.        ║
║   Ändere nur den Text ZWISCHEN den Anführungszeichen.            ║
║   Lass Kommas am Ende der Zeilen stehen.                         ║
╚══════════════════════════════════════════════════════════════════╝
*/

const INHALT = {

  /* ════════════════════════════════════════
     LAYOUT-SCHALTER
     true  = Sektion wird angezeigt
     false = Sektion wird ausgeblendet
  ════════════════════════════════════════ */
  layout: {
    zeige_uebermich:   true,   // Über mich Sektion
    zeige_services:    true,   // Services & Angebote
    zeige_zitat:       false,  // Das große Zitat in der Mitte
    zeige_anziehung:   true,   // Was mich anzieht
    zeige_reviews:     true,   // Kundenstimmen
    zeige_notiz:       true,   // Persönliche Notiz
    zeige_galerie:     true,   // Bildergalerie
  },

  /* ════════════════════════════════════════
     SEO — Suchmaschinenoptimierung
     Diese Felder helfen Google dich zu finden
  ════════════════════════════════════════ */
  seo: {
    titel:        'Joey Blackwood — Escort & Companion Berlin Kreuzberg',
    beschreibung: 'Joey Blackwood — diskreter Escort und Companion in Berlin Kreuzberg. Begleitung, Massage, Couples Experiences. Für Menschen, die sich nach echter Verbindung sehnen.',
    keywords:     'Escort Berlin, Escort Kreuzberg, männlicher Escort, Companion Berlin, Escort Service Berlin',
    url:          'https://joeyblackwood.de',
    bild:         'fotos/startseite-1.png',
  },

  /* ════════════════════════════════════════
     KONTAKT — deine echten Daten
  ════════════════════════════════════════ */
  kontakt: {
    whatsapp:     '491700000000',
    telegram:     '@JoeyBlackwoodEscort',
    email:        'kontakt@joeyblackwood.de',
    sms:          '+49 170 000 0000',
    antwortzeit:  'Beginne mit einer einfachen Nachricht. Ich antworte innerhalb von 12–24 Stunden. Absolute Diskretion ist selbstverständlich.',
  },

  /* ════════════════════════════════════════
     HERO — die Startseite ganz oben
  ════════════════════════════════════════ */
  hero: {
    ort:        'Berlin Kreuzberg',
    name1:      'Joey',
    name2:      'Blackwood',
    untertitel: 'Escort & Companion',
    tagline:    'Für Menschen, die sich nach körperlicher Nähe, prickelnder Spannung und außergewöhnlichen Erlebnissen sehnen.',
    button:     'Anfrage senden',
  },

  /* ════════════════════════════════════════
     ÜBER MICH
  ════════════════════════════════════════ */
  uebermich: {
    label:   'Über mich',
    titel1:  'Wer ich bin',
    absaetze: [
      'Ich lebe in Berlin Kreuzberg und begleite Menschen, die sich nach Aufmerksamkeit, Sinnlichkeit und einem Gegenüber sehnen, bei dem sie sich fallen lassen können.',
      'Viele beschreiben mich als ruhig, präsent und selbstbewusst. Ich genieße gute Gespräche genauso wie die Spannung, die entstehen kann, wenn Worte langsam überflüssig werden.',
      'Je nach Situation bin ich aufmerksam und zurückhaltend oder übernehme die Führung, wenn genau das gewünscht ist.',
      'Vielleicht suchst du einen stilvollen Begleiter für einen Abend. Vielleicht neugierige Nähe. Vielleicht ein Abenteuer, das noch lange in Erinnerung bleibt.',
    ],
    chemie_absaetze: [
      'Die ersten Minuten eines Treffens sind für mich genauso wichtig wie für dich. Deshalb nehmen wir uns Zeit, uns kennenzulernen und anzukommen.',
      'Sollte innerhalb der ersten 15 Minuten das Gefühl entstehen, dass die Chemie nicht stimmt oder die Erwartungen nicht zusammenpassen, kannst du das Treffen jederzeit beenden.',
      'In diesem Fall entstehen für dich <strong>keine Kosten.</strong>',
    ],
  },

  /* ════════════════════════════════════════
     SERVICES — Angebote
  ════════════════════════════════════════ */
  services: {
    label:  'Was ich anbiete',
    titel1: 'Services &',
    titel2: 'Erlebnisse',
    karten: [
      {
        nr:     'i.',
        titel1: 'Begleitung &',
        titel2: 'Gesellschaft',
        bild:   'fotos/service-begleitung.png',
        preis:  'ab 150 €/h',
        dauer:  'Min. 2 Stunden',
        absaetze: [
          'Ein Abend, der sich nicht wie Arbeit anfühlt — für keinen von uns. Ich begleite dich zu Dinner, Kultur, Events oder einfach durch die Stadt. Vollständig präsent, ohne Ablenkung.',
          'Auch Reisebegleitung innerhalb Deutschlands und Europas ist möglich.',
        ],
      },
      {
        nr:     'ii.',
        titel1: 'Massage &',
        titel2: 'Sinnlichkeit',
        bild:   'fotos/service-massage.png',
        preis:  'ab 130 €/h',
        dauer:  '60 – 120 Minuten',
        absaetze: [
          'Von klassischer Entspannung bis zur erotischen Massage — ich nehme mir Zeit. Kein Takt, kein Druck. Ich lerne deinen Körper kennen und bringe dich dahin, wo du ankommen möchtest.',
          'In meinen Räumen in Kreuzberg oder bei dir.',
        ],
      },
      {
        nr:     'iii.',
        titel1: 'Bondage &',
        titel2: 'Power Exchange',
        bild:   'fotos/service-bondage.png',
        preis:  'Auf Anfrage',
        dauer:  'Nach Absprache',
        absaetze: [
          'Vertrauen. Spannung. Kontrolle.',
          'Für Menschen, die neugierig auf Bondage, Power Exchange oder andere Formen bewusster Dynamik sind, biete ich einen Rahmen, in dem Kommunikation, Sicherheit und gegenseitiges Vertrauen an erster Stelle stehen.',
          '<em>Manchmal entsteht Intensität nicht durch das, was passiert. Sondern durch die Person, die die Situation führt.</em>',
        ],
      },
      {
        nr:     'iv.',
        titel1: 'Couples',
        titel2: 'Experiences',
        bild:   'fotos/service-couples.png',
        preis:  'ab 200 €/h',
        dauer:  'Für Paare',
        absaetze: [
          'Viele Paare schreiben mir, weil sie neugierig sind — auf etwas Neues, auf eine Fantasie, oder einfach darauf, wie es sich anfühlt, jemanden Dritten einzuladen.',
          'Manche haben eine ganz konkrete Vorstellung. Andere möchten erst schauen, was sich gut anfühlt und wohin der Abend sie führt. <em>Beides hat seinen Reiz.</em>',
          'Mir ist wichtig, dass wir offen miteinander sprechen. Der Rest ergibt sich meistens von selbst.',
        ],
      },
    ],
    fullservice: {
      label:  'Full Service',
      absaetze: [
        'Manche Begegnungen lassen sich schwer in Kategorien einordnen.',
        'Wenn du eine ganz bestimmte Vorstellung hast oder etwas Individuelles suchst, erzähl mir davon. Die interessantesten Abende folgen selten einem festen Ablauf.',
      ],
      button: 'Anfrage senden',
    },
  },

  /* ════════════════════════════════════════
     ZITAT — ausgeblendet (zeige_zitat: false)
  ════════════════════════════════════════ */
  zitat: {
    text:  'Die interessantesten Begegnungen beginnen oft genau dort, wo Menschen aufhören, sich zu verstellen.',
    autor: '— Joey Blackwood, Berlin',
  },

  /* ════════════════════════════════════════
     WAS MICH ANZIEHT
  ════════════════════════════════════════ */
  anziehung: {
    label:  'Was mich anzieht',
    titel1: 'Für mich hat Anziehung wenig',
    titel2: 'mit Perfektion zu tun.',
    absaetze: [
      'Viel wichtiger sind Persönlichkeit, Ausstrahlung und die Energie, die jemand mitbringt. Die Dinge, die einen Menschen wirklich interessant machen, lassen sich ohnehin nicht in einem Foto festhalten.',
      '<em>Wenn du dich fragst, ob du attraktiv genug bist, kann ich dir wahrscheinlich schon jetzt sagen: Du machst dir deutlich mehr Gedanken darüber als ich.</em>',
    ],
  },

  /* ════════════════════════════════════════
     REVIEWS — Kundenstimmen
  ════════════════════════════════════════ */
  reviews: {
    label:  'Stimmen',
    titel1: 'Was andere',
    titel2: 'berichten.',
    eintraege: [
      {
        text:   'Ich war nervös vor unserem ersten Treffen. Diese Nervosität war nach fünf Minuten verschwunden. Er ist genau so, wie er sich beschreibt — ruhig, präsent und auf eine sehr angenehme Art aufmerksam.',
        person: 'Sabine, 38 · Berlin',
        sterne: 5,
      },
      {
        text:   'Wir haben als Paar gebucht und wussten nicht ganz, was uns erwartet. Was wir bekommen haben, war besser als alles, was wir uns vorgestellt hatten. Professionell, warm, ohne jeden Druck.',
        person: 'Anonym · Hamburg',
        sterne: 5,
      },
      {
        text:   'Ein Abend, der noch lange nachwirkt. Nicht wegen dem, was passiert ist — sondern wegen dem Gefühl, vollständig gesehen und akzeptiert zu werden.',
        person: 'Maria, 45 · München',
        sterne: 5,
      },
      {
        text:   'Selten erlebt, dass jemand so präsent ist. Kein Blick aufs Handy, kein Gedanke woanders. Das klingt selbstverständlich — ist es nicht.',
        person: 'Anonym · Berlin',
        sterne: 5,
      },
    ],
  },

  /* ════════════════════════════════════════
     PERSÖNLICHE NOTIZ
  ════════════════════════════════════════ */
  notiz: {
    label: 'Ein paar Dinge über mich',
    absaetze: [
      'Ich tanze leidenschaftlich gerne, trainiere regelmäßig und verbringe so viel Zeit wie möglich draußen in der Natur.',
      'Ich mag gute Gespräche, spontane Abenteuer und Menschen, die neugierig geblieben sind.',
      'Vielleicht ist genau das der Grund, warum keine Begegnung der anderen gleicht.',
    ],
  },

  /* ════════════════════════════════════════
     GALERIE
  ════════════════════════════════════════ */
  galerie: {
    label:         'Einblicke',
    titel1:        'Selected',
    titel2:        'Moments',
    privat_button: 'Private Galerie →',
  },

  /* ════════════════════════════════════════
     FOOTER
  ════════════════════════════════════════ */
  footer: {
    hinweis: 'Berlin Kreuzberg · Diskret & vertraulich · Nur für Erwachsene (18+)',
  },

};
