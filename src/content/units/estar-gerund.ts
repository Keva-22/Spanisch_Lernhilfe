import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'estar-gerund',
  title: 'estar + Gerundio',
  subtitle: 'Estoy comiendo – was gerade jetzt passiert; Bildung des Gerundio',
  grade: 5,
  area: 'tenses',
  cefr: 'A1',
  order: 12,
  prerequisites: ['ser-estar-hay', 'present-stem-change'],
  keywords: ['estar', 'Gerundio', 'gerade', 'Verlaufsform', 'presente continuo', 'ando', 'iendo', 'leyendo', 'durmiendo'],

  summary: [
    {
      type: 'table',
      caption: 'estar + Gerundio',
      head: ['', 'estar', 'Gerundio'],
      rows: [
        ['yo', 'estoy', 'habl**ando**'],
        ['tú', 'estás', 'com**iendo**'],
        ['él/ella/usted', 'está', 'escrib**iendo**'],
        ['nosotros/-as', 'estamos', 'estudi**ando**'],
        ['vosotros/-as', 'estáis', 'le**yendo**'],
        ['ellos/ellas/ustedes', 'están', 'd**u**rm**iendo**'],
      ],
    },
    {
      type: 'table',
      caption: 'Gerundio',
      head: ['Infinitiv', 'Endung', 'Beispiele'],
      rows: [
        ['-ar', '-ando', '*hablar → hablando*'],
        ['-er / -ir', '-iendo', '*comer → comiendo, vivir → viviendo*'],
        ['Vokal + -er/-ir', '-yendo', '*leer → leyendo, oír → oyendo, ir → yendo*'],
        ['-ir mit Stammwechsel', 'e → i, o → u', '*pedir → pidiendo, dormir → durmiendo*'],
      ],
    },
    {
      type: 'list',
      items: [
        '**Wann?** Eine Handlung, die **gerade jetzt** abläuft: *Ahora estoy comiendo.*',
        '**Signalwörter:** *ahora, ahora mismo, en este momento*',
        'Pronomen vor *estar* oder ans Gerundio (mit Akzent): *Me estoy duchando. = Estoy duchándome.*',
      ],
    },
  ],

  explanation: [
    {
      title: 'Bildung',
      blocks: [
        {
          type: 'text',
          text: '*estar* im Presente + **Gerundio**. Das Gerundio bleibt **immer gleich** – es passt sich nicht an Person, Geschlecht oder Zahl an.',
        },
        {
          type: 'table',
          head: ['Infinitiv', 'Gerundio'],
          rows: [
            ['-ar: *hablar, estudiar, jugar*', '**-ando**: *hablando, estudiando, jugando*'],
            ['-er: *comer, hacer, volver*', '**-iendo**: *comiendo, haciendo, volviendo*'],
            ['-ir: *vivir, escribir, salir*', '**-iendo**: *viviendo, escribiendo, saliendo*'],
          ],
        },
        {
          type: 'text',
          text: '**Besondere Formen:** Vokal vor der Endung → **-yendo**: *leer → leyendo, oír → oyendo, traer → trayendo, ir → yendo*. Bei -ir-Verben mit Stammwechsel wird **e → i** und **o → u**: *pedir → pidiendo, decir → diciendo, venir → viniendo, dormir → durmiendo*.',
        },
        {
          type: 'tip',
          text: '-ar- und -er-Verben mit Stammwechsel haben ein **regelmäßiges** Gerundio: *jugar → jugando, pensar → pensando, volver → volviendo*.',
        },
      ],
    },
    {
      title: 'Wo stehen die Pronomen?',
      blocks: [
        {
          type: 'text',
          text: 'Reflexiv- und Objektpronomen stehen **vor** *estar* oder werden **an das Gerundio gehängt**. Beim Anhängen braucht das Gerundio einen **Akzent**: *Me estoy duchando. = Estoy duchándome.*',
        },
        {
          type: 'table',
          head: ['Pronomen davor', 'Pronomen angehängt'],
          rows: [
            ['*Me estoy duchando.*', '*Estoy duchándome.*'],
            ['*Se está vistiendo.*', '*Está vistiéndose.*'],
            ['*Nos estamos divirtiendo.*', '*Estamos divirtiéndonos.*'],
          ],
        },
      ],
    },
    {
      title: 'Verwendung & Signalwörter',
      blocks: [
        {
          type: 'list',
          items: [
            'Was **gerade jetzt** passiert: *¿Qué haces? – Estoy estudiando.*',
            'Etwas, das in diesem Zeitraum läuft: *Este mes estoy leyendo un libro muy interesante.*',
          ],
        },
        {
          type: 'table',
          caption: 'Signalwörter',
          head: ['Spanisch', 'Deutsch'],
          rows: [
            ['*ahora*', 'jetzt'],
            ['*ahora mismo*', 'gerade jetzt'],
            ['*en este momento*', 'in diesem Moment'],
            ['*este mes / esta semana*', 'diesen Monat / diese Woche'],
          ],
        },
        {
          type: 'text',
          text: 'Gewohnheiten stehen im **Presente**: *Normalmente como a las dos.* – nicht mit *estar* + Gerundio.',
        },
      ],
    },
    {
      title: 'Unterschied zum Deutschen',
      blocks: [
        {
          type: 'list',
          items: [
            'Das Deutsche hat keine eigene Verlaufsform; man sagt „gerade“: *Estoy comiendo.* = „Ich esse gerade.“ (wie englisch *I am eating*)',
            'Nur mit **estar**, nie mit *ser*: ~~Soy comiendo.~~',
            'Das Gerundio passt sich nicht an: *Las chicas están bailando.*',
          ],
        },
      ],
    },
    {
      title: 'Typische Fehler',
      blocks: [
        { type: 'warning', text: '~~Soy comiendo.~~ → *Estoy comiendo.*' },
        { type: 'warning', text: '~~Estoy leiendo.~~ → *Estoy leyendo.*' },
        { type: 'warning', text: '~~Está dormiendo.~~ → *Está durmiendo.* · ~~pediendo~~ → *pidiendo*' },
        { type: 'warning', text: '~~Estoy duchandome.~~ → *Estoy duchándome.* (Akzent beim Anhängen)' },
        { type: 'warning', text: '~~¿Qué estás hacer?~~ → *¿Qué estás haciendo?*' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        { type: 'tip', text: '**-ar → -ando, -er/-ir → -iendo** – Vokal davor → **-yendo**.' },
        { type: 'tip', text: '**„gerade jetzt“** → *estar* + Gerundio; **„normalerweise, immer“** → Presente.' },
        { type: 'tip', text: 'Pronomen ans Gerundio → **Akzent** auf die betonte Silbe: *duchándome, vistiéndose*.' },
      ],
    },
  ],

  examples: [
    { es: '¿Qué estás haciendo? – Estoy estudiando.', de: 'Was machst du gerade? – Ich lerne.' },
    { es: 'Mi madre está cocinando.', de: 'Meine Mutter kocht gerade.' },
    { es: 'Los niños están durmiendo.', de: 'Die Kinder schlafen gerade.' },
    { es: 'Estamos esperando el autobús.', de: 'Wir warten gerade auf den Bus.' },
    { es: '¿Estáis viendo la tele?', de: 'Seht ihr gerade fern?' },
    { es: 'Ahora mismo está lloviendo en Salzburgo.', de: 'Gerade regnet es in Salzburg.' },
    { es: 'Mi hermano está leyendo un cómic.', de: 'Mein Bruder liest gerade einen Comic.' },
    { es: 'Me estoy duchando, ¡espera!', de: 'Ich dusche gerade, warte!' },
    { es: '¿Con quién estás hablando?', de: 'Mit wem sprichst du gerade?' },
    { es: 'Este mes estoy aprendiendo a tocar el piano.', de: 'Diesen Monat lerne ich gerade Klavier spielen.' },
    { es: 'En este momento los alumnos están escribiendo un examen.', de: 'In diesem Moment schreiben die Schüler eine Prüfung.' },
    { es: 'Pablo está pidiendo una pizza.', de: 'Pablo bestellt gerade eine Pizza.' },
  ],

  exercises: [
    // ---------- leicht ----------
    {
      id: 'estar-gerund-e1',
      level: 'easy',
      instruction: 'Bilde das Gerundio.',
      tasks: [
        { type: 'gap', text: 'hablar → ___', answers: ['hablando'], reason: '-ar → **-ando**.' },
        { type: 'gap', text: 'comer → ___', answers: ['comiendo'], reason: '-er → **-iendo**.' },
        { type: 'gap', text: 'escribir → ___', answers: ['escribiendo'], reason: '-ir → **-iendo**.' },
        { type: 'gap', text: 'leer → ___', answers: ['leyendo'], reason: 'Vokal vor der Endung → **-yendo**.' },
        { type: 'gap', text: 'dormir → ___', answers: ['durmiendo'], reason: '-ir mit Stammwechsel: o → **u**.' },
        { type: 'gap', text: 'pedir → ___', answers: ['pidiendo'], reason: '-ir mit Stammwechsel: e → **i**.' },
        { type: 'gap', text: 'jugar → ___', answers: ['jugando'], reason: '-ar → **-ando** (kein Stammwechsel im Gerundio).' },
        { type: 'gap', text: 'ir → ___', answers: ['yendo'], reason: 'Unregelmäßig: *ir* → **yendo**.' },
        { type: 'gap', text: 'decir → ___', answers: ['diciendo'], reason: '-ir mit Stammwechsel: e → **i**: *diciendo*.' },
        { type: 'gap', text: 'estudiar → ___', answers: ['estudiando'], reason: '-ar → **-ando**.' },
      ],
    },
    {
      id: 'estar-gerund-e2',
      level: 'easy',
      instruction: 'Wähle die passende Form von *estar*.',
      tasks: [
        { type: 'choice', prompt: 'Yo ___ escuchando música.', options: ['estoy', 'está', 'estás'], answer: 'estoy', reason: '*yo* → **estoy**.' },
        { type: 'choice', prompt: '¿Tú ___ viendo la tele?', options: ['estás', 'está', 'estáis'], answer: 'estás', reason: '*tú* → **estás**.' },
        { type: 'choice', prompt: 'Mi padre ___ trabajando.', options: ['está', 'estoy', 'están'], answer: 'está', reason: '*él* → **está**.' },
        { type: 'choice', prompt: 'Nosotros ___ comiendo.', options: ['estamos', 'están', 'estáis'], answer: 'estamos', reason: '*nosotros* → **estamos**.' },
        { type: 'choice', prompt: '¿Vosotros ___ jugando?', options: ['estáis', 'estamos', 'están'], answer: 'estáis', reason: '*vosotros* → **estáis**.' },
        { type: 'choice', prompt: 'Mis amigos ___ bailando.', options: ['están', 'está', 'estamos'], answer: 'están', reason: '*ellos* → **están**.' },
        { type: 'choice', prompt: 'Usted ___ hablando muy rápido.', options: ['está', 'estás', 'están'], answer: 'está', reason: '*usted* → **está**.' },
        { type: 'choice', prompt: 'Ana y yo ___ estudiando.', options: ['estamos', 'están', 'estáis'], answer: 'estamos', reason: '*Ana y yo* = nosotras → **estamos**.' },
      ],
    },
    {
      id: 'estar-gerund-e3',
      level: 'easy',
      instruction: 'Ordne jedem Infinitiv das Gerundio zu.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['leer', 'leyendo'],
            ['dormir', 'durmiendo'],
            ['pedir', 'pidiendo'],
            ['ir', 'yendo'],
            ['decir', 'diciendo'],
            ['oír', 'oyendo'],
          ],
          reason: 'Besondere Gerundios: -yendo nach Vokal; e → i und o → u bei -ir-Verben.',
        },
      ],
    },

    // ---------- mittel ----------
    {
      id: 'estar-gerund-m1',
      level: 'medium',
      instruction: 'Was machen sie gerade? Bilde *estar* + Gerundio.',
      tasks: [
        { type: 'gap', text: 'Ahora mismo ___ los deberes.', hint: 'hacer, yo', answers: ['estoy haciendo'], reason: '*yo* → *estoy* + **haciendo**.' },
        { type: 'gap', text: 'Mi hermana ___ un libro.', hint: 'leer', answers: ['está leyendo'], reason: '*leer* → **leyendo**.' },
        { type: 'gap', text: 'Los niños ___ en el parque.', hint: 'jugar', answers: ['están jugando'], reason: '*ellos* → *están* + **jugando**.' },
        { type: 'gap', text: '¿Qué ___?', hint: 'comer, tú', answers: ['estás comiendo'], reason: '*tú* → *estás* + **comiendo**.' },
        { type: 'gap', text: 'El bebé ___.', hint: 'dormir', answers: ['está durmiendo'], reason: '*dormir* → **durmiendo** (o → u).' },
        { type: 'gap', text: 'Nosotros ___ a la profesora.', hint: 'escuchar', answers: ['estamos escuchando'], reason: '*nosotros* → *estamos* + **escuchando**.' },
        { type: 'gap', text: '¿___ la verdad?', hint: 'decir, vosotros', answers: ['estáis diciendo'], reason: '*decir* → **diciendo** (e → i).' },
        { type: 'gap', text: 'En este momento ___ mucho.', hint: 'llover', answers: ['está lloviendo'], reason: 'Wetter → *está* + **lloviendo**.' },
        { type: 'gap', text: 'Mis padres ___ la cena.', hint: 'preparar', answers: ['están preparando'], reason: '*ellos* → *están* + **preparando**.' },
        { type: 'gap', text: 'Los turistas ___ información.', hint: 'pedir', answers: ['están pidiendo'], reason: '*pedir* → **pidiendo** (e → i).' },
      ],
    },
    {
      id: 'estar-gerund-m2',
      level: 'medium',
      instruction: 'Pronomen davor oder angehängt? Wähle die gleichbedeutende Variante.',
      tasks: [
        {
          type: 'choice',
          prompt: 'Me estoy duchando. = Estoy ___.',
          options: ['duchándome', 'duchandome', 'me duchando'],
          answer: 'duchándome',
          reason: 'Angehängt → Akzent: **duchándome**.',
        },
        {
          type: 'choice',
          prompt: 'Se está vistiendo. = Está ___.',
          options: ['vistiéndose', 'vistiendose', 'se vistiendo'],
          answer: 'vistiéndose',
          reason: 'Angehängt → Akzent: **vistiéndose**.',
        },
        {
          type: 'choice',
          prompt: 'Te estás levantando. = Estás ___.',
          options: ['levantándote', 'levantandote', 'levantándose'],
          answer: 'levantándote',
          reason: '*tú* → *te*, angehängt mit Akzent: **levantándote**.',
        },
        {
          type: 'choice',
          prompt: 'Nos estamos divirtiendo. = Estamos ___.',
          options: ['divirtiéndonos', 'divirtiendonos', 'divertiéndonos'],
          answer: 'divirtiéndonos',
          reason: '*divertirse* → *divirtiendo* (e → i) + *nos* + Akzent.',
        },
        {
          type: 'choice',
          prompt: 'Estoy lavándome los dientes. = ___ los dientes.',
          options: ['Me estoy lavando', 'Estoy me lavando', 'Me estoy lavándome'],
          answer: 'Me estoy lavando',
          reason: 'Pronomen vor *estar* – nie zwischen *estar* und Gerundio, nie doppelt.',
        },
        {
          type: 'choice',
          prompt: 'Están acostándose. = ___.',
          options: ['Se están acostando', 'Están se acostando', 'Se están acostándose'],
          answer: 'Se están acostando',
          reason: 'Pronomen vor *estar*: **se están acostando**.',
        },
        {
          type: 'choice',
          prompt: 'Os estáis peinando. = Estáis ___.',
          options: ['peinándoos', 'peinandoos', 'peinándose'],
          answer: 'peinándoos',
          reason: '*vosotros* → *os*, angehängt mit Akzent: **peinándoos**.',
        },
        {
          type: 'choice',
          prompt: 'Ana se está maquillando. = Ana está ___.',
          options: ['maquillándose', 'maquillandose', 'maquillándole'],
          answer: 'maquillándose',
          reason: 'Reflexiv *se*, angehängt mit Akzent: **maquillándose**.',
        },
      ],
    },

    // ---------- schwer ----------
    {
      id: 'estar-gerund-h1',
      level: 'hard',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'Soy comiendo una pizza.', answers: ['Estoy comiendo una pizza.'], reason: 'Verlaufsform nur mit **estar**.' },
        { type: 'fix', wrong: 'Mi abuelo está leiendo el periódico.', answers: ['Mi abuelo está leyendo el periódico.'], reason: '*leer* → **leyendo**.' },
        { type: 'fix', wrong: 'El gato está dormiendo en el sofá.', answers: ['El gato está durmiendo en el sofá.'], reason: '*dormir* → **durmiendo**.' },
        {
          type: 'fix',
          wrong: 'Estoy duchandome, ¡espera!',
          answers: ['Estoy duchándome, ¡espera!', 'Me estoy duchando, ¡espera!'],
          reason: 'Angehängtes Pronomen → Akzent: **duchándome**.',
        },
        { type: 'fix', wrong: 'Nosotros están esperando el tren.', answers: ['Nosotros estamos esperando el tren.'], reason: '*nosotros* → **estamos**.' },
        { type: 'fix', wrong: '¿Qué estás hacer?', answers: ['¿Qué estás haciendo?'], reason: 'Nach *estar* steht das **Gerundio**: *haciendo*.' },
        { type: 'fix', wrong: 'Los chicos están jugiendo al fútbol.', answers: ['Los chicos están jugando al fútbol.'], reason: '-ar → **-ando**: *jugando*.' },
        { type: 'fix', wrong: 'Mi madre está pediendo un café.', answers: ['Mi madre está pidiendo un café.'], reason: '*pedir* → **pidiendo** (e → i).' },
        { type: 'fix', wrong: 'Ahora está llueviendo.', answers: ['Ahora está lloviendo.'], reason: '*llover* → **lloviendo** (kein Stammwechsel im Gerundio).' },
      ],
    },
    {
      id: 'estar-gerund-h2',
      level: 'hard',
      instruction: 'Bilde den Satz: Tippe die Wörter in der richtigen Reihenfolge an.',
      tasks: [
        {
          type: 'order',
          words: ['ahora', 'estoy', 'haciendo', 'los', 'deberes'],
          answers: ['estoy haciendo los deberes ahora'],
          de: 'Gerade mache ich die Hausaufgaben.',
          reason: '*estoy* + *haciendo*; *ahora* am Anfang oder Ende.',
        },
        { type: 'order', words: ['mis', 'padres', 'están', 'viendo', 'una', 'película'], de: 'Meine Eltern schauen gerade einen Film.', reason: '*están* + *viendo*.' },
        { type: 'order', words: ['me', 'estoy', 'vistiendo'], de: 'Ich ziehe mich gerade an.', reason: 'Pronomen vor *estar*.' },
        { type: 'order', words: ['con', 'quién', 'estás', 'hablando'], de: 'Mit wem sprichst du gerade?', reason: 'Präposition vor dem Fragewort: *¿Con quién …?*' },
      ],
    },
    {
      id: 'estar-gerund-h3',
      level: 'hard',
      instruction: 'Übersetze ins Spanische (*estar* + Gerundio).',
      tasks: [
        {
          type: 'translate',
          de: 'Ich lerne gerade.',
          answers: ['Estoy estudiando.', 'Ahora estoy estudiando.', 'Estoy estudiando ahora.'],
          reason: '„gerade“ → *estar* + Gerundio: *estoy estudiando*.',
        },
        { type: 'translate', de: 'Was machst du gerade?', answers: ['¿Qué estás haciendo?', '¿Qué estás haciendo ahora?'], reason: '*estás* + *haciendo*.' },
        { type: 'translate', de: 'Es regnet gerade.', answers: ['Está lloviendo.', 'Ahora está lloviendo.'], reason: '*llover* → *está lloviendo*.' },
        { type: 'translate', de: 'Die Kinder schlafen gerade.', answers: ['Los niños están durmiendo.'], reason: '*dormir* → *durmiendo*.' },
        { type: 'translate', de: 'Wir warten gerade auf den Bus.', answers: ['Estamos esperando el autobús.'], reason: '*esperar* (warten auf) ohne Präposition: *esperando el autobús*.' },
        { type: 'translate', de: 'Sie liest gerade. (ella)', answers: ['Está leyendo.'], reason: '*leer* → *leyendo*.' },
        {
          type: 'translate',
          de: 'Es ist acht Uhr. Meine Mutter trinkt gerade einen Kaffee, mein Vater duscht und ich frühstücke.',
          answers: ['Son las ocho. Mi madre está tomando un café, mi padre se está duchando y yo estoy desayunando.'],
          free: true,
          reason: 'Gleichzeitige Handlungen jetzt → *estar* + Gerundio; reflexiv: *se está duchando*.',
        },
      ],
    },
  ],

  test: [
    { type: 'gap', instruction: 'Bilde das Gerundio.', text: 'leer → ___', answers: ['leyendo'], reason: 'Vokal vor der Endung → **leyendo**.' },
    { type: 'gap', instruction: 'Bilde das Gerundio.', text: 'dormir → ___', answers: ['durmiendo'], reason: 'o → u: **durmiendo**.' },
    {
      type: 'gap',
      instruction: 'Bilde *estar* + Gerundio.',
      text: 'Mis hermanos ___ al fútbol.',
      hint: 'jugar',
      answers: ['están jugando'],
      reason: '*ellos* → **están jugando**.',
    },
    {
      type: 'gap',
      instruction: 'Bilde *estar* + Gerundio.',
      text: '¿Qué ___ vosotros?',
      hint: 'hacer',
      answers: ['estáis haciendo'],
      reason: '*vosotros* → **estáis haciendo**.',
    },
    { type: 'choice', prompt: 'Ahora mismo yo ___ trabajando.', options: ['estoy', 'soy', 'estás'], answer: 'estoy', reason: 'Verlaufsform mit **estar**; *yo* → *estoy*.' },
    {
      type: 'choice',
      prompt: 'Se está duchando. = Está ___.',
      options: ['duchándose', 'duchandose', 'se duchando'],
      answer: 'duchándose',
      reason: 'Angehängt → Akzent: **duchándose**.',
    },
    { type: 'fix', wrong: 'Mi hermana está dormiendo.', answers: ['Mi hermana está durmiendo.'], reason: '*dormir* → **durmiendo**.' },
    { type: 'fix', wrong: 'Somos estudiando para el examen.', answers: ['Estamos estudiando para el examen.'], reason: 'Verlaufsform mit **estar**: *estamos*.' },
    {
      type: 'match',
      instruction: 'Ordne das Gerundio zu.',
      pairs: [
        ['comer', 'comiendo'],
        ['vivir', 'viviendo'],
        ['hablar', 'hablando'],
        ['oír', 'oyendo'],
      ],
      reason: '-ar → -ando, -er/-ir → -iendo, nach Vokal → -yendo.',
    },
    {
      type: 'translate',
      instruction: 'Übersetze ins Spanische.',
      de: 'Ich esse gerade.',
      answers: ['Estoy comiendo.', 'Ahora estoy comiendo.'],
      reason: '„gerade“ → *estoy comiendo*.',
    },
  ],
}

export default unit
