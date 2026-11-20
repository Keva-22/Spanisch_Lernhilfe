// Daten für die Zeitenübersicht (Zeitstrahl). units = zugehörige Einheiten (Link, sobald vorhanden).
import type { Example } from './types.ts'

export interface TenseInfo {
  id: string
  name: string
  group: 'past' | 'present' | 'future' | 'mood'
  use: string
  formation: string
  example: Example
  signals?: string
  units: string[]
}

export const tenseGroups: { id: TenseInfo['group']; title: string }[] = [
  { id: 'past', title: 'Vergangenheit' },
  { id: 'present', title: 'Gegenwart' },
  { id: 'future', title: 'Zukunft' },
  { id: 'mood', title: 'Modi & Condicional' },
]

export const tenses: TenseInfo[] = [
  {
    id: 'pluperfect',
    name: 'Pluscuamperfecto',
    group: 'past',
    use: 'Vorvergangenheit: passierte vor einer anderen Handlung in der Vergangenheit',
    formation: 'había, habías, había, habíamos, habíais, habían + Partizip',
    example: { es: 'Cuando llegué, la película ya había empezado.', de: 'Als ich ankam, hatte der Film schon begonnen.' },
    signals: 'ya, todavía no, antes, nunca antes',
    units: ['pluperfect'],
  },
  {
    id: 'preterite',
    name: 'Pretérito indefinido',
    group: 'past',
    use: 'abgeschlossene Handlung zu einem bestimmten Zeitpunkt, Handlungskette',
    formation: '-ar: -é, -aste, -ó, -amos, -asteis, -aron · -er/-ir: -í, -iste, -ió, -imos, -isteis, -ieron',
    example: { es: 'Ayer fui al cine.', de: 'Gestern bin ich ins Kino gegangen.' },
    signals: 'ayer, anoche, el año pasado, hace dos días, en 2020',
    units: ['preterite', 'past-tenses-contrast'],
  },
  {
    id: 'imperfect',
    name: 'Pretérito imperfecto',
    group: 'past',
    use: 'Beschreibung, Gewohnheit, Hintergrund in der Vergangenheit',
    formation: '-ar: -aba, -abas, -aba … · -er/-ir: -ía, -ías, -ía … (unregelmäßig nur ser, ir, ver)',
    example: { es: 'De pequeño jugaba mucho al fútbol.', de: 'Als Kind habe ich viel Fußball gespielt.' },
    signals: 'antes, siempre, todos los días, de pequeño, mientras',
    units: ['imperfect', 'past-tenses-contrast'],
  },
  {
    id: 'perfect',
    name: 'Pretérito perfecto',
    group: 'past',
    use: 'Vergangenes in einem Zeitraum, der noch andauert (heute, diese Woche …)',
    formation: 'he, has, ha, hemos, habéis, han + Partizip (-ado/-ido)',
    example: { es: 'Esta semana he estudiado mucho.', de: 'Diese Woche habe ich viel gelernt.' },
    signals: 'hoy, esta semana, este año, ya, todavía no, nunca, alguna vez',
    units: ['present-perfect', 'past-tenses-contrast'],
  },
  {
    id: 'present',
    name: 'Presente',
    group: 'present',
    use: 'Gegenwart, Gewohnheiten, allgemeine Aussagen',
    formation: '-ar: -o, -as, -a, -amos, -áis, -an · -er: -o, -es, -e, -emos, -éis, -en · -ir: -o, -es, -e, -imos, -ís, -en',
    example: { es: 'Vivo en Salzburgo.', de: 'Ich wohne in Salzburg.' },
    signals: 'normalmente, siempre, cada día, los lunes',
    units: ['present-regular', 'present-irregular', 'present-stem-change'],
  },
  {
    id: 'progressive',
    name: 'estar + Gerundio',
    group: 'present',
    use: 'Handlung, die gerade jetzt abläuft',
    formation: 'estoy, estás, está … + -ando / -iendo',
    example: { es: 'Ahora estoy leyendo un libro.', de: 'Gerade lese ich ein Buch.' },
    signals: 'ahora, en este momento',
    units: ['estar-gerund'],
  },
  {
    id: 'ir-a',
    name: 'ir a + Infinitiv',
    group: 'future',
    use: 'geplante, nahe Zukunft',
    formation: 'voy, vas, va, vamos, vais, van + a + Infinitiv',
    example: { es: 'Mañana voy a visitar a mi abuela.', de: 'Morgen besuche ich meine Oma.' },
    signals: 'mañana, esta tarde, el próximo fin de semana',
    units: ['ir-a-infinitive'],
  },
  {
    id: 'future',
    name: 'Futuro simple',
    group: 'future',
    use: 'Zukunft, Vorhersage, Versprechen, Vermutung',
    formation: 'Infinitiv + -é, -ás, -á, -emos, -éis, -án (tendr-, har-, dir- …)',
    example: { es: 'Algún día viajaré a Argentina.', de: 'Eines Tages werde ich nach Argentinien reisen.' },
    signals: 'el año que viene, en el futuro, algún día',
    units: ['future'],
  },
  {
    id: 'conditional',
    name: 'Condicional',
    group: 'mood',
    use: 'Höflichkeit, Wunsch, Ratschlag, Vermutung',
    formation: 'Infinitiv + -ía, -ías, -ía, -íamos, -íais, -ían (Stämme wie im Futuro)',
    example: { es: 'Me gustaría ir a México.', de: 'Ich würde gerne nach Mexiko fahren.' },
    units: ['conditional'],
  },
  {
    id: 'subjunctive',
    name: 'Presente de subjuntivo',
    group: 'mood',
    use: 'nach Wunsch, Gefühl, Zweifel, Aufforderung (… que), ojalá, para que',
    formation: 'Stamm der yo-Form + Gegenvokal: -ar → -e, -es … · -er/-ir → -a, -as …',
    example: { es: 'Quiero que vengas a mi fiesta.', de: 'Ich will, dass du zu meiner Party kommst.' },
    units: ['subjunctive-present', 'subjunctive-vs-indicative'],
  },
  {
    id: 'imperative',
    name: 'Imperativo',
    group: 'mood',
    use: 'Aufforderung, Bitte, Anleitung',
    formation: 'tú = 3. Person Presente (habla) · vosotros: -ad, -ed, -id · verneint: no + Subjuntivo',
    example: { es: '¡Abre la ventana, por favor!', de: 'Mach bitte das Fenster auf!' },
    units: ['imperative-affirmative', 'imperative-negative'],
  },
]
