import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'mistake-ser-estar',
  title: 'ser oder estar?',
  subtitle: 'Die häufigsten Verwechslungen – mit Entscheidungshilfe',
  grade: 5,
  area: 'mistakes',
  cefr: 'A1',
  order: 13,
  prerequisites: ['ser-estar-hay'],
  keywords: ['ser', 'estar', 'sein', 'Fehler', 'Verwechslung'],

  summary: [
    {
      type: 'table',
      caption: 'falsch → richtig',
      head: ['falsch', 'richtig', 'warum?'],
      rows: [
        ['~~Soy en casa.~~', '*Estoy en casa.*', 'Ort → estar'],
        ['~~Estoy de Viena.~~', '*Soy de Viena.*', 'Herkunft → ser'],
        ['~~Estoy alumno.~~', '*Soy alumno.*', 'Rolle, Beruf → ser'],
        ['~~Soy cansado.~~', '*Estoy cansado.*', 'Zustand → estar'],
        ['~~Hoy está lunes.~~', '*Hoy es lunes.*', 'Tag, Datum → ser'],
        ['~~La fiesta está en mi casa.~~', '*La fiesta es en mi casa.*', 'Veranstaltung → ser'],
      ],
    },
  ],

  explanation: [
    {
      title: 'Warum passiert der Fehler?',
      blocks: [
        {
          type: 'text',
          text: 'Im Deutschen gibt es nur „sein“. Darum greift man im Spanischen oft automatisch zu *ser* – auch dort, wo *estar* stehen muss. Grundregel: **ser** sagt, **was** etwas ist; **estar** sagt, **wo** oder **wie** es gerade ist.',
        },
      ],
    },
    {
      title: 'Entscheidungs-Checkliste',
      blocks: [
        {
          type: 'checklist',
          items: [
            'Geht es um einen **Ort** (wo?)? → *estar* – Ausnahme: Veranstaltungen (*la fiesta, el concierto*) → *ser*.',
            'Geht es um ein **Befinden** oder einen **Zustand** (müde, krank, froh, kalt, kaputt)? → *estar*.',
            'Geht es um **Identität, Herkunft, Beruf, Charakter, Aussehen, Besitz, Uhrzeit, Datum**? → *ser*.',
          ],
        },
      ],
    },
    {
      title: 'Adjektive mit zwei Bedeutungen',
      blocks: [
        {
          type: 'table',
          head: ['mit ser', 'mit estar'],
          rows: [
            ['*Es aburrido.* – Er ist langweilig.', '*Está aburrido.* – Ihm ist langweilig.'],
            ['*Es listo.* – Er ist klug.', '*Está listo.* – Er ist fertig, bereit.'],
            ['*Es rico.* – Er ist reich.', '*Está rico.* – Es schmeckt gut.'],
            ['*Es guapa.* – Sie ist hübsch.', '*Está guapa.* – Sie sieht heute gut aus.'],
          ],
        },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        { type: 'tip', text: '„Wie es dir geht und wo du stehst – das ist **estar**, wie du siehst.“ Alles andere ist meist **ser**.' },
      ],
    },
  ],

  examples: [
    { es: 'Mi madre es profesora, pero hoy está enferma.', de: 'Meine Mutter ist Lehrerin, aber heute ist sie krank.' },
    { es: 'Somos de Linz, pero ahora estamos en Madrid.', de: 'Wir sind aus Linz, aber jetzt sind wir in Madrid.' },
    { es: 'La sopa está muy rica.', de: 'Die Suppe schmeckt sehr gut.' },
    { es: 'El concierto es en el estadio.', de: 'Das Konzert findet im Stadion statt.' },
    { es: 'Pablo es muy simpático, pero hoy está de mal humor.', de: 'Pablo ist sehr nett, aber heute ist er schlecht gelaunt.' },
    { es: '¿Qué día es hoy? – Es viernes.', de: 'Welcher Tag ist heute? – Freitag.' },
  ],

  exercises: [
    {
      id: 'mistake-ser-estar-e1',
      level: 'easy',
      instruction: '*ser* oder *estar*? Wähle.',
      tasks: [
        { type: 'choice', prompt: 'Mi hermano ___ médico.', options: ['es', 'está'], answer: 'es', reason: 'Beruf → **ser**.' },
        { type: 'choice', prompt: 'El médico ___ en el hospital.', options: ['está', 'es'], answer: 'está', reason: 'Ort → **estar**.' },
        { type: 'choice', prompt: 'Hoy ___ muy nervioso. (yo)', options: ['estoy', 'soy'], answer: 'estoy', reason: 'Zustand → **estar**.' },
        { type: 'choice', prompt: 'Vosotros ___ de Alemania.', options: ['sois', 'estáis'], answer: 'sois', reason: 'Herkunft → **ser**.' },
        { type: 'choice', prompt: 'La cena ___ lista. ¡A comer!', options: ['está', 'es'], answer: 'está', reason: '*listo* = fertig → **estar**.' },
        { type: 'choice', prompt: '___ las tres y cuarto.', options: ['Son', 'Están'], answer: 'Son', reason: 'Uhrzeit → **ser**.' },
        { type: 'choice', prompt: 'La boda ___ en una iglesia antigua.', options: ['es', 'está'], answer: 'es', reason: 'Veranstaltung → **ser**.' },
        { type: 'choice', prompt: 'Las ventanas ___ abiertas.', options: ['están', 'son'], answer: 'están', reason: 'Zustand → **estar**.' },
        { type: 'choice', prompt: 'Este coche ___ de mi tío.', options: ['es', 'está'], answer: 'es', reason: 'Besitz → **ser de**.' },
        { type: 'choice', prompt: '¿Dónde ___ los servicios?', options: ['están', 'son'], answer: 'están', reason: 'Ort → **estar**.' },
      ],
    },
    {
      id: 'mistake-ser-estar-e2',
      level: 'easy',
      instruction: 'Ordne zu: Warum *ser*, warum *estar*?',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['Soy de Graz.', 'Herkunft'],
            ['Estoy en Graz.', 'Ort'],
            ['Es simpática.', 'Charakter'],
            ['Está cansada.', 'Zustand'],
            ['Es lunes.', 'Wochentag'],
            ['La fiesta es aquí.', 'Veranstaltung'],
          ],
          reason: '*ser*: Herkunft, Charakter, Datum, Veranstaltung · *estar*: Ort, Zustand.',
        },
      ],
    },
    {
      id: 'mistake-ser-estar-m1',
      level: 'medium',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'Soy en la cocina.', answers: ['Estoy en la cocina.'], reason: 'Ort → **estar**.' },
        { type: 'fix', wrong: 'Estamos de Austria.', answers: ['Somos de Austria.'], reason: 'Herkunft → **ser**.' },
        { type: 'fix', wrong: 'Mi padre está ingeniero.', answers: ['Mi padre es ingeniero.'], reason: 'Beruf → **ser**.' },
        { type: 'fix', wrong: 'Hoy soy muy cansada.', answers: ['Hoy estoy muy cansada.'], reason: 'Zustand → **estar**.' },
        { type: 'fix', wrong: 'La fiesta está en casa de Lucía.', answers: ['La fiesta es en casa de Lucía.'], reason: 'Veranstaltung → **ser**.' },
        { type: 'fix', wrong: 'Hoy está miércoles.', answers: ['Hoy es miércoles.'], reason: 'Wochentag → **ser**.' },
        { type: 'fix', wrong: 'Mi café es frío, ¡qué asco!', answers: ['Mi café está frío, ¡qué asco!'], reason: 'Zustand (ist kalt geworden) → **estar**.' },
        { type: 'fix', wrong: 'Mis amigos son en el parque.', answers: ['Mis amigos están en el parque.'], reason: 'Ort → **estar**.' },
      ],
    },
    {
      id: 'mistake-ser-estar-m2',
      level: 'medium',
      instruction: 'Setze *ser* oder *estar* in der richtigen Form ein.',
      tasks: [
        { type: 'gap', text: 'Mi hermana ___ alta y rubia.', answers: ['es'], reason: 'Aussehen → **ser**.' },
        { type: 'gap', text: 'Hoy mi hermana ___ triste.', answers: ['está'], reason: 'Stimmung → **estar**.' },
        { type: 'gap', text: 'La paella ___ muy rica. ¡Qué buena!', answers: ['está'], reason: 'Geschmack → **estar rico**.' },
        { type: 'gap', text: 'Mi tío ___ muy rico: tiene tres casas.', answers: ['es'], reason: 'reich → **ser rico**.' },
        { type: 'gap', text: 'Nosotros ___ en clase de inglés.', answers: ['estamos'], reason: 'Ort → **estar**.' },
        { type: 'gap', text: 'El examen ___ el lunes.', answers: ['es'], reason: 'Termin, Veranstaltung → **ser**.' },
        { type: 'gap', text: 'Yo ___ aburrido: no tengo nada que hacer.', answers: ['estoy'], reason: '„mir ist langweilig“ → **estar aburrido**.' },
        { type: 'gap', text: '¿___ listo? Nos vamos.', hint: 'tú', answers: ['estás'], reason: 'fertig, bereit → **estar listo**.' },
      ],
    },
  ],
}

export default unit
