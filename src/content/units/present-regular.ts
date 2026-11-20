import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'present-regular',
  title: 'Presente – regelmäßige Verben',
  subtitle: 'hablo, comes, vive … – Gegenwart der -ar-, -er- und -ir-Verben, Subjektpronomen, tú und usted',
  grade: 5,
  area: 'tenses',
  cefr: 'A1',
  order: 2,
  prerequisites: [],
  keywords: ['Presente', 'Gegenwart', 'Präsens', 'regelmäßig', 'Subjektpronomen', 'usted', 'vosotros', 'Personalpronomen'],

  summary: [
    {
      type: 'table',
      caption: 'Endungen',
      head: ['', 'hablar', 'comer', 'vivir'],
      rows: [
        ['yo', 'habl**o**', 'com**o**', 'viv**o**'],
        ['tú', 'habl**as**', 'com**es**', 'viv**es**'],
        ['él/ella/usted', 'habl**a**', 'com**e**', 'viv**e**'],
        ['nosotros/-as', 'habl**amos**', 'com**emos**', 'viv**imos**'],
        ['vosotros/-as', 'habl**áis**', 'com**éis**', 'viv**ís**'],
        ['ellos/ellas/ustedes', 'habl**an**', 'com**en**', 'viv**en**'],
      ],
    },
    {
      type: 'list',
      items: [
        '**Wann?** Gegenwart, Gewohnheiten, allgemeine Aussagen, feste Pläne (*Mañana trabajo.*)',
        '**Signalwörter:** *siempre, normalmente, a menudo, a veces, nunca, todos los días, los lunes*',
        'Das **Subjektpronomen** fällt meist weg – die Endung zeigt die Person: *Hablo español.*',
        '**usted / ustedes** (Sie) → Verb in der **3. Person**: *¿Habla usted alemán?*',
      ],
    },
  ],

  explanation: [
    {
      title: 'Subjektpronomen',
      blocks: [
        {
          type: 'table',
          head: ['', 'Singular', 'Plural'],
          rows: [
            ['1. Person', '*yo* – ich', '*nosotros / nosotras* – wir'],
            ['2. Person', '*tú* – du', '*vosotros / vosotras* – ihr'],
            ['3. Person', '*él* – er, *ella* – sie, *usted* – Sie', '*ellos* – sie (m./gemischt), *ellas* – sie (w.), *ustedes* – Sie'],
          ],
        },
        {
          type: 'text',
          text: 'Die Verbendung zeigt schon die Person. Deshalb lässt man das Pronomen meist **weg**. Man verwendet es nur zur Betonung oder zur Unterscheidung: *Yo estudio, pero él trabaja.*',
        },
        {
          type: 'tip',
          text: '*tú* (du) hat einen Akzent, *tu* (dein) nicht: *Tú tienes tu libro.* Genauso *él* (er) und *el* (der).',
        },
      ],
    },
    {
      title: 'Bildung',
      blocks: [
        {
          type: 'text',
          text: 'Infinitiv-Endung (**-ar, -er, -ir**) weg, Personalendung dazu: *habl-ar → habl-o*.',
        },
        {
          type: 'table',
          head: ['', '-ar', '-er', '-ir'],
          rows: [
            ['yo', '-o', '-o', '-o'],
            ['tú', '-as', '-es', '-es'],
            ['él/ella/usted', '-a', '-e', '-e'],
            ['nosotros/-as', '-amos', '-emos', '-imos'],
            ['vosotros/-as', '-áis', '-éis', '-ís'],
            ['ellos/ellas/ustedes', '-an', '-en', '-en'],
          ],
        },
        {
          type: 'tip',
          text: '-er- und -ir-Verben sind gleich – außer bei **nosotros** (*comemos – vivimos*) und **vosotros** (*coméis – vivís*).',
        },
        {
          type: 'list',
          items: [
            '-ar: *hablar, estudiar, trabajar, escuchar, mirar, bailar, cantar, comprar, tomar, necesitar, viajar, cocinar*',
            '-er: *comer, beber, leer, aprender, comprender, correr, vender*',
            '-ir: *vivir, escribir, abrir, recibir, subir, compartir*',
          ],
        },
      ],
    },
    {
      title: 'tú, vosotros, usted, ustedes',
      blocks: [
        {
          type: 'text',
          text: 'In Spanien unterscheidet man **du/ihr** (*tú, vosotros*) und **Sie** (*usted, ustedes*). *usted* und *ustedes* stehen mit dem Verb in der **3. Person**:',
        },
        {
          type: 'table',
          head: ['Anrede', 'Beispiel'],
          rows: [
            ['tú (du)', '¿Hablas inglés?'],
            ['vosotros/-as (ihr)', '¿Habláis inglés?'],
            ['usted (Sie, eine Person)', '¿Habla usted inglés?'],
            ['ustedes (Sie, mehrere Personen)', '¿Hablan ustedes inglés?'],
          ],
        },
        {
          type: 'text',
          text: 'In Spanien duzt man sehr schnell. *usted* verwendet man gegenüber älteren oder unbekannten Personen, im Geschäft oder bei Ämtern. In Lateinamerika sagt man statt *vosotros* immer *ustedes*.',
        },
      ],
    },
    {
      title: 'Verwendung & Signalwörter',
      blocks: [
        {
          type: 'list',
          items: [
            'Was jetzt gilt: *Vivo en Salzburgo.*',
            'Gewohnheiten: *Los sábados como en casa de mis abuelos.*',
            'Allgemeine Aussagen: *Los españoles cenan tarde.*',
            'Feste Pläne in naher Zukunft: *Mañana trabajo.*',
          ],
        },
        {
          type: 'table',
          caption: 'Signalwörter',
          head: ['Spanisch', 'Deutsch'],
          rows: [
            ['*siempre*', 'immer'],
            ['*normalmente*', 'normalerweise'],
            ['*a menudo*', 'oft'],
            ['*a veces*', 'manchmal'],
            ['*nunca*', 'nie'],
            ['*todos los días / cada día*', 'jeden Tag'],
            ['*los lunes*', 'montags'],
            ['*por la mañana / tarde / noche*', 'am Vormittag / Nachmittag / Abend'],
          ],
        },
      ],
    },
    {
      title: 'Unterschied zum Deutschen',
      blocks: [
        {
          type: 'list',
          items: [
            'Kein Pronomen nötig: „Wohnst du hier?“ → *¿Vives aquí?*',
            'Die Höflichkeitsform steht in der **3. Person Singular** (deutsch: „Sie wohnen“): *¿Dónde vive usted?*',
            'Fragen haben oft dieselbe Wortstellung wie Aussagen – nur die Satzmelodie und ¿ ? zeigen die Frage: *¿Hablas español?*',
            'Spanische Fragen und Ausrufe beginnen mit **¿** bzw. **¡**.',
          ],
        },
      ],
    },
    {
      title: 'Typische Fehler',
      blocks: [
        { type: 'warning', text: '**usted** mit der 2. Person: ~~¿Hablas usted alemán?~~ → *¿Habla usted alemán?*' },
        { type: 'warning', text: '**vosotros** ohne Akzent: ~~hablais, comeis, vivis~~ → *habláis, coméis, vivís*' },
        { type: 'warning', text: '**nosotros** bei -ir-Verben: ~~vivemos, escribemos~~ → *vivimos, escribimos*' },
        { type: 'warning', text: '**Akzent in der yo-Form:** Im Presente steht keiner – *hablo* (ich spreche), *habló* ist Vergangenheit (er sprach).' },
        { type: 'text', text: 'Das Pronomen nicht in jedem Satz wiederholen – das klingt ungewohnt: *Vivo en Graz y estudio en Salzburgo.*' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        {
          type: 'tip',
          text: '**Vokal tauschen:** -ar-Verben haben ein **a** in der Endung (*hablas, habla*), -er/-ir-Verben ein **e** (*comes, vive*).',
        },
        { type: 'tip', text: '**vosotros** hat immer einen Akzent: *-áis, -éis, -ís*.' },
        { type: 'tip', text: '**usted = er/sie-Form**: Stell dir vor, du sprichst „über“ die Person: *¿Habla usted …?*' },
      ],
    },
  ],

  examples: [
    { es: 'Hablo alemán, inglés y un poco de español.', de: 'Ich spreche Deutsch, Englisch und ein bisschen Spanisch.' },
    { es: '¿Dónde vives? – Vivo en Salzburgo.', de: 'Wo wohnst du? – Ich wohne in Salzburg.' },
    { es: 'Mi hermana estudia Medicina en Viena.', de: 'Meine Schwester studiert Medizin in Wien.' },
    { es: 'Los sábados comemos en casa de mis abuelos.', de: 'Samstags essen wir bei meinen Großeltern.' },
    { es: '¿Habláis francés en clase?', de: 'Sprecht ihr im Unterricht Französisch?' },
    { es: 'Mis padres trabajan mucho.', de: 'Meine Eltern arbeiten viel.' },
    { es: '¿Habla usted inglés?', de: 'Sprechen Sie Englisch?' },
    { es: 'Normalmente bebo agua o zumo.', de: 'Normalerweise trinke ich Wasser oder Saft.' },
    { es: 'Leemos un libro muy interesante.', de: 'Wir lesen ein sehr interessantes Buch.' },
    { es: 'Los españoles cenan bastante tarde.', de: 'Die Spanier essen ziemlich spät zu Abend.' },
    { es: '¿Escribís muchos mensajes?', de: 'Schreibt ihr viele Nachrichten?' },
    { es: 'Ana y Pablo viven en Málaga.', de: 'Ana und Pablo wohnen in Málaga.' },
  ],

  exercises: [
    // ---------- leicht ----------
    {
      id: 'present-regular-e1',
      level: 'easy',
      instruction: 'Ergänze die Konjugationstabelle im Presente.',
      tasks: [
        {
          type: 'table',
          verb: 'estudiar',
          tense: 'Presente',
          forms: ['estudio', 'estudias', 'estudia', 'estudiamos', 'estudiáis', 'estudian'],
          given: [0],
          reason: '-ar-Verben: -o, -as, -a, -amos, -áis, -an.',
        },
        {
          type: 'table',
          verb: 'beber',
          tense: 'Presente',
          forms: ['bebo', 'bebes', 'bebe', 'bebemos', 'bebéis', 'beben'],
          given: [0],
          reason: '-er-Verben: -o, -es, -e, -emos, -éis, -en.',
        },
        {
          type: 'table',
          verb: 'escribir',
          tense: 'Presente',
          forms: ['escribo', 'escribes', 'escribe', 'escribimos', 'escribís', 'escriben'],
          given: [0],
          reason: '-ir-Verben: wie -er, aber *nosotros* **-imos** und *vosotros* **-ís**.',
        },
      ],
    },
    {
      id: 'present-regular-e2',
      level: 'easy',
      instruction: 'Ordne zu: zuerst links antippen, dann rechts.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['yo', 'hablo'],
            ['tú', 'comes'],
            ['usted', 'vive'],
            ['nosotros', 'escuchamos'],
            ['vosotros', 'bebéis'],
            ['ellas', 'abren'],
          ],
          reason: 'Endungen: -o (yo), -as/-es (tú), -a/-e (él/usted), -amos/-emos/-imos (nosotros), -áis/-éis/-ís (vosotros), -an/-en (ellos).',
        },
        {
          type: 'match',
          pairs: [
            ['yo', 'ich'],
            ['tú', 'du'],
            ['usted', 'Sie (eine Person)'],
            ['nosotras', 'wir (nur Frauen)'],
            ['vosotros', 'ihr'],
            ['ellas', 'sie (nur Frauen)'],
          ],
          reason: 'Die Formen auf -as gelten nur für rein weibliche Gruppen; gemischte Gruppen sind männlich.',
        },
      ],
    },
    {
      id: 'present-regular-e3',
      level: 'easy',
      instruction: 'Setze das Verb im Presente ein.',
      tasks: [
        { type: 'gap', text: 'Yo ___ en un instituto de Salzburgo.', hint: 'estudiar', answers: ['estudio'], reason: '*yo* → **-o**.' },
        { type: 'gap', text: '¿___ música por la noche?', hint: 'escuchar, tú', answers: ['escuchas'], reason: '*tú* + -ar → **-as**.' },
        { type: 'gap', text: 'Mi madre ___ en un hospital.', hint: 'trabajar', answers: ['trabaja'], reason: '*mi madre* = ella → **-a**.' },
        { type: 'gap', text: 'Nosotros ___ en el comedor del colegio.', hint: 'comer', answers: ['comemos'], reason: '*nosotros* + -er → **-emos**.' },
        { type: 'gap', text: '¿Vosotros ___ cerca del centro?', hint: 'vivir', answers: ['vivís'], reason: '*vosotros* + -ir → **-ís** (mit Akzent).' },
        { type: 'gap', text: 'Mis amigos ___ mucho café.', hint: 'beber', answers: ['beben'], reason: '*mis amigos* = ellos + -er → **-en**.' },
        { type: 'gap', text: 'Usted ___ muy bien español.', hint: 'hablar', answers: ['habla'], reason: '*usted* → 3. Person Singular: **habla**.' },
        { type: 'gap', text: 'Ellas ___ cartas a sus amigas de Chile.', hint: 'escribir', answers: ['escriben'], reason: '*ellas* + -ir → **-en**.' },
        { type: 'gap', text: '¿Qué ___ vosotros los domingos?', hint: 'cocinar', answers: ['cocináis'], reason: '*vosotros* + -ar → **-áis** (mit Akzent).' },
        { type: 'gap', text: 'Tú ___ el periódico todos los días.', hint: 'leer', answers: ['lees'], reason: '*tú* + -er → **-es**.' },
      ],
    },

    // ---------- mittel ----------
    {
      id: 'present-regular-m1',
      level: 'medium',
      instruction: 'Setze das Verb im Presente ein. Achte auf das Subjekt.',
      tasks: [
        { type: 'gap', text: 'Los sábados mis hermanos y yo ___ en el río.', hint: 'nadar', answers: ['nadamos'], reason: '*mis hermanos y yo* = nosotros → **-amos**.' },
        { type: 'gap', text: 'Pablo y tú ___ muy bien.', hint: 'cantar', answers: ['cantáis'], reason: '*Pablo y tú* = vosotros → **-áis**.' },
        { type: 'gap', text: 'Señora López, ¿___ usted aquí?', hint: 'vivir', answers: ['vive'], reason: '*usted* → 3. Person Singular: **vive**.' },
        { type: 'gap', text: 'Mi perro y mi gato ___ mucho.', hint: 'comer', answers: ['comen'], reason: 'zwei Tiere = ellos → **comen**.' },
        { type: 'gap', text: '¿Dónde ___ tus padres?', hint: 'trabajar', answers: ['trabajan'], reason: '*tus padres* = ellos → **trabajan**.' },
        { type: 'gap', text: 'Ana nunca ___ la ventana.', hint: 'abrir', answers: ['abre'], reason: '*Ana* = ella → **abre**.' },
        { type: 'gap', text: 'Mi amiga y yo ___ inglés y francés.', hint: 'aprender', answers: ['aprendemos'], reason: '*mi amiga y yo* = nosotras → **aprendemos**.' },
        { type: 'gap', text: 'Señores, ¿___ ustedes un café?', hint: 'tomar', answers: ['toman'], reason: '*ustedes* → 3. Person Plural: **toman**.' },
        { type: 'gap', text: 'Todos los días ___ muchos mensajes.', hint: 'recibir, yo', answers: ['recibo'], reason: '*yo* → **recibo**.' },
        { type: 'gap', text: '¿Por qué no ___ el correo?', hint: 'contestar, tú', answers: ['contestas'], reason: '*tú* + -ar → **contestas**.' },
      ],
    },
    {
      id: 'present-regular-m2',
      level: 'medium',
      instruction: 'Wähle die richtige Form im Presente.',
      tasks: [
        {
          type: 'choice',
          prompt: '¿___ usted alemán?',
          options: ['Habla', 'Hablas', 'Hablan'],
          answer: 'Habla',
          reason: '*usted* → 3. Person Singular: **habla**.',
        },
        {
          type: 'choice',
          prompt: 'Vosotros ___ en Madrid, ¿verdad?',
          options: ['vivís', 'vivéis', 'vivimos'],
          answer: 'vivís',
          reason: '-ir-Verb + *vosotros* → **-ís**.',
        },
        {
          type: 'choice',
          prompt: 'Normalmente nosotros ___ en la cafetería.',
          options: ['comemos', 'comimos', 'come'],
          answer: 'comemos',
          reason: '*normalmente* → Gewohnheit → Presente: **comemos**.',
        },
        {
          type: 'choice',
          prompt: 'Mis abuelos ___ el periódico cada mañana.',
          options: ['leen', 'lean', 'leemos'],
          answer: 'leen',
          reason: '*mis abuelos* = ellos → **leen**.',
        },
        { type: 'choice', prompt: 'Tú ___ muchos libros.', options: ['lees', 'leas', 'lee'], answer: 'lees', reason: '*tú* + -er → **lees**.' },
        {
          type: 'choice',
          prompt: '¿Qué ___ vosotros? – Agua, por favor.',
          options: ['bebéis', 'bebeis', 'bebís'],
          answer: 'bebéis',
          reason: '-er-Verb + *vosotros* → **-éis** mit Akzent.',
        },
        {
          type: 'choice',
          prompt: 'Ella ___ en una tienda de ropa.',
          options: ['trabaja', 'trabajo', 'trabajas'],
          answer: 'trabaja',
          reason: '*ella* → **trabaja**.',
        },
        {
          type: 'choice',
          prompt: 'Los alumnos ___ la puerta.',
          options: ['abren', 'abran', 'abrimos'],
          answer: 'abren',
          reason: '*los alumnos* = ellos → **abren**.',
        },
      ],
    },

    // ---------- schwer ----------
    {
      id: 'present-regular-h1',
      level: 'hard',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: '¿Hablas usted inglés?', answers: ['¿Habla usted inglés?'], reason: '*usted* → 3. Person: **habla**.' },
        { type: 'fix', wrong: 'Nosotros vivemos en Linz.', answers: ['Nosotros vivimos en Linz.'], reason: '-ir-Verb + *nosotros* → **-imos**: *vivimos*.' },
        { type: 'fix', wrong: '¿Vosotros hablais alemán?', answers: ['¿Vosotros habláis alemán?'], reason: '*vosotros*-Formen haben einen Akzent: **habláis**.' },
        { type: 'fix', wrong: 'Mis padres trabaja en Graz.', answers: ['Mis padres trabajan en Graz.'], reason: '*mis padres* = ellos → **trabajan**.' },
        { type: 'fix', wrong: 'Yo come mucha fruta.', answers: ['Yo como mucha fruta.'], reason: '*yo* → **-o**: *como*.' },
        { type: 'fix', wrong: 'Mi hermano escribes una carta.', answers: ['Mi hermano escribe una carta.'], reason: '*mi hermano* = él → **escribe**.' },
        { type: 'fix', wrong: 'Ana y yo aprenden alemán.', answers: ['Ana y yo aprendemos alemán.'], reason: '*Ana y yo* = nosotras → **aprendemos**.' },
        { type: 'fix', wrong: 'Tú y Marta bebeis demasiado café.', answers: ['Tú y Marta bebéis demasiado café.'], reason: '*tú y Marta* = vosotras → **bebéis** (mit Akzent).' },
        { type: 'fix', wrong: 'Señor Ruiz, ¿dónde vives usted?', answers: ['Señor Ruiz, ¿dónde vive usted?'], reason: '*usted* → **vive**.' },
      ],
    },
    {
      id: 'present-regular-h2',
      level: 'hard',
      instruction: 'Bilde den Satz: Tippe die Wörter in der richtigen Reihenfolge an.',
      tasks: [
        {
          type: 'order',
          words: ['mis', 'amigos', 'viven', 'en', 'Barcelona'],
          answers: ['en Barcelona viven mis amigos'],
          de: 'Meine Freunde wohnen in Barcelona.',
          reason: 'Subjekt – Verb – Ortsangabe; *viven* = ellos.',
        },
        {
          type: 'order',
          words: ['normalmente', 'cenamos', 'a', 'las', 'nueve'],
          answers: ['cenamos a las nueve normalmente'],
          de: 'Normalerweise essen wir um neun zu Abend.',
          reason: '*normalmente* steht meist am Anfang; Uhrzeit mit *a las*.',
        },
        {
          type: 'order',
          words: ['habla', 'usted', 'español'],
          answers: ['usted habla español'],
          de: 'Sprechen Sie Spanisch?',
          reason: 'Frage: *¿Habla usted español?* – *usted* mit der 3. Person.',
        },
        {
          type: 'order',
          words: ['los', 'domingos', 'mi', 'padre', 'cocina', 'para', 'toda', 'la', 'familia'],
          answers: ['mi padre cocina para toda la familia los domingos'],
          de: 'Sonntags kocht mein Vater für die ganze Familie.',
          reason: '*los domingos* = sonntags (Gewohnheit) → Presente: *cocina*.',
        },
      ],
    },
    {
      id: 'present-regular-h3',
      level: 'hard',
      instruction: 'Übersetze ins Spanische (Presente).',
      tasks: [
        { type: 'translate', de: 'Wir wohnen in Wien.', answers: ['Vivimos en Viena.'], reason: '*vivir*, nosotros → **vivimos**; Wien = *Viena*.' },
        { type: 'translate', de: 'Sprichst du Spanisch?', answers: ['¿Hablas español?'], reason: '*tú* → **hablas**; Sprachen schreibt man klein.' },
        { type: 'translate', de: 'Meine Schwester liest viel.', answers: ['Mi hermana lee mucho.'], reason: '*leer*, ella → **lee**.' },
        {
          type: 'translate',
          de: 'Arbeiten Sie hier?',
          answers: ['¿Trabaja usted aquí?', '¿Trabaja aquí usted?', '¿Trabajan ustedes aquí?', '¿Trabajan aquí ustedes?'],
          reason: '*usted* (eine Person) oder *ustedes* (mehrere) → Verb in der 3. Person.',
        },
        { type: 'translate', de: 'Ihr esst zu viel Schokolade.', answers: ['Coméis demasiado chocolate.'], reason: '*vosotros* → **coméis**; zu viel = *demasiado*.' },
        {
          type: 'translate',
          de: 'Ich wohne in Salzburg und lerne Spanisch. Meine Eltern arbeiten in einem Hotel.',
          answers: ['Vivo en Salzburgo y aprendo español. Mis padres trabajan en un hotel.'],
          free: true,
          reason: '*vivo, aprendo* (yo), *trabajan* (ellos) – ohne Subjektpronomen.',
        },
      ],
    },
  ],

  test: [
    {
      type: 'gap',
      instruction: 'Setze das Verb im Presente ein.',
      text: 'Mis amigos ___ en la piscina.',
      hint: 'nadar',
      answers: ['nadan'],
      reason: '*mis amigos* = ellos → **nadan**.',
    },
    {
      type: 'gap',
      instruction: 'Setze das Verb im Presente ein.',
      text: '¿___ en Madrid?',
      hint: 'vivir, vosotros',
      answers: ['vivís'],
      reason: '*vosotros* + -ir → **vivís**.',
    },
    {
      type: 'gap',
      instruction: 'Setze das Verb im Presente ein.',
      text: 'Por la tarde ___ mucho.',
      hint: 'estudiar, yo',
      answers: ['estudio'],
      reason: '*yo* → **estudio**.',
    },
    {
      type: 'choice',
      instruction: 'Wähle die richtige Form im Presente.',
      prompt: '¿Dónde ___ usted?',
      options: ['trabaja', 'trabajas', 'trabajáis'],
      answer: 'trabaja',
      reason: '*usted* → 3. Person Singular: **trabaja**.',
    },
    {
      type: 'choice',
      instruction: 'Wähle die richtige Form im Presente.',
      prompt: 'Nosotros ___ el autobús a las ocho.',
      options: ['tomamos', 'tomáis', 'toman'],
      answer: 'tomamos',
      reason: '*nosotros* + -ar → **tomamos**.',
    },
    {
      type: 'table',
      instruction: 'Ergänze die Konjugationstabelle im Presente.',
      verb: 'comprender',
      tense: 'Presente',
      forms: ['comprendo', 'comprendes', 'comprende', 'comprendemos', 'comprendéis', 'comprenden'],
      given: [0, 2],
      reason: '-er-Verb: -o, -es, -e, -emos, -éis, -en.',
    },
    { type: 'fix', wrong: 'Ellos escribe muchos correos.', answers: ['Ellos escriben muchos correos.'], reason: '*ellos* → **escriben**.' },
    { type: 'fix', wrong: '¿Abris la ventana, por favor?', answers: ['¿Abrís la ventana, por favor?'], reason: '*vosotros* + -ir → **abrís** (mit Akzent).' },
    {
      type: 'order',
      words: ['mi', 'hermana', 'vende', 'ropa', 'en', 'una', 'tienda'],
      de: 'Meine Schwester verkauft Kleidung in einem Geschäft.',
      reason: 'Subjekt – Verb – Objekt – Ort; *vende* = ella.',
    },
    {
      type: 'translate',
      instruction: 'Übersetze ins Spanische (Presente).',
      de: 'Was trinkt ihr?',
      answers: ['¿Qué bebéis?', '¿Qué tomáis?'],
      reason: '*vosotros* → **bebéis** (oder *tomáis*).',
    },
  ],
}

export default unit
