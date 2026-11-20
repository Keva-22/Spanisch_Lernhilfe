import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'mistake-accents',
  title: 'Akzente richtig setzen',
  subtitle: 'él/el, tú/tu, qué/que, canción – canciones: wann ein Akzent steht',
  grade: 5,
  area: 'mistakes',
  cefr: 'A1',
  order: 16,
  prerequisites: ['present-regular'],
  keywords: ['Akzent', 'Betonung', 'Tilde', 'tilde', 'él', 'tú', 'Rechtschreibung', 'Fragewörter'],

  summary: [
    {
      type: 'table',
      caption: 'Betonungsregeln',
      head: ['Wort endet auf …', 'normal betont', 'sonst Akzent'],
      rows: [
        ['Vokal, -n, -s', 'vorletzte Silbe: *ca-sa, ha-blan, li-bros*', '*ca-fé, can-ción, in-glés*'],
        ['anderen Konsonanten', 'letzte Silbe: *ha-blar, ciu-dad, es-pa-ñol*', '*ár-bol, fá-cil, lá-piz*'],
        ['(drittletzte Silbe betont)', '–', 'immer: *mú-si-ca, sá-ba-do*'],
      ],
    },
    {
      type: 'table',
      caption: 'Gleiches Wort, andere Bedeutung',
      head: ['mit Akzent', 'ohne Akzent'],
      rows: [
        ['*él* – er', '*el* – der'],
        ['*tú* – du', '*tu* – dein'],
        ['*mí* – mir, mich', '*mi* – mein'],
        ['*sí* – ja', '*si* – wenn, ob'],
        ['*sé* – ich weiß', '*se* – sich'],
        ['*té* – Tee', '*te* – dir, dich'],
        ['*qué, cómo, dónde …* – Fragen', '*que, como, donde* – Nebensätze'],
      ],
    },
  ],

  explanation: [
    {
      title: 'Warum sind Akzente wichtig?',
      blocks: [
        {
          type: 'text',
          text: 'Der Akzent zeigt die **betonte Silbe** – und manchmal ändert er die Bedeutung: *hablo* (ich spreche) – *habló* (er sprach), *papa* (Kartoffel) – *papá* (Papa). In Schularbeiten und Tests zählt ein fehlender Akzent als Fehler.',
        },
      ],
    },
    {
      title: 'Die Betonungsregeln',
      blocks: [
        {
          type: 'list',
          items: [
            'Endet ein Wort auf **Vokal, -n oder -s**, wird es normalerweise auf der **vorletzten** Silbe betont: *casa, hablan, libros*.',
            'Endet es auf einen **anderen Konsonanten**, wird die **letzte** Silbe betont: *hablar, ciudad, español*.',
            'Weicht die Aussprache davon ab, steht ein **Akzent**: *café, canción, árbol, fácil*.',
            'Ist die **drittletzte** Silbe betont, steht **immer** ein Akzent: *música, sábado, matemáticas*.',
          ],
        },
      ],
    },
    {
      title: 'Akzent im Plural',
      blocks: [
        {
          type: 'text',
          text: 'Durch die Endung *-es* bekommt das Wort eine Silbe mehr – der Akzent kann wegfallen oder dazukommen: *canción → canciones, inglés → ingleses* (weg) · *examen → exámenes, joven → jóvenes, imagen → imágenes* (dazu).',
        },
      ],
    },
    {
      title: 'Fragewörter',
      blocks: [
        {
          type: 'text',
          text: 'Fragewörter tragen **immer** einen Akzent – auch in indirekten Fragen: *¿Dónde vives? – No sé dónde vive.* Ohne Akzent als Verbindungswort: *La ciudad donde vivo es pequeña.*',
        },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        { type: 'tip', text: '**Vokal, n oder s am Ende → vorletzte Silbe.** Klingt das Wort anders, kommt ein Akzent darauf.' },
        {
          type: 'tip',
          text: 'Einsilbige Wörter haben **keinen** Akzent – außer zur Unterscheidung (*él/el, tú/tu, sí/si, sé/se, té/te*): *fui, dio, vio, pie, bien*.',
        },
      ],
    },
  ],

  examples: [
    { es: 'Él tiene tu libro.', de: 'Er hat dein Buch.' },
    { es: '¿Quieres un té? – Sí, gracias.', de: 'Willst du einen Tee? – Ja, danke.' },
    { es: 'Para mí, la música es muy importante.', de: 'Für mich ist Musik sehr wichtig.' },
    { es: 'No sé qué hora es.', de: 'Ich weiß nicht, wie spät es ist.' },
    { es: 'Mi canción favorita es de un grupo inglés.', de: 'Mein Lieblingslied ist von einer englischen Band.' },
    { es: 'El sábado tenemos un examen de matemáticas.', de: 'Am Samstag haben wir eine Mathe-Prüfung.' },
  ],

  exercises: [
    {
      id: 'mistake-accents-e1',
      level: 'easy',
      instruction: 'Mit oder ohne Akzent? Wähle.',
      tasks: [
        { type: 'choice', prompt: '___ es mi hermano.', options: ['Él', 'El'], answer: 'Él', reason: '„er“ → **él** (mit Akzent).' },
        { type: 'choice', prompt: '___ libro está en la mesa.', options: ['El', 'Él'], answer: 'El', reason: 'Artikel „der“ → **el** (ohne Akzent).' },
        { type: 'choice', prompt: '¿Dónde está ___ mochila?', options: ['tu', 'tú'], answer: 'tu', reason: '„dein“ → **tu**.' },
        { type: 'choice', prompt: '___ eres muy simpático.', options: ['Tú', 'Tu'], answer: 'Tú', reason: '„du“ → **tú**.' },
        { type: 'choice', prompt: 'Este regalo es para ___.', options: ['mí', 'mi'], answer: 'mí', reason: 'nach Präposition „mir/mich“ → **mí**.' },
        { type: 'choice', prompt: '¿Quieres venir? – ___, claro.', options: ['Sí', 'Si'], answer: 'Sí', reason: '„ja“ → **sí**.' },
        { type: 'choice', prompt: '___ tengo tiempo, voy al cine.', options: ['Si', 'Sí'], answer: 'Si', reason: '„wenn“ → **si**.' },
        { type: 'choice', prompt: 'No ___ la respuesta.', options: ['sé', 'se'], answer: 'sé', reason: '„ich weiß“ → **sé**.' },
        { type: 'choice', prompt: '¿___ hora es?', options: ['Qué', 'Que'], answer: 'Qué', reason: 'Fragewort → **qué**.' },
        { type: 'choice', prompt: 'Creo ___ tienes razón.', options: ['que', 'qué'], answer: 'que', reason: 'Verbindungswort „dass“ → **que**.' },
      ],
    },
    {
      id: 'mistake-accents-e2',
      level: 'easy',
      instruction: 'Ordne zu: Was bedeutet das Wort?',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['él', 'er'],
            ['el', 'der'],
            ['tú', 'du'],
            ['tu', 'dein'],
            ['sí', 'ja'],
            ['si', 'wenn'],
          ],
          reason: 'Der Akzent unterscheidet gleich klingende Wörter.',
        },
        {
          type: 'match',
          pairs: [
            ['té', 'Tee'],
            ['te', 'dir, dich'],
            ['sé', 'ich weiß'],
            ['se', 'sich'],
            ['mí', 'mir (nach Präposition)'],
            ['mi', 'mein'],
          ],
          reason: 'Einsilbige Wörter bekommen nur zur Unterscheidung einen Akzent.',
        },
      ],
    },
    {
      id: 'mistake-accents-m1',
      level: 'medium',
      instruction: 'Bilde den Plural bzw. ergänze das Fragewort – achte auf den Akzent!',
      tasks: [
        { type: 'gap', text: 'la canción → las ___', answers: ['canciones'], reason: '+ es → Akzent fällt weg: *canciones*.' },
        { type: 'gap', text: 'el examen → los ___', answers: ['exámenes'], reason: '+ es → drittletzte Silbe betont → Akzent: *exámenes*.' },
        { type: 'gap', text: 'el joven → los ___', answers: ['jóvenes'], reason: '+ es → Akzent kommt dazu: *jóvenes*.' },
        { type: 'gap', text: 'el autobús → los ___', answers: ['autobuses'], reason: '+ es → Akzent fällt weg: *autobuses*.' },
        { type: 'gap', text: 'el francés → los ___', answers: ['franceses'], reason: '+ es → Akzent fällt weg: *franceses*.' },
        { type: 'gap', text: 'la lección → las ___', answers: ['lecciones'], reason: '+ es → Akzent fällt weg: *lecciones*.' },
        { type: 'gap', text: 'el jardín → los ___', answers: ['jardines'], reason: '+ es → Akzent fällt weg: *jardines*.' },
        { type: 'gap', text: 'la imagen → las ___', answers: ['imágenes'], reason: '+ es → Akzent kommt dazu: *imágenes*.' },
        { type: 'gap', text: 'No sé ___ vive Ana.', hint: 'wo', answers: ['dónde'], reason: 'Indirekte Frage → Fragewort mit Akzent: **dónde**.' },
        { type: 'gap', text: '¿___ te llamas?', hint: 'wie', answers: ['cómo'], reason: 'Fragewort → **cómo**.' },
      ],
    },
    {
      id: 'mistake-accents-m2',
      level: 'medium',
      instruction: 'In jedem Satz fehlt ein Akzent oder steht einer zu viel. Korrigiere.',
      tasks: [
        { type: 'fix', wrong: '¿Donde vives?', answers: ['¿Dónde vives?'], reason: 'Fragewort → **dónde**.' },
        { type: 'fix', wrong: 'Tu eres mi mejor amigo.', answers: ['Tú eres mi mejor amigo.'], reason: '„du“ → **tú**.' },
        { type: 'fix', wrong: 'Este regalo es para mi.', answers: ['Este regalo es para mí.'], reason: 'nach Präposition → **mí**.' },
        { type: 'fix', wrong: 'Tengo dos examenes mañana.', answers: ['Tengo dos exámenes mañana.'], reason: 'Plural → **exámenes**.' },
        { type: 'fix', wrong: 'Las canciónes son muy bonitas.', answers: ['Las canciones son muy bonitas.'], reason: 'Plural → **canciones** (ohne Akzent).' },
        { type: 'fix', wrong: 'El sabado vamos al cine.', answers: ['El sábado vamos al cine.'], reason: 'drittletzte Silbe betont → **sábado**.' },
        { type: 'fix', wrong: '¿Quieres un te?', answers: ['¿Quieres un té?'], reason: '„Tee“ → **té**.' },
        { type: 'fix', wrong: 'El es de Madrid.', answers: ['Él es de Madrid.'], reason: '„er“ → **él**.' },
        { type: 'fix', wrong: 'Me gusta la musica.', answers: ['Me gusta la música.'], reason: 'drittletzte Silbe betont → **música**.' },
      ],
    },
  ],
}

export default unit
