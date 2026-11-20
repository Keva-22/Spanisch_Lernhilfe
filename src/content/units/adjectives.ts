import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'adjectives',
  title: 'Adjektive: Angleichung & Stellung',
  subtitle: 'alto, alta, altos, altas – Adjektive passen sich an und stehen meist nach dem Nomen',
  grade: 5,
  area: 'grammar',
  cefr: 'A1',
  order: 4,
  prerequisites: ['articles-nouns', 'ser-estar-hay'],
  keywords: ['Adjektiv', 'Eigenschaftswort', 'Angleichung', 'Stellung', 'buen', 'gran', 'Nationalität', 'beschreiben'],

  summary: [
    {
      type: 'table',
      caption: 'Angleichung',
      head: ['Endung', 'm. Sg.', 'w. Sg.', 'm. Pl.', 'w. Pl.'],
      rows: [
        ['-o', 'alt**o**', 'alt**a**', 'alt**os**', 'alt**as**'],
        ['-e', 'grand**e**', 'grand**e**', 'grand**es**', 'grand**es**'],
        ['Konsonant', 'azul', 'azul', 'azul**es**', 'azul**es**'],
        ['-ista', 'optimista', 'optimista', 'optimista**s**', 'optimista**s**'],
        ['Nationalität', 'español', 'español**a**', 'español**es**', 'español**as**'],
      ],
    },
    {
      type: 'list',
      items: [
        'Das Adjektiv steht meist **nach** dem Nomen: *un coche rojo, una chica simpática*.',
        'Vor männlichem Nomen im Singular: *bueno → buen, malo → mal* (*un buen amigo*); *grande → gran* vor jedem Nomen im Singular (*una gran ciudad*).',
        'Gemischte Gruppe → männlicher Plural: *Pablo y Ana son altos.*',
      ],
    },
  ],

  explanation: [
    {
      title: 'Angleichung: Geschlecht und Zahl',
      blocks: [
        {
          type: 'text',
          text: 'Das Adjektiv richtet sich in **Geschlecht** und **Zahl** nach dem Nomen, das es beschreibt – egal, ob es direkt daneben steht oder nach *ser/estar*.',
        },
        {
          type: 'table',
          head: ['Typ', 'Beispiele'],
          rows: [
            ['auf -o (4 Formen)', '*el chico alto, la chica alta, los chicos altos, las chicas altas*'],
            ['auf -e (2 Formen)', '*el libro interesante, la película interesante, los libros interesantes*'],
            ['auf Konsonant (2 Formen)', '*el coche azul, la casa azul, los coches azules*'],
            ['auf -ista (2 Formen)', '*el chico optimista, la chica optimista, los chicos optimistas*'],
          ],
        },
        {
          type: 'text',
          text: '**Ausnahme:** Nationalitäten und Adjektive auf **-or, -ón, -ín** haben eine weibliche Form auf -a: *español – española, alemán – alemana, francés – francesa, trabajador – trabajadora*. Der Akzent fällt dabei weg: *alemán → alemana, inglés → inglesa*.',
        },
        { type: 'tip', text: 'Gemischte Gruppen → **männlich Plural**: *Mi hermano y mi hermana son altos.*' },
      ],
    },
    {
      title: 'Stellung',
      blocks: [
        {
          type: 'text',
          text: 'Meist steht das Adjektiv **nach** dem Nomen – anders als im Deutschen: „ein rotes Auto“ → *un coche rojo*.',
        },
        {
          type: 'list',
          items: [
            'Farben, Formen und Nationalitäten stehen immer danach: *una camiseta negra, una mesa redonda, la comida italiana*.',
            'Mengenwörter stehen davor: *mucho, poco, otro, primero, último* – *muchos amigos, la última vez*.',
          ],
        },
      ],
    },
    {
      title: 'Kurzformen: buen, mal, gran, primer',
      blocks: [
        {
          type: 'table',
          head: ['Adjektiv', 'Kurzform', 'Beispiele'],
          rows: [
            ['bueno', 'buen (vor m. Sg.)', '*un buen amigo* – aber *una buena amiga*'],
            ['malo', 'mal (vor m. Sg.)', '*un mal día* – aber *una mala noticia*'],
            ['grande', 'gran (vor m. und w. Sg.)', '*un gran escritor, una gran ciudad*'],
            ['primero / tercero', 'primer / tercer (vor m. Sg.)', '*el primer día, el tercer piso*'],
          ],
        },
        {
          type: 'warning',
          text: '**grande** ändert die Bedeutung: *una ciudad grande* = eine (flächenmäßig) große Stadt, *una gran ciudad* = eine großartige, bedeutende Stadt.',
        },
      ],
    },
    {
      title: 'Verwendung: Personen beschreiben',
      blocks: [
        {
          type: 'text',
          text: 'Aussehen und Charakter beschreibst du mit *ser*: *Ana es alta, morena y simpática.* Stimmungen und Zustände mit *estar*: *Hoy Ana está contenta.* Die Angleichung gilt in beiden Fällen.',
        },
        {
          type: 'table',
          caption: 'Häufige Gegensatzpaare',
          head: ['Spanisch', 'Deutsch'],
          rows: [
            ['*alto – bajo*', 'groß – klein (Körpergröße)'],
            ['*grande – pequeño*', 'groß – klein'],
            ['*rubio – moreno*', 'blond – dunkelhaarig'],
            ['*simpático – antipático*', 'nett – unsympathisch'],
            ['*divertido – aburrido*', 'lustig – langweilig'],
            ['*trabajador – vago*', 'fleißig – faul'],
            ['*joven – mayor*', 'jung – älter, alt'],
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
            'Im Deutschen ändert sich das Adjektiv nur **vor** dem Nomen („ein großer Hund“), nach „sein“ nicht („der Hund ist groß“). Im Spanischen gleicht es sich **immer** an: *El perro es grande. La casa es pequeña.*',
            'Das Adjektiv steht meist **nach** dem Nomen.',
            'Es zählt das Geschlecht des **spanischen** Nomens: *el problema* → *un problema serio*, *la foto* → *una foto bonita*.',
          ],
        },
      ],
    },
    {
      title: 'Typische Fehler',
      blocks: [
        { type: 'warning', text: '~~la casa blanco~~ → *la casa blanca* · ~~los chicos simpáticas~~ → *los chicos simpáticos*' },
        { type: 'warning', text: '~~un bueno amigo~~ → *un buen amigo*' },
        { type: 'warning', text: '~~una chica alemán~~ → *una chica alemana*' },
        { type: 'warning', text: '~~los libros interesante~~ → *los libros interesantes*' },
        { type: 'warning', text: '~~un rojo coche~~ → *un coche rojo*' },
        { type: 'warning', text: '~~el día es bonita~~ → *el día es bonito* (*día* ist männlich)' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        { type: 'tip', text: '**Frag immer: Zu welchem Nomen gehört es?** Männlich oder weiblich, eins oder mehrere?' },
        { type: 'tip', text: '**-o-Adjektive** haben 4 Formen, **-e-, -ista- und Konsonant-Adjektive** nur 2 (Singular und Plural).' },
        { type: 'tip', text: 'Ein **buen** amigo ist ein Freund ohne -o: Vor männlichen Nomen im Singular fällt das -o weg.' },
      ],
    },
  ],

  examples: [
    { es: 'Mi hermana es alta y simpática.', de: 'Meine Schwester ist groß und nett.' },
    { es: 'Tengo un perro negro y dos gatas blancas.', de: 'Ich habe einen schwarzen Hund und zwei weiße Katzen.' },
    { es: 'Las montañas de Austria son muy bonitas.', de: 'Die Berge Österreichs sind sehr schön.' },
    { es: 'Es un libro interesante, pero muy largo.', de: 'Das ist ein interessantes, aber sehr langes Buch.' },
    { es: 'Mis amigos son españoles y mexicanos.', de: 'Meine Freunde sind Spanier und Mexikaner.' },
    { es: 'Pablo es un buen amigo.', de: 'Pablo ist ein guter Freund.' },
    { es: 'Hoy hace un mal día.', de: 'Heute ist schlechtes Wetter.' },
    { es: 'Madrid es una gran ciudad.', de: 'Madrid ist eine großartige Stadt.' },
    { es: 'La camiseta azul es de Lucía.', de: 'Das blaue T-Shirt gehört Lucía.' },
    { es: 'Mis padres son muy trabajadores.', de: 'Meine Eltern sind sehr fleißig.' },
    { es: 'Es la primera vez que estoy en España.', de: 'Es ist das erste Mal, dass ich in Spanien bin.' },
    { es: 'Hoy mis hermanas están muy contentas.', de: 'Heute sind meine Schwestern sehr froh.' },
  ],

  exercises: [
    // ---------- leicht ----------
    {
      id: 'adjectives-e1',
      level: 'easy',
      instruction: 'Setze das Adjektiv in der richtigen Form ein.',
      tasks: [
        { type: 'gap', text: 'una chica ___', hint: 'alto', answers: ['alta'], reason: 'weiblich Singular → **-a**: *alta*.' },
        { type: 'gap', text: 'los coches ___', hint: 'rojo', answers: ['rojos'], reason: 'männlich Plural → **-os**: *rojos*.' },
        { type: 'gap', text: 'las casas ___', hint: 'blanco', answers: ['blancas'], reason: 'weiblich Plural → **-as**: *blancas*.' },
        { type: 'gap', text: 'una película ___', hint: 'interesante', answers: ['interesante'], reason: 'Adjektive auf -e sind im Singular für m. und w. gleich.' },
        { type: 'gap', text: 'las películas ___', hint: 'interesante', answers: ['interesantes'], reason: '-e → Plural **+ s**.' },
        { type: 'gap', text: 'los ojos ___', hint: 'azul', answers: ['azules'], reason: 'Konsonant → Plural **+ es**.' },
        { type: 'gap', text: 'una profesora ___', hint: 'alemán', answers: ['alemana'], reason: 'Nationalität: weibliche Form auf **-a**, ohne Akzent: *alemana*.' },
        { type: 'gap', text: 'unos chicos ___', hint: 'optimista', answers: ['optimistas'], reason: '-ista: für m. und w. gleich, Plural + s.' },
        { type: 'gap', text: 'una amiga ___', hint: 'trabajador', answers: ['trabajadora'], reason: '-or → weiblich **-ora**.' },
        { type: 'gap', text: 'las chicas ___', hint: 'español', answers: ['españolas'], reason: 'Nationalität: *española* → Plural *españolas*.' },
      ],
    },
    {
      id: 'adjectives-e2',
      level: 'easy',
      instruction: 'Wähle die passende Form.',
      tasks: [
        { type: 'choice', prompt: 'La pizza está muy ___.', options: ['rica', 'rico', 'ricas'], answer: 'rica', reason: '*la pizza* → weiblich Singular: **rica**.' },
        {
          type: 'choice',
          prompt: 'Mis abuelos son muy ___.',
          options: ['simpáticos', 'simpáticas', 'simpático'],
          answer: 'simpáticos',
          reason: '*mis abuelos* → männlich Plural: **simpáticos**.',
        },
        { type: 'choice', prompt: 'Es un ___ amigo.', options: ['buen', 'bueno', 'buena'], answer: 'buen', reason: 'Vor männlichem Nomen im Singular: *bueno* → **buen**.' },
        { type: 'choice', prompt: 'Hoy es un ___ día.', options: ['mal', 'malo', 'mala'], answer: 'mal', reason: 'Vor männlichem Nomen im Singular: *malo* → **mal**.' },
        { type: 'choice', prompt: 'Las montañas son ___.', options: ['altas', 'altos', 'alta'], answer: 'altas', reason: '*las montañas* → weiblich Plural: **altas**.' },
        {
          type: 'choice',
          prompt: 'El problema es muy ___.',
          options: ['difícil', 'difícila', 'difíciles'],
          answer: 'difícil',
          reason: '*difícil* hat nur Singular/Plural; *el problema* ist Singular.',
        },
        {
          type: 'choice',
          prompt: 'Mi hermano y mi hermana son ___.',
          options: ['rubios', 'rubias', 'rubio'],
          answer: 'rubios',
          reason: 'Gemischte Gruppe → männlich Plural: **rubios**.',
        },
        {
          type: 'choice',
          prompt: 'Viena es una ___ ciudad.',
          options: ['gran', 'grande', 'grandes'],
          answer: 'gran',
          reason: '*grande* vor einem Nomen im Singular → **gran**.',
        },
      ],
    },
    {
      id: 'adjectives-e3',
      level: 'easy',
      instruction: 'Ordne zu: zuerst links antippen, dann rechts.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['alto', 'bajo'],
            ['grande', 'pequeño'],
            ['simpático', 'antipático'],
            ['rubio', 'moreno'],
            ['divertido', 'aburrido'],
            ['joven', 'mayor'],
          ],
          reason: 'Gegensatzpaare lassen sich leichter merken.',
        },
        {
          type: 'match',
          pairs: [
            ['trabajador', 'fleißig'],
            ['vago', 'faul'],
            ['guapo', 'hübsch'],
            ['delgado', 'schlank'],
            ['tímido', 'schüchtern'],
            ['divertido', 'lustig'],
          ],
          reason: 'Mit diesen Adjektiven beschreibst du Aussehen und Charakter (mit *ser*).',
        },
      ],
    },

    // ---------- mittel ----------
    {
      id: 'adjectives-m1',
      level: 'medium',
      instruction: 'Setze das Adjektiv in der richtigen Form ein. Achte auf das Geschlecht des Nomens!',
      tasks: [
        {
          type: 'gap',
          text: 'Los problemas de matemáticas son muy ___.',
          hint: 'difícil',
          answers: ['difíciles'],
          reason: '*los problemas* (m. Pl.) → **difíciles**.',
        },
        { type: 'gap', text: 'Tengo una foto muy ___ de Mallorca.', hint: 'bonito', answers: ['bonita'], reason: '*la foto* ist weiblich → **bonita**.' },
        { type: 'gap', text: 'Es un día ___.', hint: 'perfecto', answers: ['perfecto'], reason: '*el día* ist männlich → **perfecto**.' },
        { type: 'gap', text: 'Mis amigas son ___.', hint: 'italiano', answers: ['italianas'], reason: 'weiblich Plural → **italianas**.' },
        { type: 'gap', text: 'La clase de español es muy ___.', hint: 'divertido', answers: ['divertida'], reason: '*la clase* → weiblich: **divertida**.' },
        { type: 'gap', text: 'Tus padres son muy ___.', hint: 'joven', answers: ['jóvenes'], reason: 'Plural von *joven* → **jóvenes** (mit Akzent).' },
        { type: 'gap', text: 'Mi madre es ___.', hint: 'inglés', answers: ['inglesa'], reason: 'Nationalität: *inglés → inglesa* (ohne Akzent).' },
        { type: 'gap', text: 'Necesito unos zapatos ___.', hint: 'nuevo', answers: ['nuevos'], reason: '*los zapatos* → männlich Plural: **nuevos**.' },
        { type: 'gap', text: 'Ana y Lucía están muy ___.', hint: 'cansado', answers: ['cansadas'], reason: 'zwei Frauen → weiblich Plural: **cansadas**.' },
        { type: 'gap', text: 'Es la ___ vez que vengo aquí.', hint: 'primero', answers: ['primera'], reason: '*la vez* ist weiblich → **primera**.' },
      ],
    },
    {
      id: 'adjectives-m2',
      level: 'medium',
      instruction: 'Bilde den Satz: Tippe die Wörter in der richtigen Reihenfolge an.',
      tasks: [
        { type: 'order', words: ['tengo', 'un', 'coche', 'rojo'], de: 'Ich habe ein rotes Auto.', reason: 'Farbadjektive stehen **nach** dem Nomen: *un coche rojo*.' },
        {
          type: 'order',
          words: ['mi', 'mejor', 'amiga', 'es', 'muy', 'simpática'],
          de: 'Meine beste Freundin ist sehr nett.',
          reason: '*mejor* steht vor dem Nomen; *simpática* passt sich an *amiga* an.',
        },
        { type: 'order', words: ['es', 'una', 'gran', 'ciudad'], de: 'Das ist eine großartige Stadt.', reason: '*gran* vor dem Nomen = großartig.' },
        {
          type: 'order',
          words: ['las', 'chicas', 'españolas', 'son', 'muy', 'altas'],
          de: 'Die spanischen Mädchen sind sehr groß.',
          reason: 'Nationalität nach dem Nomen; beide Adjektive weiblich Plural.',
        },
        {
          type: 'order',
          words: ['vivimos', 'en', 'una', 'casa', 'pequeña', 'y', 'bonita'],
          answers: ['vivimos en una casa bonita y pequeña'],
          de: 'Wir wohnen in einem kleinen und schönen Haus.',
          reason: 'Beide Adjektive nach dem Nomen, beide weiblich: *pequeña, bonita*.',
        },
      ],
    },

    // ---------- schwer ----------
    {
      id: 'adjectives-h1',
      level: 'hard',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'Tengo una casa blanco.', answers: ['Tengo una casa blanca.'], reason: '*la casa* → **blanca**.' },
        { type: 'fix', wrong: 'Los chicos son muy simpáticas.', answers: ['Los chicos son muy simpáticos.'], reason: '*los chicos* → **simpáticos**.' },
        { type: 'fix', wrong: 'Es un bueno amigo.', answers: ['Es un buen amigo.'], reason: 'Vor männlichem Nomen im Singular → **buen**.' },
        { type: 'fix', wrong: 'Mi profesora es alemán.', answers: ['Mi profesora es alemana.'], reason: 'Weibliche Person → **alemana**.' },
        { type: 'fix', wrong: 'Leemos libros interesante.', answers: ['Leemos libros interesantes.'], reason: 'Plural → **interesantes**.' },
        { type: 'fix', wrong: 'Tengo un rojo coche.', answers: ['Tengo un coche rojo.'], reason: 'Farben stehen **nach** dem Nomen.' },
        { type: 'fix', wrong: 'El día es muy bonita.', answers: ['El día es muy bonito.'], reason: '*el día* ist männlich → **bonito**.' },
        { type: 'fix', wrong: 'Las fotos son muy bonitos.', answers: ['Las fotos son muy bonitas.'], reason: '*la foto* ist weiblich → **bonitas**.' },
        {
          type: 'fix',
          wrong: 'Madrid es una grande ciudad.',
          answers: ['Madrid es una gran ciudad.', 'Madrid es una ciudad grande.'],
          reason: 'Vor dem Nomen → **gran** (*una gran ciudad*); nach dem Nomen bleibt *grande*.',
        },
      ],
    },
    {
      id: 'adjectives-h2',
      level: 'hard',
      instruction: 'Übersetze ins Spanische.',
      tasks: [
        { type: 'translate', de: 'ein interessantes Buch', answers: ['un libro interesante'], reason: 'Das Adjektiv steht nach dem Nomen.' },
        { type: 'translate', de: 'die weißen Häuser', answers: ['las casas blancas'], reason: '*las casas* → **blancas** (w. Pl.).' },
        {
          type: 'translate',
          de: 'Meine Freundinnen sind lustig.',
          answers: ['Mis amigas son divertidas.', 'Mis amigas son graciosas.'],
          reason: 'Charakter → *ser*; weiblich Plural: *divertidas*.',
        },
        { type: 'translate', de: 'ein guter Tag', answers: ['un buen día', 'un día bueno'], reason: 'Vor dem Nomen → **buen**: *un buen día*.' },
        { type: 'translate', de: 'Meine Eltern sind fleißig.', answers: ['Mis padres son trabajadores.'], reason: '*trabajador* → Plural **trabajadores**.' },
        { type: 'translate', de: 'eine spanische Lehrerin', answers: ['una profesora española'], reason: 'Nationalität nach dem Nomen, weiblich: *española*.' },
        {
          type: 'translate',
          de: 'Mein bester Freund heißt Leo. Er ist groß, blond und sehr lustig.',
          answers: ['Mi mejor amigo se llama Leo. Es alto, rubio y muy divertido.'],
          free: true,
          reason: '*alto, rubio, divertido* – männlich Singular, nach *ser*.',
        },
      ],
    },
  ],

  test: [
    {
      type: 'gap',
      instruction: 'Setze das Adjektiv in der richtigen Form ein.',
      text: 'una camiseta ___',
      hint: 'negro',
      answers: ['negra'],
      reason: 'weiblich Singular → **negra**.',
    },
    {
      type: 'gap',
      instruction: 'Setze das Adjektiv in der richtigen Form ein.',
      text: 'los alumnos ___',
      hint: 'francés',
      answers: ['franceses'],
      reason: 'männlich Plural → **franceses** (ohne Akzent).',
    },
    {
      type: 'gap',
      instruction: 'Setze das Adjektiv in der richtigen Form ein.',
      text: 'unas vacaciones ___',
      hint: 'genial',
      answers: ['geniales'],
      reason: 'Konsonant → Plural **+ es**: *geniales*.',
    },
    { type: 'choice', prompt: 'Es un ___ momento.', options: ['buen', 'bueno', 'buena'], answer: 'buen', reason: 'Vor männlichem Nomen im Singular → **buen**.' },
    {
      type: 'choice',
      prompt: 'Mi madre y mi tía son muy ___.',
      options: ['guapas', 'guapos', 'guapa'],
      answer: 'guapas',
      reason: 'Zwei Frauen → weiblich Plural: **guapas**.',
    },
    {
      type: 'choice',
      prompt: 'Pablo y Marta están ___.',
      options: ['cansados', 'cansadas', 'cansado'],
      answer: 'cansados',
      reason: 'Gemischte Gruppe → männlich Plural: **cansados**.',
    },
    { type: 'fix', wrong: 'Las chicas son muy alto.', answers: ['Las chicas son muy altas.'], reason: '*las chicas* → **altas**.' },
    { type: 'fix', wrong: 'Es una ciudad muy bonito.', answers: ['Es una ciudad muy bonita.'], reason: '*la ciudad* → **bonita**.' },
    { type: 'order', words: ['tengo', 'dos', 'gatos', 'negros'], de: 'Ich habe zwei schwarze Katzen.', reason: 'Farbe nach dem Nomen, Plural: *negros*.' },
    {
      type: 'translate',
      instruction: 'Übersetze ins Spanische.',
      de: 'die roten Schuhe',
      answers: ['los zapatos rojos'],
      reason: 'Adjektiv nach dem Nomen, männlich Plural: *rojos*.',
    },
  ],
}

export default unit
