import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'present-irregular',
  title: 'Presente – unregelmäßige Verben',
  subtitle: 'voy, tengo, hago, conozco, sé … – die wichtigsten unregelmäßigen Verben im Presente',
  grade: 5,
  area: 'tenses',
  cefr: 'A1',
  order: 5,
  prerequisites: ['present-regular'],
  keywords: ['unregelmäßig', 'Presente', 'tener', 'ir', 'hacer', 'yo-Form', 'go-Verben', 'conocer', 'saber', 'tener años'],

  summary: [
    {
      type: 'table',
      caption: 'Ganz unregelmäßig bzw. mit Stammwechsel',
      head: ['', 'ir', 'tener', 'venir', 'decir'],
      rows: [
        ['yo', 'voy', 'tengo', 'vengo', 'digo'],
        ['tú', 'vas', 'tienes', 'vienes', 'dices'],
        ['él/ella/usted', 'va', 'tiene', 'viene', 'dice'],
        ['nosotros/-as', 'vamos', 'tenemos', 'venimos', 'decimos'],
        ['vosotros/-as', 'vais', 'tenéis', 'venís', 'decís'],
        ['ellos/ellas/ustedes', 'van', 'tienen', 'vienen', 'dicen'],
      ],
    },
    {
      type: 'table',
      caption: 'Nur die yo-Form ist unregelmäßig',
      head: ['Gruppe', 'Beispiele'],
      rows: [
        ['-go', '*hacer → hago, poner → pongo, salir → salgo, traer → traigo*'],
        ['-zco', '*conocer → conozco, conducir → conduzco, traducir → traduzco*'],
        ['Sonderformen', '*dar → doy, ver → veo, saber → sé*'],
      ],
    },
    {
      type: 'list',
      items: [
        'Alle anderen Formen dieser Verben sind regelmäßig: *hago, haces, hace, hacemos, hacéis, hacen*.',
        '*ser* und *estar*: siehe Einheit 5.3.',
      ],
    },
  ],

  explanation: [
    {
      title: 'ir – gehen, fahren',
      blocks: [
        {
          type: 'table',
          head: ['', 'ir'],
          rows: [
            ['yo', 'voy'],
            ['tú', 'vas'],
            ['él/ella/usted', 'va'],
            ['nosotros/-as', 'vamos'],
            ['vosotros/-as', 'vais'],
            ['ellos/ellas/ustedes', 'van'],
          ],
        },
        {
          type: 'list',
          items: [
            '*ir a* + Ort: *Voy al colegio. Vamos a la playa.*',
            '*ir en* + Verkehrsmittel: *Voy en bici. Vamos en tren.* (aber: *a pie* = zu Fuß)',
            '*ir a* + Infinitiv = nahe Zukunft: *Voy a estudiar.* → Einheit 5.11',
          ],
        },
        { type: 'tip', text: '*vais* ist einsilbig und hat deshalb **keinen** Akzent.' },
      ],
    },
    {
      title: 'Verben mit unregelmäßiger yo-Form',
      blocks: [
        {
          type: 'text',
          text: 'Bei vielen häufigen Verben ist **nur die yo-Form** unregelmäßig. Der Rest geht nach den normalen Regeln.',
        },
        {
          type: 'table',
          head: ['Infinitiv', 'yo', 'tú', 'nosotros'],
          rows: [
            ['hacer (machen)', '**hago**', 'haces', 'hacemos'],
            ['poner (stellen, legen)', '**pongo**', 'pones', 'ponemos'],
            ['salir (hinausgehen)', '**salgo**', 'sales', 'salimos'],
            ['traer (bringen)', '**traigo**', 'traes', 'traemos'],
            ['conocer (kennen)', '**conozco**', 'conoces', 'conocemos'],
            ['conducir (Auto fahren)', '**conduzco**', 'conduces', 'conducimos'],
            ['dar (geben)', '**doy**', 'das', 'damos'],
            ['ver (sehen)', '**veo**', 'ves', 'vemos'],
            ['saber (wissen)', '**sé**', 'sabes', 'sabemos'],
          ],
        },
        { type: 'tip', text: '*dar* und *ver* sind einsilbig: *dais, veis* ohne Akzent.' },
      ],
    },
    {
      title: 'tener, venir, decir: yo-Form + Stammwechsel',
      blocks: [
        {
          type: 'text',
          text: 'Diese Verben haben eine **-go-Form** bei *yo* und zusätzlich einen **Stammwechsel** bei *tú, él* und *ellos*: *tengo – tienes, vengo – vienes, digo – dices*. Bei *nosotros* und *vosotros* bleibt der Stamm: *tenemos, venimos, decimos*.',
        },
        {
          type: 'table',
          caption: 'Wendungen mit tener',
          head: ['Spanisch', 'Deutsch'],
          rows: [
            ['*tener … años*', '… Jahre alt sein'],
            ['*tener hambre / sed*', 'Hunger / Durst haben'],
            ['*tener frío / calor*', 'frieren / jemandem ist heiß'],
            ['*tener miedo*', 'Angst haben'],
            ['*tener que* + Infinitiv', 'müssen'],
          ],
        },
      ],
    },
    {
      title: 'saber oder conocer?',
      blocks: [
        {
          type: 'table',
          head: ['Verb', 'Bedeutung', 'Beispiele'],
          rows: [
            ['*saber*', 'wissen; etwas können (gelernt)', '*Sé dónde vive. Sé nadar.*'],
            ['*conocer*', 'kennen (Personen, Orte); kennenlernen', '*Conozco a Ana. Conozco Madrid.*'],
          ],
        },
        { type: 'warning', text: 'Bei Personen steht **a**: *Conozco a tu hermano.*' },
      ],
    },
    {
      title: 'Unterschied zum Deutschen',
      blocks: [
        {
          type: 'list',
          items: [
            'Viele spanische Verben haben eine **eigene yo-Form** – lerne sie immer mit: *hacer – hago*.',
            'Alter mit *tener*: „Ich **bin** 16“ → *Tengo 16 años.*',
            'Hunger, Durst, Kälte mit *tener*: „Mir ist kalt“ → *Tengo frío.*',
            '„kennen“ und „wissen/können“ sind zwei verschiedene Verben: *conocer* und *saber*.',
          ],
        },
      ],
    },
    {
      title: 'Typische Fehler',
      blocks: [
        { type: 'warning', text: '~~hazo, poneo, saleo~~ → *hago, pongo, salgo*' },
        { type: 'warning', text: '~~conoco~~ → *conozco* · ~~sabo~~ → *sé*' },
        { type: 'warning', text: '~~Soy 16 años.~~ → *Tengo 16 años.*' },
        { type: 'warning', text: '~~teno, tieno~~ → *tengo* · ~~tenes~~ → *tienes*' },
        { type: 'warning', text: '~~Sé Madrid.~~ → *Conozco Madrid.* (einen Ort kennen)' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        {
          type: 'tip',
          text: '**Die -go-Familie:** *hago, pongo, salgo, traigo, tengo, vengo, digo* – sieben Verben, die bei *yo* auf **-go** enden.',
        },
        { type: 'tip', text: '**-zco:** Verben auf *-ocer* und *-ucir* bekommen bei *yo* ein **z**: *conozco, conduzco, traduzco*.' },
        { type: 'tip', text: '**voy, doy, estoy, soy** – vier yo-Formen auf **-oy**.' },
      ],
    },
  ],

  examples: [
    { es: 'Voy al instituto en autobús.', de: 'Ich fahre mit dem Bus zur Schule.' },
    { es: 'Tengo dieciséis años y tengo dos hermanos.', de: 'Ich bin sechzehn und habe zwei Geschwister.' },
    { es: '¿Qué haces el fin de semana? – Salgo con mis amigos.', de: 'Was machst du am Wochenende? – Ich gehe mit meinen Freunden aus.' },
    { es: 'No conozco a tu hermana.', de: 'Ich kenne deine Schwester nicht.' },
    { es: '¿Sabes dónde está la estación? – No, no lo sé.', de: 'Weißt du, wo der Bahnhof ist? – Nein, ich weiß es nicht.' },
    { es: 'Mis primos vienen de Madrid mañana.', de: 'Meine Cousins kommen morgen aus Madrid.' },
    { es: 'Siempre digo la verdad.', de: 'Ich sage immer die Wahrheit.' },
    { es: 'Pongo la mochila debajo de la mesa.', de: 'Ich stelle den Rucksack unter den Tisch.' },
    { es: '¿Vais a la fiesta de Marta?', de: 'Geht ihr auf Martas Party?' },
    { es: 'Tengo mucha hambre.', de: 'Ich habe großen Hunger.' },
    { es: 'Mi padre conduce muy bien.', de: 'Mein Vater fährt sehr gut Auto.' },
    { es: 'Te doy mi número de teléfono.', de: 'Ich gebe dir meine Telefonnummer.' },
  ],

  exercises: [
    // ---------- leicht ----------
    {
      id: 'present-irregular-e1',
      level: 'easy',
      instruction: 'Ergänze die Konjugationstabelle im Presente.',
      tasks: [
        {
          type: 'table',
          verb: 'ir',
          tense: 'Presente',
          forms: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
          given: [0],
          reason: '*ir* ist völlig unregelmäßig: voy, vas, va, vamos, vais, van.',
        },
        {
          type: 'table',
          verb: 'tener',
          tense: 'Presente',
          forms: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'],
          given: [3],
          reason: 'yo: **tengo**; e → **ie** bei tú, él, ellos; nosotros/vosotros regelmäßig.',
        },
        {
          type: 'table',
          verb: 'decir',
          tense: 'Presente',
          forms: ['digo', 'dices', 'dice', 'decimos', 'decís', 'dicen'],
          given: [3],
          reason: 'yo: **digo**; e → **i** bei tú, él, ellos; nosotros/vosotros regelmäßig.',
        },
      ],
    },
    {
      id: 'present-irregular-e2',
      level: 'easy',
      instruction: 'Setze das Verb in der yo-Form ein.',
      tasks: [
        { type: 'gap', text: 'Los sábados ___ los deberes por la mañana.', hint: 'hacer', answers: ['hago'], reason: '*hacer* → **hago**.' },
        { type: 'gap', text: '___ la mesa para cenar.', hint: 'poner', answers: ['pongo'], reason: '*poner* → **pongo**.' },
        { type: 'gap', text: 'Normalmente ___ de casa a las siete.', hint: 'salir', answers: ['salgo'], reason: '*salir* → **salgo**.' },
        { type: 'gap', text: 'Todavía no ___ bien la ciudad.', hint: 'conocer', answers: ['conozco'], reason: '*conocer* → **conozco**.' },
        { type: 'gap', text: 'Hoy ___ el pastel para la fiesta.', hint: 'traer', answers: ['traigo'], reason: '*traer* → **traigo**.' },
        { type: 'gap', text: 'Te ___ mi libro.', hint: 'dar', answers: ['doy'], reason: '*dar* → **doy**.' },
        { type: 'gap', text: 'Desde mi ventana ___ el mar.', hint: 'ver', answers: ['veo'], reason: '*ver* → **veo**.' },
        { type: 'gap', text: 'No ___ la respuesta.', hint: 'saber', answers: ['sé'], reason: '*saber* → **sé** (mit Akzent).' },
        { type: 'gap', text: '___ dieciséis años.', hint: 'tener', answers: ['tengo'], reason: 'Alter → *tener*: **tengo**.' },
        { type: 'gap', text: 'Mañana ___ a tu casa a las cinco.', hint: 'ir', answers: ['voy'], reason: '*ir* → **voy**.' },
      ],
    },
    {
      id: 'present-irregular-e3',
      level: 'easy',
      instruction: 'Ordne zu: zuerst links antippen, dann rechts.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['hacer', 'hago'],
            ['poner', 'pongo'],
            ['salir', 'salgo'],
            ['conocer', 'conozco'],
            ['saber', 'sé'],
            ['dar', 'doy'],
          ],
          reason: 'Diese Verben sind nur in der yo-Form unregelmäßig.',
        },
        {
          type: 'match',
          pairs: [
            ['tener hambre', 'Hunger haben'],
            ['tener sed', 'Durst haben'],
            ['tener frío', 'frieren'],
            ['tener calor', 'jemandem ist heiß'],
            ['tener 15 años', '15 Jahre alt sein'],
            ['tener que estudiar', 'lernen müssen'],
          ],
          reason: 'Im Deutschen heißt es „sein“ oder „ist mir …“, im Spanischen **tener**.',
        },
      ],
    },

    // ---------- mittel ----------
    {
      id: 'present-irregular-m1',
      level: 'medium',
      instruction: 'Setze das Verb im Presente ein.',
      tasks: [
        { type: 'gap', text: '¿Adónde ___ vosotros este verano?', hint: 'ir', answers: ['vais'], reason: '*ir*, vosotros → **vais** (ohne Akzent).' },
        { type: 'gap', text: 'Mi hermano ___ frío.', hint: 'tener', answers: ['tiene'], reason: '*tener*, él → **tiene** (e → ie).' },
        { type: 'gap', text: '¿Siempre ___ la verdad?', hint: 'decir, tú', answers: ['dices'], reason: '*decir*, tú → **dices** (e → i).' },
        { type: 'gap', text: 'Mis abuelos ___ a comer el domingo.', hint: 'venir', answers: ['vienen'], reason: '*venir*, ellos → **vienen** (e → ie).' },
        { type: 'gap', text: 'Nosotros no ___ hambre.', hint: 'tener', answers: ['tenemos'], reason: '*nosotros* → kein Stammwechsel: **tenemos**.' },
        { type: 'gap', text: '¿Qué ___ tus padres los fines de semana?', hint: 'hacer', answers: ['hacen'], reason: 'Nur *yo* ist unregelmäßig: ellos → **hacen**.' },
        { type: 'gap', text: '¿___ a Pablo?', hint: 'conocer, tú', answers: ['conoces'], reason: 'Nur *yo* ist unregelmäßig: tú → **conoces**.' },
        { type: 'gap', text: 'Ellos ___ al colegio en bici.', hint: 'ir', answers: ['van'], reason: '*ir*, ellos → **van**.' },
        { type: 'gap', text: 'Vosotros ___ mucho de música.', hint: 'saber', answers: ['sabéis'], reason: '*saber*, vosotros → **sabéis**.' },
        { type: 'gap', text: '¿Usted ___ con nosotros?', hint: 'venir', answers: ['viene'], reason: '*usted* → 3. Person: **viene**.' },
      ],
    },
    {
      id: 'present-irregular-m2',
      level: 'medium',
      instruction: '*saber* oder *conocer*? Wähle.',
      tasks: [
        { type: 'choice', prompt: '¿___ dónde vive Lucía?', options: ['Sabes', 'Conoces'], answer: 'Sabes', reason: 'Wissen (eine Information) → **saber**.' },
        { type: 'choice', prompt: 'No ___ a tu profesora.', options: ['conozco', 'sé'], answer: 'conozco', reason: 'Eine Person kennen → **conocer a**.' },
        {
          type: 'choice',
          prompt: 'Mi hermano ___ tocar la guitarra.',
          options: ['sabe', 'conoce'],
          answer: 'sabe',
          reason: 'Gelernte Fähigkeit → **saber** + Infinitiv.',
        },
        { type: 'choice', prompt: '¿___ Barcelona?', options: ['Conoces', 'Sabes'], answer: 'Conoces', reason: 'Einen Ort kennen → **conocer**.' },
        { type: 'choice', prompt: 'No ___ la respuesta.', options: ['sé', 'conozco'], answer: 'sé', reason: 'Wissen → **saber**.' },
        { type: 'choice', prompt: 'Mis padres ___ a mucha gente.', options: ['conocen', 'saben'], answer: 'conocen', reason: 'Personen kennen → **conocer a**.' },
        { type: 'choice', prompt: '¿___ nadar? (ihr)', options: ['Sabéis', 'Conocéis'], answer: 'Sabéis', reason: 'Können (gelernt) → **saber** + Infinitiv.' },
        {
          type: 'choice',
          prompt: '___ un restaurante muy bueno cerca de aquí. (ich)',
          options: ['Conozco', 'Sé'],
          answer: 'Conozco',
          reason: 'Einen Ort kennen → **conocer**.',
        },
      ],
    },

    // ---------- schwer ----------
    {
      id: 'present-irregular-h1',
      level: 'hard',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'Yo hazo los deberes después de clase.', answers: ['Yo hago los deberes después de clase.'], reason: '*hacer* → **hago**.' },
        { type: 'fix', wrong: 'Soy quince años.', answers: ['Tengo quince años.'], reason: 'Alter → **tener** … *años*.' },
        { type: 'fix', wrong: 'No conoco a tus padres.', answers: ['No conozco a tus padres.'], reason: '*conocer* → **conozco**.' },
        { type: 'fix', wrong: 'Yo sabo hablar inglés.', answers: ['Yo sé hablar inglés.'], reason: '*saber* → **sé**.' },
        { type: 'fix', wrong: 'Mañana vamos a el cine.', answers: ['Mañana vamos al cine.'], reason: '*a + el* → **al**.' },
        { type: 'fix', wrong: '¿Vosotros vaís en tren?', answers: ['¿Vosotros vais en tren?'], reason: '*vais* ist einsilbig → kein Akzent.' },
        { type: 'fix', wrong: 'Mi hermana tene un perro.', answers: ['Mi hermana tiene un perro.'], reason: '*tener*, ella → **tiene** (e → ie).' },
        { type: 'fix', wrong: 'Salo de casa a las ocho.', answers: ['Salgo de casa a las ocho.'], reason: '*salir* → **salgo**.' },
        { type: 'fix', wrong: 'Sé muy bien Madrid.', answers: ['Conozco muy bien Madrid.'], reason: 'Einen Ort kennen → **conocer**.' },
      ],
    },
    {
      id: 'present-irregular-h2',
      level: 'hard',
      instruction: 'Bilde den Satz: Tippe die Wörter in der richtigen Reihenfolge an.',
      tasks: [
        {
          type: 'order',
          words: ['siempre', 'pongo', 'el', 'móvil', 'en', 'la', 'mochila'],
          answers: ['pongo siempre el móvil en la mochila'],
          de: 'Ich stecke das Handy immer in den Rucksack.',
          reason: '*poner* → **pongo**; *siempre* steht meist vor dem Verb.',
        },
        {
          type: 'order',
          words: ['mis', 'amigos', 'vienen', 'a', 'mi', 'casa'],
          de: 'Meine Freunde kommen zu mir nach Hause.',
          reason: '*venir*, ellos → **vienen**.',
        },
        {
          type: 'order',
          words: ['no', 'sé', 'dónde', 'está', 'mi', 'llave'],
          de: 'Ich weiß nicht, wo mein Schlüssel ist.',
          reason: '*saber* → **sé**; *no* steht vor dem Verb.',
        },
        { type: 'order', words: ['tenemos', 'mucha', 'sed'], de: 'Wir haben großen Durst.', reason: 'Durst haben → *tener sed*.' },
      ],
    },
    {
      id: 'present-irregular-h3',
      level: 'hard',
      instruction: 'Übersetze ins Spanische (Presente).',
      tasks: [
        { type: 'translate', de: 'Ich bin fünfzehn Jahre alt.', answers: ['Tengo quince años.'], reason: 'Alter → **tener** … *años*.' },
        { type: 'translate', de: 'Was machst du?', answers: ['¿Qué haces?'], reason: '*hacer*, tú → **haces**.' },
        { type: 'translate', de: 'Ich kenne deinen Bruder.', answers: ['Conozco a tu hermano.'], reason: 'Person kennen → **conocer a**.' },
        { type: 'translate', de: 'Wir gehen ins Schwimmbad.', answers: ['Vamos a la piscina.'], reason: '*ir*, nosotros → **vamos**; *a la piscina*.' },
        { type: 'translate', de: 'Mir ist kalt.', answers: ['Tengo frío.'], reason: '„Mir ist kalt“ → *tener frío*.' },
        { type: 'translate', de: 'Ich weiß es nicht.', answers: ['No lo sé.'], reason: '*saber*, yo → **sé**; *lo* = es.' },
        {
          type: 'translate',
          de: 'Am Samstag gehe ich mit meinen Freunden aus. Wir gehen ins Kino und danach essen wir eine Pizza.',
          answers: ['El sábado salgo con mis amigos. Vamos al cine y después comemos una pizza.'],
          free: true,
          reason: '*salgo* (salir), *vamos* (ir), *comemos* (regelmäßig).',
        },
      ],
    },
  ],

  test: [
    {
      type: 'gap',
      instruction: 'Setze das Verb im Presente ein.',
      text: '¿Cuántos años ___?',
      hint: 'tener, tú',
      answers: ['tienes'],
      reason: '*tener*, tú → **tienes**.',
    },
    { type: 'gap', instruction: 'Setze das Verb im Presente ein.', text: 'Yo ___ la cama todos los días.', hint: 'hacer', answers: ['hago'], reason: '*hacer* → **hago**.' },
    { type: 'gap', instruction: 'Setze das Verb im Presente ein.', text: 'Mis padres ___ a Italia en verano.', hint: 'ir', answers: ['van'], reason: '*ir*, ellos → **van**.' },
    { type: 'gap', instruction: 'Setze das Verb im Presente ein.', text: 'Todavía no ___ a nadie aquí.', hint: 'conocer, yo', answers: ['conozco'], reason: '*conocer* → **conozco**.' },
    {
      type: 'choice',
      instruction: 'Wähle die richtige Form.',
      prompt: '¿___ hablar francés? (du)',
      options: ['Sabes', 'Conoces', 'Sabéis'],
      answer: 'Sabes',
      reason: 'Können (gelernt), tú → **sabes**.',
    },
    {
      type: 'choice',
      instruction: 'Wähle die richtige Form.',
      prompt: 'Nosotros ___ de Viena.',
      options: ['venimos', 'vienemos', 'vengamos'],
      answer: 'venimos',
      reason: '*nosotros* → kein Stammwechsel: **venimos**.',
    },
    {
      type: 'table',
      instruction: 'Ergänze die Konjugationstabelle im Presente.',
      verb: 'poner',
      tense: 'Presente',
      forms: ['pongo', 'pones', 'pone', 'ponemos', 'ponéis', 'ponen'],
      given: [1],
      reason: 'Nur die yo-Form ist unregelmäßig: **pongo**.',
    },
    { type: 'fix', wrong: 'Yo sabo la respuesta.', answers: ['Yo sé la respuesta.'], reason: '*saber* → **sé**.' },
    {
      type: 'match',
      instruction: 'Ordne jedem Infinitiv die yo-Form zu.',
      pairs: [
        ['salir', 'salgo'],
        ['traer', 'traigo'],
        ['ver', 'veo'],
        ['dar', 'doy'],
      ],
      reason: 'Unregelmäßige yo-Formen: *salgo, traigo, veo, doy*.',
    },
    { type: 'translate', instruction: 'Übersetze ins Spanische.', de: 'Ich habe Hunger.', answers: ['Tengo hambre.'], reason: 'Hunger haben → *tener hambre*.' },
  ],
}

export default unit
