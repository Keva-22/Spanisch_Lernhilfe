import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'reflexive-verbs',
  title: 'Reflexive Verben & Tagesablauf',
  subtitle: 'me levanto, te duchas, se acuesta – reflexive Verben und wo das Pronomen steht',
  grade: 5,
  area: 'grammar',
  cefr: 'A1',
  order: 7,
  prerequisites: ['present-regular', 'present-stem-change'],
  keywords: ['reflexiv', 'Reflexivpronomen', 'Tagesablauf', 'levantarse', 'llamarse', 'acostarse', 'me te se'],

  summary: [
    {
      type: 'table',
      caption: 'levantarse (aufstehen)',
      head: ['', 'Pronomen', 'Verb'],
      rows: [
        ['yo', '**me**', 'levanto'],
        ['tú', '**te**', 'levantas'],
        ['él/ella/usted', '**se**', 'levanta'],
        ['nosotros/-as', '**nos**', 'levantamos'],
        ['vosotros/-as', '**os**', 'levantáis'],
        ['ellos/ellas/ustedes', '**se**', 'levantan'],
      ],
    },
    {
      type: 'list',
      items: [
        'Das Pronomen steht **vor** dem konjugierten Verb: *Me ducho. No me ducho.*',
        'Beim Infinitiv wird es **angehängt** oder steht vor dem konjugierten Verb: *Voy a ducharme. = Me voy a duchar.*',
        'Tagesablauf: *despertarse (ie), levantarse, ducharse, vestirse (i), lavarse los dientes, acostarse (ue)*',
        'Bei Körperteilen steht der **Artikel**: *Me lavo los dientes.*',
      ],
    },
  ],

  explanation: [
    {
      title: 'Bildung',
      blocks: [
        {
          type: 'text',
          text: 'Reflexive Verben erkennt man am **-se** im Infinitiv: *levantarse, llamarse*. Beim Konjugieren fällt das *-se* weg und das passende Pronomen kommt **vor** das Verb.',
        },
        {
          type: 'table',
          head: ['', 'levantarse', 'acostarse (o → ue)', 'vestirse (e → i)'],
          rows: [
            ['yo', 'me levanto', 'me acuesto', 'me visto'],
            ['tú', 'te levantas', 'te acuestas', 'te vistes'],
            ['él/ella/usted', 'se levanta', 'se acuesta', 'se viste'],
            ['nosotros/-as', 'nos levantamos', 'nos acostamos', 'nos vestimos'],
            ['vosotros/-as', 'os levantáis', 'os acostáis', 'os vestís'],
            ['ellos/ellas/ustedes', 'se levantan', 'se acuestan', 'se visten'],
          ],
        },
        {
          type: 'tip',
          text: 'Der Stammwechsel bleibt wie gewohnt: *despertarse → me despierto, acostarse → me acuesto, vestirse → me visto*.',
        },
      ],
    },
    {
      title: 'Stellung des Pronomens',
      blocks: [
        {
          type: 'list',
          items: [
            'Vor dem konjugierten Verb: *Me levanto a las siete.*',
            'Bei Verneinung steht *no* davor: *No me levanto temprano.*',
            'Mit Infinitiv: angehängt **oder** vor dem konjugierten Verb: *Tengo que levantarme. = Me tengo que levantar.*',
            'Mit Gerundio genauso: *Estoy duchándome. = Me estoy duchando.* (Beim Anhängen kommt oft ein Akzent dazu.)',
          ],
        },
        { type: 'warning', text: 'Das Pronomen passt zur Person: *Tengo que levantarme. Tienes que levantarte. Tenemos que levantarnos.*' },
      ],
    },
    {
      title: 'Verwendung: der Tagesablauf',
      blocks: [
        {
          type: 'table',
          head: ['Spanisch', 'Deutsch'],
          rows: [
            ['*despertarse (ie)*', 'aufwachen'],
            ['*levantarse*', 'aufstehen'],
            ['*ducharse*', 'duschen'],
            ['*lavarse la cara / las manos*', 'sich das Gesicht / die Hände waschen'],
            ['*lavarse los dientes*', 'sich die Zähne putzen'],
            ['*peinarse*', 'sich kämmen'],
            ['*vestirse (i)*', 'sich anziehen'],
            ['*maquillarse / afeitarse*', 'sich schminken / sich rasieren'],
            ['*acostarse (ue)*', 'schlafen gehen'],
            ['*dormirse (ue)*', 'einschlafen'],
          ],
        },
        {
          type: 'text',
          text: 'Weitere wichtige reflexive Verben: *llamarse* (heißen), *quedarse* (bleiben), *sentirse (ie)* (sich fühlen), *divertirse (ie)* (Spaß haben), *irse* (weggehen).',
        },
      ],
    },
    {
      title: 'Unterschied zum Deutschen',
      blocks: [
        {
          type: 'list',
          items: [
            'Manche Verben sind nur im Spanischen reflexiv: *levantarse* (aufstehen), *acostarse* (schlafen gehen), *llamarse* (heißen), *quedarse* (bleiben).',
            'Bei Körperteilen steht der **Artikel**, nicht das Possessiv: *Me lavo los dientes.* – nicht ~~Lavo mis dientes.~~',
            'Mit -se ändert sich oft die Bedeutung: *dormir* (schlafen) – *dormirse* (einschlafen), *ir* (gehen) – *irse* (weggehen), *llamar* (anrufen) – *llamarse* (heißen).',
          ],
        },
      ],
    },
    {
      title: 'Typische Fehler',
      blocks: [
        { type: 'warning', text: 'Pronomen vergessen: ~~Yo levanto a las siete.~~ → *Me levanto a las siete.*' },
        { type: 'warning', text: 'Falsches Pronomen: ~~Nosotros se duchamos.~~ → *Nos duchamos.*' },
        { type: 'warning', text: 'Possessiv statt Artikel: ~~Me lavo mis dientes.~~ → *Me lavo los dientes.*' },
        { type: 'warning', text: 'Pronomen zwischen *a* und Infinitiv: ~~Voy a me duchar.~~ → *Voy a ducharme.* / *Me voy a duchar.*' },
        { type: 'warning', text: 'Stammwechsel vergessen: ~~me acosto~~ → *me acuesto*' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        { type: 'tip', text: '**me – te – se – nos – os – se**: Das Pronomen passt immer zur Person des Verbs.' },
        {
          type: 'tip',
          text: '**Davor oder hinten dran:** Konjugiertes Verb → Pronomen davor (*me levanto*). Infinitiv oder Gerundio → hinten dran (*levantarme, duchándome*).',
        },
      ],
    },
  ],

  examples: [
    { es: 'Me llamo Lena. ¿Cómo te llamas?', de: 'Ich heiße Lena. Wie heißt du?' },
    { es: 'Me levanto a las seis y media.', de: 'Ich stehe um halb sieben auf.' },
    { es: 'Mi hermano se ducha por la noche.', de: 'Mein Bruder duscht am Abend.' },
    { es: 'Nos acostamos a las once.', de: 'Wir gehen um elf schlafen.' },
    { es: '¿A qué hora os despertáis?', de: 'Um wie viel Uhr wacht ihr auf?' },
    { es: 'Me lavo los dientes después del desayuno.', de: 'Ich putze mir nach dem Frühstück die Zähne.' },
    { es: 'Mis padres se visten muy rápido.', de: 'Meine Eltern ziehen sich sehr schnell an.' },
    { es: 'Los domingos no me levanto temprano.', de: 'Sonntags stehe ich nicht früh auf.' },
    { es: 'Tengo que ducharme.', de: 'Ich muss duschen.' },
    { es: '¿Te quedas en casa hoy?', de: 'Bleibst du heute zu Hause?' },
    { es: 'Nos divertimos mucho en las fiestas.', de: 'Auf Partys haben wir viel Spaß.' },
    { es: 'Ana se maquilla antes de salir.', de: 'Ana schminkt sich, bevor sie ausgeht.' },
  ],

  exercises: [
    // ---------- leicht ----------
    {
      id: 'reflexive-verbs-e1',
      level: 'easy',
      instruction: 'Ergänze die Konjugationstabelle im Presente – mit Pronomen.',
      tasks: [
        {
          type: 'table',
          verb: 'levantarse',
          tense: 'Presente',
          forms: ['me levanto', 'te levantas', 'se levanta', 'nos levantamos', 'os levantáis', 'se levantan'],
          given: [0],
          reason: 'Pronomen *me, te, se, nos, os, se* + regelmäßige -ar-Formen.',
        },
        {
          type: 'table',
          verb: 'acostarse',
          tense: 'Presente',
          forms: ['me acuesto', 'te acuestas', 'se acuesta', 'nos acostamos', 'os acostáis', 'se acuestan'],
          given: [0],
          reason: 'o → **ue** außer bei nosotros und vosotros; Pronomen vor dem Verb.',
        },
      ],
    },
    {
      id: 'reflexive-verbs-e2',
      level: 'easy',
      instruction: 'Wähle das passende Reflexivpronomen.',
      tasks: [
        { type: 'choice', prompt: 'Yo ___ levanto a las siete.', options: ['me', 'te', 'se'], answer: 'me', reason: '*yo* → **me**.' },
        { type: 'choice', prompt: '¿Cómo ___ llamas?', options: ['te', 'se', 'me'], answer: 'te', reason: '*tú* (llamas) → **te**.' },
        { type: 'choice', prompt: 'Mi padre ___ afeita cada mañana.', options: ['se', 'me', 'nos'], answer: 'se', reason: '*él* → **se**.' },
        { type: 'choice', prompt: 'Nosotros ___ duchamos después del deporte.', options: ['nos', 'os', 'se'], answer: 'nos', reason: '*nosotros* → **nos**.' },
        { type: 'choice', prompt: '¿Vosotros ___ acostáis tarde?', options: ['os', 'nos', 'se'], answer: 'os', reason: '*vosotros* → **os**.' },
        { type: 'choice', prompt: 'Mis hermanas ___ maquillan.', options: ['se', 'os', 'las'], answer: 'se', reason: '*ellas* → **se**.' },
        { type: 'choice', prompt: 'Tú ___ vistes muy bien.', options: ['te', 'se', 'tu'], answer: 'te', reason: '*tú* → **te** (nicht *tu*).' },
        { type: 'choice', prompt: 'Usted ___ queda en el hotel.', options: ['se', 'te', 'le'], answer: 'se', reason: '*usted* → **se** (3. Person).' },
        { type: 'choice', prompt: 'Mi amiga y yo ___ divertimos mucho.', options: ['nos', 'se', 'os'], answer: 'nos', reason: '*mi amiga y yo* = nosotras → **nos**.' },
        { type: 'choice', prompt: 'Los niños no ___ lavan las manos.', options: ['se', 'les', 'os'], answer: 'se', reason: '*ellos* → **se**.' },
      ],
    },
    {
      id: 'reflexive-verbs-e3',
      level: 'easy',
      instruction: 'Ordne den Tagesablauf zu.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['despertarse', 'aufwachen'],
            ['levantarse', 'aufstehen'],
            ['ducharse', 'duschen'],
            ['vestirse', 'sich anziehen'],
            ['lavarse los dientes', 'Zähne putzen'],
            ['acostarse', 'schlafen gehen'],
          ],
          reason: 'Diese Verben des Tagesablaufs sind im Spanischen reflexiv.',
        },
      ],
    },

    // ---------- mittel ----------
    {
      id: 'reflexive-verbs-m1',
      level: 'medium',
      instruction: 'Setze das reflexive Verb im Presente ein – mit Pronomen.',
      tasks: [
        { type: 'gap', text: 'Normalmente ___ a las siete.', hint: 'levantarse, yo', answers: ['me levanto'], reason: '*yo* → **me levanto**.' },
        { type: 'gap', text: '¿A qué hora ___?', hint: 'acostarse, tú', answers: ['te acuestas'], reason: 'o → ue: **te acuestas**.' },
        { type: 'gap', text: 'Mi hermana ___ media hora.', hint: 'ducharse', answers: ['se ducha'], reason: '*ella* → **se ducha**.' },
        { type: 'gap', text: 'Nosotros ___ muy temprano.', hint: 'despertarse', answers: ['nos despertamos'], reason: '*nosotros* → kein Stammwechsel: **nos despertamos**.' },
        { type: 'gap', text: '¿Cómo ___ tus padres?', hint: 'llamarse', answers: ['se llaman'], reason: '*ellos* → **se llaman**.' },
        { type: 'gap', text: 'Vosotros ___ muy rápido.', hint: 'vestirse', answers: ['os vestís'], reason: '*vosotros* → kein Stammwechsel: **os vestís**.' },
        { type: 'gap', text: 'Después de comer, ___ los dientes.', hint: 'lavarse, yo', answers: ['me lavo'], reason: '*yo* → **me lavo**; bei Körperteilen der Artikel: *los dientes*.' },
        { type: 'gap', text: 'Los sábados mis amigos ___ en casa.', hint: 'quedarse', answers: ['se quedan'], reason: '*ellos* → **se quedan**.' },
        { type: 'gap', text: 'En las fiestas ___ mucho.', hint: 'divertirse, nosotros', answers: ['nos divertimos'], reason: '*nosotros* → kein Stammwechsel: **nos divertimos**.' },
        { type: 'gap', text: 'Mi abuelo ___ en el sofá.', hint: 'dormirse', answers: ['se duerme'], reason: '*dormirse* (einschlafen), o → ue: **se duerme**.' },
      ],
    },
    {
      id: 'reflexive-verbs-m2',
      level: 'medium',
      instruction: 'Wo steht das Pronomen? Wähle die richtige Variante.',
      tasks: [
        {
          type: 'choice',
          prompt: 'Tengo que ___ ahora. (ducharse)',
          options: ['ducharme', 'me duchar', 'duchar me'],
          answer: 'ducharme',
          reason: 'Beim Infinitiv wird das Pronomen **angehängt**: *ducharme*.',
        },
        {
          type: 'choice',
          prompt: 'Mañana ___ temprano. (levantarse, nosotros + ir a)',
          options: ['vamos a levantarnos', 'vamos a nos levantar', 'nos vamos a levantarnos'],
          answer: 'vamos a levantarnos',
          reason: 'Pronomen an den Infinitiv (*levantarnos*) oder vor *vamos* – aber nie doppelt und nie zwischen *a* und Infinitiv.',
        },
        {
          type: 'choice',
          prompt: 'Los domingos ___ temprano. (no + levantarse, yo)',
          options: ['no me levanto', 'me no levanto', 'no levanto me'],
          answer: 'no me levanto',
          reason: 'Reihenfolge: **no + Pronomen + Verb**.',
        },
        {
          type: 'choice',
          prompt: '¿Quieres ___ en casa? (quedarse)',
          options: ['quedarte', 'te quedar', 'quedarse'],
          answer: 'quedarte',
          reason: 'Das Pronomen passt zur Person (*tú* → *te*) und hängt am Infinitiv: *quedarte*.',
        },
        {
          type: 'choice',
          prompt: 'Ahora mismo Ana ___. (ducharse, estar + Gerundio)',
          options: ['se está duchando', 'está se duchando', 'se está duchándose'],
          answer: 'se está duchando',
          reason: 'Pronomen vor *estar* (*se está duchando*) oder angehängt (*está duchándose*) – nie beides.',
        },
        {
          type: 'choice',
          prompt: 'No podemos ___ tarde. (acostarse)',
          options: ['acostarnos', 'nos acostar', 'acostarse'],
          answer: 'acostarnos',
          reason: '*nosotros* → **nos**, angehängt an den Infinitiv.',
        },
        { type: 'choice', prompt: '___ los dientes. (lavarse, yo)', options: ['Me lavo', 'Lavo', 'Se lavo'], answer: 'Me lavo', reason: 'Reflexiv: *yo* → **me lavo**.' },
        {
          type: 'choice',
          prompt: 'Mis padres ___ a las once. (acostarse)',
          options: ['se acuestan', 'se acostan', 'acuestan'],
          answer: 'se acuestan',
          reason: 'Pronomen **se** + Stammwechsel o → ue: *se acuestan*.',
        },
      ],
    },

    // ---------- schwer ----------
    {
      id: 'reflexive-verbs-h1',
      level: 'hard',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'Yo levanto a las siete.', answers: ['Yo me levanto a las siete.'], reason: 'Reflexivpronomen fehlt: **me** levanto.' },
        {
          type: 'fix',
          wrong: 'Nosotros se duchamos después del partido.',
          answers: ['Nosotros nos duchamos después del partido.'],
          reason: '*nosotros* → **nos**.',
        },
        {
          type: 'fix',
          wrong: 'Me lavo mis dientes tres veces al día.',
          answers: ['Me lavo los dientes tres veces al día.'],
          reason: 'Bei Körperteilen steht der **Artikel**: *los dientes*.',
        },
        {
          type: 'fix',
          wrong: 'Voy a me duchar ahora.',
          answers: ['Voy a ducharme ahora.', 'Me voy a duchar ahora.'],
          reason: 'Pronomen an den Infinitiv hängen (*ducharme*) oder vor *voy* stellen.',
        },
        { type: 'fix', wrong: 'Me acosto a las diez.', answers: ['Me acuesto a las diez.'], reason: '*acostarse*: o → **ue**: *me acuesto*.' },
        { type: 'fix', wrong: '¿Cómo te llamáis?', answers: ['¿Cómo os llamáis?'], reason: '*vosotros* (llamáis) → **os**.' },
        { type: 'fix', wrong: 'Mi hermana te viste muy elegante.', answers: ['Mi hermana se viste muy elegante.'], reason: '*ella* → **se**.' },
        { type: 'fix', wrong: 'Los niños se despertan a las seis.', answers: ['Los niños se despiertan a las seis.'], reason: '*despertarse*: e → **ie**: *se despiertan*.' },
        { type: 'fix', wrong: 'Tienes que levantarse.', answers: ['Tienes que levantarte.'], reason: 'Das Pronomen passt zur Person: *tú* → **te**.' },
      ],
    },
    {
      id: 'reflexive-verbs-h2',
      level: 'hard',
      instruction: 'Bilde den Satz: Tippe die Wörter in der richtigen Reihenfolge an.',
      tasks: [
        {
          type: 'order',
          words: ['me', 'levanto', 'a', 'las', 'siete'],
          answers: ['a las siete me levanto'],
          de: 'Ich stehe um sieben auf.',
          reason: 'Pronomen direkt vor dem Verb: *me levanto*.',
        },
        {
          type: 'order',
          words: ['mis', 'padres', 'se', 'acuestan', 'muy', 'tarde'],
          de: 'Meine Eltern gehen sehr spät schlafen.',
          reason: '*se acuestan* – Pronomen vor dem Verb.',
        },
        {
          type: 'order',
          words: ['tengo', 'que', 'lavarme', 'los', 'dientes'],
          de: 'Ich muss mir die Zähne putzen.',
          reason: 'Pronomen am Infinitiv: *lavarme*; Artikel bei Körperteilen.',
        },
        {
          type: 'order',
          words: ['los', 'domingos', 'no', 'me', 'levanto', 'temprano'],
          answers: ['no me levanto temprano los domingos'],
          de: 'Sonntags stehe ich nicht früh auf.',
          reason: 'Reihenfolge: *no + me + levanto*.',
        },
      ],
    },
    {
      id: 'reflexive-verbs-h3',
      level: 'hard',
      instruction: 'Übersetze ins Spanische (Presente).',
      tasks: [
        { type: 'translate', de: 'Wie heißt du?', answers: ['¿Cómo te llamas?'], reason: '*llamarse*, tú → **te llamas**.' },
        { type: 'translate', de: 'Ich heiße Paul.', answers: ['Me llamo Paul.'], reason: '*llamarse*, yo → **me llamo**.' },
        { type: 'translate', de: 'Wir stehen um sieben auf.', answers: ['Nos levantamos a las siete.'], reason: '*levantarse*, nosotros → **nos levantamos**.' },
        {
          type: 'translate',
          de: 'Um wie viel Uhr gehst du schlafen?',
          answers: ['¿A qué hora te acuestas?', '¿A qué hora vas a la cama?'],
          reason: '*acostarse* (o → ue), tú → **te acuestas**.',
        },
        { type: 'translate', de: 'Mein Bruder duscht am Morgen.', answers: ['Mi hermano se ducha por la mañana.'], reason: '*ducharse*, él → **se ducha**.' },
        {
          type: 'translate',
          de: 'Ich ziehe mich schnell an.',
          answers: ['Me visto rápido.', 'Me visto rápidamente.', 'Me visto deprisa.'],
          reason: '*vestirse* (e → i), yo → **me visto**.',
        },
        {
          type: 'translate',
          de: 'Ich wache um halb sieben auf, dusche und ziehe mich an. Dann frühstücke ich und putze mir die Zähne.',
          answers: ['Me despierto a las seis y media, me ducho y me visto. Luego desayuno y me lavo los dientes.'],
          free: true,
          reason: '*me despierto* (e → ie), *me ducho, me visto* (e → i), *me lavo los dientes* (Artikel bei Körperteilen).',
        },
      ],
    },
  ],

  test: [
    {
      type: 'gap',
      instruction: 'Setze das reflexive Verb im Presente ein – mit Pronomen.',
      text: 'Yo ___ a las seis.',
      hint: 'despertarse',
      answers: ['me despierto'],
      reason: 'e → ie: **me despierto**.',
    },
    {
      type: 'gap',
      instruction: 'Setze das reflexive Verb im Presente ein – mit Pronomen.',
      text: '¿Cómo ___ vosotros?',
      hint: 'llamarse',
      answers: ['os llamáis'],
      reason: '*vosotros* → **os llamáis**.',
    },
    {
      type: 'gap',
      instruction: 'Setze das reflexive Verb im Presente ein – mit Pronomen.',
      text: 'Mi madre ___ antes del trabajo.',
      hint: 'maquillarse',
      answers: ['se maquilla'],
      reason: '*ella* → **se maquilla**.',
    },
    {
      type: 'choice',
      instruction: 'Wähle das passende Reflexivpronomen.',
      prompt: 'Nosotros ___ duchamos por la mañana.',
      options: ['nos', 'se', 'os'],
      answer: 'nos',
      reason: '*nosotros* → **nos**.',
    },
    {
      type: 'choice',
      instruction: 'Wähle die richtige Variante.',
      prompt: 'Voy a ___ ahora. (acostarse)',
      options: ['acostarme', 'me acostar', 'acostarse'],
      answer: 'acostarme',
      reason: 'Pronomen am Infinitiv, passend zu *yo*: **acostarme**.',
    },
    {
      type: 'table',
      instruction: 'Ergänze die Konjugationstabelle im Presente – mit Pronomen.',
      verb: 'vestirse',
      tense: 'Presente',
      forms: ['me visto', 'te vistes', 'se viste', 'nos vestimos', 'os vestís', 'se visten'],
      given: [3],
      reason: 'e → **i** außer bei nosotros/vosotros; Pronomen vor dem Verb.',
    },
    { type: 'fix', wrong: 'Ellos se acostan tarde.', answers: ['Ellos se acuestan tarde.'], reason: 'o → **ue**: *se acuestan*.' },
    { type: 'fix', wrong: 'Me lavo mis manos.', answers: ['Me lavo las manos.'], reason: 'Bei Körperteilen steht der **Artikel**: *las manos*.' },
    {
      type: 'match',
      instruction: 'Mit oder ohne -se? Ordne die Bedeutung zu.',
      pairs: [
        ['llamar', 'anrufen'],
        ['llamarse', 'heißen'],
        ['dormir', 'schlafen'],
        ['dormirse', 'einschlafen'],
      ],
      reason: 'Das *-se* kann die Bedeutung verändern.',
    },
    {
      type: 'translate',
      instruction: 'Übersetze ins Spanische.',
      de: 'Ich stehe früh auf.',
      answers: ['Me levanto temprano.', 'Me levanto pronto.'],
      reason: '*levantarse*, yo → **me levanto**.',
    },
  ],
}

export default unit
