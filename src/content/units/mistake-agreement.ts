import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'mistake-agreement',
  title: 'Genus- & Numerus-Angleichung',
  subtitle: 'el problema, la mano, la gente es … – wenn Artikel, Nomen und Adjektiv nicht zusammenpassen',
  grade: 5,
  area: 'mistakes',
  cefr: 'A1',
  order: 14,
  prerequisites: ['articles-nouns', 'adjectives'],
  keywords: ['Angleichung', 'Genus', 'Numerus', 'Geschlecht', 'gente', 'problema', 'mano', 'agua', 'Fehler'],

  summary: [
    {
      type: 'table',
      caption: 'falsch → richtig',
      head: ['falsch', 'richtig', 'warum?'],
      rows: [
        ['~~la problema~~', '*el problema*', '-ma-Wort → männlich'],
        ['~~el mano~~', '*la mano*', 'Ausnahme: weiblich'],
        ['~~la gente son simpáticos~~', '*la gente es simpática*', '*gente* = Singular, weiblich'],
        ['~~los chicas~~', '*las chicas*', 'Artikel angleichen'],
        ['~~una foto bonito~~', '*una foto bonita*', '*la foto* ist weiblich'],
        ['~~el agua frío~~', '*el agua fría*', '*agua* ist weiblich'],
        ['~~mis amigo~~', '*mis amigos*', 'Plural überall'],
      ],
    },
  ],

  explanation: [
    {
      title: 'Warum passiert der Fehler?',
      blocks: [
        {
          type: 'text',
          text: 'Das Geschlecht im Deutschen hilft oft nicht weiter (*das Problem – el problema, der Tag – el día, die Hand – la mano*). Außerdem müssen im Spanischen **Artikel, Nomen, Adjektiv und Possessiv** zusammenpassen: *las casas blancas, nuestros días bonitos*.',
        },
      ],
    },
    {
      title: 'Die Falle „la gente“',
      blocks: [
        {
          type: 'text',
          text: '*la gente* (die Leute) ist im Spanischen **Singular** und **weiblich**: *La gente es simpática.* – nicht ~~La gente son simpáticos.~~',
        },
      ],
    },
    {
      title: 'Trügerische Endungen',
      blocks: [
        {
          type: 'list',
          items: [
            '**-ma** ist oft männlich: *el problema, el tema, el idioma, el clima, el programa*',
            '**-o**, aber weiblich: *la mano, la foto, la moto, la radio*',
            '**-a**, aber männlich: *el día, el mapa, el planeta*',
            '**-e** kann beides sein: *el coche, el viaje – la noche, la clase, la gente*',
          ],
        },
        {
          type: 'warning',
          text: '*el agua* ist **weiblich** – *el* steht nur, weil das Wort mit betontem *a* beginnt: *el agua fría, las aguas frías*.',
        },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        {
          type: 'tip',
          text: 'Kontrolliere am Ende jeden Satz: Passen **Artikel – Nomen – Adjektiv** zusammen? *las casas blancas, los días bonitos, la gente simpática*.',
        },
      ],
    },
  ],

  examples: [
    { es: 'El problema es muy difícil.', de: 'Das Problem ist sehr schwierig.' },
    { es: 'Tengo las manos frías.', de: 'Ich habe kalte Hände.' },
    { es: 'La gente de mi pueblo es muy amable.', de: 'Die Leute in meinem Dorf sind sehr freundlich.' },
    { es: 'Es un día precioso.', de: 'Es ist ein wunderschöner Tag.' },
    { es: 'Mis amigas españolas son muy divertidas.', de: 'Meine spanischen Freundinnen sind sehr lustig.' },
    { es: '¿Tienes un mapa de la ciudad?', de: 'Hast du einen Stadtplan?' },
  ],

  exercises: [
    {
      id: 'mistake-agreement-e1',
      level: 'easy',
      instruction: 'Wähle die passende Form.',
      tasks: [
        { type: 'choice', prompt: '___ problema', options: ['el', 'la'], answer: 'el', reason: '-ma-Wort → männlich: **el problema**.' },
        { type: 'choice', prompt: '___ mano', options: ['la', 'el'], answer: 'la', reason: 'Ausnahme: **la mano**.' },
        { type: 'choice', prompt: 'un día ___', options: ['bonito', 'bonita'], answer: 'bonito', reason: '*el día* ist männlich → **bonito**.' },
        { type: 'choice', prompt: 'una foto ___', options: ['bonita', 'bonito'], answer: 'bonita', reason: '*la foto* ist weiblich → **bonita**.' },
        { type: 'choice', prompt: 'La gente ___ muy amable.', options: ['es', 'son'], answer: 'es', reason: '*la gente* ist Singular → **es**.' },
        { type: 'choice', prompt: 'el idioma ___', options: ['español', 'española'], answer: 'español', reason: '*el idioma* ist männlich → **español**.' },
        { type: 'choice', prompt: 'las motos ___', options: ['rojas', 'rojos'], answer: 'rojas', reason: '*la moto* ist weiblich → **rojas**.' },
        { type: 'choice', prompt: 'un mapa ___', options: ['nuevo', 'nueva'], answer: 'nuevo', reason: '*el mapa* ist männlich → **nuevo**.' },
        { type: 'choice', prompt: 'el agua ___', options: ['fría', 'frío'], answer: 'fría', reason: '*agua* ist weiblich (nur *el* wegen des betonten a-) → **fría**.' },
        { type: 'choice', prompt: 'La gente ___ contenta.', options: ['está', 'están'], answer: 'está', reason: '*la gente* ist Singular → **está**.' },
      ],
    },
    {
      id: 'mistake-agreement-e2',
      level: 'easy',
      instruction: 'Setze das Adjektiv in der richtigen Form ein.',
      tasks: [
        { type: 'gap', text: 'Es un problema ___.', hint: 'serio', answers: ['serio'], reason: '*el problema* → männlich: **serio**.' },
        { type: 'gap', text: 'Tengo las manos ___.', hint: 'frío', answers: ['frías'], reason: '*las manos* → weiblich Plural: **frías**.' },
        { type: 'gap', text: 'La gente aquí es muy ___.', hint: 'simpático', answers: ['simpática'], reason: '*la gente* → weiblich Singular: **simpática**.' },
        { type: 'gap', text: 'Hace un día ___.', hint: 'precioso', answers: ['precioso'], reason: '*el día* → männlich: **precioso**.' },
        { type: 'gap', text: 'Mis fotos ___ están en el móvil.', hint: 'favorito', answers: ['favoritas'], reason: '*las fotos* → weiblich Plural: **favoritas**.' },
        { type: 'gap', text: 'El tema es muy ___.', hint: 'difícil', answers: ['difícil'], reason: '*el tema* → Singular: **difícil**.' },
        { type: 'gap', text: 'Las noches de verano son ___.', hint: 'corto', answers: ['cortas'], reason: '*las noches* → weiblich Plural: **cortas**.' },
        { type: 'gap', text: 'Es la ___ vez.', hint: 'último', answers: ['última'], reason: '*la vez* → weiblich: **última**.' },
      ],
    },
    {
      id: 'mistake-agreement-m1',
      level: 'medium',
      instruction: 'In jedem Satz steckt ein Fehler bei der Angleichung. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'La problema es grave.', answers: ['El problema es grave.'], reason: '*problema* ist männlich → **el**.' },
        { type: 'fix', wrong: 'Me duele el mano.', answers: ['Me duele la mano.'], reason: '*mano* ist weiblich → **la**.' },
        { type: 'fix', wrong: 'La gente son muy simpáticos.', answers: ['La gente es muy simpática.'], reason: '*la gente* = Singular, weiblich → **es simpática**.' },
        { type: 'fix', wrong: 'Tengo unas fotos muy bonitos.', answers: ['Tengo unas fotos muy bonitas.'], reason: '*las fotos* → **bonitas**.' },
        { type: 'fix', wrong: 'Hoy hace una día bonito.', answers: ['Hoy hace un día bonito.'], reason: '*el día* ist männlich → **un**.' },
        { type: 'fix', wrong: 'Mis amigo viven en Madrid.', answers: ['Mis amigos viven en Madrid.'], reason: 'Plural überall: **amigos**.' },
        { type: 'fix', wrong: 'El idioma española es fácil.', answers: ['El idioma español es fácil.'], reason: '*el idioma* ist männlich → **español**.' },
        { type: 'fix', wrong: 'Los chicas son altas.', answers: ['Las chicas son altas.'], reason: '*las chicas* → Artikel **las**.' },
        { type: 'fix', wrong: 'El agua está frío.', answers: ['El agua está fría.'], reason: '*agua* ist weiblich → **fría**.' },
        {
          type: 'fix',
          wrong: 'Las clases de español son muy divertidos.',
          answers: ['Las clases de español son muy divertidas.'],
          reason: '*las clases* → **divertidas**.',
        },
      ],
    },
    {
      id: 'mistake-agreement-m2',
      level: 'medium',
      instruction: 'Übersetze ins Spanische – achte auf die Angleichung.',
      tasks: [
        { type: 'translate', de: 'ein großes Problem', answers: ['un gran problema', 'un problema grande'], reason: '*el problema* ist männlich.' },
        { type: 'translate', de: 'die kalten Hände', answers: ['las manos frías'], reason: '*la mano* ist weiblich → *frías*.' },
        {
          type: 'translate',
          de: 'Die Leute sind nett.',
          answers: ['La gente es simpática.', 'La gente es amable.', 'La gente es maja.'],
          reason: '*la gente* = Singular, weiblich.',
        },
        {
          type: 'translate',
          de: 'ein schöner Tag',
          answers: ['un día bonito', 'un bonito día', 'un día precioso', 'un buen día'],
          reason: '*el día* ist männlich.',
        },
        { type: 'translate', de: 'die neuen Fotos', answers: ['las fotos nuevas', 'las nuevas fotos'], reason: '*la foto* ist weiblich → *nuevas*.' },
        { type: 'translate', de: 'kaltes Wasser', answers: ['agua fría'], reason: '*agua* ist weiblich → *fría*.' },
      ],
    },
  ],
}

export default unit
