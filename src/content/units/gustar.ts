import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'gustar',
  title: 'gustar & Co.',
  subtitle: 'me gusta, te encanta, le duele … – Vorlieben ausdrücken mit Verben wie gustar',
  grade: 5,
  area: 'grammar',
  cefr: 'A1',
  order: 8,
  prerequisites: ['articles-nouns', 'present-regular'],
  keywords: ['gustar', 'encantar', 'interesar', 'doler', 'parecer', 'también', 'tampoco', 'mögen', 'Vorlieben', 'indirektes Objektpronomen'],

  summary: [
    {
      type: 'table',
      caption: 'gustar',
      head: ['(a + Person)', 'Pronomen', 'eine Sache / Infinitiv', 'mehrere Sachen'],
      rows: [
        ['(a mí)', 'me', 'gusta', 'gustan'],
        ['(a ti)', 'te', 'gusta', 'gustan'],
        ['(a él/ella/usted)', 'le', 'gusta', 'gustan'],
        ['(a nosotros/-as)', 'nos', 'gusta', 'gustan'],
        ['(a vosotros/-as)', 'os', 'gusta', 'gustan'],
        ['(a ellos/ellas/ustedes)', 'les', 'gusta', 'gustan'],
      ],
    },
    {
      type: 'list',
      items: [
        '**gusta** + eine Sache oder Infinitiv: *Me gusta el fútbol. Me gusta bailar.*',
        '**gustan** + mehrere Sachen: *Me gustan los perros.*',
        'Genauso: *encantar* (sehr gefallen), *interesar* (interessieren), *doler (ue)* (wehtun), *parecer* (finden), *molestar* (stören)',
        'Reaktion: *A mí también. · A mí tampoco. · A mí sí. · A mí no.*',
      ],
    },
  ],

  explanation: [
    {
      title: 'Wie funktioniert gustar?',
      blocks: [
        {
          type: 'text',
          text: '*gustar* bedeutet wörtlich „gefallen“. Das, was gefällt, ist das **Subjekt** – deshalb richtet sich das Verb nach der **Sache**, nicht nach der Person: *el libro* (Singular) → *me* **gusta**; *los libros* (Plural) → *me* **gustan**.',
        },
        {
          type: 'table',
          head: ['Deutsch', 'wörtlich', 'Spanisch'],
          rows: [
            ['Ich mag Musik.', 'Mir gefällt die Musik.', '*Me gusta la música.*'],
            ['Ich mag Katzen.', 'Mir gefallen die Katzen.', '*Me gustan los gatos.*'],
            ['Ich tanze gern.', 'Mir gefällt tanzen.', '*Me gusta bailar.*'],
          ],
        },
        { type: 'tip', text: 'Denk an „gefallen“: *me gusta* = „mir gefällt“, *me gustan* = „mir gefallen“.' },
      ],
    },
    {
      title: 'Die Pronomen',
      blocks: [
        {
          type: 'text',
          text: 'Wem etwas gefällt, zeigt das **indirekte Objektpronomen**: *me, te, le, nos, os, les*. Zur Betonung oder Klarheit kann man *a mí, a ti, a él* … davorstellen.',
        },
        {
          type: 'list',
          items: [
            'Betonung, Gegensatz: *A mí me gusta el té, pero a ella le gusta el café.*',
            '*le/les* kann vieles bedeuten – *a* + Person macht es klar: *A Pablo le gusta el cine. A mis padres les gusta viajar.*',
            'Mit Namen oder Nomen braucht man **beides**: *A Ana le gusta …* (nicht ~~A Ana gusta …~~)',
          ],
        },
      ],
    },
    {
      title: 'Verben wie gustar',
      blocks: [
        {
          type: 'table',
          head: ['Verb', 'Deutsch', 'Beispiel'],
          rows: [
            ['*encantar*', 'sehr gefallen, lieben', '*Me encanta el chocolate.*'],
            ['*interesar*', 'interessieren', '*¿Te interesa la historia?*'],
            ['*doler (ue)*', 'wehtun', '*Me duele la cabeza. Me duelen los pies.*'],
            ['*parecer*', 'scheinen, finden', '*Me parece interesante.*'],
            ['*molestar*', 'stören', '*Nos molesta el ruido.*'],
            ['*faltar*', 'fehlen', '*Me falta un bolígrafo.*'],
          ],
        },
        { type: 'warning', text: '*encantar* ist schon „sehr“ – also **nicht** mit *mucho*: ~~Me encanta mucho.~~ → *Me encanta.* oder *Me gusta mucho.*' },
      ],
    },
    {
      title: 'Verwendung: Vorlieben und Reaktionen',
      blocks: [
        {
          type: 'table',
          head: ['Aussage', 'gleiche Meinung', 'andere Meinung'],
          rows: [
            ['*Me gusta el rap.*', '*A mí también.* (ich auch)', '*A mí no.* (ich nicht)'],
            ['*No me gusta el rap.*', '*A mí tampoco.* (ich auch nicht)', '*A mí sí.* (ich schon)'],
          ],
        },
        {
          type: 'text',
          text: 'Abstufungen: *Me encanta* > *Me gusta mucho* > *Me gusta* > *No me gusta mucho* > *No me gusta nada*.',
        },
        { type: 'text', text: 'Bei Vorlieben steht der **bestimmte Artikel**: *Me gusta el chocolate.* (nicht ~~Me gusta chocolate.~~)' },
      ],
    },
    {
      title: 'Unterschied zum Deutschen',
      blocks: [
        {
          type: 'list',
          items: [
            'Deutsch: „**Ich** mag Hunde.“ – das Subjekt ist die Person. Spanisch: „Mir gefallen Hunde.“ – das Subjekt sind die Hunde: *Me gustan los perros.*',
            'Darum gibt es kein ~~Yo gusto~~ für „ich mag“ – *yo gusto* hieße „ich gefalle“.',
            '„Ich habe Kopfweh“ → *Me duele la cabeza.* (mit Artikel, nicht *mi*)',
          ],
        },
      ],
    },
    {
      title: 'Typische Fehler',
      blocks: [
        { type: 'warning', text: '~~Yo gusto la música.~~ → *Me gusta la música.*' },
        { type: 'warning', text: '~~Me gusta los perros.~~ → *Me gustan los perros.*' },
        { type: 'warning', text: '~~A Ana gusta el cine.~~ → *A Ana le gusta el cine.*' },
        { type: 'warning', text: '~~Me gusta chocolate.~~ → *Me gusta el chocolate.*' },
        { type: 'warning', text: '~~Me duele mi cabeza.~~ → *Me duele la cabeza.*' },
        { type: 'warning', text: '~~A mis padres le gusta viajar.~~ → *A mis padres les gusta viajar.*' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        { type: 'tip', text: '**Frag: Was gefällt?** Eine Sache oder Tätigkeit → *gusta*; mehrere Sachen → *gustan*.' },
        { type: 'tip', text: '**me – te – le – nos – os – les**: wie die Reflexivpronomen, nur in der 3. Person *le/les* statt *se*.' },
        { type: 'tip', text: '**también** = Zustimmung zu etwas Positivem, **tampoco** = Zustimmung zu etwas Negativem.' },
      ],
    },
  ],

  examples: [
    { es: 'Me gusta mucho el fútbol.', de: 'Ich mag Fußball sehr.' },
    { es: '¿Te gustan los perros? – Sí, me encantan.', de: 'Magst du Hunde? – Ja, ich liebe sie.' },
    { es: 'A mi hermana le gusta bailar.', de: 'Meine Schwester tanzt gern.' },
    { es: 'Nos encanta la comida española.', de: 'Wir lieben das spanische Essen.' },
    { es: 'A mis padres no les gusta el rap.', de: 'Meine Eltern mögen keinen Rap.' },
    { es: '¿Os interesa el arte?', de: 'Interessiert ihr euch für Kunst?' },
    { es: 'Me duele la cabeza.', de: 'Ich habe Kopfweh.' },
    { es: 'A Pablo le duelen los pies.', de: 'Pablo tun die Füße weh.' },
    { es: '¿Qué te parece la película? – Me parece muy buena.', de: 'Wie findest du den Film? – Ich finde ihn sehr gut.' },
    { es: 'No me gusta nada madrugar.', de: 'Ich stehe überhaupt nicht gern früh auf.' },
    { es: 'Me gusta el chocolate. – A mí también.', de: 'Ich mag Schokolade. – Ich auch.' },
    { es: 'No me gustan los lunes. – A mí tampoco.', de: 'Ich mag keine Montage. – Ich auch nicht.' },
  ],

  exercises: [
    // ---------- leicht ----------
    {
      id: 'gustar-e1',
      level: 'easy',
      instruction: '*gusta* oder *gustan*? Wähle.',
      tasks: [
        { type: 'choice', prompt: 'Me ___ el chocolate.', options: ['gusta', 'gustan'], answer: 'gusta', reason: '*el chocolate* = eine Sache → **gusta**.' },
        { type: 'choice', prompt: 'Me ___ los gatos.', options: ['gusta', 'gustan'], answer: 'gustan', reason: '*los gatos* = mehrere → **gustan**.' },
        { type: 'choice', prompt: '¿Te ___ bailar?', options: ['gusta', 'gustan'], answer: 'gusta', reason: 'Infinitiv → immer **gusta**.' },
        { type: 'choice', prompt: 'A Pedro le ___ las películas de terror.', options: ['gusta', 'gustan'], answer: 'gustan', reason: '*las películas* = mehrere → **gustan**.' },
        { type: 'choice', prompt: 'Nos ___ la música pop.', options: ['gusta', 'gustan'], answer: 'gusta', reason: '*la música* = eine Sache → **gusta**.' },
        { type: 'choice', prompt: '¿Os ___ los videojuegos?', options: ['gusta', 'gustan'], answer: 'gustan', reason: '*los videojuegos* = mehrere → **gustan**.' },
        { type: 'choice', prompt: 'A mis abuelos les ___ pasear.', options: ['gusta', 'gustan'], answer: 'gusta', reason: 'Infinitiv → **gusta** (egal, wie vielen es gefällt).' },
        { type: 'choice', prompt: 'No me ___ las matemáticas.', options: ['gusta', 'gustan'], answer: 'gustan', reason: '*las matemáticas* ist Plural → **gustan**.' },
        { type: 'choice', prompt: 'A Lucía le ___ leer y escribir.', options: ['gusta', 'gustan'], answer: 'gusta', reason: 'Auch zwei Infinitive → **gusta**.' },
        { type: 'choice', prompt: '¿Te ___ mis zapatos nuevos?', options: ['gusta', 'gustan'], answer: 'gustan', reason: '*mis zapatos* = mehrere → **gustan**.' },
      ],
    },
    {
      id: 'gustar-e2',
      level: 'easy',
      instruction: 'Wähle das passende Pronomen.',
      tasks: [
        { type: 'choice', prompt: 'A mí ___ gusta el té.', options: ['me', 'te', 'le'], answer: 'me', reason: '*a mí* → **me**.' },
        { type: 'choice', prompt: 'A ti ___ gustan los deportes.', options: ['te', 'me', 'le'], answer: 'te', reason: '*a ti* → **te**.' },
        { type: 'choice', prompt: 'A Carlos ___ gusta nadar.', options: ['le', 'se', 'lo'], answer: 'le', reason: '*a Carlos* (= a él) → **le**.' },
        { type: 'choice', prompt: 'A nosotros ___ encanta viajar.', options: ['nos', 'os', 'les'], answer: 'nos', reason: '*a nosotros* → **nos**.' },
        { type: 'choice', prompt: 'A vosotros ___ gusta el cine.', options: ['os', 'nos', 'les'], answer: 'os', reason: '*a vosotros* → **os**.' },
        { type: 'choice', prompt: 'A mis amigas ___ gusta la playa.', options: ['les', 'las', 'le'], answer: 'les', reason: '*a mis amigas* (= a ellas) → **les**.' },
        { type: 'choice', prompt: 'A usted ___ interesa la historia.', options: ['le', 'te', 'se'], answer: 'le', reason: '*a usted* → **le** (3. Person).' },
        { type: 'choice', prompt: 'A ellos no ___ gustan los exámenes.', options: ['les', 'los', 'se'], answer: 'les', reason: '*a ellos* → **les**.' },
      ],
    },
    {
      id: 'gustar-e3',
      level: 'easy',
      instruction: 'Ordne zu: zuerst links antippen, dann rechts.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['Me gusta el café. (Ich auch.)', 'A mí también.'],
            ['No me gusta el café. (Ich auch nicht.)', 'A mí tampoco.'],
            ['Me gusta el café. (Ich nicht.)', 'A mí no.'],
            ['No me gusta el café. (Ich schon.)', 'A mí sí.'],
          ],
          reason: '*también/tampoco* = gleiche Meinung, *sí/no* = andere Meinung.',
        },
        {
          type: 'match',
          pairs: [
            ['encantar', 'sehr gefallen'],
            ['interesar', 'interessieren'],
            ['doler', 'wehtun'],
            ['parecer', 'finden, scheinen'],
            ['molestar', 'stören'],
            ['faltar', 'fehlen'],
          ],
          reason: 'Alle diese Verben funktionieren wie *gustar*: *me encanta, me duele, me falta …*',
        },
      ],
    },

    // ---------- mittel ----------
    {
      id: 'gustar-m1',
      level: 'medium',
      instruction: 'Ergänze Pronomen und Verb (z. B. *me gusta*).',
      tasks: [
        { type: 'gap', text: 'A mí ___ los caballos.', hint: 'gustar', answers: ['me gustan'], reason: '*a mí* → *me*; *los caballos* (Plural) → **gustan**.' },
        { type: 'gap', text: 'A mi madre ___ el jazz.', hint: 'encantar', answers: ['le encanta'], reason: '*a mi madre* → *le*; *el jazz* → **encanta**.' },
        { type: 'gap', text: '¿A ti ___ la política?', hint: 'interesar', answers: ['te interesa'], reason: '*a ti* → *te*; *la política* → **interesa**.' },
        { type: 'gap', text: 'A nosotros ___ la espalda.', hint: 'doler', answers: ['nos duele'], reason: '*a nosotros* → *nos*; *doler* (o → ue): **duele**.' },
        { type: 'gap', text: 'A mis hermanos ___ jugar a la consola.', hint: 'gustar', answers: ['les gusta'], reason: '*a mis hermanos* → *les*; Infinitiv → **gusta**.' },
        { type: 'gap', text: '¿A vosotros ___ las fiestas?', hint: 'gustar', answers: ['os gustan'], reason: '*a vosotros* → *os*; *las fiestas* → **gustan**.' },
        { type: 'gap', text: 'A mí ___ los ojos.', hint: 'doler', answers: ['me duelen'], reason: '*los ojos* (Plural) → **duelen**.' },
        { type: 'gap', text: 'A Marta ___ las películas románticas.', hint: 'encantar', answers: ['le encantan'], reason: '*a Marta* → *le*; *las películas* → **encantan**.' },
        { type: 'gap', text: '¿Qué ___ el libro?', hint: 'parecer, a ti', answers: ['te parece'], reason: '*a ti* → *te*; *el libro* → **parece**.' },
        { type: 'gap', text: '¿A ustedes ___ el ruido?', hint: 'molestar', answers: ['les molesta'], reason: '*a ustedes* → *les*; *el ruido* → **molesta**.' },
      ],
    },
    {
      id: 'gustar-m2',
      level: 'medium',
      instruction: 'Reagiere mit *también*, *tampoco*, *sí* oder *no*.',
      tasks: [
        { type: 'choice', prompt: 'Me gusta el verano. – A mí ___. (Ich auch.)', options: ['también', 'tampoco', 'sí'], answer: 'también', reason: 'Zustimmung zu etwas Positivem → **también**.' },
        { type: 'choice', prompt: 'No me gusta el frío. – A mí ___. (Ich auch nicht.)', options: ['tampoco', 'también', 'no'], answer: 'tampoco', reason: 'Zustimmung zu etwas Negativem → **tampoco**.' },
        { type: 'choice', prompt: 'Me encantan los gatos. – A mí ___. (Ich nicht.)', options: ['no', 'tampoco', 'también'], answer: 'no', reason: 'Andere Meinung zu etwas Positivem → **no**.' },
        { type: 'choice', prompt: 'No me gustan las arañas. – A mí ___. (Ich schon.)', options: ['sí', 'también', 'no'], answer: 'sí', reason: 'Andere Meinung zu etwas Negativem → **sí**.' },
        { type: 'choice', prompt: 'Me interesa la música. – A mí ___. (Ich auch.)', options: ['también', 'tampoco', 'sí'], answer: 'también', reason: 'Zustimmung zu etwas Positivem → **también**.' },
        { type: 'choice', prompt: 'No me gusta madrugar. – A mí ___. (Ich auch nicht.)', options: ['tampoco', 'también', 'sí'], answer: 'tampoco', reason: 'Zustimmung zu etwas Negativem → **tampoco**.' },
        { type: 'choice', prompt: 'Me gusta el fútbol. – A mí ___. (Ich nicht.)', options: ['no', 'tampoco', 'sí'], answer: 'no', reason: 'Andere Meinung → **no**.' },
        { type: 'choice', prompt: 'No me gustan los deberes. – A mí ___. (Ich schon.)', options: ['sí', 'también', 'tampoco'], answer: 'sí', reason: 'Andere Meinung zu etwas Negativem → **sí**.' },
      ],
    },

    // ---------- schwer ----------
    {
      id: 'gustar-h1',
      level: 'hard',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        {
          type: 'fix',
          wrong: 'Yo gusto la música clásica.',
          answers: ['Me gusta la música clásica.', 'A mí me gusta la música clásica.'],
          reason: '„Ich mag“ → **me gusta** (wörtlich: mir gefällt).',
        },
        { type: 'fix', wrong: 'Me gusta los perros.', answers: ['Me gustan los perros.'], reason: '*los perros* (Plural) → **gustan**.' },
        { type: 'fix', wrong: 'A Ana gusta el cine.', answers: ['A Ana le gusta el cine.'], reason: 'Das Pronomen **le** muss trotzdem stehen.' },
        { type: 'fix', wrong: 'Me gusta chocolate.', answers: ['Me gusta el chocolate.'], reason: 'Bei Vorlieben steht der **bestimmte Artikel**.' },
        { type: 'fix', wrong: 'Me duele mi cabeza.', answers: ['Me duele la cabeza.'], reason: 'Bei Körperteilen steht der **Artikel**, nicht *mi*.' },
        { type: 'fix', wrong: 'A mis padres le gusta viajar.', answers: ['A mis padres les gusta viajar.'], reason: '*a mis padres* (Plural) → **les**.' },
        {
          type: 'fix',
          wrong: 'Me encanta mucho el helado.',
          answers: ['Me encanta el helado.', 'Me gusta mucho el helado.'],
          reason: '*encantar* ist schon „sehr gefallen“ → ohne *mucho*.',
        },
        { type: 'fix', wrong: '¿Te gustan bailar?', answers: ['¿Te gusta bailar?'], reason: 'Infinitiv → **gusta**.' },
        {
          type: 'fix',
          wrong: 'No me gusta el frío. – A mí también.',
          answers: ['No me gusta el frío. – A mí tampoco.'],
          reason: 'Zustimmung zu etwas Negativem → **tampoco**.',
        },
      ],
    },
    {
      id: 'gustar-h2',
      level: 'hard',
      instruction: 'Bilde den Satz: Tippe die Wörter in der richtigen Reihenfolge an.',
      tasks: [
        {
          type: 'order',
          words: ['a', 'mi', 'hermano', 'le', 'gustan', 'los', 'coches'],
          de: 'Mein Bruder mag Autos.',
          reason: '*a* + Person + *le* + *gustan* + Sache (Plural).',
        },
        { type: 'order', words: ['nos', 'encanta', 'ir', 'a', 'la', 'playa'], de: 'Wir gehen total gern an den Strand.', reason: 'Infinitiv → *encanta*.' },
        { type: 'order', words: ['no', 'me', 'gusta', 'nada', 'el', 'frío'], de: 'Ich mag Kälte überhaupt nicht.', reason: '*no … nada* = überhaupt nicht; *no* vor dem Pronomen.' },
        { type: 'order', words: ['te', 'duele', 'la', 'cabeza'], de: 'Tut dir der Kopf weh?', reason: '*doler* wie *gustar*: *te duele la cabeza*.' },
      ],
    },
    {
      id: 'gustar-h3',
      level: 'hard',
      instruction: 'Übersetze ins Spanische.',
      tasks: [
        { type: 'translate', de: 'Ich mag Hunde.', answers: ['Me gustan los perros.', 'A mí me gustan los perros.'], reason: '*los perros* → **gustan**; Artikel nicht vergessen.' },
        { type: 'translate', de: 'Magst du Pizza?', answers: ['¿Te gusta la pizza?', '¿A ti te gusta la pizza?'], reason: '*a ti* → *te*; *la pizza* → **gusta**.' },
        { type: 'translate', de: 'Meine Mutter liest gern.', answers: ['A mi madre le gusta leer.'], reason: '„gern tun“ → *gustar* + Infinitiv; *a mi madre le* …' },
        { type: 'translate', de: 'Mir tun die Beine weh.', answers: ['Me duelen las piernas.', 'A mí me duelen las piernas.'], reason: '*las piernas* (Plural) → **duelen**.' },
        { type: 'translate', de: 'Wir lieben Musik.', answers: ['Nos encanta la música.', 'A nosotros nos encanta la música.'], reason: '*encantar*: *nos encanta la música*.' },
        {
          type: 'translate',
          de: 'Ich mag keine Tomaten. – Ich auch nicht.',
          answers: ['No me gustan los tomates. – A mí tampoco.'],
          reason: '*los tomates* → *gustan*; Zustimmung zu Negativem → *tampoco*.',
        },
        {
          type: 'translate',
          de: 'Ich höre gern Musik und spiele gern Fußball. Meinem Bruder gefallen Videospiele, aber meine Eltern mögen sie nicht.',
          answers: [
            'Me gusta escuchar música y jugar al fútbol. A mi hermano le gustan los videojuegos, pero a mis padres no les gustan.',
          ],
          free: true,
          reason: 'Infinitive → *gusta*; *los videojuegos* → *gustan*; *a mi hermano le …, a mis padres les …*',
        },
      ],
    },
  ],

  test: [
    { type: 'choice', prompt: 'Me ___ los gatos.', options: ['gustan', 'gusta', 'gusto'], answer: 'gustan', reason: '*los gatos* (Plural) → **gustan**.' },
    { type: 'choice', prompt: 'A mi padre ___ gusta cocinar.', options: ['le', 'se', 'lo'], answer: 'le', reason: '*a mi padre* → **le**.' },
    {
      type: 'choice',
      prompt: 'No me gusta el café. – A mí ___. (Ich auch nicht.)',
      options: ['tampoco', 'también', 'sí'],
      answer: 'tampoco',
      reason: 'Zustimmung zu etwas Negativem → **tampoco**.',
    },
    {
      type: 'gap',
      instruction: 'Ergänze Pronomen und Verb.',
      text: 'A nosotros ___ el arte.',
      hint: 'interesar',
      answers: ['nos interesa'],
      reason: '*a nosotros* → *nos*; *el arte* → **interesa**.',
    },
    { type: 'gap', instruction: 'Ergänze Pronomen und Verb.', text: 'A mí ___ los pies.', hint: 'doler', answers: ['me duelen'], reason: '*los pies* → **duelen** (o → ue).' },
    {
      type: 'gap',
      instruction: 'Ergänze Pronomen und Verb.',
      text: '¿A vosotros ___ las vacaciones en la playa?',
      hint: 'gustar',
      answers: ['os gustan'],
      reason: '*las vacaciones* (Plural) → **os gustan**.',
    },
    {
      type: 'fix',
      wrong: 'A mis amigos le encanta el baloncesto.',
      answers: ['A mis amigos les encanta el baloncesto.'],
      reason: '*a mis amigos* (Plural) → **les**.',
    },
    { type: 'fix', wrong: 'Yo gusto el helado.', answers: ['Me gusta el helado.', 'A mí me gusta el helado.'], reason: '„Ich mag“ → **me gusta**.' },
    { type: 'order', words: ['a', 'ellas', 'les', 'encanta', 'bailar'], de: 'Sie (die Mädchen) tanzen total gern.', reason: '*a ellas les encanta* + Infinitiv.' },
    {
      type: 'translate',
      instruction: 'Übersetze ins Spanische.',
      de: 'Interessiert dich Geschichte?',
      answers: ['¿Te interesa la historia?', '¿A ti te interesa la historia?'],
      reason: '*a ti* → *te*; *la historia* → **interesa**.',
    },
  ],
}

export default unit
