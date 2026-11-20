import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'ir-a-infinitive',
  title: 'ir a + Infinitiv',
  subtitle: 'Voy a estudiar – über Pläne sprechen; dazu tener que, hay que, poder und querer + Infinitiv',
  grade: 5,
  area: 'tenses',
  cefr: 'A1',
  order: 11,
  prerequisites: ['present-irregular', 'present-stem-change'],
  keywords: ['ir a', 'Zukunft', 'Futur', 'Pläne', 'futuro próximo', 'tener que', 'hay que', 'müssen', 'poder', 'querer', 'Infinitiv'],

  summary: [
    {
      type: 'table',
      caption: 'ir a + Infinitiv',
      head: ['', 'ir + a', 'Infinitiv'],
      rows: [
        ['yo', 'voy a', 'estudiar'],
        ['tú', 'vas a', 'salir'],
        ['él/ella/usted', 'va a', 'llover'],
        ['nosotros/-as', 'vamos a', 'comer'],
        ['vosotros/-as', 'vais a', 'viajar'],
        ['ellos/ellas/ustedes', 'van a', 'venir'],
      ],
    },
    {
      type: 'table',
      caption: 'Weitere Verben + Infinitiv',
      head: ['Ausdruck', 'Bedeutung', 'Beispiel'],
      rows: [
        ['*tener que* + Inf.', 'müssen (persönlich)', '*Tengo que estudiar.*'],
        ['*hay que* + Inf.', 'man muss (allgemein)', '*Hay que reciclar.*'],
        ['*poder* + Inf.', 'können, dürfen', '*¿Puedo entrar?*'],
        ['*querer* + Inf.', 'wollen', '*Quiero viajar.*'],
      ],
    },
    {
      type: 'list',
      items: [
        '**Wann?** Pläne und Absichten; etwas, das gleich passiert: *Va a llover.*',
        '**Signalwörter:** *mañana, esta tarde, esta noche, el próximo lunes, la semana que viene, el año que viene*',
      ],
    },
  ],

  explanation: [
    {
      title: 'Bildung',
      blocks: [
        {
          type: 'text',
          text: '*ir* im Presente + **a** + Infinitiv. Nur *ir* wird konjugiert, der Infinitiv bleibt immer gleich: *voy a comer, vamos a comer*.',
        },
        {
          type: 'table',
          head: ['', 'Beispiel'],
          rows: [
            ['yo', '*Voy a estudiar.*'],
            ['tú', '*¿Vas a salir?*'],
            ['él/ella/usted', '*Va a llover.*'],
            ['nosotros/-as', '*Vamos a comer.*'],
            ['vosotros/-as', '*¿Vais a venir?*'],
            ['ellos/ellas/ustedes', '*Van a viajar.*'],
          ],
        },
        {
          type: 'text',
          text: 'Reflexive Verben: Pronomen **vor** *ir* oder **an** den Infinitiv: *Me voy a duchar. = Voy a ducharme.*',
        },
        { type: 'tip', text: 'Das **a** nicht vergessen: *Voy a comer.* – nicht ~~Voy comer.~~' },
      ],
    },
    {
      title: 'Verwendung & Signalwörter',
      blocks: [
        {
          type: 'list',
          items: [
            'Pläne und Absichten: *El sábado vamos a ir a la playa.*',
            'Vorhersage, wenn man schon Anzeichen sieht: *Mira las nubes: va a llover.*',
            'Ankündigung: *Ahora os voy a explicar los deberes.*',
          ],
        },
        {
          type: 'table',
          caption: 'Signalwörter',
          head: ['Spanisch', 'Deutsch'],
          rows: [
            ['*mañana*', 'morgen'],
            ['*pasado mañana*', 'übermorgen'],
            ['*esta tarde / esta noche*', 'heute Nachmittag / heute Abend'],
            ['*el próximo lunes*', 'nächsten Montag'],
            ['*la semana que viene*', 'nächste Woche'],
            ['*el año que viene*', 'nächstes Jahr'],
            ['*dentro de dos días*', 'in zwei Tagen'],
          ],
        },
      ],
    },
    {
      title: 'tener que, hay que, poder, querer',
      blocks: [
        {
          type: 'text',
          text: 'Auch diese Verben verbinden sich mit einem Infinitiv. Konjugiert wird nur das erste Verb.',
        },
        {
          type: 'table',
          head: ['Ausdruck', 'Bedeutung', 'Beispiel'],
          rows: [
            ['*tener que* + Inf.', 'müssen (eine bestimmte Person)', '*Mañana tengo que trabajar.*'],
            ['*hay que* + Inf.', 'man muss (allgemein, ohne Person)', '*Hay que llevar el pasaporte.*'],
            ['*deber* + Inf.', 'sollen, müssen', '*Debes estudiar más.*'],
            ['*poder* + Inf.', 'können, dürfen', '*No puedo venir.*'],
            ['*querer* + Inf.', 'wollen', '*¿Quieres bailar?*'],
            ['*saber* + Inf.', 'können (gelernt)', '*Sé nadar.*'],
          ],
        },
        { type: 'warning', text: '*tener que* braucht **que**: ~~Tengo estudiar.~~ → *Tengo que estudiar.*' },
      ],
    },
    {
      title: 'Unterschied zum Deutschen',
      blocks: [
        {
          type: 'list',
          items: [
            'Im Deutschen sagt man Zukünftiges oft im **Präsens** („Morgen besuche ich Oma“). Im Spanischen geht das auch, aber für Pläne ist *ir a* + Infinitiv sehr üblich: *Mañana voy a visitar a mi abuela.*',
            '*ir a* entspricht oft „werden“ oder „vorhaben“: *Voy a estudiar Medicina.* (Ich werde / will Medizin studieren.)',
            '„man muss“ → *hay que* (ohne Person); „ich muss“ → *tengo que*.',
          ],
        },
      ],
    },
    {
      title: 'Typische Fehler',
      blocks: [
        { type: 'warning', text: '~~Voy estudiar.~~ → *Voy a estudiar.*' },
        { type: 'warning', text: '~~Tengo estudiar.~~ → *Tengo que estudiar.*' },
        { type: 'warning', text: 'Zweites Verb konjugiert: ~~Tenemos que vamos.~~ → *Tenemos que ir.*' },
        { type: 'warning', text: '~~Ellos va a venir.~~ → *Ellos van a venir.*' },
        { type: 'warning', text: '~~¿Puedes a ayudarme?~~ → *¿Puedes ayudarme?* (nach *poder* kein *a*)' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        { type: 'tip', text: '**ir + a + Infinitiv** – drei Stufen wie eine Treppe: *voy – a – estudiar*.' },
        { type: 'tip', text: '**tener que** = „müssen“ (mit *que*!), **hay que** = „man muss“.' },
        { type: 'tip', text: 'Nur das **erste** Verb wird konjugiert, das zweite bleibt im Infinitiv: *Quiero ir. Puedo venir. Tengo que estudiar.*' },
      ],
    },
  ],

  examples: [
    { es: 'Mañana voy a visitar a mi abuela.', de: 'Morgen besuche ich meine Oma.' },
    { es: '¿Qué vas a hacer el fin de semana?', de: 'Was machst du am Wochenende?' },
    { es: 'Este verano vamos a viajar a Italia.', de: 'Diesen Sommer fahren wir nach Italien.' },
    { es: 'Mira las nubes: va a llover.', de: 'Schau dir die Wolken an: Es wird gleich regnen.' },
    { es: 'Mis primos van a venir en Navidad.', de: 'Meine Cousins kommen zu Weihnachten.' },
    { es: '¿Vais a jugar al fútbol esta tarde?', de: 'Spielt ihr heute Nachmittag Fußball?' },
    { es: 'Tengo que estudiar para el examen.', de: 'Ich muss für die Prüfung lernen.' },
    { es: 'Hay que reciclar el plástico.', de: 'Man muss Plastik recyceln.' },
    { es: '¿Puedo abrir la ventana?', de: 'Darf ich das Fenster öffnen?' },
    { es: 'Quiero aprender a tocar la guitarra.', de: 'Ich will Gitarre spielen lernen.' },
    { es: 'Esta noche me voy a acostar temprano.', de: 'Heute Abend gehe ich früh schlafen.' },
    { es: 'No puedo salir porque tengo que cuidar a mi hermano.', de: 'Ich kann nicht weggehen, weil ich auf meinen Bruder aufpassen muss.' },
  ],

  exercises: [
    // ---------- leicht ----------
    {
      id: 'ir-a-infinitive-e1',
      level: 'easy',
      instruction: 'Setze die passende Form von *ir a* ein.',
      tasks: [
        { type: 'gap', text: 'Mañana ___ estudiar.', hint: 'yo', answers: ['voy a'], reason: '*yo* → **voy a**.' },
        { type: 'gap', text: '¿Qué ___ hacer esta tarde?', hint: 'tú', answers: ['vas a'], reason: '*tú* → **vas a**.' },
        { type: 'gap', text: 'Mi hermana ___ comprar un móvil.', answers: ['va a'], reason: '*mi hermana* = ella → **va a**.' },
        { type: 'gap', text: 'Nosotros ___ cenar en un restaurante.', answers: ['vamos a'], reason: '*nosotros* → **vamos a**.' },
        { type: 'gap', text: '¿Vosotros ___ venir a la fiesta?', answers: ['vais a'], reason: '*vosotros* → **vais a** (ohne Akzent).' },
        { type: 'gap', text: 'Mis padres ___ viajar a Roma.', answers: ['van a'], reason: '*mis padres* = ellos → **van a**.' },
        { type: 'gap', text: 'Esta noche no ___ salir.', hint: 'yo', answers: ['voy a'], reason: '*yo* → **voy a**; *no* steht davor.' },
        { type: 'gap', text: 'Usted ___ llegar tarde.', answers: ['va a'], reason: '*usted* → 3. Person: **va a**.' },
        { type: 'gap', text: 'Mira el cielo: ___ llover.', answers: ['va a'], reason: 'Wetter → 3. Person Singular: **va a llover**.' },
        { type: 'gap', text: '¿Cuándo ___ empezar las vacaciones?', answers: ['van a'], reason: '*las vacaciones* (Plural) → **van a**.' },
      ],
    },
    {
      id: 'ir-a-infinitive-e2',
      level: 'easy',
      instruction: 'Ordne zu: zuerst links antippen, dann rechts.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['Ich muss lernen.', 'Tengo que estudiar.'],
            ['Man muss lernen.', 'Hay que estudiar.'],
            ['Ich kann lernen.', 'Puedo estudiar.'],
            ['Ich will lernen.', 'Quiero estudiar.'],
            ['Ich werde lernen.', 'Voy a estudiar.'],
          ],
          reason: 'Konjugiert wird das erste Verb, *estudiar* bleibt im Infinitiv.',
        },
        {
          type: 'match',
          pairs: [
            ['mañana', 'morgen'],
            ['pasado mañana', 'übermorgen'],
            ['esta noche', 'heute Abend'],
            ['la semana que viene', 'nächste Woche'],
            ['el próximo lunes', 'nächsten Montag'],
            ['dentro de dos días', 'in zwei Tagen'],
          ],
          reason: 'Diese Signalwörter zeigen in die Zukunft → oft mit *ir a* + Infinitiv.',
        },
      ],
    },
    {
      id: 'ir-a-infinitive-e3',
      level: 'easy',
      instruction: 'Wähle die richtige Form.',
      tasks: [
        {
          type: 'choice',
          prompt: 'Mañana ___ al cine. (wir gehen)',
          options: ['vamos a ir', 'vamos ir', 'vamos a vamos'],
          answer: 'vamos a ir',
          reason: '*ir a* + Infinitiv: **vamos a ir** (das zweite *ir* bleibt Infinitiv).',
        },
        {
          type: 'choice',
          prompt: 'Esta tarde ___ los deberes. (ich)',
          options: ['voy a hacer', 'voy hacer', 'voy a hago'],
          answer: 'voy a hacer',
          reason: '*voy a* + Infinitiv **hacer**.',
        },
        { type: 'choice', prompt: '¿Tú ___ estudiar Medicina?', options: ['vas a', 'vas', 'va a'], answer: 'vas a', reason: '*tú* → **vas a** + Infinitiv.' },
        {
          type: 'choice',
          prompt: 'Mis amigos ___ a las ocho. (ankommen)',
          options: ['van a llegar', 'va a llegar', 'van llegar'],
          answer: 'van a llegar',
          reason: '*mis amigos* = ellos → **van a llegar**.',
        },
        {
          type: 'choice',
          prompt: 'Hoy ___ estudiar mucho. (ich muss)',
          options: ['tengo que', 'tengo', 'hay que'],
          answer: 'tengo que',
          reason: '„ich muss“ → **tengo que**.',
        },
        {
          type: 'choice',
          prompt: 'En la biblioteca ___ hablar bajo. (man muss)',
          options: ['hay que', 'tengo que', 'hay'],
          answer: 'hay que',
          reason: '„man muss“ (allgemein) → **hay que**.',
        },
        { type: 'choice', prompt: '¿___ abrir la ventana? (darf ich)', options: ['Puedo', 'Quiero', 'Tengo'], answer: 'Puedo', reason: '„darf ich“ → **puedo**.' },
        { type: 'choice', prompt: '___ aprender japonés. (ich will)', options: ['Quiero', 'Puedo', 'Quiere'], answer: 'Quiero', reason: '„ich will“ → **quiero**.' },
      ],
    },

    // ---------- mittel ----------
    {
      id: 'ir-a-infinitive-m1',
      level: 'medium',
      instruction: 'Was haben die Leute vor? Bilde *ir a* + Infinitiv.',
      tasks: [
        { type: 'gap', text: 'El sábado ___ al tenis.', hint: 'jugar, nosotros', answers: ['vamos a jugar'], reason: '*nosotros* → **vamos a jugar**.' },
        { type: 'gap', text: 'Esta noche ___ una película.', hint: 'ver, yo', answers: ['voy a ver'], reason: '*yo* → **voy a ver**.' },
        { type: 'gap', text: '¿Cuándo ___ a tus abuelos?', hint: 'visitar, tú', answers: ['vas a visitar'], reason: '*tú* → **vas a visitar**.' },
        { type: 'gap', text: 'Mi hermano ___ el carné de conducir.', hint: 'sacar', answers: ['va a sacar'], reason: '*él* → **va a sacar**.' },
        {
          type: 'gap',
          text: 'El año que viene mis padres ___ de casa.',
          hint: 'cambiarse',
          answers: ['se van a cambiar', 'van a cambiarse'],
          reason: 'Reflexiv: *se van a cambiar* oder *van a cambiarse*.',
        },
        {
          type: 'gap',
          text: '¿Vosotros ___ en el hotel?',
          hint: 'quedarse',
          answers: ['os vais a quedar', 'vais a quedaros'],
          reason: 'Reflexiv: *os vais a quedar* oder *vais a quedaros*.',
        },
        {
          type: 'gap',
          text: 'Mañana ___ temprano.',
          hint: 'levantarse, yo',
          answers: ['me voy a levantar', 'voy a levantarme'],
          reason: 'Reflexiv: *me voy a levantar* oder *voy a levantarme*.',
        },
        { type: 'gap', text: 'Creo que hoy ___ frío.', hint: 'hacer', answers: ['va a hacer'], reason: 'Wetter → **va a hacer frío**.' },
        { type: 'gap', text: 'Mis amigas ___ un pastel.', hint: 'preparar', answers: ['van a preparar'], reason: '*ellas* → **van a preparar**.' },
        { type: 'gap', text: 'Usted ___ el autobús de las ocho.', hint: 'tomar', answers: ['va a tomar'], reason: '*usted* → **va a tomar**.' },
      ],
    },
    {
      id: 'ir-a-infinitive-m2',
      level: 'medium',
      instruction: 'Ergänze *tener que* oder *hay que* in der richtigen Form.',
      tasks: [
        { type: 'gap', text: 'Mañana ___ levantarme a las seis.', hint: 'yo', answers: ['tengo que'], reason: 'persönlich, *yo* → **tengo que**.' },
        { type: 'gap', text: 'Para aprobar ___ estudiar.', hint: 'allgemein', answers: ['hay que'], reason: 'allgemein, „man muss“ → **hay que**.' },
        { type: 'gap', text: '¿___ trabajar el sábado?', hint: 'tú', answers: ['tienes que'], reason: '*tú* → **tienes que**.' },
        { type: 'gap', text: 'En el avión ___ apagar el móvil.', hint: 'allgemein', answers: ['hay que'], reason: 'allgemeine Regel → **hay que**.' },
        { type: 'gap', text: 'Mis padres ___ ir al médico.', hint: 'ellos', answers: ['tienen que'], reason: '*ellos* → **tienen que**.' },
        { type: 'gap', text: 'Nosotros ___ hacer los deberes.', hint: 'nosotros', answers: ['tenemos que'], reason: '*nosotros* → **tenemos que**.' },
        { type: 'gap', text: 'En clase ___ levantar la mano para hablar.', hint: 'allgemein', answers: ['hay que'], reason: 'allgemeine Regel → **hay que**.' },
        { type: 'gap', text: '¿Vosotros ___ estudiar mucho?', hint: 'vosotros', answers: ['tenéis que'], reason: '*vosotros* → **tenéis que**.' },
      ],
    },

    // ---------- schwer ----------
    {
      id: 'ir-a-infinitive-h1',
      level: 'hard',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'Mañana voy estudiar con Ana.', answers: ['Mañana voy a estudiar con Ana.'], reason: '*ir* **a** + Infinitiv.' },
        { type: 'fix', wrong: 'Tengo estudiar para el examen.', answers: ['Tengo que estudiar para el examen.'], reason: '*tener* **que** + Infinitiv.' },
        { type: 'fix', wrong: 'Mis padres va a viajar a Perú.', answers: ['Mis padres van a viajar a Perú.'], reason: '*mis padres* = ellos → **van a**.' },
        { type: 'fix', wrong: 'Tenemos que vamos al médico.', answers: ['Tenemos que ir al médico.'], reason: 'Das zweite Verb bleibt im **Infinitiv**: *ir*.' },
        {
          type: 'fix',
          wrong: 'Voy a me duchar ahora.',
          answers: ['Me voy a duchar ahora.', 'Voy a ducharme ahora.'],
          reason: 'Pronomen vor *ir* oder an den Infinitiv – nie dazwischen.',
        },
        { type: 'fix', wrong: '¿Vais a venís a la fiesta?', answers: ['¿Vais a venir a la fiesta?'], reason: 'Nach *ir a* steht der **Infinitiv**: *venir*.' },
        { type: 'fix', wrong: 'Mañana tengo que trabajo.', answers: ['Mañana tengo que trabajar.'], reason: 'Nach *tener que* steht der **Infinitiv**: *trabajar*.' },
        { type: 'fix', wrong: 'Esta noche vamos a cenamos pizza.', answers: ['Esta noche vamos a cenar pizza.'], reason: 'Nach *ir a* steht der **Infinitiv**: *cenar*.' },
        { type: 'fix', wrong: '¿Puedes a ayudarme?', answers: ['¿Puedes ayudarme?', '¿Me puedes ayudar?'], reason: '*poder* + Infinitiv – **ohne** *a*.' },
      ],
    },
    {
      id: 'ir-a-infinitive-h2',
      level: 'hard',
      instruction: 'Bilde den Satz: Tippe die Wörter in der richtigen Reihenfolge an.',
      tasks: [
        {
          type: 'order',
          words: ['mañana', 'voy', 'a', 'jugar', 'al', 'fútbol'],
          answers: ['voy a jugar al fútbol mañana'],
          de: 'Morgen spiele ich Fußball.',
          reason: '*voy a jugar*; Zeitangabe am Anfang oder Ende.',
        },
        {
          type: 'order',
          words: ['qué', 'vais', 'a', 'hacer', 'en', 'verano'],
          answers: ['en verano qué vais a hacer'],
          de: 'Was macht ihr im Sommer?',
          reason: 'Fragewort + *vais a* + Infinitiv.',
        },
        { type: 'order', words: ['tengo', 'que', 'ordenar', 'mi', 'habitación'], de: 'Ich muss mein Zimmer aufräumen.', reason: '*tengo que* + Infinitiv.' },
        { type: 'order', words: ['hay', 'que', 'llegar', 'a', 'tiempo'], de: 'Man muss pünktlich kommen.', reason: '*hay que* + Infinitiv; *a tiempo* = pünktlich.' },
      ],
    },
    {
      id: 'ir-a-infinitive-h3',
      level: 'hard',
      instruction: 'Übersetze ins Spanische.',
      tasks: [
        { type: 'translate', de: 'Ich werde Spanisch lernen.', answers: ['Voy a aprender español.', 'Voy a estudiar español.'], reason: 'Plan → *voy a* + Infinitiv.' },
        {
          type: 'translate',
          de: 'Was machst du morgen?',
          answers: ['¿Qué vas a hacer mañana?', '¿Qué haces mañana?', '¿Mañana qué vas a hacer?'],
          reason: 'Plan → *¿Qué vas a hacer …?* (Presente geht auch).',
        },
        { type: 'translate', de: 'Ich muss arbeiten.', answers: ['Tengo que trabajar.'], reason: '„ich muss“ → *tengo que* + Infinitiv.' },
        { type: 'translate', de: 'Man muss Wasser trinken.', answers: ['Hay que beber agua.', 'Hay que tomar agua.'], reason: '„man muss“ → *hay que* + Infinitiv.' },
        { type: 'translate', de: 'Es wird regnen.', answers: ['Va a llover.'], reason: 'Vorhersage → *va a llover*.' },
        {
          type: 'translate',
          de: 'Wir können heute nicht kommen.',
          answers: ['Hoy no podemos venir.', 'No podemos venir hoy.'],
          reason: '*poder* (o → ue; nosotros ohne Wechsel) + Infinitiv.',
        },
        {
          type: 'translate',
          de: 'Nächstes Wochenende fahren wir nach Wien. Wir werden ein Museum besuchen und Sachertorte essen. Vorher muss ich meine Hausaufgaben machen.',
          answers: [
            'El fin de semana que viene vamos a ir a Viena. Vamos a visitar un museo y a comer tarta Sacher. Antes tengo que hacer los deberes.',
          ],
          free: true,
          reason: 'Pläne → *vamos a* + Infinitiv; Pflicht → *tengo que* + Infinitiv.',
        },
      ],
    },
  ],

  test: [
    { type: 'gap', instruction: 'Bilde *ir a* + Infinitiv.', text: 'Mañana ___ a mis abuelos.', hint: 'visitar, yo', answers: ['voy a visitar'], reason: '*yo* → **voy a visitar**.' },
    { type: 'gap', instruction: 'Setze die passende Form von *ir a* ein.', text: '¿Qué ___ hacer vosotros?', answers: ['vais a'], reason: '*vosotros* → **vais a**.' },
    { type: 'gap', instruction: 'Bilde *ir a* + Infinitiv.', text: 'Mira las nubes: ___.', hint: 'llover', answers: ['va a llover'], reason: 'Vorhersage → **va a llover**.' },
    {
      type: 'choice',
      prompt: 'En el museo ___ hablar bajo. (man muss)',
      options: ['hay que', 'tengo que', 'va a'],
      answer: 'hay que',
      reason: '„man muss“ → **hay que**.',
    },
    {
      type: 'choice',
      prompt: 'Mis hermanos ___ jugar al baloncesto. (wollen)',
      options: ['quieren', 'quiere', 'queremos'],
      answer: 'quieren',
      reason: '*mis hermanos* = ellos → **quieren** + Infinitiv.',
    },
    { type: 'choice', prompt: '¿___ venir mañana? (kannst du)', options: ['Puedes', 'Quieres', 'Tienes'], answer: 'Puedes', reason: '„kannst du“ → **puedes**.' },
    { type: 'fix', wrong: 'Voy estudiar Medicina.', answers: ['Voy a estudiar Medicina.'], reason: '*ir* **a** + Infinitiv.' },
    { type: 'fix', wrong: 'Tienes estudiar más.', answers: ['Tienes que estudiar más.'], reason: '*tener* **que** + Infinitiv.' },
    { type: 'order', words: ['vamos', 'a', 'ver', 'una', 'película'], de: 'Wir werden einen Film anschauen.', reason: '*vamos a* + Infinitiv.' },
    {
      type: 'translate',
      instruction: 'Übersetze ins Spanische.',
      de: 'Ich muss gehen.',
      answers: ['Tengo que irme.', 'Me tengo que ir.', 'Tengo que ir.'],
      reason: '„ich muss“ → *tengo que* + Infinitiv (*irme* = weggehen).',
    },
  ],
}

export default unit
