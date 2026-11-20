import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'ser-estar-hay',
  title: 'ser, estar & hay',
  subtitle: 'Dreimal „sein“: ser (was jemand ist), estar (wo und wie) und hay (es gibt) – mit Ortsangaben',
  grade: 5,
  area: 'grammar',
  cefr: 'A1',
  order: 3,
  prerequisites: ['articles-nouns', 'present-regular'],
  keywords: ['ser', 'estar', 'hay', 'sein', 'es gibt', 'Ortsangaben', 'delante de', 'al lado de'],

  summary: [
    {
      type: 'table',
      caption: 'Formen',
      head: ['', 'ser', 'estar'],
      rows: [
        ['yo', 'soy', 'estoy'],
        ['tú', 'eres', 'estás'],
        ['él/ella/usted', 'es', 'está'],
        ['nosotros/-as', 'somos', 'estamos'],
        ['vosotros/-as', 'sois', 'estáis'],
        ['ellos/ellas/ustedes', 'son', 'están'],
      ],
    },
    {
      type: 'table',
      caption: 'Wann?',
      head: ['ser', 'estar', 'hay'],
      rows: [
        ['Identität: *Soy Lena.*', 'Ort: *Estoy en casa.*', 'Existenz: *Hay un parque.*'],
        ['Herkunft: *Somos de Austria.*', 'Befinden: *¿Cómo estás?*', '+ *un/una*, Zahl, *mucho*'],
        ['Beruf: *Es médica.*', 'Zustand: *Estoy cansado.*', 'bleibt immer *hay*'],
        ['Eigenschaft: *Es simpático.*', '', ''],
        ['Uhrzeit, Tag: *Son las tres. Es lunes.*', '', ''],
      ],
    },
    {
      type: 'list',
      items: [
        '**hay** + unbestimmt (*un, una, dos, muchos*): *Hay un banco en la plaza.*',
        '**estar** + bestimmt (*el, la, mi*, Name): *El banco está en la plaza.*',
      ],
    },
  ],

  explanation: [
    {
      title: 'Formen von ser, estar und hay',
      blocks: [
        {
          type: 'table',
          head: ['', 'ser', 'estar'],
          rows: [
            ['yo', 'soy', 'estoy'],
            ['tú', 'eres', 'estás'],
            ['él/ella/usted', 'es', 'está'],
            ['nosotros/-as', 'somos', 'estamos'],
            ['vosotros/-as', 'sois', 'estáis'],
            ['ellos/ellas/ustedes', 'son', 'están'],
          ],
        },
        {
          type: 'text',
          text: '**hay** (es gibt) kommt vom Verb *haber* und ändert sich nicht: *Hay un libro. Hay tres libros.*',
        },
        { type: 'tip', text: '*estar* hat Akzente auf *estás, está, estáis, están* – nur *estoy* und *estamos* nicht.' },
      ],
    },
    {
      title: 'ser – was jemand oder etwas ist',
      blocks: [
        {
          type: 'list',
          items: [
            'Name, Identität: *Soy Lena. Es mi hermano.*',
            'Herkunft, Nationalität: *Soy de Austria. Soy austriaca.*',
            'Beruf: *Mi padre es profesor.* (ohne Artikel)',
            'Aussehen, Charakter, Eigenschaften: *Ana es alta y simpática.*',
            'Material und Besitz: *La mesa es de madera. El libro es de Pablo.*',
            'Uhrzeit, Datum, Wochentag: *Son las diez. Hoy es lunes.*',
          ],
        },
        {
          type: 'tip',
          text: 'Veranstaltungen „finden statt“ mit *ser*: *La fiesta es en mi casa.* – das Fest ist kein Gegenstand, der irgendwo steht.',
        },
      ],
    },
    {
      title: 'estar – wo und wie',
      blocks: [
        {
          type: 'list',
          items: [
            'Ort, Lage: *Salzburgo está en Austria. ¿Dónde está el baño?*',
            'Befinden: *¿Cómo estás? – Estoy bien.*',
            'Vorübergehender Zustand, Stimmung: *Estoy cansado. La sopa está fría.*',
            '*estar* + Gerundio (gerade tun): *Estoy comiendo.* → Einheit 5.12',
          ],
        },
      ],
    },
    {
      title: 'hay oder estar?',
      blocks: [
        {
          type: 'text',
          text: '*hay* sagt, **ob** es etwas gibt. Danach steht **kein** bestimmter Artikel, sondern *un/una/unos/unas*, eine Zahl, *mucho/poco* oder ein Nomen ohne Artikel. *estar* sagt, **wo** sich etwas Bestimmtes befindet.',
        },
        {
          type: 'table',
          head: ['hay', 'estar'],
          rows: [
            ['En mi calle **hay** un supermercado.', 'El supermercado **está** en mi calle.'],
            ['¿**Hay** un baño por aquí?', '¿Dónde **está** el baño?'],
            ['**Hay** muchos turistas en Salamanca.', 'Los turistas **están** en la plaza.'],
            ['No **hay** leche.', 'La leche **está** en la nevera.'],
          ],
        },
      ],
    },
    {
      title: 'Ortsangaben',
      blocks: [
        {
          type: 'table',
          head: ['Spanisch', 'Deutsch'],
          rows: [
            ['*delante de*', 'vor'],
            ['*detrás de*', 'hinter'],
            ['*al lado de*', 'neben'],
            ['*encima de / sobre*', 'auf, über'],
            ['*debajo de*', 'unter'],
            ['*entre*', 'zwischen'],
            ['*enfrente de*', 'gegenüber'],
            ['*cerca de / lejos de*', 'in der Nähe von / weit weg von'],
            ['*a la derecha de / a la izquierda de*', 'rechts von / links von'],
            ['*en*', 'in, auf'],
          ],
        },
        { type: 'warning', text: 'de + el = **del**: *al lado del banco, delante del colegio*.' },
      ],
    },
    {
      title: 'Unterschied zum Deutschen',
      blocks: [
        {
          type: 'text',
          text: 'Im Deutschen gibt es nur „sein“. Im Spanischen entscheidest du: **was** jemand ist (*ser*) oder **wo/wie** jemand gerade ist (*estar*). Bei manchen Adjektiven ändert sich sogar die Bedeutung:',
        },
        {
          type: 'table',
          head: ['mit ser', 'mit estar'],
          rows: [
            ['*Es aburrido.* – Er ist langweilig.', '*Está aburrido.* – Ihm ist langweilig.'],
            ['*Es listo.* – Er ist klug.', '*Está listo.* – Er ist fertig, bereit.'],
            ['*Es malo.* – Er ist schlecht, böse.', '*Está malo.* – Er ist krank.'],
            ['*La manzana es verde.* – grüne Sorte', '*La manzana está verde.* – noch nicht reif'],
          ],
        },
      ],
    },
    {
      title: 'Typische Fehler',
      blocks: [
        { type: 'warning', text: 'Ort mit ser: ~~Soy en casa.~~ → *Estoy en casa.*' },
        { type: 'warning', text: 'Herkunft mit estar: ~~Estoy de Austria.~~ → *Soy de Austria.*' },
        { type: 'warning', text: 'hay mit bestimmtem Artikel: ~~Hay el museo en el centro.~~ → *El museo está en el centro.* oder *Hay un museo en el centro.*' },
        { type: 'warning', text: 'estar statt hay: ~~Están dos libros en la mesa.~~ → *Hay dos libros en la mesa.*' },
        { type: 'warning', text: 'Wochentag mit estar: ~~Hoy está lunes.~~ → *Hoy es lunes.*' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        {
          type: 'tip',
          text: '**ser** = was in deinem Ausweis stehen könnte: Name, Herkunft, Beruf, Aussehen. **estar** = wo du bist und wie es dir gerade geht.',
        },
        { type: 'tip', text: '„Wie es dir geht und wo du stehst – das ist **estar**, wie du siehst.“' },
        { type: 'tip', text: '**hay** antwortet auf „Gibt es …?“ (*un, una, dos*), **está/están** auf „Wo ist …?“ (*el, la, mi*).' },
      ],
    },
  ],

  examples: [
    { es: 'Soy Lena y soy de Salzburgo.', de: 'Ich bin Lena und komme aus Salzburg.' },
    { es: 'Mi madre es médica y mi padre es profesor.', de: 'Meine Mutter ist Ärztin und mein Vater ist Lehrer.' },
    { es: '¿Cómo estás? – Estoy muy bien, gracias.', de: 'Wie geht es dir? – Mir geht es sehr gut, danke.' },
    { es: 'Salzburgo está en Austria.', de: 'Salzburg liegt in Österreich.' },
    { es: 'En mi barrio hay un supermercado y dos parques.', de: 'In meinem Viertel gibt es einen Supermarkt und zwei Parks.' },
    { es: 'El supermercado está al lado del banco.', de: 'Der Supermarkt ist neben der Bank.' },
    { es: 'Hoy estoy cansado porque es lunes.', de: 'Heute bin ich müde, weil Montag ist.' },
    { es: 'Nuestros vecinos son muy simpáticos.', de: 'Unsere Nachbarn sind sehr nett.' },
    { es: '¿Hay un baño por aquí? – Sí, está al final del pasillo.', de: 'Gibt es hier eine Toilette? – Ja, sie ist am Ende des Gangs.' },
    { es: 'La sopa está fría.', de: 'Die Suppe ist kalt.' },
    { es: 'Son las ocho y la película es a las nueve.', de: 'Es ist acht Uhr, und der Film ist um neun.' },
    { es: 'Mis libros están debajo de la cama.', de: 'Meine Bücher sind unter dem Bett.' },
  ],

  exercises: [
    // ---------- leicht ----------
    {
      id: 'ser-estar-hay-e1',
      level: 'easy',
      instruction: 'Ergänze die Konjugationstabelle im Presente.',
      tasks: [
        {
          type: 'table',
          verb: 'ser',
          tense: 'Presente',
          forms: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
          given: [0],
          reason: '*ser* ist völlig unregelmäßig: soy, eres, es, somos, sois, son.',
        },
        {
          type: 'table',
          verb: 'estar',
          tense: 'Presente',
          forms: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
          given: [0],
          reason: '*estar*: estoy, dann Akzente auf *estás, está, estáis, están*.',
        },
      ],
    },
    {
      id: 'ser-estar-hay-e2',
      level: 'easy',
      instruction: '*ser* oder *estar*? Wähle die richtige Form.',
      tasks: [
        { type: 'choice', prompt: 'Yo ___ de Austria.', options: ['soy', 'estoy'], answer: 'soy', reason: 'Herkunft → **ser**.' },
        { type: 'choice', prompt: 'Madrid ___ en el centro de España.', options: ['es', 'está'], answer: 'está', reason: 'Lage, Ort → **estar**.' },
        {
          type: 'choice',
          prompt: '¿Cómo ___ tus padres? (Wie geht es ihnen?)',
          options: ['son', 'están'],
          answer: 'están',
          reason: 'Befinden → **estar**. (*¿Cómo son?* hieße „Wie sind sie so?“)',
        },
        { type: 'choice', prompt: 'Mi hermano ___ estudiante.', options: ['es', 'está'], answer: 'es', reason: 'Beruf, Tätigkeit → **ser**.' },
        { type: 'choice', prompt: 'Hoy ___ muy cansada.', options: ['soy', 'estoy'], answer: 'estoy', reason: 'Vorübergehender Zustand → **estar**.' },
        { type: 'choice', prompt: 'Las llaves ___ en la mesa.', options: ['son', 'están'], answer: 'están', reason: 'Ort → **estar**.' },
        { type: 'choice', prompt: '___ las cinco de la tarde.', options: ['Son', 'Están'], answer: 'Son', reason: 'Uhrzeit → **ser**.' },
        { type: 'choice', prompt: 'Ana y Lucía ___ españolas.', options: ['son', 'están'], answer: 'son', reason: 'Nationalität → **ser**.' },
        { type: 'choice', prompt: '¿Dónde ___ el baño?', options: ['es', 'está'], answer: 'está', reason: '„Wo ist …?“ → **estar**.' },
        { type: 'choice', prompt: 'Ahora nosotros ___ en clase.', options: ['somos', 'estamos'], answer: 'estamos', reason: 'Ort → **estar**.' },
      ],
    },
    {
      id: 'ser-estar-hay-e3',
      level: 'easy',
      instruction: 'Ordne die Ortsangaben zu.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['delante de', 'vor'],
            ['detrás de', 'hinter'],
            ['al lado de', 'neben'],
            ['debajo de', 'unter'],
            ['entre', 'zwischen'],
            ['enfrente de', 'gegenüber'],
          ],
          reason: 'Ortsangaben stehen meist mit *estar*: *El gato está debajo de la mesa.*',
        },
      ],
    },

    // ---------- mittel ----------
    {
      id: 'ser-estar-hay-m1',
      level: 'medium',
      instruction: '*hay*, *está/están* oder *es*? Wähle.',
      tasks: [
        { type: 'choice', prompt: 'En mi calle ___ una farmacia.', options: ['hay', 'está', 'es'], answer: 'hay', reason: 'unbestimmt (*una farmacia*) → **hay**.' },
        { type: 'choice', prompt: 'La farmacia ___ al lado del banco.', options: ['está', 'hay', 'es'], answer: 'está', reason: 'bestimmt (*la farmacia*) + Ort → **está**.' },
        { type: 'choice', prompt: '¿___ un cajero por aquí?', options: ['Hay', 'Está', 'Es'], answer: 'Hay', reason: '„Gibt es …?“ → **hay**.' },
        { type: 'choice', prompt: 'Mis amigos ___ en el parque.', options: ['están', 'hay', 'son'], answer: 'están', reason: 'bestimmte Personen + Ort → **están**.' },
        { type: 'choice', prompt: '___ muchos turistas en Sevilla en verano.', options: ['Hay', 'Están', 'Son'], answer: 'Hay', reason: 'unbestimmte Menge (*muchos*) → **hay**.' },
        { type: 'choice', prompt: 'En la nevera no ___ leche.', options: ['hay', 'está', 'es'], answer: 'hay', reason: 'Nomen ohne Artikel → **hay**.' },
        { type: 'choice', prompt: '¿Dónde ___ mis gafas?', options: ['están', 'hay', 'son'], answer: 'están', reason: '„Wo sind …?“ + bestimmt (*mis gafas*) → **están**.' },
        { type: 'choice', prompt: 'En la clase ___ veinte alumnos.', options: ['hay', 'están', 'es'], answer: 'hay', reason: 'Zahl (unbestimmt) → **hay**.' },
      ],
    },
    {
      id: 'ser-estar-hay-m2',
      level: 'medium',
      instruction: 'Setze die richtige Form von *ser*, *estar* oder *hay* ein.',
      tasks: [
        { type: 'gap', text: 'Mi padre ___ de Colombia, pero vive en Graz.', answers: ['es'], reason: 'Herkunft → **ser**.' },
        { type: 'gap', text: 'Hoy ___ un poco nervioso porque tengo un examen.', hint: 'yo', answers: ['estoy'], reason: 'Vorübergehender Zustand → **estar**.' },
        { type: 'gap', text: 'En el centro ___ muchos restaurantes.', answers: ['hay'], reason: 'unbestimmt (*muchos*) → **hay**.' },
        { type: 'gap', text: 'El restaurante de mis tíos ___ en la plaza.', answers: ['está'], reason: 'bestimmt + Ort → **estar**.' },
        { type: 'gap', text: 'Vosotros ___ austriacos, ¿verdad?', answers: ['sois'], reason: 'Nationalität → **ser**.' },
        { type: 'gap', text: '¿Qué hora ___?', answers: ['es'], reason: 'Uhrzeit → **ser**: *¿Qué hora es?*' },
        { type: 'gap', text: 'La ventana ___ abierta.', answers: ['está'], reason: 'Zustand → **estar**.' },
        { type: 'gap', text: 'Nosotras ___ en la biblioteca.', answers: ['estamos'], reason: 'Ort → **estar**.' },
        { type: 'gap', text: '¿___ un hospital cerca de aquí?', answers: ['hay'], reason: 'Frage nach der Existenz → **hay**.' },
        { type: 'gap', text: 'Mi profesora de español ___ de Valencia.', answers: ['es'], reason: 'Herkunft → **ser**.' },
        { type: 'gap', text: '¿Cómo ___? – Bien, gracias.', hint: 'tú', answers: ['estás'], reason: 'Befinden → **estar**.' },
      ],
    },

    // ---------- schwer ----------
    {
      id: 'ser-estar-hay-h1',
      level: 'hard',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'Soy en casa de mi abuela.', answers: ['Estoy en casa de mi abuela.'], reason: 'Ort → **estar**.' },
        { type: 'fix', wrong: 'Mis primos están de Argentina.', answers: ['Mis primos son de Argentina.'], reason: 'Herkunft → **ser**.' },
        {
          type: 'fix',
          wrong: 'Hay el museo en la plaza mayor.',
          answers: ['El museo está en la plaza mayor.', 'Hay un museo en la plaza mayor.'],
          reason: 'Bestimmter Artikel → **estar** (*El museo está …*) – oder unbestimmt mit **hay** (*Hay un museo …*).',
        },
        { type: 'fix', wrong: 'Están dos libros en la mesa.', answers: ['Hay dos libros en la mesa.'], reason: 'Zahl (unbestimmt) → **hay**.' },
        { type: 'fix', wrong: 'Hoy está martes.', answers: ['Hoy es martes.'], reason: 'Wochentag → **ser**.' },
        { type: 'fix', wrong: '¿Dónde es la estación de tren?', answers: ['¿Dónde está la estación de tren?'], reason: '„Wo ist …?“ → **estar**.' },
        { type: 'fix', wrong: 'Mi hermana es enferma.', answers: ['Mi hermana está enferma.'], reason: 'Krankheit = Zustand → **estar**.' },
        { type: 'fix', wrong: 'Somos muy contentos con el examen.', answers: ['Estamos muy contentos con el examen.'], reason: '*contento* (froh, zufrieden) = Stimmung → **estar**.' },
        {
          type: 'fix',
          wrong: 'La biblioteca está al lado de el instituto.',
          answers: ['La biblioteca está al lado del instituto.'],
          reason: '*de + el* → **del**.',
        },
      ],
    },
    {
      id: 'ser-estar-hay-h2',
      level: 'hard',
      instruction: 'Bilde den Satz: Tippe die Wörter in der richtigen Reihenfolge an.',
      tasks: [
        {
          type: 'order',
          words: ['el', 'gato', 'está', 'debajo', 'de', 'la', 'cama'],
          answers: ['debajo de la cama está el gato'],
          de: 'Die Katze ist unter dem Bett.',
          reason: 'Bestimmtes Tier + Ort → *está*; *debajo de* = unter.',
        },
        {
          type: 'order',
          words: ['en', 'mi', 'barrio', 'hay', 'dos', 'parques'],
          answers: ['hay dos parques en mi barrio'],
          de: 'In meinem Viertel gibt es zwei Parks.',
          reason: 'Zahl (unbestimmt) → *hay*.',
        },
        {
          type: 'order',
          words: ['mi', 'abuela', 'es', 'de', 'Sevilla'],
          de: 'Meine Oma kommt aus Sevilla.',
          reason: 'Herkunft → *ser de*.',
        },
        {
          type: 'order',
          words: ['hoy', 'estamos', 'muy', 'cansados'],
          answers: ['estamos muy cansados hoy'],
          de: 'Heute sind wir sehr müde.',
          reason: 'Zustand → *estar*; *cansados* passt sich an *nosotros* an.',
        },
      ],
    },
    {
      id: 'ser-estar-hay-h3',
      level: 'hard',
      instruction: 'Übersetze ins Spanische.',
      tasks: [
        { type: 'translate', de: 'Ich bin müde.', answers: ['Estoy cansado.', 'Estoy cansada.'], reason: 'Zustand → **estar**; Adjektiv angleichen (*cansado/cansada*).' },
        {
          type: 'translate',
          de: 'Wo ist die Bushaltestelle?',
          answers: ['¿Dónde está la parada de autobús?', '¿Dónde está la parada del autobús?', '¿Dónde está la parada?'],
          reason: '„Wo ist …?“ → **estar**.',
        },
        {
          type: 'translate',
          de: 'Gibt es hier einen Supermarkt?',
          answers: ['¿Hay un supermercado aquí?', '¿Hay un supermercado por aquí?', '¿Aquí hay un supermercado?', '¿Por aquí hay un supermercado?'],
          reason: '„Gibt es …?“ → **hay** + *un/una*.',
        },
        { type: 'translate', de: 'Wir kommen aus Österreich.', answers: ['Somos de Austria.', 'Venimos de Austria.'], reason: 'Herkunft → **ser de** (oder *venir de*).' },
        { type: 'translate', de: 'Es ist halb neun.', answers: ['Son las ocho y media.'], reason: 'Uhrzeit → **ser**: *Son las …* („halb neun“ = 8.30 Uhr).' },
        {
          type: 'translate',
          de: 'Das Restaurant ist neben dem Kino.',
          answers: ['El restaurante está al lado del cine.'],
          reason: 'Ort → **estar**; *al lado de + el* → *al lado del*.',
        },
        {
          type: 'translate',
          de: 'In meiner Stadt gibt es einen Fluss und viele Brücken. Der Fluss ist sehr schön.',
          answers: ['En mi ciudad hay un río y muchos puentes. El río es muy bonito.'],
          free: true,
          reason: '„gibt es“ → *hay*; Eigenschaft des bestimmten Flusses → *es*.',
        },
      ],
    },
  ],

  test: [
    {
      type: 'choice',
      instruction: 'Wähle: *ser*, *estar* oder *hay*?',
      prompt: 'Mis padres ___ de Chile.',
      options: ['son', 'están', 'hay'],
      answer: 'son',
      reason: 'Herkunft → **ser**.',
    },
    {
      type: 'choice',
      instruction: 'Wähle: *ser*, *estar* oder *hay*?',
      prompt: '¿Dónde ___ tu móvil?',
      options: ['está', 'es', 'hay'],
      answer: 'está',
      reason: '„Wo ist …?“ → **estar**.',
    },
    {
      type: 'choice',
      instruction: 'Wähle: *ser*, *estar* oder *hay*?',
      prompt: 'En la plaza ___ un mercado.',
      options: ['hay', 'está', 'es'],
      answer: 'hay',
      reason: 'unbestimmt (*un mercado*) → **hay**.',
    },
    {
      type: 'gap',
      instruction: 'Setze die richtige Form ein.',
      text: 'Hoy ___ muy contentos.',
      hint: 'estar, nosotros',
      answers: ['estamos'],
      reason: 'Stimmung → **estar**: *estamos*.',
    },
    {
      type: 'gap',
      instruction: 'Setze die richtige Form ein.',
      text: '___ las once de la noche.',
      hint: 'ser',
      answers: ['son'],
      reason: 'Uhrzeit (Plural) → **son**.',
    },
    {
      type: 'gap',
      instruction: 'Setze die richtige Form ein.',
      text: 'Vosotros ___ de Viena, ¿no?',
      hint: 'ser',
      answers: ['sois'],
      reason: 'Herkunft → **ser**: *sois*.',
    },
    { type: 'fix', wrong: 'Mi hermano es enfermo.', answers: ['Mi hermano está enfermo.'], reason: 'Krankheit = Zustand → **estar**.' },
    {
      type: 'fix',
      wrong: 'Hay la parada al lado del colegio.',
      answers: ['La parada está al lado del colegio.', 'Hay una parada al lado del colegio.'],
      reason: 'Bestimmter Artikel → **estar** – oder unbestimmt mit **hay**.',
    },
    {
      type: 'match',
      instruction: 'Ordne zu: Warum *ser*, *estar* oder *hay*?',
      pairs: [
        ['Soy de Linz.', 'Herkunft'],
        ['Estoy en Linz.', 'Ort'],
        ['Hay un museo.', 'es gibt'],
        ['Estoy contento.', 'Stimmung'],
      ],
      reason: '*ser* = Herkunft/Identität, *estar* = Ort und Befinden, *hay* = es gibt.',
    },
    {
      type: 'translate',
      instruction: 'Übersetze ins Spanische.',
      de: 'Meine Schwester ist Ärztin.',
      answers: ['Mi hermana es médica.', 'Mi hermana es doctora.'],
      reason: 'Beruf → **ser**, ohne Artikel.',
    },
  ],
}

export default unit
