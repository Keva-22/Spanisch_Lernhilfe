import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'present-stem-change',
  title: 'Presente – Stammwechsel',
  subtitle: 'quiero, puedo, pido, juego – Verben mit e → ie, o → ue, e → i und u → ue',
  grade: 5,
  area: 'tenses',
  cefr: 'A1',
  order: 6,
  prerequisites: ['present-regular', 'present-irregular'],
  keywords: ['Stammwechsel', 'Diphthong', 'Schuhregel', 'querer', 'poder', 'pedir', 'jugar', 'tocar', 'e ie', 'o ue'],

  summary: [
    {
      type: 'table',
      caption: 'Die vier Gruppen',
      head: ['', 'querer (e → ie)', 'poder (o → ue)', 'pedir (e → i)', 'jugar (u → ue)'],
      rows: [
        ['yo', 'qu**ie**ro', 'p**ue**do', 'p**i**do', 'j**ue**go'],
        ['tú', 'qu**ie**res', 'p**ue**des', 'p**i**des', 'j**ue**gas'],
        ['él/ella/usted', 'qu**ie**re', 'p**ue**de', 'p**i**de', 'j**ue**ga'],
        ['nosotros/-as', 'queremos', 'podemos', 'pedimos', 'jugamos'],
        ['vosotros/-as', 'queréis', 'podéis', 'pedís', 'jugáis'],
        ['ellos/ellas/ustedes', 'qu**ie**ren', 'p**ue**den', 'p**i**den', 'j**ue**gan'],
      ],
    },
    {
      type: 'list',
      items: [
        '**Schuh-Regel:** Der Stamm ändert sich bei *yo, tú, él, ellos* – **nicht** bei *nosotros* und *vosotros*.',
        'e → ie: *querer, pensar, empezar, preferir, entender, cerrar*',
        'o → ue: *poder, dormir, volver, encontrar, costar, recordar*',
        'e → i (nur -ir-Verben): *pedir, repetir, servir, seguir, vestirse*',
        'u → ue: nur *jugar*',
      ],
    },
  ],

  explanation: [
    {
      title: 'Was ist ein Stammwechsel?',
      blocks: [
        {
          type: 'text',
          text: 'Bei manchen Verben ändert sich im Presente der **betonte Vokal im Stamm**: aus *e* wird *ie*, aus *o* wird *ue*, aus *e* wird *i*. Die Endungen bleiben ganz regelmäßig.',
        },
        {
          type: 'table',
          caption: 'Die „Schuh-Form“ (querer)',
          head: ['Singular', 'Plural'],
          rows: [
            ['**quie**ro', 'queremos'],
            ['**quie**res', 'queréis'],
            ['**quie**re', '**quie**ren'],
          ],
        },
        {
          type: 'tip',
          text: '**Schuh-Regel:** Umrandest du alle Formen mit Stammwechsel, entsteht die Form eines Schuhs. *nosotros* und *vosotros* bleiben draußen – dort liegt die Betonung auf der Endung.',
        },
      ],
    },
    {
      title: 'e → ie',
      blocks: [
        {
          type: 'table',
          head: ['Verb', 'Deutsch', 'yo-Form'],
          rows: [
            ['*querer*', 'wollen; lieben', '*quiero*'],
            ['*pensar*', 'denken, glauben', '*pienso*'],
            ['*empezar*', 'beginnen', '*empiezo*'],
            ['*preferir*', 'lieber mögen, bevorzugen', '*prefiero*'],
            ['*entender*', 'verstehen', '*entiendo*'],
            ['*cerrar*', 'schließen', '*cierro*'],
          ],
        },
        { type: 'text', text: 'Beispiel: *La clase empieza a las ocho, pero nosotros empezamos un poco más tarde.*' },
      ],
    },
    {
      title: 'o → ue',
      blocks: [
        {
          type: 'table',
          head: ['Verb', 'Deutsch', 'yo-Form'],
          rows: [
            ['*poder*', 'können, dürfen', '*puedo*'],
            ['*dormir*', 'schlafen', '*duermo*'],
            ['*volver*', 'zurückkommen', '*vuelvo*'],
            ['*encontrar*', 'finden', '*encuentro*'],
            ['*costar*', 'kosten', '*cuesta* (meist 3. Person)'],
            ['*recordar*', 'sich erinnern', '*recuerdo*'],
          ],
        },
        { type: 'text', text: 'Auch *llover* (regnen) gehört dazu: *Llueve mucho.*' },
      ],
    },
    {
      title: 'e → i und u → ue',
      blocks: [
        {
          type: 'text',
          text: '**e → i** gibt es nur bei **-ir-Verben**: *pedir* (bitten, bestellen), *repetir* (wiederholen), *servir* (servieren), *seguir* (folgen, weitermachen), *vestirse* (sich anziehen).',
        },
        { type: 'warning', text: '*seguir*: yo-Form **sigo** (ohne u): *sigo, sigues, sigue, seguimos, seguís, siguen*.' },
        {
          type: 'text',
          text: '**u → ue** gibt es nur bei **jugar**: *juego, juegas, juega, jugamos, jugáis, juegan*.',
        },
      ],
    },
    {
      title: 'Unterschied zum Deutschen',
      blocks: [
        {
          type: 'list',
          items: [
            'Auch im Deutschen gibt es Vokalwechsel (*ich nehme – du nimmst*). Im Spanischen betrifft er aber **auch die yo-Form** und die 3. Person Plural – nur *nosotros* und *vosotros* bleiben gleich.',
            '„spielen“: Sport und Spiele → *jugar* (*jugar al fútbol*); Instrumente → *tocar* (*tocar la guitarra*).',
          ],
        },
      ],
    },
    {
      title: 'Typische Fehler',
      blocks: [
        { type: 'warning', text: 'Wechsel bei nosotros/vosotros: ~~quieremos, puedemos~~ → *queremos, podemos*' },
        { type: 'warning', text: 'Wechsel vergessen: ~~jugo, jugas~~ → *juego, juegas* · ~~pedo~~ → *pido*' },
        { type: 'warning', text: 'Instrumente: ~~Juego la guitarra.~~ → *Toco la guitarra.*' },
        { type: 'warning', text: '*seguir*: ~~siguo~~ → *sigo* (ohne u).' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        { type: 'tip', text: '**Schuh-Regel:** yo, tú, él, ellos wechseln – nosotros und vosotros nicht.' },
        {
          type: 'tip',
          text: '**Beim Vokabellernen** den Wechsel mitschreiben: *poder (ue), pedir (i), querer (ie)* – so steht es auch in vielen Wörterbüchern.',
        },
        { type: 'tip', text: '**jugar** ist der einzige u → ue-Fall: *Juego al fútbol.*' },
      ],
    },
  ],

  examples: [
    { es: 'Quiero un café con leche, por favor.', de: 'Ich möchte einen Milchkaffee, bitte.' },
    { es: '¿Puedes abrir la ventana?', de: 'Kannst du das Fenster öffnen?' },
    { es: 'La película empieza a las nueve.', de: 'Der Film beginnt um neun.' },
    { es: 'Los sábados juego al fútbol con mis amigos.', de: 'Samstags spiele ich mit meinen Freunden Fußball.' },
    { es: '¿Cuánto cuestan estos zapatos?', de: 'Wie viel kosten diese Schuhe?' },
    { es: 'En el restaurante siempre pido pescado.', de: 'Im Restaurant bestelle ich immer Fisch.' },
    { es: 'Mi hermano duerme nueve horas cada noche.', de: 'Mein Bruder schläft jede Nacht neun Stunden.' },
    { es: 'No entiendo la pregunta. ¿Puede repetir, por favor?', de: 'Ich verstehe die Frage nicht. Können Sie bitte wiederholen?' },
    { es: 'Preferimos el mar a la montaña.', de: 'Wir mögen das Meer lieber als die Berge.' },
    { es: '¿A qué hora volvéis a casa?', de: 'Um wie viel Uhr kommt ihr nach Hause?' },
    { es: 'Pienso que tienes razón.', de: 'Ich glaube, du hast recht.' },
    { es: 'En Salzburgo llueve mucho.', de: 'In Salzburg regnet es viel.' },
  ],

  exercises: [
    // ---------- leicht ----------
    {
      id: 'present-stem-change-e1',
      level: 'easy',
      instruction: 'Ergänze die Konjugationstabelle im Presente.',
      tasks: [
        {
          type: 'table',
          verb: 'poder',
          tense: 'Presente',
          forms: ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'],
          given: [3],
          reason: 'o → **ue** außer bei nosotros und vosotros (Schuh-Regel).',
        },
        {
          type: 'table',
          verb: 'pedir',
          tense: 'Presente',
          forms: ['pido', 'pides', 'pide', 'pedimos', 'pedís', 'piden'],
          given: [3],
          reason: 'e → **i** außer bei nosotros und vosotros.',
        },
        {
          type: 'table',
          verb: 'jugar',
          tense: 'Presente',
          forms: ['juego', 'juegas', 'juega', 'jugamos', 'jugáis', 'juegan'],
          given: [3],
          reason: 'u → **ue** – nur bei *jugar*.',
        },
      ],
    },
    {
      id: 'present-stem-change-e2',
      level: 'easy',
      instruction: 'Wähle die richtige Form im Presente.',
      tasks: [
        { type: 'choice', prompt: 'Yo ___ ir al cine. (querer)', options: ['quiero', 'quero', 'queremos'], answer: 'quiero', reason: 'e → **ie**: *quiero*.' },
        {
          type: 'choice',
          prompt: 'Nosotros no ___ venir mañana. (poder)',
          options: ['podemos', 'puedemos', 'pueden'],
          answer: 'podemos',
          reason: '*nosotros* → **kein** Wechsel: *podemos*.',
        },
        {
          type: 'choice',
          prompt: '¿A qué hora ___ la clase? (empezar)',
          options: ['empieza', 'empeza', 'empiezan'],
          answer: 'empieza',
          reason: '*la clase* = 3. Person Singular, e → **ie**: *empieza*.',
        },
        { type: 'choice', prompt: 'Mis hermanos ___ al baloncesto. (jugar)', options: ['juegan', 'jugan', 'jueguen'], answer: 'juegan', reason: 'u → **ue**: *juegan*.' },
        { type: 'choice', prompt: 'En el bar siempre ___ un zumo. (pedir, yo)', options: ['pido', 'pedo', 'pide'], answer: 'pido', reason: 'e → **i**: *pido*.' },
        { type: 'choice', prompt: '¿Vosotros ___ bien? (dormir)', options: ['dormís', 'duermís', 'duermen'], answer: 'dormís', reason: '*vosotros* → **kein** Wechsel: *dormís*.' },
        { type: 'choice', prompt: '¿Cuánto ___ el billete? (costar)', options: ['cuesta', 'costa', 'cuestan'], answer: 'cuesta', reason: 'o → **ue**; *el billete* = Singular: *cuesta*.' },
        {
          type: 'choice',
          prompt: 'Tú ___ muy bien el español. (entender)',
          options: ['entiendes', 'entendes', 'entiende'],
          answer: 'entiendes',
          reason: 'e → **ie**: *entiendes*.',
        },
        { type: 'choice', prompt: 'El camarero ___ la comida. (servir)', options: ['sirve', 'serve', 'sierve'], answer: 'sirve', reason: '-ir-Verb, e → **i**: *sirve*.' },
        { type: 'choice', prompt: 'Ellas ___ la playa. (preferir)', options: ['prefieren', 'preferen', 'prefiren'], answer: 'prefieren', reason: 'e → **ie**: *prefieren*.' },
      ],
    },
    {
      id: 'present-stem-change-e3',
      level: 'easy',
      instruction: 'Ordne jedem Infinitiv die yo-Form zu.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['querer', 'quiero'],
            ['poder', 'puedo'],
            ['pedir', 'pido'],
            ['jugar', 'juego'],
            ['dormir', 'duermo'],
            ['empezar', 'empiezo'],
          ],
          reason: 'Bei *yo* ändert sich der Stammvokal: e → ie, o → ue, e → i, u → ue.',
        },
      ],
    },

    // ---------- mittel ----------
    {
      id: 'present-stem-change-m1',
      level: 'medium',
      instruction: 'Setze das Verb im Presente ein.',
      tasks: [
        { type: 'gap', text: 'El partido ___ a las ocho.', hint: 'empezar', answers: ['empieza'], reason: 'e → **ie**: *empieza*.' },
        { type: 'gap', text: '¿___ venir a mi fiesta?', hint: 'poder, tú', answers: ['puedes'], reason: 'o → **ue**: *puedes*.' },
        { type: 'gap', text: 'Nosotros ___ una pizza.', hint: 'querer', answers: ['queremos'], reason: '*nosotros* → kein Wechsel: *queremos*.' },
        { type: 'gap', text: 'Los niños ___ en la habitación.', hint: 'dormir', answers: ['duermen'], reason: 'o → **ue**: *duermen*.' },
        { type: 'gap', text: '¿Por qué no ___ a casa en autobús?', hint: 'volver, vosotros', answers: ['volvéis'], reason: '*vosotros* → kein Wechsel: *volvéis*.' },
        { type: 'gap', text: 'No ___ mis llaves.', hint: 'encontrar, yo', answers: ['encuentro'], reason: 'o → **ue**: *encuentro*.' },
        { type: 'gap', text: 'Mi madre ___ que es muy tarde.', hint: 'pensar', answers: ['piensa'], reason: 'e → **ie**: *piensa*.' },
        { type: 'gap', text: '¿Qué ___ para beber?', hint: 'pedir, tú', answers: ['pides'], reason: 'e → **i**: *pides*.' },
        { type: 'gap', text: 'El profesor ___ la pregunta.', hint: 'repetir', answers: ['repite'], reason: 'e → **i**: *repite*.' },
        { type: 'gap', text: '¿___ al tenis los domingos?', hint: 'jugar, vosotros', answers: ['jugáis'], reason: '*vosotros* → kein Wechsel: *jugáis*.' },
        { type: 'gap', text: 'Estas camisetas ___ veinte euros.', hint: 'costar', answers: ['cuestan'], reason: 'o → **ue**, Plural: *cuestan*.' },
        { type: 'gap', text: '___ todo recto hasta la plaza.', hint: 'seguir, yo', answers: ['sigo'], reason: '*seguir*: e → i, yo → **sigo** (ohne u).' },
      ],
    },
    {
      id: 'present-stem-change-m2',
      level: 'medium',
      instruction: '*jugar* oder *tocar*? Wähle.',
      tasks: [
        { type: 'choice', prompt: 'Mi hermana ___ el piano.', options: ['toca', 'juega'], answer: 'toca', reason: 'Instrument → **tocar**.' },
        { type: 'choice', prompt: 'Los domingos ___ al fútbol. (yo)', options: ['juego', 'toco'], answer: 'juego', reason: 'Sport → **jugar a**.' },
        { type: 'choice', prompt: '¿___ la guitarra? (tú)', options: ['Tocas', 'Juegas'], answer: 'Tocas', reason: 'Instrument → **tocar**.' },
        { type: 'choice', prompt: 'Mis amigos ___ a las cartas.', options: ['juegan', 'tocan'], answer: 'juegan', reason: 'Spiel → **jugar a**.' },
        { type: 'choice', prompt: 'Nosotros ___ en una banda.', options: ['tocamos', 'jugamos'], answer: 'tocamos', reason: 'Musik machen → **tocar**.' },
        { type: 'choice', prompt: '¿___ al ajedrez? (ihr)', options: ['Jugáis', 'Tocáis'], answer: 'Jugáis', reason: 'Spiel → **jugar a**.' },
      ],
    },

    // ---------- schwer ----------
    {
      id: 'present-stem-change-h1',
      level: 'hard',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'Nosotros quieremos ir a la playa.', answers: ['Nosotros queremos ir a la playa.'], reason: '*nosotros* → kein Wechsel: **queremos**.' },
        { type: 'fix', wrong: 'Mi hermano jugua al tenis.', answers: ['Mi hermano juega al tenis.'], reason: 'u → **ue**: *juega*.' },
        { type: 'fix', wrong: 'Yo pedo una hamburguesa.', answers: ['Yo pido una hamburguesa.'], reason: 'e → **i**: *pido*.' },
        { type: 'fix', wrong: '¿Podes ayudarme?', answers: ['¿Puedes ayudarme?'], reason: 'o → **ue**: *puedes*.' },
        { type: 'fix', wrong: 'La clase empeza a las ocho.', answers: ['La clase empieza a las ocho.'], reason: 'e → **ie**: *empieza*.' },
        {
          type: 'fix',
          wrong: 'Mis padres duermen mucho, pero yo dormo poco.',
          answers: ['Mis padres duermen mucho, pero yo duermo poco.'],
          reason: 'o → **ue** auch bei *yo*: *duermo*.',
        },
        { type: 'fix', wrong: 'Juego la guitarra en un grupo.', answers: ['Toco la guitarra en un grupo.'], reason: 'Instrument → **tocar**.' },
        { type: 'fix', wrong: 'Vosotros vuelvéis muy tarde.', answers: ['Vosotros volvéis muy tarde.'], reason: '*vosotros* → kein Wechsel: **volvéis**.' },
        { type: 'fix', wrong: '¿Cuánto costa el libro?', answers: ['¿Cuánto cuesta el libro?'], reason: 'o → **ue**: *cuesta*.' },
      ],
    },
    {
      id: 'present-stem-change-h2',
      level: 'hard',
      instruction: 'Bilde den Satz: Tippe die Wörter in der richtigen Reihenfolge an.',
      tasks: [
        {
          type: 'order',
          words: ['no', 'puedo', 'salir', 'esta', 'noche'],
          answers: ['esta noche no puedo salir'],
          de: 'Ich kann heute Abend nicht ausgehen.',
          reason: '*poder* + Infinitiv; *no* direkt vor dem Verb.',
        },
        { type: 'order', words: ['los', 'niños', 'duermen', 'en', 'el', 'coche'], de: 'Die Kinder schlafen im Auto.', reason: '*dormir*, ellos → **duermen**.' },
        {
          type: 'order',
          words: ['qué', 'quieres', 'hacer', 'mañana'],
          answers: ['mañana qué quieres hacer'],
          de: 'Was willst du morgen machen?',
          reason: '*querer* + Infinitiv: *quieres hacer*.',
        },
        { type: 'order', words: ['siempre', 'pido', 'la', 'misma', 'pizza'], de: 'Ich bestelle immer dieselbe Pizza.', reason: '*pedir*, yo → **pido**.' },
      ],
    },
    {
      id: 'present-stem-change-h3',
      level: 'hard',
      instruction: 'Übersetze ins Spanische (Presente).',
      tasks: [
        { type: 'translate', de: 'Ich verstehe nicht.', answers: ['No entiendo.'], reason: '*entender* (e → ie) → **entiendo**.' },
        { type: 'translate', de: 'Kannst du mir helfen?', answers: ['¿Puedes ayudarme?', '¿Me puedes ayudar?'], reason: '*poder*, tú → **puedes**.' },
        { type: 'translate', de: 'Wir spielen Basketball.', answers: ['Jugamos al baloncesto.', 'Jugamos al básquet.'], reason: '*jugar* → *jugamos* (kein Wechsel bei nosotros) + *al*.' },
        { type: 'translate', de: 'Wie viel kostet das?', answers: ['¿Cuánto cuesta?', '¿Cuánto cuesta esto?', '¿Cuánto cuesta eso?'], reason: '*costar* → **cuesta**.' },
        { type: 'translate', de: 'Der Film beginnt um acht.', answers: ['La película empieza a las ocho.'], reason: '*empezar* → **empieza**.' },
        { type: 'translate', de: 'Ich möchte Wasser, bitte.', answers: ['Quiero agua, por favor.'], reason: '*querer*, yo → **quiero**.' },
        {
          type: 'translate',
          de: 'Am Wochenende schlafe ich lange. Am Nachmittag spiele ich Tennis und am Abend kann ich ausgehen.',
          answers: ['El fin de semana duermo hasta tarde. Por la tarde juego al tenis y por la noche puedo salir.'],
          free: true,
          reason: '*duermo* (o → ue), *juego* (u → ue), *puedo* (o → ue).',
        },
      ],
    },
  ],

  test: [
    { type: 'gap', instruction: 'Setze das Verb im Presente ein.', text: 'Hoy no ___ ir a la fiesta.', hint: 'poder, yo', answers: ['puedo'], reason: 'o → **ue**: *puedo*.' },
    { type: 'gap', instruction: 'Setze das Verb im Presente ein.', text: '¿Qué ___ hacer vosotros?', hint: 'querer', answers: ['queréis'], reason: '*vosotros* → kein Wechsel: *queréis*.' },
    { type: 'gap', instruction: 'Setze das Verb im Presente ein.', text: 'Mi abuela ___ la siesta.', hint: 'dormir', answers: ['duerme'], reason: 'o → **ue**: *duerme*.' },
    { type: 'gap', instruction: 'Setze das Verb im Presente ein.', text: 'Los sábados ___ al fútbol.', hint: 'jugar, nosotros', answers: ['jugamos'], reason: '*nosotros* → kein Wechsel: *jugamos*.' },
    {
      type: 'choice',
      instruction: 'Wähle die richtige Form im Presente.',
      prompt: 'En el restaurante, mis padres ___ vino. (pedir)',
      options: ['piden', 'peden', 'pidan'],
      answer: 'piden',
      reason: 'e → **i**: *piden*.',
    },
    {
      type: 'choice',
      instruction: 'Wähle die richtige Form im Presente.',
      prompt: 'La tienda ___ a las nueve. (cerrar)',
      options: ['cierra', 'cerra', 'cierran'],
      answer: 'cierra',
      reason: 'e → **ie**, Singular: *cierra*.',
    },
    {
      type: 'table',
      instruction: 'Ergänze die Konjugationstabelle im Presente.',
      verb: 'volver',
      tense: 'Presente',
      forms: ['vuelvo', 'vuelves', 'vuelve', 'volvemos', 'volvéis', 'vuelven'],
      given: [3],
      reason: 'o → **ue** außer bei nosotros und vosotros.',
    },
    { type: 'fix', wrong: 'Nosotros empiezamos a las ocho.', answers: ['Nosotros empezamos a las ocho.'], reason: '*nosotros* → kein Wechsel: **empezamos**.' },
    {
      type: 'match',
      instruction: 'Ordne jedem Infinitiv die yo-Form zu.',
      pairs: [
        ['querer', 'quiero'],
        ['seguir', 'sigo'],
        ['encontrar', 'encuentro'],
        ['preferir', 'prefiero'],
      ],
      reason: 'yo-Formen mit Stammwechsel: *quiero, sigo, encuentro, prefiero*.',
    },
    { type: 'translate', instruction: 'Übersetze ins Spanische.', de: 'Ich spiele Gitarre.', answers: ['Toco la guitarra.'], reason: 'Instrument → **tocar**, nicht *jugar*.' },
  ],
}

export default unit
