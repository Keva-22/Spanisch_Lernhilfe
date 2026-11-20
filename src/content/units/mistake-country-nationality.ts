import type { Unit } from '../types.ts'

const unit: Unit = {
  id: 'mistake-country-nationality',
  title: 'Land, Nationalität, Sprache',
  subtitle: 'España – español – el español: Länder groß, Nationalitäten und Sprachen klein',
  grade: 5,
  area: 'mistakes',
  cefr: 'A1',
  order: 15,
  prerequisites: ['adjectives'],
  keywords: ['Land', 'Nationalität', 'Sprache', 'Länder', 'Großschreibung', 'Kleinschreibung', 'español', 'austriaco', 'alemán'],

  summary: [
    {
      type: 'table',
      caption: 'falsch → richtig',
      head: ['falsch', 'richtig', 'warum?'],
      rows: [
        ['~~Soy de español.~~', '*Soy de España.*', '*de* + Land'],
        ['~~Soy España.~~', '*Soy español / española.*', '*ser* + Nationalität'],
        ['~~Hablo Español.~~', '*Hablo español.*', 'Sprachen klein'],
        ['~~Es Austriaca.~~', '*Es austriaca.*', 'Nationalitäten klein'],
        ['~~una chica alemán~~', '*una chica alemana*', 'Nationalität angleichen'],
      ],
    },
    {
      type: 'table',
      caption: 'Länder, Nationalitäten, Sprachen',
      head: ['Land', 'Nationalität (m. / w.)', 'Sprache'],
      rows: [
        ['Austria', 'austriaco / austriaca', 'alemán'],
        ['Alemania', 'alemán / alemana', 'alemán'],
        ['Suiza', 'suizo / suiza', 'alemán, francés, italiano'],
        ['España', 'español / española', 'español'],
        ['Francia', 'francés / francesa', 'francés'],
        ['Italia', 'italiano / italiana', 'italiano'],
        ['Inglaterra', 'inglés / inglesa', 'inglés'],
        ['Chequia', 'checo / checa', 'checo'],
        ['México', 'mexicano / mexicana', 'español'],
        ['Estados Unidos', 'estadounidense', 'inglés'],
      ],
    },
  ],

  explanation: [
    {
      title: 'Land oder Nationalität?',
      blocks: [
        {
          type: 'text',
          text: 'Das **Land** ist ein Name (groß): *España, Austria*. Die **Nationalität** ist ein Adjektiv (klein, wird angeglichen): *español, española, españoles*. Die **Sprache** ist meist die männliche Form der Nationalität (klein): *el español, el alemán*.',
        },
        {
          type: 'list',
          items: [
            '*Soy de Austria.* – Ich komme aus Österreich. (*de* + Land)',
            '*Soy austriaco / austriaca.* – Ich bin Österreicher/in. (*ser* + Nationalität)',
            '*Hablo alemán.* – Ich spreche Deutsch. (Sprache)',
          ],
        },
        { type: 'text', text: 'Beide Schreibweisen sind richtig: *austriaco* und *austríaco*.' },
      ],
    },
    {
      title: 'Groß oder klein?',
      blocks: [
        {
          type: 'warning',
          text: 'Nationalitäten, Sprachen, Wochentage und Monate schreibt man im Spanischen **klein**: *español, alemán, lunes, enero*. Groß schreibt man nur Länder und Städte: *España, Viena*.',
        },
      ],
    },
    {
      title: 'Angleichung',
      blocks: [
        {
          type: 'text',
          text: 'Nationalitäten passen sich an: *un chico alemán – una chica alemana – unos chicos alemanes – unas chicas alemanas*. Bei *-és* und *-án* fällt der Akzent in den anderen Formen weg: *francés – francesa – franceses*.',
        },
        { type: 'text', text: 'Nationalitäten auf *-a* oder *-e* haben nur eine Form für m. und w.: *belga, estadounidense*.' },
      ],
    },
    {
      title: 'Merkhilfe',
      blocks: [
        { type: 'tip', text: '**de + Land, ser + Nationalität**: *Soy de Austria. Soy austriaca.*' },
        { type: 'tip', text: '**Klein ist alles** außer Ländern und Städten.' },
      ],
    },
  ],

  examples: [
    { es: 'Soy de Austria, pero mi madre es española.', de: 'Ich komme aus Österreich, aber meine Mutter ist Spanierin.' },
    { es: 'En Suiza se hablan cuatro idiomas.', de: 'In der Schweiz spricht man vier Sprachen.' },
    { es: 'Mis amigas son italianas.', de: 'Meine Freundinnen sind Italienerinnen.' },
    { es: '¿Hablas francés? – Sí, un poco.', de: 'Sprichst du Französisch? – Ja, ein bisschen.' },
    { es: 'Los alemanes y los austriacos hablan alemán.', de: 'Die Deutschen und die Österreicher sprechen Deutsch.' },
    { es: 'Viena es la capital de Austria.', de: 'Wien ist die Hauptstadt Österreichs.' },
  ],

  exercises: [
    {
      id: 'mistake-country-nationality-e1',
      level: 'easy',
      instruction: 'Ordne zu: zuerst links antippen, dann rechts.',
      tasks: [
        {
          type: 'match',
          pairs: [
            ['España', 'español'],
            ['Austria', 'austriaco'],
            ['Alemania', 'alemán'],
            ['Francia', 'francés'],
            ['Italia', 'italiano'],
            ['Inglaterra', 'inglés'],
          ],
          reason: 'Land (groß) → Nationalität (klein).',
        },
        {
          type: 'match',
          pairs: [
            ['alemán', 'alemana'],
            ['francés', 'francesa'],
            ['español', 'española'],
            ['austriaco', 'austriaca'],
            ['inglés', 'inglesa'],
            ['checo', 'checa'],
          ],
          reason: 'Weibliche Form auf -a; bei -és/-án fällt der Akzent weg.',
        },
        {
          type: 'match',
          pairs: [
            ['España', 'Land → groß'],
            ['española', 'Nationalität → klein'],
            ['el alemán', 'Sprache → klein'],
            ['lunes', 'Wochentag → klein'],
            ['Viena', 'Stadt → groß'],
            ['enero', 'Monat → klein'],
          ],
          reason: 'Im Spanischen schreibt man nur Namen (Länder, Städte, Personen) groß.',
        },
      ],
    },
    {
      id: 'mistake-country-nationality-e2',
      level: 'easy',
      instruction: 'Land, Nationalität oder Sprache? Wähle.',
      tasks: [
        { type: 'choice', prompt: 'Soy de ___.', options: ['Austria', 'austriaco', 'austriaca'], answer: 'Austria', reason: '*de* + **Land**.' },
        { type: 'choice', prompt: 'Mi madre es ___.', options: ['italiana', 'Italia', 'italiano'], answer: 'italiana', reason: '*ser* + Nationalität, weiblich: **italiana**.' },
        { type: 'choice', prompt: 'Hablamos ___ en casa.', options: ['alemán', 'Alemania', 'alemana'], answer: 'alemán', reason: 'Sprache = männliche Form: **alemán**.' },
        { type: 'choice', prompt: 'Pierre es ___.', options: ['francés', 'Francia', 'francesa'], answer: 'francés', reason: 'Mann → **francés**.' },
        { type: 'choice', prompt: 'Mis primas son ___.', options: ['españolas', 'españoles', 'España'], answer: 'españolas', reason: 'weiblich Plural → **españolas**.' },
        { type: 'choice', prompt: 'Vivimos en ___.', options: ['Suiza', 'suizo', 'suizos'], answer: 'Suiza', reason: '*en* + **Land**.' },
        { type: 'choice', prompt: 'Mi padre es de ___.', options: ['Chequia', 'checo', 'checa'], answer: 'Chequia', reason: '*de* + **Land**.' },
        {
          type: 'choice',
          prompt: 'Las chicas ___ son muy simpáticas.',
          options: ['inglesas', 'ingleses', 'Inglaterra'],
          answer: 'inglesas',
          reason: 'Nationalität nach dem Nomen, weiblich Plural: **inglesas**.',
        },
      ],
    },
    {
      id: 'mistake-country-nationality-m1',
      level: 'medium',
      instruction: 'In jedem Satz steckt genau ein Fehler. Korrigiere ihn.',
      tasks: [
        { type: 'fix', wrong: 'Soy de español.', answers: ['Soy de España.', 'Soy español.'], reason: '*de* + **Land** (oder *ser* + Nationalität).' },
        { type: 'fix', wrong: 'Mi amiga es Italia.', answers: ['Mi amiga es italiana.', 'Mi amiga es de Italia.'], reason: '*ser* + **Nationalität** (oder *ser de* + Land).' },
        { type: 'fix', wrong: 'Mi profesora es alemán.', answers: ['Mi profesora es alemana.'], reason: 'Frau → **alemana**.' },
        { type: 'fix', wrong: 'Ana y María son españoles.', answers: ['Ana y María son españolas.'], reason: 'zwei Frauen → **españolas**.' },
        { type: 'fix', wrong: 'Venimos de alemán.', answers: ['Venimos de Alemania.'], reason: '*de* + **Land**.' },
        {
          type: 'fix',
          wrong: 'Mi abuelo es de austriaco.',
          answers: ['Mi abuelo es austriaco.', 'Mi abuelo es austríaco.', 'Mi abuelo es de Austria.'],
          reason: 'Nationalität ohne *de* – oder *de* + Land.',
        },
        { type: 'fix', wrong: 'Los chicos son francesas.', answers: ['Los chicos son franceses.'], reason: 'männlich Plural → **franceses**.' },
        { type: 'fix', wrong: 'Mi madre habla muy bien Italia.', answers: ['Mi madre habla muy bien italiano.'], reason: 'Sprache → **italiano**, nicht das Land.' },
        { type: 'fix', wrong: 'Unas chicas inglés viven aquí.', answers: ['Unas chicas inglesas viven aquí.'], reason: 'weiblich Plural → **inglesas**.' },
      ],
    },
    {
      id: 'mistake-country-nationality-m2',
      level: 'medium',
      instruction: 'Ergänze Land, Nationalität oder Sprache.',
      tasks: [
        { type: 'gap', text: 'Hans es de Alemania. Es ___.', answers: ['alemán'], reason: 'Mann aus Deutschland → **alemán**.' },
        { type: 'gap', text: 'Marie es de Francia. Es ___.', answers: ['francesa'], reason: 'Frau aus Frankreich → **francesa**.' },
        { type: 'gap', text: 'Paul y Max son de Austria. Son ___.', answers: ['austriacos', 'austríacos'], reason: 'männlich Plural → **austriacos**.' },
        { type: 'gap', text: 'Giulia es de ___. Es italiana.', answers: ['Italia'], reason: '*de* + **Land**.' },
        { type: 'gap', text: 'En México se habla ___.', answers: ['español'], reason: 'Sprache → **español**.' },
        { type: 'gap', text: 'Petra y Jana son de Chequia. Son ___.', answers: ['checas'], reason: 'weiblich Plural → **checas**.' },
        { type: 'gap', text: 'John es de Inglaterra. Habla ___.', answers: ['inglés'], reason: 'Sprache → **inglés**.' },
        { type: 'gap', text: 'Laura y Carmen son de España. Son ___.', answers: ['españolas'], reason: 'weiblich Plural → **españolas**.' },
      ],
    },
  ],
}

export default unit
