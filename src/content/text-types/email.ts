import type { TextType } from '../types.ts'

const textType: TextType = {
  id: 'email',
  title: 'E-Mail',
  grade: 6,
  cefr: 'A2/B1',
  order: 1,
  description:
    'Persönliche E-Mail an Freund:innen oder halbformelle E-Mail (z. B. an eine Gastfamilie oder Sprachschule). Typische Aufgabe: auf eine Nachricht antworten und dabei drei bis vier vorgegebene Punkte bearbeiten.',
  structure: [
    {
      part: 'Betreff & Anrede',
      tip: 'Informell: *¡Hola, Lucía!* oder *Querida Lucía:* · Halbformell: *Estimada señora Pérez:* – nach der Anrede steht im Spanischen meist ein **Doppelpunkt**, danach geht es mit Großbuchstaben weiter.',
      phrases: [
        { es: 'Asunto: Mi viaje a Salzburgo', de: 'Betreff: Meine Reise nach Salzburg' },
        { es: '¡Hola, Lucía! / Querida Lucía:', de: 'Hallo Lucía! / Liebe Lucía,' },
        { es: 'Estimada señora Pérez:', de: 'Sehr geehrte Frau Pérez,' },
        { es: 'Estimados señores:', de: 'Sehr geehrte Damen und Herren,' },
      ],
    },
    {
      part: 'Einleitung',
      tip: 'Kurz auf die erhaltene Nachricht eingehen oder den Grund des Schreibens nennen.',
      phrases: [
        { es: 'Muchas gracias por tu correo.', de: 'Vielen Dank für deine E-Mail.' },
        { es: '¿Qué tal estás? Yo estoy muy bien.', de: 'Wie geht es dir? Mir geht es sehr gut.' },
        { es: 'Perdona por no escribirte antes.', de: 'Entschuldige, dass ich dir nicht früher geschrieben habe.' },
        { es: 'Te escribo porque …', de: 'Ich schreibe dir, weil …' },
        { es: 'Le escribo para pedirle información sobre …', de: 'Ich schreibe Ihnen, um Sie um Informationen über … zu bitten.' },
      ],
    },
    {
      part: 'Hauptteil: die Punkte der Aufgabe',
      tip: 'Bearbeite **alle** Punkte der Angabe, jeden in einem eigenen Absatz. Verbinde die Sätze mit Konnektoren (siehe unten).',
      phrases: [
        { es: 'Primero quería contarte que …', de: 'Zuerst wollte ich dir erzählen, dass …' },
        { es: 'Además, …', de: 'Außerdem …' },
        { es: 'Por cierto, ¿sabes que …?', de: 'Übrigens, weißt du, dass …?' },
        { es: 'Me gustaría saber si …', de: 'Ich würde gerne wissen, ob …' },
        { es: '¿Podrías decirme …?', de: 'Könntest du mir sagen …?' },
      ],
    },
    {
      part: 'Schluss & Gruß',
      tip: 'Zum Antworten auffordern, Grußformel, Name. Informell und halbformell nicht mischen!',
      phrases: [
        { es: 'Escríbeme pronto.', de: 'Schreib mir bald.' },
        { es: 'Espero tu respuesta.', de: 'Ich freue mich auf deine Antwort.' },
        { es: 'Un abrazo / Besos', de: 'Liebe Grüße / Bussi (informell)' },
        { es: 'Saludos cordiales', de: 'Herzliche Grüße (halbformell)' },
        { es: 'Atentamente', de: 'Mit freundlichen Grüßen (formell)' },
      ],
    },
  ],
  phrases: [
    {
      title: 'Konnektoren',
      items: [
        { es: 'y / pero / porque', de: 'und / aber / weil' },
        { es: 'también / tampoco', de: 'auch / auch nicht' },
        { es: 'primero … luego … al final', de: 'zuerst … dann … am Schluss' },
        { es: 'además', de: 'außerdem' },
        { es: 'por eso', de: 'deshalb' },
        { es: 'sin embargo', de: 'allerdings, jedoch' },
        { es: 'Como llovía, nos quedamos en casa.', de: 'Da es regnete, blieben wir zu Hause. (como am Satzanfang = da)' },
      ],
    },
    {
      title: 'Höfliche Bitten & Fragen',
      items: [
        { es: '¿Me podrías mandar unas fotos?', de: 'Könntest du mir ein paar Fotos schicken?' },
        { es: 'Me gustaría + Infinitiv', de: 'Ich würde gerne …' },
        { es: '¿Sería posible …?', de: 'Wäre es möglich, …?' },
      ],
    },
  ],
  model: {
    task: 'Deine spanische Brieffreundin Lucía aus Valencia fragt, wie deine Semesterferien waren. Schreib ihr eine E-Mail (ca. 120 Wörter): Erzähle, wohin du gefahren bist und was du gemacht hast, wie es dir gefallen hat, und frag sie nach ihren Plänen für den Sommer.',
    text: [
      'Asunto: Mis vacaciones de esquí',
      '¡Hola, Lucía!',
      'Muchas gracias por tu correo. ¿Qué tal estás? Yo estoy muy bien, pero un poco cansado porque ayer volvimos de vacaciones.',
      'En las vacaciones de febrero fui con mi familia a esquiar al Tirol. Viajamos en tren y nos alojamos en un hotel pequeño en las montañas. Todos los días esquiábamos desde las nueve hasta las cuatro. Un día hicimos una excursión a un lago precioso. ¡El paisaje era increíble!',
      'Me gustaron mucho las vacaciones, sobre todo la nieve y la comida típica. Sin embargo, el último día me caí y me hice daño en la rodilla.',
      'Y tú, ¿qué vas a hacer este verano? ¿Vas a viajar? Escríbeme pronto.',
      'Un abrazo,',
      'Jakob',
    ].join('\n'),
    de: [
      'Betreff: Mein Skiurlaub',
      'Hallo Lucía!',
      'Vielen Dank für deine E-Mail. Wie geht es dir? Mir geht es sehr gut, aber ich bin ein bisschen müde, weil wir gestern aus dem Urlaub zurückgekommen sind.',
      'In den Semesterferien bin ich mit meiner Familie zum Skifahren nach Tirol gefahren. Wir sind mit dem Zug gefahren und haben in einem kleinen Hotel in den Bergen gewohnt. Jeden Tag sind wir von neun bis vier Ski gefahren. Einmal haben wir einen Ausflug zu einem wunderschönen See gemacht. Die Landschaft war unglaublich!',
      'Der Urlaub hat mir sehr gut gefallen, vor allem der Schnee und das typische Essen. Allerdings bin ich am letzten Tag gestürzt und habe mir am Knie wehgetan.',
      'Und du, was machst du diesen Sommer? Fährst du weg? Schreib mir bald.',
      'Liebe Grüße',
      'Jakob',
    ].join('\n'),
  },
  checklist: [
    'Habe ich **alle Punkte** der Aufgabe bearbeitet?',
    'Passen Anrede und Gruß zusammen (informell **oder** halbformell)?',
    'Gibt es Absätze und Konnektoren (*además, por eso, sin embargo*)?',
    'Vergangenheit richtig? Zeitpunkt/abgeschlossen → Indefinido · Beschreibung/Gewohnheit → Imperfecto',
    'Akzente, ¿ und ¡ am Satzanfang, Angleichung der Adjektive geprüft?',
    'Wortanzahl ungefähr eingehalten?',
  ],
}

export default textType
