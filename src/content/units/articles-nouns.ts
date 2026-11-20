import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'articles-nouns',
  title: 'Artikel & Nomen',
  subtitle: 'el/la, un/una, Geschlecht, Plural auf -s/-es und die Verschmelzung al/del',
  grade: 5,
  area: 'grammar',
  cefr: 'A1',
  order: 1,
  prerequisites: [],
  keywords: ['Artikel', 'Genus', 'Geschlecht', 'Plural', 'Mehrzahl', 'al', 'del', 'Nomen', 'Substantiv'],

  summary: [
    {
      type: 'table',
      caption: 'Artikel',
      head: ['', 'männlich', 'weiblich'],
      rows: [
        ['bestimmt, Singular', '**el** libro', '**la** casa'],
        ['bestimmt, Plural', '**los** libros', '**las** casas'],
        ['unbestimmt, Singular', '**un** libro', '**una** casa'],
        ['unbestimmt, Plural', '**unos** libros', '**unas** casas'],
      ],
    },
    {
      type: 'table',
      caption: 'Geschlecht & Plural',
      head: ['Regel', 'Beispiele'],
      rows: [
        ['-o → meist männlich', '*el libro, el chico*'],
        ['-a, -ción, -sión, -dad → weiblich', '*la casa, la canción, la televisión, la ciudad*'],
        ['Ausnahmen', '*el día, el mapa, el problema, el idioma · la mano, la foto, la moto, la radio*'],
        ['Vokal → **+ s**', '*el libro → los libros*'],
        ['Konsonant → **+ es**', '*la ciudad → las ciudades*'],
        ['-z → **-ces**', '*el lápiz → los lápices*'],
      ],
    },
    {
      type: 'list',
      items: [
        '**a + el = al**: *Voy al cine.* · **de + el = del**: *la casa del profesor*',
        '*a la, a los, a las, de la, de los, de las* bleiben getrennt.',
        'Gemischte Gruppen sind männlich: *los padres* = die Eltern, *los hermanos* = die Geschwister.',
      ],
    },
  ],

  explanation: [
    {
      title: 'Bestimmter und unbestimmter Artikel',
      blocks: [
        {
          type: 'text',
          text: 'Spanisch hat nur **zwei Geschlechter**: männlich und weiblich – es gibt kein Neutrum. Der Artikel richtet sich nach dem Geschlecht (Genus) und der Zahl (Numerus) des Nomens.',
        },
        {
          type: 'table',
          head: ['Artikel', 'Beispiele', 'Deutsch'],
          rows: [
            ['el / la', '*el chico, la chica*', 'der / die / das'],
            ['los / las', '*los chicos, las chicas*', 'die (Plural)'],
            ['un / una', '*un perro, una casa*', 'ein / eine'],
            ['unos / unas', '*unos amigos, unas amigas*', 'einige, ein paar'],
          ],
        },
        {
          type: 'tip',
          text: '**Gemischte Gruppen** sind immer männlich: *los chicos* = die Jungen **oder** die Jungen und Mädchen, *los padres* = die Eltern, *los hermanos* = die Geschwister.',
        },
      ],
    },
    {
      title: 'Welches Geschlecht?',
      blocks: [
        {
          type: 'list',
          items: [
            'Nomen auf **-o** sind meist **männlich**: *el libro, el vaso, el año*.',
            'Nomen auf **-a** sind meist **weiblich**: *la casa, la mesa, la playa*.',
            'Nomen auf **-ción, -sión, -dad, -tad** sind immer **weiblich**: *la canción, la televisión, la ciudad, la libertad*.',
            'Viele Nomen auf **-ma** kommen aus dem Griechischen und sind **männlich**: *el problema, el tema, el idioma, el programa*.',
            'Bei anderen Endungen (-e, Konsonant) hilft nur: **mit Artikel lernen** – *el coche, la noche, el árbol, la flor*.',
          ],
        },
        {
          type: 'table',
          caption: 'Wichtige Ausnahmen',
          head: ['männlich, obwohl auf -a', 'weiblich, obwohl auf -o'],
          rows: [
            ['*el día*', '*la mano*'],
            ['*el mapa*', '*la foto* (von *la fotografía*)'],
            ['*el problema, el idioma*', '*la moto* (von *la motocicleta*)'],
            ['*el sofá*', '*la radio*'],
          ],
        },
        {
          type: 'text',
          text: '**Personen** haben oft zwei Formen: *el chico – la chica, el profesor – la profesora*. Manche Nomen bleiben gleich, nur der Artikel ändert sich: *el/la estudiante, el/la turista, el/la cantante*.',
        },
      ],
    },
    {
      title: 'Plural',
      blocks: [
        {
          type: 'table',
          head: ['Endung', 'Plural', 'Beispiele'],
          rows: [
            ['Vokal', '+ **-s**', '*el libro → los libros, la clase → las clases*'],
            ['Konsonant', '+ **-es**', '*la ciudad → las ciudades, el profesor → los profesores*'],
            ['-z', '**-ces**', '*el lápiz → los lápices, la vez → las veces*'],
            ['-s in unbetonter Silbe', 'bleibt gleich', '*el lunes → los lunes, la crisis → las crisis*'],
          ],
        },
        {
          type: 'warning',
          text: '**Akzent beachten:** Durch die zusätzliche Silbe kann der Akzent wegfallen oder dazukommen: *la canción → las canciones · el autobús → los autobuses · el examen → los exámenes · el joven → los jóvenes*.',
        },
      ],
    },
    {
      title: 'al und del',
      blocks: [
        {
          type: 'text',
          text: 'Die Präpositionen **a** (nach, zu) und **de** (von, aus) verschmelzen mit dem Artikel **el**: **a + el = al**, **de + el = del**. Mit *la, los, las* passiert das nicht.',
        },
        {
          type: 'table',
          head: ['', '+ el', '+ la', '+ los / las'],
          rows: [
            ['a', '**al** cine', 'a la playa', 'a los / a las'],
            ['de', '**del** colegio', 'de la ciudad', 'de los / de las'],
          ],
        },
        {
          type: 'text',
          text: 'Mit dem Pronomen *él* (er) gibt es keine Verschmelzung: *Es el libro de él.*',
        },
      ],
    },
    {
      title: 'Unterschied zum Deutschen',
      blocks: [
        {
          type: 'list',
          items: [
            'Kein **Neutrum**: *das Buch* → **el libro**, *das Haus* → **la casa**.',
            'Das Geschlecht ist oft **anders** als im Deutschen: *der Tisch* → **la mesa**, *die Sonne* → **el sol**, *der Mond* → **la luna**, *das Auto* → **el coche**.',
            'Der bestimmte Artikel steht **öfter**: bei Wochentagen (*el lunes* = am Montag), Uhrzeiten (*a las ocho*), Vorlieben (*Me gusta el chocolate.*), allgemeinen Aussagen (*Los perros son fieles.*) und wenn man über jemanden spricht (*el señor García*).',
            'Kein *un/una* vor **otro, medio, cien, mil**: *otro día* (ein anderer Tag), *media hora* (eine halbe Stunde), *cien euros* (hundert Euro).',
          ],
        },
      ],
    },
    {
      title: 'Typische Fehler',
      blocks: [
        { type: 'warning', text: '~~la problema~~ → *el problema* · ~~el mano~~ → *la mano* · ~~la día~~ → *el día*' },
        { type: 'warning', text: '~~a el cine~~ → *al cine* · ~~de el profesor~~ → *del profesor*' },
        { type: 'warning', text: '~~los ciudads~~ → *las ciudades* (weiblich, Konsonant + -es)' },
        { type: 'warning', text: '~~los lápizes~~ → *los lápices* · ~~las canciónes~~ → *las canciones*' },
        { type: 'warning', text: '~~un otro libro~~ → *otro libro* · ~~una media hora~~ → *media hora*' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        { type: 'tip', text: '**Nomen immer mit Artikel lernen** – nicht *mesa*, sondern *la mesa*. Das spart später viele Fehler.' },
        {
          type: 'tip',
          text: 'Die **-ma-Wörter** (*el problema, el tema, el idioma, el programa*) sind „Gäste aus dem Griechischen“ – und männlich.',
        },
        { type: 'tip', text: '**Nur el verschmilzt:** a + el = **al**, de + el = **del** – alles andere bleibt, wie es ist.' },
      ],
    },
  ],

  examples: [
    { es: 'El libro está en la mesa.', de: 'Das Buch liegt auf dem Tisch.' },
    { es: 'Tengo un perro y dos gatos.', de: 'Ich habe einen Hund und zwei Katzen.' },
    { es: 'Las ciudades españolas son muy bonitas.', de: 'Die spanischen Städte sind sehr schön.' },
    { es: 'El problema es el idioma.', de: 'Das Problem ist die Sprache.' },
    { es: 'Voy al cine con mis amigos.', de: 'Ich gehe mit meinen Freunden ins Kino.' },
    { es: 'Es la casa del profesor.', de: 'Das ist das Haus des Lehrers.' },
    { es: 'Mis padres trabajan los lunes.', de: 'Meine Eltern arbeiten montags.' },
    { es: '¿Tienes un lápiz? – No, pero tengo dos bolígrafos.', de: 'Hast du einen Bleistift? – Nein, aber ich habe zwei Kugelschreiber.' },
    { es: 'La mano de Ana está fría.', de: 'Anas Hand ist kalt.' },
    { es: 'Escuchamos canciones en la clase de español.', de: 'Wir hören Lieder im Spanischunterricht.' },
    { es: 'Necesito otro cuaderno.', de: 'Ich brauche ein anderes Heft.' },
    { es: 'Mañana tengo un examen de matemáticas.', de: 'Morgen habe ich eine Mathe-Schularbeit.' },
  ],

  exercises: [
    // ---------- leicht ----------
    {
      id: 'articles-nouns-e1',
      level: 'easy',
      instruction: 'Wähle den passenden bestimmten Artikel.',
      tasks: [
        { type: 'choice', prompt: '___ libro', options: ['el', 'la', 'los', 'las'], answer: 'el', reason: '*libro* endet auf -o → männlich, Singular → **el**.' },
        { type: 'choice', prompt: '___ casas', options: ['el', 'la', 'los', 'las'], answer: 'las', reason: '*casa* ist weiblich, Plural → **las**.' },
        { type: 'choice', prompt: '___ problema', options: ['el', 'la', 'los', 'las'], answer: 'el', reason: '-ma-Wort aus dem Griechischen → männlich: **el problema**.' },
        { type: 'choice', prompt: '___ canción', options: ['el', 'la', 'los', 'las'], answer: 'la', reason: '-ción → immer weiblich: **la canción**.' },
        { type: 'choice', prompt: '___ día', options: ['el', 'la', 'los', 'las'], answer: 'el', reason: 'Ausnahme: *día* endet auf -a, ist aber männlich → **el día**.' },
        { type: 'choice', prompt: '___ mano', options: ['el', 'la', 'los', 'las'], answer: 'la', reason: 'Ausnahme: *mano* endet auf -o, ist aber weiblich → **la mano**.' },
        { type: 'choice', prompt: '___ profesores', options: ['el', 'la', 'los', 'las'], answer: 'los', reason: 'männlich (oder gemischt), Plural → **los**.' },
        { type: 'choice', prompt: '___ ciudad', options: ['el', 'la', 'los', 'las'], answer: 'la', reason: '-dad → immer weiblich: **la ciudad**.' },
        { type: 'choice', prompt: '___ mapas', options: ['el', 'la', 'los', 'las'], answer: 'los', reason: '*el mapa* ist männlich (Ausnahme) → **los mapas**.' },
        { type: 'choice', prompt: '___ fotos', options: ['el', 'la', 'los', 'las'], answer: 'las', reason: '*la foto* (von *la fotografía*) ist weiblich → **las fotos**.' },
      ],
    },
    {
      id: 'articles-nouns-e2',
      level: 'easy',
      instruction: 'Setze den Plural ein.',
      tasks: [
        { type: 'gap', text: 'el chico → los ___', answers: ['chicos'], reason: 'Vokal am Ende → **+ s**.' },
        { type: 'gap', text: 'la ciudad → las ___', answers: ['ciudades'], reason: 'Konsonant am Ende → **+ es**.' },
        { type: 'gap', text: 'el lápiz → los ___', answers: ['lápices'], reason: '-z wird zu **-ces**; der Akzent bleibt: *lápices*.' },
        { type: 'gap', text: 'la canción → las ___', answers: ['canciones'], reason: '+ es; der Akzent fällt weg: *canciones*.' },
        { type: 'gap', text: 'el profesor → los ___', answers: ['profesores'], reason: 'Konsonant am Ende → **+ es**.' },
        { type: 'gap', text: 'la clase → las ___', answers: ['clases'], reason: 'Vokal am Ende → **+ s**.' },
        { type: 'gap', text: 'el examen → los ___', answers: ['exámenes'], reason: '+ es; jetzt braucht das Wort einen Akzent: *exámenes*.' },
        { type: 'gap', text: 'el lunes → los ___', answers: ['lunes'], reason: 'Unbetonte Endsilbe auf -s → der Plural bleibt gleich: *los lunes*.' },
        { type: 'gap', text: 'el autobús → los ___', answers: ['autobuses'], reason: '+ es; der Akzent fällt weg: *autobuses*.' },
        { type: 'gap', text: 'la vez → las ___', answers: ['veces'], reason: '-z wird zu **-ces**: *veces*.' },
      ],
    },
    {
      id: 'articles-nouns-e3',
      level: 'easy',
      instruction: 'Ordne zu: zuerst links antippen, dann rechts.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['el lápiz', 'los lápices'],
            ['la canción', 'las canciones'],
            ['el examen', 'los exámenes'],
            ['la ciudad', 'las ciudades'],
            ['el día', 'los días'],
            ['la mano', 'las manos'],
          ],
          reason: 'Der Artikel behält sein Geschlecht; die Pluralendung hängt vom letzten Buchstaben ab.',
        },
        {
          type: 'match',
          pairs: [
            ['la mesa', 'der Tisch'],
            ['el coche', 'das Auto'],
            ['el sol', 'die Sonne'],
            ['la luna', 'der Mond'],
            ['el árbol', 'der Baum'],
            ['la leche', 'die Milch'],
          ],
          reason: 'Das spanische Geschlecht stimmt oft **nicht** mit dem deutschen überein – darum immer mit Artikel lernen.',
        },
      ],
    },

    // ---------- mittel ----------
    {
      id: 'articles-nouns-m1',
      level: 'medium',
      instruction: 'Setze **al**, **a la**, **a los**, **del** oder **de la** ein.',
      tasks: [
        { type: 'gap', text: 'Mañana voy ___ cine con Laura.', answers: ['al'], reason: '*a + el cine* → **al**.' },
        { type: 'gap', text: 'Los sábados vamos ___ playa.', answers: ['a la'], reason: '*la playa* ist weiblich → **a la** (keine Verschmelzung).' },
        { type: 'gap', text: 'Este es el coche ___ profesor.', answers: ['del'], reason: '*de + el profesor* → **del**.' },
        { type: 'gap', text: 'Es la mochila ___ chica nueva.', answers: ['de la'], reason: '*la chica* → **de la**.' },
        { type: 'gap', text: '¿Vienes ___ concierto el viernes?', answers: ['al'], reason: '*a + el concierto* → **al**.' },
        { type: 'gap', text: 'Salgo ___ colegio a las dos.', answers: ['del'], reason: '*salir de + el colegio* → **del**.' },
        { type: 'gap', text: 'Escribo un correo ___ directora.', answers: ['a la'], reason: '*la directora* → **a la**.' },
        { type: 'gap', text: 'Las fotos ___ viaje son preciosas.', answers: ['del'], reason: '*de + el viaje* → **del**.' },
        { type: 'gap', text: 'El domingo llamo ___ abuelos.', answers: ['a los'], reason: '*los abuelos* → **a los** – nur *el* verschmilzt.' },
        { type: 'gap', text: 'El libro es ___ biblioteca.', answers: ['de la'], reason: '*la biblioteca* → **de la**.' },
      ],
    },
    {
      id: 'articles-nouns-m2',
      level: 'medium',
      instruction: 'Bestimmter Artikel, unbestimmter Artikel oder kein Artikel? Wähle.',
      tasks: [
        {
          type: 'choice',
          prompt: 'Tengo ___ hermano y dos hermanas.',
          options: ['un', 'el', 'uno'],
          answer: 'un',
          reason: 'Ein Bruder, zum ersten Mal erwähnt → **un hermano**. *uno* steht nur ohne Nomen.',
        },
        {
          type: 'choice',
          prompt: '___ lunes tengo clase de música. (am Montag)',
          options: ['El', 'Un', 'En el'],
          answer: 'El',
          reason: '„am Montag“ → **el lunes** – mit Artikel, ohne Präposition.',
        },
        {
          type: 'choice',
          prompt: 'Me gusta mucho ___ chocolate.',
          options: ['el', 'un', 'kein Artikel'],
          answer: 'el',
          reason: 'Vorlieben mit *gustar* → bestimmter Artikel: **el chocolate**.',
        },
        {
          type: 'choice',
          prompt: 'Necesito ___ bolígrafo. (einen anderen)',
          options: ['otro', 'un otro', 'el otro'],
          answer: 'otro',
          reason: '„ein anderer“ = **otro** – ohne *un*. *el otro* hieße „den anderen“.',
        },
        {
          type: 'choice',
          prompt: 'Espera ___ hora, por favor. (eine halbe Stunde)',
          options: ['media', 'una media', 'la media'],
          answer: 'media',
          reason: '„eine halbe Stunde“ = **media hora** – ohne *una*.',
        },
        {
          type: 'choice',
          prompt: '___ perros son animales fieles. (allgemein: alle Hunde)',
          options: ['Los', 'Unos', 'kein Artikel'],
          answer: 'Los',
          reason: 'Allgemeine Aussage über alle Hunde → bestimmter Artikel: **los perros**.',
        },
        {
          type: 'choice',
          prompt: '___ señor García es mi vecino.',
          options: ['El', 'La', 'kein Artikel'],
          answer: 'El',
          reason: 'Wenn man **über** jemanden spricht, steht der Artikel: **el señor García**.',
        },
        {
          type: 'choice',
          prompt: 'Son ___ diez y media.',
          options: ['las', 'los', 'kein Artikel'],
          answer: 'las',
          reason: 'Uhrzeiten stehen mit **las** (*las horas*): *Son las diez y media.*',
        },
        {
          type: 'choice',
          prompt: 'Vivimos en ___ ciudad muy grande.',
          options: ['una', 'un', 'la'],
          answer: 'una',
          reason: 'Neue Information, „eine sehr große Stadt“ → **una ciudad** (*ciudad* ist weiblich).',
        },
        {
          type: 'choice',
          prompt: 'La entrada cuesta ___ euros. (hundert)',
          options: ['cien', 'un cien', 'ciento'],
          answer: 'cien',
          reason: '„hundert“ = **cien** – ohne *un*. *ciento* nur vor weiteren Zahlen: *ciento diez*.',
        },
      ],
    },

    // ---------- schwer ----------
    {
      id: 'articles-nouns-h1',
      level: 'hard',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'La problema es muy difícil.', answers: ['El problema es muy difícil.'], reason: '*problema* ist männlich: **el problema**.' },
        { type: 'fix', wrong: 'Voy a el parque con mi perro.', answers: ['Voy al parque con mi perro.'], reason: '*a + el* → **al**.' },
        {
          type: 'fix',
          wrong: 'Me gustan las canciónes de este grupo.',
          answers: ['Me gustan las canciones de este grupo.'],
          reason: 'Im Plural fällt der Akzent weg: *canciones*.',
        },
        { type: 'fix', wrong: 'Tengo dos lápizes en la mochila.', answers: ['Tengo dos lápices en la mochila.'], reason: '-z → **-ces**: *lápices*.' },
        { type: 'fix', wrong: 'El mano me duele mucho.', answers: ['La mano me duele mucho.'], reason: '*mano* ist weiblich: **la mano**.' },
        { type: 'fix', wrong: 'Es el coche de el director.', answers: ['Es el coche del director.'], reason: '*de + el* → **del**.' },
        { type: 'fix', wrong: 'Mañana tenemos dos examenes.', answers: ['Mañana tenemos dos exámenes.'], reason: 'Im Plural braucht *exámenes* einen Akzent.' },
        { type: 'fix', wrong: 'Necesito un otro cuaderno.', answers: ['Necesito otro cuaderno.'], reason: '„ein anderes“ = **otro** – ohne *un*.' },
        { type: 'fix', wrong: 'Los ciudades de España son bonitas.', answers: ['Las ciudades de España son bonitas.'], reason: '*ciudad* ist weiblich → **las ciudades**.' },
      ],
    },
    {
      id: 'articles-nouns-h2',
      level: 'hard',
      instruction: 'Übersetze ins Spanische – mit Artikel.',
      tasks: [
        { type: 'translate', de: 'die Städte', answers: ['las ciudades'], reason: '*ciudad* ist weiblich; Konsonant → *-es*: **las ciudades**.' },
        { type: 'translate', de: 'ein Problem', answers: ['un problema'], reason: '*problema* ist männlich → **un problema**.' },
        { type: 'translate', de: 'die Hände', answers: ['las manos'], reason: '*la mano* ist weiblich → **las manos**.' },
        { type: 'translate', de: 'Ich gehe ins Kino.', answers: ['Voy al cine.'], reason: '*ir a + el cine* → **al cine**.' },
        {
          type: 'translate',
          de: 'Das Handy des Lehrers ist neu.',
          answers: ['El móvil del profesor es nuevo.', 'El teléfono del profesor es nuevo.', 'El teléfono móvil del profesor es nuevo.'],
          reason: '*de + el profesor* → **del**; Handy = *el móvil* (Spanien).',
        },
        {
          type: 'translate',
          de: 'Am Montag habe ich Englisch.',
          answers: [
            'El lunes tengo inglés.',
            'Los lunes tengo inglés.',
            'El lunes tengo clase de inglés.',
            'Los lunes tengo clase de inglés.',
            'Tengo inglés el lunes.',
            'Tengo inglés los lunes.',
          ],
          reason: 'Wochentag mit Artikel und **ohne** Präposition: *el lunes* (am Montag) / *los lunes* (montags). Sprachen schreibt man klein: *inglés*.',
        },
        {
          type: 'translate',
          de: 'Wir haben einen Hund und zwei Katzen. Der Hund heißt Toby.',
          answers: ['Tenemos un perro y dos gatos. El perro se llama Toby.'],
          free: true,
          reason: '*un perro* (ein Hund), *dos gatos* (Plural, + s), *el perro* (der bestimmte Hund).',
        },
      ],
    },
  ],

  test: [
    {
      type: 'choice',
      instruction: 'Wähle den passenden bestimmten Artikel.',
      prompt: '___ idioma',
      options: ['el', 'la', 'los', 'las'],
      answer: 'el',
      reason: '-ma-Wort → männlich: **el idioma**.',
    },
    {
      type: 'choice',
      instruction: 'Wähle den passenden bestimmten Artikel.',
      prompt: '___ televisión',
      options: ['el', 'la', 'los', 'las'],
      answer: 'la',
      reason: '-sión → weiblich: **la televisión**.',
    },
    { type: 'gap', instruction: 'Setze den Plural ein.', text: 'la flor → las ___', answers: ['flores'], reason: 'Konsonant → **+ es**.' },
    { type: 'gap', instruction: 'Setze den Plural ein.', text: 'el pez → los ___', answers: ['peces'], reason: '-z → **-ces**: *peces*.' },
    { type: 'gap', instruction: 'Setze den Plural ein.', text: 'el joven → los ___', answers: ['jóvenes'], reason: 'Im Plural kommt ein Akzent dazu: *jóvenes*.' },
    {
      type: 'gap',
      instruction: 'Setze al, a la, del oder de la ein.',
      text: 'El sábado vamos ___ museo.',
      answers: ['al'],
      reason: '*a + el museo* → **al**.',
    },
    {
      type: 'gap',
      instruction: 'Setze al, a la, del oder de la ein.',
      text: 'Es la bicicleta ___ hermano de Marta.',
      answers: ['del'],
      reason: '*de + el hermano* → **del**.',
    },
    {
      type: 'fix',
      wrong: 'Mañana tengo dos examenes de inglés.',
      answers: ['Mañana tengo dos exámenes de inglés.'],
      reason: 'Plural mit Akzent: *exámenes*.',
    },
    {
      type: 'match',
      instruction: 'Ordne Singular und Plural zu.',
      pairs: [
        ['el mapa', 'los mapas'],
        ['la foto', 'las fotos'],
        ['el lápiz', 'los lápices'],
        ['la canción', 'las canciones'],
      ],
      reason: 'Der Artikel behält sein Geschlecht; die Pluralendung richtet sich nach dem letzten Buchstaben.',
    },
    {
      type: 'translate',
      instruction: 'Übersetze ins Spanische – mit Artikel.',
      de: 'die Tage',
      answers: ['los días'],
      reason: '*el día* ist männlich → **los días**.',
    },
  ],
}

export default unit
