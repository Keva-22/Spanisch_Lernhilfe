import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'questions-negation',
  title: 'Fragen & Verneinung',
  subtitle: '¿Qué? ¿Dónde? ¿Cuál? – Fragen stellen und verneinen mit no, nada, nadie, nunca, tampoco',
  grade: 5,
  area: 'grammar',
  cefr: 'A1',
  order: 10,
  prerequisites: ['present-regular'],
  keywords: ['Fragewörter', 'Fragen', 'qué', 'cuál', 'dónde', 'cuándo', 'por qué', 'porque', 'Verneinung', 'nada', 'nadie', 'nunca', 'tampoco', 'doppelte Verneinung'],

  summary: [
    {
      type: 'table',
      caption: 'Fragewörter',
      head: ['Spanisch', 'Deutsch'],
      rows: [
        ['¿qué?', 'was? welche/r/s?'],
        ['¿quién? / ¿quiénes?', 'wer?'],
        ['¿cuál? / ¿cuáles?', 'welche/r/s? (Auswahl)'],
        ['¿dónde? / ¿adónde? / ¿de dónde?', 'wo? / wohin? / woher?'],
        ['¿cuándo?', 'wann?'],
        ['¿cómo?', 'wie?'],
        ['¿cuánto/-a/-os/-as?', 'wie viel? wie viele?'],
        ['¿por qué?', 'warum?'],
      ],
    },
    {
      type: 'list',
      items: [
        'Fragewörter haben **immer einen Akzent**; Fragen beginnen mit **¿**.',
        '*¿por qué?* (warum) – *porque* (weil)',
        'Verneinung: **no** vor dem Verb. Mit *nada, nadie, nunca, tampoco* nach dem Verb → **doppelte Verneinung**: *No veo nada.*',
      ],
    },
  ],

  explanation: [
    {
      title: 'Fragen bilden',
      blocks: [
        {
          type: 'text',
          text: '**Ja/Nein-Fragen** haben dieselbe Wortstellung wie Aussagen – nur **¿ … ?** und die steigende Stimme zeigen die Frage: *¿Tienes hermanos?* Das Subjekt kann auch hinter dem Verb stehen: *¿Habla Ana inglés?*',
        },
        { type: 'text', text: '**W-Fragen:** Fragewort am Anfang, dann das Verb: *¿Dónde vives? ¿Qué hace tu padre?*' },
        {
          type: 'tip',
          text: 'Präpositionen stehen **vor** dem Fragewort: *¿De dónde eres? ¿Con quién vas? ¿A qué hora empieza?*',
        },
      ],
    },
    {
      title: 'Die Fragewörter',
      blocks: [
        {
          type: 'table',
          head: ['Fragewort', 'Deutsch', 'Beispiel'],
          rows: [
            ['¿qué?', 'was?', '*¿Qué haces?*'],
            ['¿quién? / ¿quiénes?', 'wer?', '*¿Quién es? ¿Quiénes son?*'],
            ['¿cuál? / ¿cuáles?', 'welche/r/s?', '*¿Cuál es tu número?*'],
            ['¿dónde?', 'wo?', '*¿Dónde vives?*'],
            ['¿adónde?', 'wohin?', '*¿Adónde vas?*'],
            ['¿de dónde?', 'woher?', '*¿De dónde eres?*'],
            ['¿cuándo?', 'wann?', '*¿Cuándo es tu cumpleaños?*'],
            ['¿cómo?', 'wie?', '*¿Cómo te llamas?*'],
            ['¿cuánto/-a/-os/-as?', 'wie viel/e?', '*¿Cuántos años tienes?*'],
            ['¿por qué?', 'warum?', '*¿Por qué estudias español?*'],
            ['¿a qué hora?', 'um wie viel Uhr?', '*¿A qué hora empieza la clase?*'],
          ],
        },
        {
          type: 'warning',
          text: '*cuánto* passt sich an das Nomen an: *¿Cuánto dinero? ¿Cuánta gente? ¿Cuántos años? ¿Cuántas hermanas?*',
        },
      ],
    },
    {
      title: '¿Qué? oder ¿Cuál?',
      blocks: [
        {
          type: 'list',
          items: [
            '*qué* + Nomen: *¿Qué libro lees? ¿Qué música escuchas?*',
            '*cuál* + *ser*, wenn man eine Angabe aus mehreren Möglichkeiten will (Name, Nummer, Adresse, Lieblings-…): *¿Cuál es tu dirección? ¿Cuál es tu color favorito?*',
            '*qué* + *ser*, wenn man eine Erklärung will: *¿Qué es un churro?*',
          ],
        },
        { type: 'warning', text: '~~¿Qué es tu número de teléfono?~~ → *¿Cuál es tu número de teléfono?*' },
      ],
    },
    {
      title: '¿Por qué? und porque',
      blocks: [
        {
          type: 'table',
          head: ['Form', 'Bedeutung'],
          rows: [
            ['*¿por qué?*', 'warum? – Frage: zwei Wörter, mit Akzent'],
            ['*porque*', 'weil – Antwort: ein Wort, ohne Akzent'],
          ],
        },
        { type: 'text', text: '*¿Por qué estudias español? – Porque me gusta.*' },
      ],
    },
    {
      title: 'Verneinung',
      blocks: [
        { type: 'text', text: '**no** steht direkt vor dem Verb (und vor Pronomen): *No hablo ruso. No me gusta.*' },
        {
          type: 'table',
          head: ['Wort', 'Deutsch', 'Beispiel'],
          rows: [
            ['*nada*', 'nichts', '*No como nada.*'],
            ['*nadie*', 'niemand', '*No conozco a nadie.*'],
            ['*nunca*', 'nie', '*No bebo nunca café. / Nunca bebo café.*'],
            ['*tampoco*', 'auch nicht', '*Yo no voy. – Yo tampoco.*'],
            ['*ni … ni*', 'weder … noch', '*No tengo ni perro ni gato.*'],
          ],
        },
        {
          type: 'text',
          text: '**Doppelte Verneinung:** Steht *nada, nadie, nunca* oder *tampoco* **nach** dem Verb, braucht man zusätzlich **no** davor: *No veo nada.* Steht es **vor** dem Verb, fällt *no* weg: *Nunca veo la tele. Nadie viene.*',
        },
      ],
    },
    {
      title: 'Unterschied zum Deutschen',
      blocks: [
        {
          type: 'list',
          items: [
            'Doppelte Verneinung ist im Spanischen **richtig**: *No veo nada.* = „Ich sehe nichts.“',
            '„kein“ heißt meist einfach **no**: *No tengo hermanos.* (Ich habe keine Geschwister.)',
            'Fragen beginnen mit **¿**, und die Präposition steht vor dem Fragewort: „Wo kommst du her?“ → *¿De dónde eres?*',
          ],
        },
      ],
    },
    {
      title: 'Typische Fehler',
      blocks: [
        { type: 'warning', text: '~~Veo nada.~~ → *No veo nada.*' },
        { type: 'warning', text: '~~Tengo no tiempo.~~ → *No tengo tiempo.*' },
        { type: 'warning', text: '~~¿Donde vives?~~ → *¿Dónde vives?* (Akzent)' },
        { type: 'warning', text: '~~¿Porqué?~~ → *¿Por qué?*' },
        { type: 'warning', text: '~~¿Qué es tu nombre?~~ → *¿Cuál es tu nombre?* – noch natürlicher: *¿Cómo te llamas?*' },
        { type: 'warning', text: '~~¿Cuántos personas?~~ → *¿Cuántas personas?*' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        { type: 'tip', text: '**Fragewort = Akzent** – auch in indirekten Fragen: *No sé dónde vive.*' },
        { type: 'tip', text: '**no … nada** ist wie ein Sandwich: *no* vor dem Verb, *nada/nadie/nunca* danach.' },
        { type: 'tip', text: '*¿por qué?* fragt (zwei Wörter + Akzent), *porque* antwortet (ein Wort).' },
      ],
    },
  ],

  examples: [
    { es: '¿De dónde eres? – Soy de Austria.', de: 'Woher kommst du? – Ich komme aus Österreich.' },
    { es: '¿Cuántos años tienes? – Tengo dieciséis.', de: 'Wie alt bist du? – Ich bin sechzehn.' },
    { es: '¿Qué haces los fines de semana?', de: 'Was machst du am Wochenende?' },
    { es: '¿Cuál es tu asignatura favorita?', de: 'Was ist dein Lieblingsfach?' },
    { es: '¿Por qué estudias español? – Porque me encanta.', de: 'Warum lernst du Spanisch? – Weil ich es liebe.' },
    { es: '¿Con quién vas al cine?', de: 'Mit wem gehst du ins Kino?' },
    { es: 'No hablo ruso.', de: 'Ich spreche kein Russisch.' },
    { es: 'No hay nada en la nevera.', de: 'Es ist nichts im Kühlschrank.' },
    { es: 'Nunca bebo café.', de: 'Ich trinke nie Kaffee.' },
    { es: 'No conozco a nadie en esta ciudad.', de: 'Ich kenne niemanden in dieser Stadt.' },
    { es: 'Yo no tengo hermanos. – Yo tampoco.', de: 'Ich habe keine Geschwister. – Ich auch nicht.' },
    { es: '¿A qué hora empieza la película?', de: 'Um wie viel Uhr beginnt der Film?' },
  ],

  exercises: [
    // ---------- leicht ----------
    {
      id: 'questions-negation-e1',
      level: 'easy',
      instruction: 'Ordne die Fragewörter zu.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['¿dónde?', 'wo?'],
            ['¿adónde?', 'wohin?'],
            ['¿de dónde?', 'woher?'],
            ['¿cuándo?', 'wann?'],
            ['¿quién?', 'wer?'],
            ['¿por qué?', 'warum?'],
          ],
          reason: 'Fragewörter tragen immer einen Akzent.',
        },
        {
          type: 'match',
          pairs: [
            ['¿cómo?', 'wie?'],
            ['¿cuánto?', 'wie viel?'],
            ['¿qué?', 'was?'],
            ['¿cuál?', 'welche/r/s?'],
            ['¿a qué hora?', 'um wie viel Uhr?'],
          ],
          reason: 'Mit diesen Fragewörtern kannst du fast alles erfragen.',
        },
      ],
    },
    {
      id: 'questions-negation-e2',
      level: 'easy',
      instruction: 'Wähle das passende Fragewort.',
      tasks: [
        { type: 'choice', prompt: '¿___ vives? – En Salzburgo.', options: ['Dónde', 'Adónde', 'Cuándo'], answer: 'Dónde', reason: 'Antwort ist ein Ort (wo?) → **dónde**.' },
        { type: 'choice', prompt: '¿___ te llamas? – Me llamo Leo.', options: ['Cómo', 'Qué', 'Cuál'], answer: 'Cómo', reason: 'Name erfragen → **¿Cómo te llamas?**' },
        { type: 'choice', prompt: '¿___ años tienes? – Quince.', options: ['Cuántos', 'Cuántas', 'Cuánto'], answer: 'Cuántos', reason: '*los años* (m. Pl.) → **cuántos**.' },
        { type: 'choice', prompt: '¿___ es tu cumpleaños? – El 3 de mayo.', options: ['Cuándo', 'Dónde', 'Qué'], answer: 'Cuándo', reason: 'Antwort ist ein Datum → **cuándo**.' },
        { type: 'choice', prompt: '¿___ es ese chico? – Es mi primo.', options: ['Quién', 'Qué', 'Cuál'], answer: 'Quién', reason: 'Frage nach einer Person → **quién**.' },
        { type: 'choice', prompt: '¿___ vas? – Al supermercado.', options: ['Adónde', 'Dónde', 'De dónde'], answer: 'Adónde', reason: 'Richtung (wohin?) → **adónde**.' },
        { type: 'choice', prompt: '¿___ eres? – De Viena.', options: ['De dónde', 'Dónde', 'Adónde'], answer: 'De dónde', reason: 'Herkunft (woher?) → **de dónde**.' },
        {
          type: 'choice',
          prompt: '¿___ estudias alemán? – Porque mi madre es de Berlín.',
          options: ['Por qué', 'Porque', 'Qué'],
          answer: 'Por qué',
          reason: 'Frage nach dem Grund → **por qué** (zwei Wörter, Akzent).',
        },
        { type: 'choice', prompt: '¿___ hermanas tienes? – Dos.', options: ['Cuántas', 'Cuántos', 'Cuánta'], answer: 'Cuántas', reason: '*las hermanas* (w. Pl.) → **cuántas**.' },
        { type: 'choice', prompt: '¿___ comes? – Una manzana.', options: ['Qué', 'Cuál', 'Quién'], answer: 'Qué', reason: 'Frage nach einer Sache → **qué**.' },
      ],
    },
    {
      id: 'questions-negation-e3',
      level: 'easy',
      instruction: 'Setze das passende Verneinungswort ein: *nada, nadie, nunca* oder *tampoco*.',
      tasks: [
        { type: 'gap', text: 'No como ___ por la mañana.', hint: 'nichts', answers: ['nada'], reason: 'nichts = **nada** (mit *no* vor dem Verb).' },
        { type: 'gap', text: 'No conozco a ___ aquí.', hint: 'niemand', answers: ['nadie'], reason: 'niemand = **nadie**; Person → *a nadie*.' },
        { type: 'gap', text: 'Mi abuelo ___ ve la tele.', hint: 'nie', answers: ['nunca'], reason: '*nunca* vor dem Verb → kein zusätzliches *no*.' },
        { type: 'gap', text: 'No me gusta el frío. – A mí ___.', hint: 'auch nicht', answers: ['tampoco'], reason: 'Zustimmung zu Negativem → **tampoco**.' },
        { type: 'gap', text: 'No hay ___ en la calle.', hint: 'niemand', answers: ['nadie'], reason: 'niemand = **nadie**.' },
        { type: 'gap', text: 'No vamos ___ al cine.', hint: 'nie', answers: ['nunca'], reason: '*nunca* nach dem Verb → *no* davor.' },
        { type: 'gap', text: 'No entiendo ___.', hint: 'nichts', answers: ['nada'], reason: 'nichts = **nada**.' },
        { type: 'gap', text: 'Yo no voy a la fiesta. – Nosotros ___.', hint: 'auch nicht', answers: ['tampoco'], reason: 'auch nicht = **tampoco**.' },
      ],
    },

    // ---------- mittel ----------
    {
      id: 'questions-negation-m1',
      level: 'medium',
      instruction: '*¿Qué?* oder *¿Cuál?* Wähle.',
      tasks: [
        { type: 'choice', prompt: '¿___ es tu número de teléfono?', options: ['Cuál', 'Qué'], answer: 'Cuál', reason: 'Angabe (Nummer) mit *ser* → **cuál**.' },
        { type: 'choice', prompt: '¿___ libro lees?', options: ['Qué', 'Cuál'], answer: 'Qué', reason: 'Fragewort + Nomen → **qué**.' },
        {
          type: 'choice',
          prompt: '¿___ es un “churro”? – Es un dulce típico de España.',
          options: ['Qué', 'Cuál'],
          answer: 'Qué',
          reason: 'Erklärung, Definition → **qué**.',
        },
        { type: 'choice', prompt: '¿___ es tu color favorito?', options: ['Cuál', 'Qué'], answer: 'Cuál', reason: 'Auswahl aus vielen Farben mit *ser* → **cuál**.' },
        { type: 'choice', prompt: '¿___ quieres beber?', options: ['Qué', 'Cuál'], answer: 'Qué', reason: 'Frage nach einer Sache → **qué**.' },
        { type: 'choice', prompt: '¿___ de estas dos camisetas prefieres?', options: ['Cuál', 'Qué'], answer: 'Cuál', reason: 'Auswahl aus bestimmten Dingen → **cuál**.' },
        { type: 'choice', prompt: '¿___ música escuchas?', options: ['Qué', 'Cuál'], answer: 'Qué', reason: 'Fragewort + Nomen → **qué**.' },
        { type: 'choice', prompt: '¿___ es tu dirección?', options: ['Cuál', 'Qué'], answer: 'Cuál', reason: 'Angabe (Adresse) mit *ser* → **cuál**.' },
      ],
    },
    {
      id: 'questions-negation-m2',
      level: 'medium',
      instruction: 'Ergänze das Fragewort – mit Akzent!',
      tasks: [
        { type: 'gap', text: '¿___ es tu profesor de español? – El señor Ruiz.', answers: ['quién'], reason: 'Person → **quién**.' },
        { type: 'gap', text: '¿___ cuesta el libro? – Doce euros.', answers: ['cuánto'], reason: 'Preis → **cuánto**.' },
        { type: 'gap', text: '¿___ vais en verano? – A Grecia.', answers: ['adónde', 'a dónde'], reason: 'Richtung → **adónde**.' },
        { type: 'gap', text: '¿A ___ hora empieza el partido? – A las ocho.', answers: ['qué'], reason: 'Uhrzeit → **¿A qué hora?**' },
        { type: 'gap', text: '¿Con ___ vives? – Con mis padres.', answers: ['quién'], reason: 'Person → *con* **quién**.' },
        { type: 'gap', text: '¿___ está la oficina de Correos? – En la plaza.', answers: ['dónde'], reason: 'Ort → **dónde**.' },
        { type: 'gap', text: '¿___ no vienes? – Porque estoy enfermo.', answers: ['por qué'], reason: 'Grund → **por qué**.' },
        { type: 'gap', text: '¿___ personas hay en tu clase? – Veinticinco.', answers: ['cuántas'], reason: '*las personas* (w. Pl.) → **cuántas**.' },
        { type: 'gap', text: '¿___ estás? – Muy bien, gracias.', answers: ['cómo'], reason: 'Befinden → **cómo**.' },
        { type: 'gap', text: '¿De ___ son tus padres? – De Colombia.', answers: ['dónde'], reason: 'Herkunft → *de* **dónde**.' },
      ],
    },

    // ---------- schwer ----------
    {
      id: 'questions-negation-h1',
      level: 'hard',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'Veo nada.', answers: ['No veo nada.'], reason: '*nada* nach dem Verb → **no** davor (doppelte Verneinung).' },
        { type: 'fix', wrong: '¿Donde vives?', answers: ['¿Dónde vives?'], reason: 'Fragewörter haben einen Akzent: **dónde**.' },
        { type: 'fix', wrong: '¿Porqué estudias español?', answers: ['¿Por qué estudias español?'], reason: 'Frage „warum“ → **por qué** (zwei Wörter, Akzent).' },
        { type: 'fix', wrong: '¿Qué es tu número de móvil?', answers: ['¿Cuál es tu número de móvil?'], reason: 'Angabe mit *ser* → **cuál**.' },
        { type: 'fix', wrong: '¿Cuántos personas hay en tu familia?', answers: ['¿Cuántas personas hay en tu familia?'], reason: '*las personas* → **cuántas**.' },
        { type: 'fix', wrong: 'Tengo no tiempo hoy.', answers: ['No tengo tiempo hoy.', 'Hoy no tengo tiempo.'], reason: '**no** steht vor dem Verb.' },
        { type: 'fix', wrong: 'Conozco a nadie en Madrid.', answers: ['No conozco a nadie en Madrid.'], reason: '*nadie* nach dem Verb → **no** davor.' },
        { type: 'fix', wrong: '¿Dónde eres? – Soy de Graz.', answers: ['¿De dónde eres? – Soy de Graz.'], reason: 'Herkunft → **de dónde**.' },
        {
          type: 'fix',
          wrong: 'Yo nunca no como carne.',
          answers: ['Yo nunca como carne.', 'Yo no como nunca carne.', 'Yo no como carne nunca.'],
          reason: '*nunca* **vor** dem Verb → **kein** zusätzliches *no*.',
        },
      ],
    },
    {
      id: 'questions-negation-h2',
      level: 'hard',
      instruction: 'Bilde den Satz: Tippe die Wörter in der richtigen Reihenfolge an.',
      tasks: [
        { type: 'order', words: ['de', 'dónde', 'son', 'tus', 'abuelos'], de: 'Woher kommen deine Großeltern?', reason: 'Präposition vor dem Fragewort: *¿De dónde …?*' },
        { type: 'order', words: ['no', 'hay', 'nadie', 'en', 'casa'], de: 'Es ist niemand zu Hause.', reason: 'Doppelte Verneinung: *no hay nadie*.' },
        {
          type: 'order',
          words: ['por', 'qué', 'no', 'vienes', 'a', 'la', 'fiesta'],
          de: 'Warum kommst du nicht auf die Party?',
          reason: '*¿Por qué* + *no* + Verb …?',
        },
        { type: 'order', words: ['nunca', 'como', 'en', 'el', 'comedor'], de: 'Ich esse nie in der Mensa.', reason: '*nunca* vor dem Verb → ohne *no*.' },
      ],
    },
    {
      id: 'questions-negation-h3',
      level: 'hard',
      instruction: 'Übersetze ins Spanische.',
      tasks: [
        { type: 'translate', de: 'Wie alt bist du?', answers: ['¿Cuántos años tienes?'], reason: 'Alter → *¿Cuántos años tienes?*' },
        { type: 'translate', de: 'Woher kommst du?', answers: ['¿De dónde eres?', '¿De dónde vienes?'], reason: 'Herkunft → *¿De dónde eres?*' },
        { type: 'translate', de: 'Ich verstehe nichts.', answers: ['No entiendo nada.'], reason: 'Doppelte Verneinung: *no … nada*.' },
        { type: 'translate', de: 'Wohin gehst du?', answers: ['¿Adónde vas?', '¿A dónde vas?'], reason: 'Richtung → *adónde*; *ir*, tú → *vas*.' },
        {
          type: 'translate',
          de: 'Was ist deine Telefonnummer?',
          answers: ['¿Cuál es tu número de teléfono?', '¿Cuál es tu número?', '¿Cuál es tu teléfono?', '¿Cuál es tu número de móvil?'],
          reason: 'Angabe mit *ser* → **cuál**, nicht *qué*.',
        },
        { type: 'translate', de: 'Ich habe keine Geschwister.', answers: ['No tengo hermanos.'], reason: '„kein“ → *no* vor dem Verb.' },
        {
          type: 'translate',
          de: 'Warum lernst du Spanisch? – Weil ich nach Spanien fahren will. Ich spreche noch nicht gut, aber ich lerne jeden Tag.',
          answers: ['¿Por qué estudias español? – Porque quiero ir a España. Todavía no hablo bien, pero estudio todos los días.'],
          free: true,
          reason: '*¿Por qué?* fragt, *porque* antwortet; *todavía no* = noch nicht.',
        },
      ],
    },
  ],

  test: [
    { type: 'choice', prompt: '¿___ vas? – Al cine.', options: ['Adónde', 'Dónde', 'De dónde'], answer: 'Adónde', reason: 'Richtung → **adónde**.' },
    { type: 'choice', prompt: '¿___ es tu nombre?', options: ['Cuál', 'Qué', 'Quién'], answer: 'Cuál', reason: 'Angabe mit *ser* → **cuál**.' },
    { type: 'choice', prompt: '¿___ hermanos tienes?', options: ['Cuántos', 'Cuántas', 'Cuánto'], answer: 'Cuántos', reason: '*los hermanos* (m. Pl.) → **cuántos**.' },
    {
      type: 'gap',
      instruction: 'Ergänze das Fragewort – mit Akzent!',
      text: '¿___ estudias tanto? – Porque tengo un examen.',
      answers: ['por qué'],
      reason: 'Grund → **por qué**.',
    },
    { type: 'gap', instruction: 'Ergänze das Fragewort – mit Akzent!', text: '¿___ es esa chica? – Es mi hermana.', answers: ['quién'], reason: 'Person → **quién**.' },
    {
      type: 'gap',
      instruction: 'Setze das passende Verneinungswort ein.',
      text: 'No conozco a ___ en esta fiesta.',
      hint: 'niemand',
      answers: ['nadie'],
      reason: 'niemand = **nadie**.',
    },
    {
      type: 'gap',
      instruction: 'Setze das passende Verneinungswort ein.',
      text: 'No me gusta el té. – A mí ___.',
      hint: 'auch nicht',
      answers: ['tampoco'],
      reason: 'Zustimmung zu Negativem → **tampoco**.',
    },
    { type: 'fix', wrong: 'Tengo nada que hacer.', answers: ['No tengo nada que hacer.'], reason: '*nada* nach dem Verb → **no** davor.' },
    { type: 'order', words: ['cuándo', 'es', 'tu', 'cumpleaños'], de: 'Wann hast du Geburtstag?', reason: 'Fragewort + Verb + Subjekt.' },
    {
      type: 'translate',
      instruction: 'Übersetze ins Spanische.',
      de: 'Ich trinke nie Kaffee.',
      answers: ['Nunca bebo café.', 'No bebo nunca café.', 'No bebo café nunca.', 'Nunca tomo café.', 'No tomo nunca café.'],
      reason: '*nunca* vor dem Verb (ohne *no*) oder *no* … *nunca*.',
    },
  ],
}

export default unit
