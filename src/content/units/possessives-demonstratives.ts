import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'possessives-demonstratives',
  title: 'Possessiv- & Demonstrativbegleiter',
  subtitle: 'mi, tu, su, nuestro … und este, ese, aquel – wem etwas gehört und welches gemeint ist',
  grade: 5,
  area: 'grammar',
  cefr: 'A1',
  order: 9,
  prerequisites: ['adjectives'],
  keywords: ['Possessiv', 'Possessivbegleiter', 'mi', 'tu', 'su', 'nuestro', 'vuestro', 'Demonstrativ', 'este', 'ese', 'aquel', 'esto', 'eso'],

  summary: [
    {
      type: 'table',
      caption: 'Possessivbegleiter',
      head: ['', 'Singular', 'Plural'],
      rows: [
        ['mein', 'mi', 'mis'],
        ['dein', 'tu', 'tus'],
        ['sein / ihr / Ihr', 'su', 'sus'],
        ['unser', 'nuestro / nuestra', 'nuestros / nuestras'],
        ['euer', 'vuestro / vuestra', 'vuestros / vuestras'],
        ['ihr / Ihr (mehrere)', 'su', 'sus'],
      ],
    },
    {
      type: 'table',
      caption: 'Demonstrativbegleiter',
      head: ['', 'm. Sg.', 'w. Sg.', 'm. Pl.', 'w. Pl.'],
      rows: [
        ['hier', 'este', 'esta', 'estos', 'estas'],
        ['da', 'ese', 'esa', 'esos', 'esas'],
        ['dort', 'aquel', 'aquella', 'aquellos', 'aquellas'],
      ],
    },
    {
      type: 'list',
      items: [
        'Das Possessiv richtet sich nach dem **Besitz**, nicht nach dem Besitzer: *nuestra casa, nuestros libros*.',
        '*su/sus* = sein, ihr, Ihr – der Zusammenhang entscheidet.',
        'Ohne Nomen (neutral): *esto, eso, aquello* – *¿Qué es esto?*',
      ],
    },
  ],

  explanation: [
    {
      title: 'Possessivbegleiter',
      blocks: [
        {
          type: 'text',
          text: 'Possessivbegleiter stehen **vor** dem Nomen. Sie richten sich in der Zahl – bei *nuestro* und *vuestro* auch im Geschlecht – nach dem **Besitz**: *mi libro – mis libros, nuestra casa – nuestros amigos*.',
        },
        {
          type: 'table',
          head: ['Besitzer', 'ein Besitz', 'mehrere'],
          rows: [
            ['yo', '*mi hermano, mi hermana*', '*mis hermanos*'],
            ['tú', '*tu hermano, tu hermana*', '*tus hermanos*'],
            ['él/ella/usted', '*su hermano, su hermana*', '*sus hermanos*'],
            ['nosotros/-as', '*nuestro hermano, nuestra hermana*', '*nuestros hermanos, nuestras hermanas*'],
            ['vosotros/-as', '*vuestro hermano, vuestra hermana*', '*vuestros hermanos, vuestras hermanas*'],
            ['ellos/ellas/ustedes', '*su hermano, su hermana*', '*sus hermanos*'],
          ],
        },
        {
          type: 'warning',
          text: '*tu* (dein) hat **keinen** Akzent, *tú* (du) schon: *Tú tienes tu móvil.* Genauso *mi* (mein) und *mí* (mir): *para mí*.',
        },
      ],
    },
    {
      title: 'su – sein, ihr oder Ihr?',
      blocks: [
        {
          type: 'text',
          text: '*su/sus* kann „sein“, „ihr“, „Ihr“ (Höflichkeit) und „ihr“ (mehrere Besitzer) bedeuten. Ist es unklar, sagt man *de* + Person: *el coche de Ana, el coche de ellos*.',
        },
        { type: 'text', text: 'Beispiel: *Pablo y Lucía tienen un perro. Su perro se llama Toby.* (ihr Hund)' },
      ],
    },
    {
      title: 'Demonstrativbegleiter',
      blocks: [
        {
          type: 'text',
          text: 'Demonstrativbegleiter zeigen auf etwas und richten sich in Geschlecht und Zahl nach dem Nomen. Es gibt **drei** Entfernungen:',
        },
        {
          type: 'table',
          head: ['Formen', 'Entfernung', 'Beispiel'],
          rows: [
            ['este, esta, estos, estas', 'nah bei mir (hier)', '*este libro* – dieses Buch hier'],
            ['ese, esa, esos, esas', 'bei dir / etwas weiter (da)', '*esa chaqueta* – die Jacke da'],
            ['aquel, aquella, aquellos, aquellas', 'weit weg (dort)', '*aquella montaña* – der Berg dort drüben'],
          ],
        },
        { type: 'text', text: 'Zeitlich: *este año* (dieses Jahr), *esta semana* (diese Woche), *esta noche* (heute Abend).' },
        {
          type: 'text',
          text: 'Ohne Nomen – für etwas Unbekanntes oder eine ganze Situation – nimmt man die neutralen Formen **esto, eso, aquello**: *¿Qué es esto? – Eso es un regalo.*',
        },
      ],
    },
    {
      title: 'Unterschied zum Deutschen',
      blocks: [
        {
          type: 'list',
          items: [
            '„sein“ und „ihr“ sind im Spanischen beide **su** – das Geschlecht des Besitzers spielt keine Rolle.',
            'Spanisch hat **drei** Zeigewörter (*este – ese – aquel*), das Deutsche meist nur „dieser“ und „der da“.',
            'Bei Körperteilen und Kleidung steht oft der Artikel statt des Possessivs: *Me duele la cabeza. Me pongo la chaqueta.*',
          ],
        },
      ],
    },
    {
      title: 'Typische Fehler',
      blocks: [
        { type: 'warning', text: '~~mi amigos~~ → *mis amigos* · ~~tu zapatos~~ → *tus zapatos*' },
        { type: 'warning', text: '~~nuestro casa~~ → *nuestra casa* (*la casa* ist weiblich)' },
        { type: 'warning', text: '~~tú libro~~ → *tu libro* (ohne Akzent)' },
        { type: 'warning', text: '~~este casa~~ → *esta casa* · ~~estes libros~~ → *estos libros*' },
        { type: 'warning', text: '~~¿Qué es este?~~ → *¿Qué es esto?* (unbekannte Sache → neutral)' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        { type: 'tip', text: '**Der Besitz entscheidet:** Schau auf das Nomen dahinter, nicht auf den Besitzer – *nuestra casa, nuestros libros*.' },
        { type: 'tip', text: '**este – ese – aquel** = hier – da – dort (wie *aquí – ahí – allí*).' },
        { type: 'tip', text: '*esto, eso, aquello* enden auf **-o** und stehen immer **allein** – ohne Nomen.' },
      ],
    },
  ],

  examples: [
    { es: 'Mi hermana tiene diecisiete años.', de: 'Meine Schwester ist siebzehn.' },
    { es: '¿Dónde están tus llaves?', de: 'Wo sind deine Schlüssel?' },
    { es: 'Nuestra casa está cerca del instituto.', de: 'Unser Haus ist in der Nähe der Schule.' },
    { es: '¿Vuestros padres son de Salzburgo?', de: 'Sind eure Eltern aus Salzburg?' },
    { es: 'Ana vive con su abuela.', de: 'Ana wohnt bei ihrer Oma.' },
    { es: 'Señor García, ¿es este su coche?', de: 'Herr García, ist das Ihr Auto?' },
    { es: 'Este libro es muy interesante.', de: 'Dieses Buch ist sehr interessant.' },
    { es: '¿Te gusta esa camiseta?', de: 'Gefällt dir das T-Shirt da?' },
    { es: 'Aquella montaña es el Untersberg.', de: 'Der Berg dort drüben ist der Untersberg.' },
    { es: 'Esta semana tenemos tres exámenes.', de: 'Diese Woche haben wir drei Prüfungen.' },
    { es: '¿Qué es esto? – Es un regalo para ti.', de: 'Was ist das? – Das ist ein Geschenk für dich.' },
    { es: 'Mis amigos y sus padres vienen a la fiesta.', de: 'Meine Freunde und ihre Eltern kommen auf die Party.' },
  ],

  exercises: [
    // ---------- leicht ----------
    {
      id: 'possessives-demonstratives-e1',
      level: 'easy',
      instruction: 'Wähle den passenden Possessivbegleiter. Der Besitzer steht in Klammern.',
      tasks: [
        { type: 'choice', prompt: '(yo) ___ perro se llama Max.', options: ['Mi', 'Mis', 'Mí'], answer: 'Mi', reason: 'ein Besitz → **mi** (ohne Akzent).' },
        { type: 'choice', prompt: '(tú) ¿Dónde están ___ libros?', options: ['tus', 'tu', 'tús'], answer: 'tus', reason: 'mehrere Bücher → **tus**.' },
        { type: 'choice', prompt: '(nosotros) ___ casa es pequeña.', options: ['Nuestra', 'Nuestro', 'Nuestras'], answer: 'Nuestra', reason: '*la casa* (w. Sg.) → **nuestra**.' },
        {
          type: 'choice',
          prompt: '(vosotros) ¿Cómo se llama ___ profesor?',
          options: ['vuestro', 'vuestra', 'vuestros'],
          answer: 'vuestro',
          reason: '*el profesor* (m. Sg.) → **vuestro**.',
        },
        { type: 'choice', prompt: '(ella) Lucía y ___ hermanos viven en Madrid.', options: ['sus', 'su', 'tus'], answer: 'sus', reason: 'mehrere Geschwister → **sus**.' },
        {
          type: 'choice',
          prompt: '(nosotros) ___ amigos son muy simpáticos.',
          options: ['Nuestros', 'Nuestras', 'Nuestro'],
          answer: 'Nuestros',
          reason: '*los amigos* (m. Pl.) → **nuestros**.',
        },
        { type: 'choice', prompt: '(ellos) Mis vecinos tienen un gato. ___ gato es negro.', options: ['Su', 'Sus', 'Tu'], answer: 'Su', reason: 'eine Katze (*el gato*) → **su** – auch bei mehreren Besitzern.' },
        {
          type: 'choice',
          prompt: '(vosotras) ¿Son ___ bicicletas?',
          options: ['vuestras', 'vuestros', 'vuestra'],
          answer: 'vuestras',
          reason: '*las bicicletas* (w. Pl.) → **vuestras**.',
        },
        { type: 'choice', prompt: '(yo) ___ abuelos viven en Linz.', options: ['Mis', 'Mi', 'Mí'], answer: 'Mis', reason: 'mehrere → **mis**.' },
        { type: 'choice', prompt: '(usted) Señora Pérez, ¿es ___ bolso?', options: ['su', 'tu', 'sus'], answer: 'su', reason: '*usted* → **su** (Ihr).' },
      ],
    },
    {
      id: 'possessives-demonstratives-e2',
      level: 'easy',
      instruction: 'Wähle das passende Zeigewort. Die Entfernung steht in Klammern.',
      tasks: [
        { type: 'choice', prompt: '___ libro (hier) es muy bueno.', options: ['Este', 'Esta', 'Esto'], answer: 'Este', reason: 'hier + *el libro* → **este**.' },
        { type: 'choice', prompt: '___ casas (hier) son muy antiguas.', options: ['Estas', 'Estos', 'Esas'], answer: 'Estas', reason: 'hier + w. Pl. → **estas**.' },
        { type: 'choice', prompt: '¿Te gusta ___ chaqueta (da, bei dir)?', options: ['esa', 'ese', 'esta'], answer: 'esa', reason: 'da + *la chaqueta* → **esa**.' },
        {
          type: 'choice',
          prompt: '___ montañas (dort drüben) son los Alpes.',
          options: ['Aquellas', 'Aquellos', 'Esas'],
          answer: 'Aquellas',
          reason: 'weit weg + w. Pl. → **aquellas**.',
        },
        { type: 'choice', prompt: '___ año voy a Barcelona. (dieses Jahr)', options: ['Este', 'Esta', 'Ese'], answer: 'Este', reason: '*el año* → **este año**.' },
        { type: 'choice', prompt: '¿Qué es ___? (das hier, unbekannte Sache)', options: ['esto', 'este', 'esta'], answer: 'esto', reason: 'ohne Nomen, unbekannt → neutral **esto**.' },
        { type: 'choice', prompt: '___ chicos (da) son mis primos.', options: ['Esos', 'Esas', 'Eso'], answer: 'Esos', reason: 'da + m. Pl. → **esos**.' },
        { type: 'choice', prompt: '___ semana tengo mucho trabajo. (diese Woche)', options: ['Esta', 'Este', 'Estas'], answer: 'Esta', reason: '*la semana* → **esta semana**.' },
      ],
    },
    {
      id: 'possessives-demonstratives-e3',
      level: 'easy',
      instruction: 'Ordne zu: zuerst links antippen, dann rechts.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['mi', 'mein'],
            ['tu', 'dein'],
            ['nuestro', 'unser'],
            ['vuestro', 'euer'],
            ['su', 'sein / ihr / Ihr'],
          ],
          reason: '*su* steht für mehrere deutsche Formen.',
        },
        {
          type: 'match',
          pairs: [
            ['este', 'hier, bei mir'],
            ['ese', 'da, bei dir'],
            ['aquel', 'dort, weit weg'],
            ['esto', 'das hier (ohne Nomen)'],
          ],
          reason: 'Drei Entfernungen: *este – ese – aquel*; neutral ohne Nomen: *esto, eso, aquello*.',
        },
      ],
    },

    // ---------- mittel ----------
    {
      id: 'possessives-demonstratives-m1',
      level: 'medium',
      instruction: 'Setze den passenden Possessivbegleiter ein. Der Besitzer steht in Klammern.',
      tasks: [
        { type: 'gap', text: '___ hermano se llama Leo.', hint: 'yo', answers: ['mi'], reason: 'ein Bruder → **mi**.' },
        { type: 'gap', text: '¿Son ___ zapatos?', hint: 'tú', answers: ['tus'], reason: 'mehrere Schuhe → **tus**.' },
        { type: 'gap', text: '___ piso está en el centro.', hint: 'nosotros', answers: ['nuestro'], reason: '*el piso* (die Wohnung) ist männlich → **nuestro**.' },
        { type: 'gap', text: '___ clase es muy grande.', hint: 'nosotros', answers: ['nuestra'], reason: '*la clase* ist weiblich → **nuestra**.' },
        { type: 'gap', text: '¿Dónde viven ___ abuelos?', hint: 'vosotros', answers: ['vuestros'], reason: '*los abuelos* (m. Pl.) → **vuestros**.' },
        { type: 'gap', text: 'Marta busca ___ llaves.', hint: 'ella', answers: ['sus'], reason: 'mehrere Schlüssel → **sus**.' },
        { type: 'gap', text: '___ hijas estudian en Viena.', hint: 'ellos', answers: ['sus'], reason: 'mehrere Töchter → **sus**.' },
        { type: 'gap', text: '¿Es ___ primera vez en España?', hint: 'vosotras', answers: ['vuestra'], reason: '*la vez* ist weiblich → **vuestra**.' },
        { type: 'gap', text: 'Señor López, ___ hijo está aquí.', hint: 'usted', answers: ['su'], reason: '*usted* → **su** (Ihr).' },
        { type: 'gap', text: 'Te presento a ___ amigas.', hint: 'yo', answers: ['mis'], reason: 'mehrere Freundinnen → **mis**.' },
      ],
    },
    {
      id: 'possessives-demonstratives-m2',
      level: 'medium',
      instruction: 'Setze *este*, *ese* oder *aquel* in der richtigen Form ein.',
      tasks: [
        { type: 'gap', text: '___ pantalones (hier) son muy caros.', answers: ['estos'], reason: 'hier + m. Pl. → **estos**.' },
        { type: 'gap', text: '¿Ves ___ castillo (dort drüben)?', answers: ['aquel'], reason: 'weit weg + m. Sg. → **aquel**.' },
        { type: 'gap', text: '___ mochila (da, bei dir) es muy bonita.', answers: ['esa'], reason: 'da + w. Sg. → **esa**.' },
        { type: 'gap', text: 'Me gustan ___ flores (hier).', answers: ['estas'], reason: 'hier + w. Pl. → **estas**.' },
        { type: 'gap', text: '___ coches (da) son de mis vecinos.', answers: ['esos'], reason: 'da + m. Pl. → **esos**.' },
        { type: 'gap', text: '___ noche vamos al cine. (heute Abend)', answers: ['esta'], reason: '*la noche* → **esta noche**.' },
        { type: 'gap', text: '¿Qué es ___? (das da, unbekannte Sache)', answers: ['eso'], reason: 'ohne Nomen, da → neutral **eso**.' },
        { type: 'gap', text: '___ casas (dort drüben) son muy antiguas.', answers: ['aquellas'], reason: 'weit weg + w. Pl. → **aquellas**.' },
      ],
    },

    // ---------- schwer ----------
    {
      id: 'possessives-demonstratives-h1',
      level: 'hard',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'Mi amigos son de Linz.', answers: ['Mis amigos son de Linz.'], reason: 'mehrere Freunde → **mis**.' },
        { type: 'fix', wrong: 'Nuestro casa es muy bonita.', answers: ['Nuestra casa es muy bonita.'], reason: '*la casa* ist weiblich → **nuestra**.' },
        { type: 'fix', wrong: '¿Dónde está tú mochila?', answers: ['¿Dónde está tu mochila?'], reason: '*tu* (dein) ohne Akzent.' },
        { type: 'fix', wrong: 'Este casa es de mis abuelos.', answers: ['Esta casa es de mis abuelos.'], reason: '*la casa* → **esta**.' },
        { type: 'fix', wrong: 'Estes libros son interesantes.', answers: ['Estos libros son interesantes.'], reason: 'm. Pl. → **estos**.' },
        { type: 'fix', wrong: '¿Qué es este? – Es un regalo.', answers: ['¿Qué es esto? – Es un regalo.'], reason: 'unbekannte Sache ohne Nomen → **esto**.' },
        {
          type: 'fix',
          wrong: 'Pablo y Lucía viven con su padres.',
          answers: ['Pablo y Lucía viven con sus padres.'],
          reason: 'mehrere Eltern(teile) → **sus**.',
        },
        { type: 'fix', wrong: '¿Vuestra hermanos vienen también?', answers: ['¿Vuestros hermanos vienen también?'], reason: '*los hermanos* (m. Pl.) → **vuestros**.' },
        { type: 'fix', wrong: 'Aquel montaña es muy alta.', answers: ['Aquella montaña es muy alta.'], reason: '*la montaña* → **aquella**.' },
      ],
    },
    {
      id: 'possessives-demonstratives-h2',
      level: 'hard',
      instruction: 'Bilde den Satz: Tippe die Wörter in der richtigen Reihenfolge an.',
      tasks: [
        { type: 'order', words: ['nuestros', 'abuelos', 'viven', 'en', 'el', 'campo'], de: 'Unsere Großeltern wohnen auf dem Land.', reason: '*nuestros* + m. Pl.' },
        { type: 'order', words: ['esta', 'camiseta', 'es', 'de', 'mi', 'hermana'], de: 'Dieses T-Shirt gehört meiner Schwester.', reason: 'Besitz mit *ser de*; *esta* + w. Sg.' },
        { type: 'order', words: ['te', 'gustan', 'esos', 'zapatos'], de: 'Gefallen dir die Schuhe da?', reason: '*esos* + m. Pl.; *gustan* wegen Plural.' },
        { type: 'order', words: ['aquel', 'chico', 'es', 'mi', 'primo'], de: 'Der Junge dort drüben ist mein Cousin.', reason: 'weit weg → *aquel*.' },
      ],
    },
    {
      id: 'possessives-demonstratives-h3',
      level: 'hard',
      instruction: 'Übersetze ins Spanische.',
      tasks: [
        { type: 'translate', de: 'meine Freunde', answers: ['mis amigos'], reason: 'mehrere → **mis**.' },
        {
          type: 'translate',
          de: 'unsere Schule',
          answers: ['nuestro colegio', 'nuestra escuela', 'nuestro instituto'],
          reason: 'Das Geschlecht des Besitzes zählt: *el colegio* → *nuestro*, *la escuela* → *nuestra*.',
        },
        { type: 'translate', de: 'euer Hund', answers: ['vuestro perro'], reason: '*el perro* → **vuestro**.' },
        { type: 'translate', de: 'dieses Jahr', answers: ['este año'], reason: '*el año* → **este**.' },
        { type: 'translate', de: 'Was ist das hier?', answers: ['¿Qué es esto?'], reason: 'unbekannte Sache → neutral **esto**.' },
        { type: 'translate', de: 'die Häuser dort drüben', answers: ['aquellas casas'], reason: 'weit weg + w. Pl. → **aquellas**.' },
        {
          type: 'translate',
          de: 'Das ist meine Familie: Das sind meine Eltern und das ist mein Bruder. Unser Hund heißt Rocky.',
          answers: ['Esta es mi familia: estos son mis padres y este es mi hermano. Nuestro perro se llama Rocky.'],
          free: true,
          reason: 'Beim Vorstellen passt sich das Zeigewort an: *esta* (familia), *estos* (padres), *este* (hermano); *nuestro perro*.',
        },
      ],
    },
  ],

  test: [
    { type: 'choice', prompt: '(tú) ¿Cómo se llaman ___ padres?', options: ['tus', 'tu', 'sus'], answer: 'tus', reason: 'mehrere, Besitzer *tú* → **tus**.' },
    {
      type: 'choice',
      prompt: '(nosotros) ___ profesora es de Chile.',
      options: ['Nuestra', 'Nuestro', 'Nuestras'],
      answer: 'Nuestra',
      reason: '*la profesora* → **nuestra**.',
    },
    { type: 'choice', prompt: '___ bicicleta (hier) es nueva.', options: ['Esta', 'Este', 'Esa'], answer: 'Esta', reason: 'hier + w. Sg. → **esta**.' },
    {
      type: 'gap',
      instruction: 'Setze den passenden Possessivbegleiter ein (Besitzer in Klammern).',
      text: '___ coche es rojo.',
      hint: 'vosotros',
      answers: ['vuestro'],
      reason: '*el coche* → **vuestro**.',
    },
    {
      type: 'gap',
      instruction: 'Setze den passenden Possessivbegleiter ein (Besitzer in Klammern).',
      text: 'Pablo vive con ___ abuelos.',
      hint: 'él',
      answers: ['sus'],
      reason: 'mehrere Großeltern → **sus**.',
    },
    {
      type: 'gap',
      instruction: 'Setze *este*, *ese* oder *aquel* in der richtigen Form ein.',
      text: '¿Ves ___ árboles (dort drüben)?',
      answers: ['aquellos'],
      reason: 'weit weg + m. Pl. → **aquellos**.',
    },
    { type: 'fix', wrong: 'Mi padres trabajan mucho.', answers: ['Mis padres trabajan mucho.'], reason: 'mehrere → **mis**.' },
    { type: 'fix', wrong: 'Este chaqueta es muy cara.', answers: ['Esta chaqueta es muy cara.'], reason: '*la chaqueta* → **esta**.' },
    {
      type: 'match',
      instruction: 'Welche Form passt zu welchem Nomen?',
      pairs: [
        ['nuestra', 'casa'],
        ['nuestros', 'libros'],
        ['nuestro', 'perro'],
        ['nuestras', 'amigas'],
      ],
      reason: '*nuestro* richtet sich in Geschlecht und Zahl nach dem Besitz.',
    },
    {
      type: 'translate',
      instruction: 'Übersetze ins Spanische.',
      de: 'Was ist das?',
      answers: ['¿Qué es esto?', '¿Qué es eso?'],
      reason: 'unbekannte Sache ohne Nomen → neutral **esto/eso**.',
    },
  ],
}

export default unit
