# Spanisch-Lernhilfe – Plan

Statische Lern-Website (Vite + React + TypeScript) für Spanisch an der AHS-Oberstufe (2. lebende Fremdsprache ab der 5. Klasse, Ziel B1 zur Matura). Stoff der 5.–7. Klasse, Spanien-Spanisch inkl. *vosotros*. Klasse 8 lässt sich später ohne Umbau ergänzen.

- **Niveaus** (Orientierung am österr. Lehrplan): 5. Kl. A1 · 6. Kl. A2 · 7. Kl. A2+/B1 · (8. Kl. B1)
- **Bereiche:** ZM = Zeiten & Modi · GR = Weitere Grammatik · TF = Typische Fehler · Vokabeln = Wortfelder (Abschnitt 2)
- **Reihenfolge:** Nr. = Lern- und Bau-Reihenfolge innerhalb der Klasse; „Voraussetzungen" verweist auf Nr.
- **Status:** ☐ offen · 🧪 Pilot (Phase 2) · ✅ fertig
- **Ergänzung** = von mir vorgeschlagen, über den Auftrag hinaus – bei Bedarf streichen.
- Sobald eigene Unterlagen in `materialien/` liegen, passe ich Reihenfolge, Schwerpunkte und Wortlisten daran an.
- **Freigegeben:** Bau-Reihenfolge 5 → 6 → 7 · alle drei Extras · Push nach jeder Phase/Einheit · Deploy automatisch bei jedem Push (nach Phase 2) · Pilot abgenommen.

## 1. Einheiten

### 5. Klasse – A1

| Nr. | Einheit (Inhalt) | Bereich | GERS | Voraussetzungen | ID | Status |
|---|---|---|---|---|---|---|
| 5.1 | Artikel & Nomen: Genus, Plural, *al/del* | GR | A1 | – | `articles-nouns` | ✅ |
| 5.2 | Presente – regelmäßige Verben (-ar/-er/-ir), Subjektpronomen, *tú/usted* | ZM | A1 | – | `present-regular` | ✅ |
| 5.3 | *ser*, *estar* & *hay* (inkl. Ortsangaben) | GR | A1 | 5.1, 5.2 | `ser-estar-hay` | ✅ |
| 5.4 | Adjektive: Angleichung & Stellung (inkl. *buen, gran*) | GR | A1 | 5.1, 5.3 | `adjectives` | ✅ |
| 5.5 | Presente – unregelmäßige Verben (*ir, tener, venir, decir*; *hago, pongo, salgo, conozco …*) | ZM | A1 | 5.2 | `present-irregular` | ✅ |
| 5.6 | Presente – Stammwechsel (e→ie, o→ue, e→i, u→ue) | ZM | A1 | 5.2, 5.5 | `present-stem-change` | ✅ |
| 5.7 | Reflexive Verben & Tagesablauf | GR | A1 | 5.2, 5.6 | `reflexive-verbs` | ✅ |
| 5.8 | *gustar* & Co. (*encantar, interesar, doler, parecer*; *también/tampoco*) | GR | A1 | 5.1, 5.2 | `gustar` | ✅ |
| 5.9 | Possessiv- & Demonstrativbegleiter (*mi, nuestro …*; *este, ese, aquel*) | GR | A1 | 5.4 | `possessives-demonstratives` | ✅ |
| 5.10 | Fragen & Verneinung (Fragewörter, *qué/cuál*, *no … nada/nunca/nadie*) | GR | A1 | 5.2 | `questions-negation` | ✅ |
| 5.11 | *ir a* + Infinitiv (+ *tener que, hay que, poder/querer* + Infinitiv) | ZM | A1 | 5.5, 5.6 | `ir-a-infinitive` | ✅ |
| 5.12 | *estar* + Gerundio (inkl. *leyendo, durmiendo*) | ZM | A1 | 5.3, 5.6 | `estar-gerund` | ✅ |
| 5.13 | *ser* oder *estar*? | TF | A1 | 5.3 | `mistake-ser-estar` | ✅ |
| 5.14 | Genus- & Numerus-Angleichung (*el problema, la gente es …*) | TF | A1 | 5.4 | `mistake-agreement` | ✅ |
| 5.15 | Land, Nationalität, Sprache (*España – español*, Kleinschreibung) | TF | A1 | 5.4 | `mistake-country-nationality` | ☐ |
| 5.16 | Akzente richtig setzen (*él/el, tú/tu, qué/que, canción – canciones*) – **Ergänzung** | TF | A1 | 5.2 | `mistake-accents` | ☐ |

### 6. Klasse – A2

| Nr. | Einheit (Inhalt) | Bereich | GERS | Voraussetzungen | ID | Status |
|---|---|---|---|---|---|---|
| 6.1 | Pretérito perfecto & Partizip (*he hablado*; *hecho, dicho, visto …*) | ZM | A2 | 5.2, 5.5 | `present-perfect` | ☐ |
| 6.2 | Pretérito indefinido (regelmäßig, unregelmäßig, Stammwechsel, Orthografie) | ZM | A2 | 5.5, 5.6 | `preterite` | ✅ |
| 6.3 | Pretérito imperfecto | ZM | A2 | 6.2 | `imperfect` | ☐ |
| 6.4 | Indefinido vs. Imperfecto vs. Perfecto (+ Entscheidungs-Checkliste) | ZM | A2/B1 | 6.1–6.3 | `past-tenses-contrast` | ☐ |
| 6.5 | Objektpronomen direkt & indirekt (*lo/la/le, se lo*, Stellung, *conmigo*) | GR | A2 | 5.7, 5.8 | `object-pronouns` | ☐ |
| 6.6 | Komparativ & Superlativ (*más … que, tan … como, el más, -ísimo, mejor/peor*) | GR | A2 | 5.4 | `comparison` | ☐ |
| 6.7 | Adverbien: *-mente*, *muy/mucho*, *bien/bueno* | GR | A2 | 5.4 | `adverbs` | ☐ |
| 6.8 | Indefinitbegleiter & -pronomen (*algo/nada, alguien/nadie, algún/ningún, todo, otro*) | GR | A2 | 5.10 | `indefinites` | ☐ |
| 6.9 | Imperativo bejaht (*tú, vosotros, usted, ustedes* + angehängte Pronomen) | ZM | A2 | 5.5, 5.6, 6.5 | `imperative-affirmative` | ☐ |
| 6.10 | Personal-„a" (*Veo a mi madre.*) | TF | A2 | 6.5 | `mistake-personal-a` | ☐ |
| 6.11 | Unregelmäßige Verbformen (Presente, Indefinido, Partizip) | TF | A2 | 6.1, 6.2 | `mistake-irregular-forms` | ☐ |
| 6.12 | „seit" und „vor" (*desde hace* + Presente, *hace* + Zeitangabe) – **Ergänzung** | TF | A2 | 6.1, 6.2 | `mistake-since-ago` | ☐ |

### 7. Klasse – A2+/B1

| Nr. | Einheit (Inhalt) | Bereich | GERS | Voraussetzungen | ID | Status |
|---|---|---|---|---|---|---|
| 7.1 | Futuro simple (+ Bedingungssatz Typ I: *si* + Presente) | ZM | A2/B1 | 5.11 | `future` | ☐ |
| 7.2 | Condicional (Höflichkeit, Wunsch, Rat, Vermutung) | ZM | B1 | 7.1 | `conditional` | ☐ |
| 7.3 | Pretérito pluscuamperfecto | ZM | B1 | 6.1, 6.4 | `pluperfect` | ☐ |
| 7.4 | Presente de subjuntivo: Bildung + Auslöser (Wunsch, Gefühl, Zweifel, unpersönliche Ausdrücke, *ojalá, para que, cuando* + Zukunft) | ZM | B1 | 5.5, 5.6, 6.9 | `subjunctive-present` | ☐ |
| 7.5 | Subjuntivo vs. Indicativo (+ Entscheidungs-Checkliste) | ZM | B1 | 7.4 | `subjunctive-vs-indicative` | ☐ |
| 7.6 | Imperativo verneint (alle Personen, Stellung der Pronomen) | ZM | B1 | 6.9, 7.4 | `imperative-negative` | ☐ |
| 7.7 | Verbalperiphrasen (*acabar de, volver a, dejar de, seguir/llevar* + Gerundio, *soler*) | ZM | A2/B1 | 5.11, 5.12 | `verb-periphrases` | ☐ |
| 7.8 | *por* vs. *para* (+ Entscheidungs-Checkliste) | GR | A2/B1 | – | `por-para` | ☐ |
| 7.9 | Relativpronomen (*que, donde, lo que, el/la que, quien*) | GR | B1 | 5.1 | `relative-pronouns` | ☐ |

**Ausblick 8. Klasse** (nicht Teil des Auftrags): Imperfecto de subjuntivo, irreale Bedingungssätze, indirekte Rede, Passiv & unpersönliches *se*, Futuro perfecto / Condicional perfecto.

**Umfang:** 30 Grammatik- + 7 Fehler-Einheiten (gesamt 37).

## 2. Wortfelder (30–50 Wörter je Feld)

| Nr. | Wortfeld | Klasse | GERS | ≈ Wörter | passt zu | ID | Status |
|---|---|---|---|---|---|---|---|
| W5.1 | Erste Kontakte: Begrüßung, Länder & Sprachen | 5 | A1 | 40 | 5.2, 5.15 | `first-contacts` | ☐ |
| W5.2 | Familie, Aussehen & Charakter | 5 | A1 | 40 | 5.4, 5.9 | `family-people` | ☐ |
| W5.3 | Zahlen, Datum & Uhrzeit | 5 | A1 | 40 | 5.3 | `numbers-time` | ☐ |
| W5.4 | Schule & Tagesablauf | 5 | A1 | 40 | 5.7 | `school-routine` | ☐ |
| W5.5 | Freizeit & Sport | 5 | A1 | 40 | 5.6, 5.8 | `free-time-sports` | ☐ |
| W5.6 | Wohnen & Stadt | 5 | A1 | 40 | 5.3 | `home-town` | ☐ |
| W5.7 | Essen & Trinken | 5 | A1 | 40 | 5.8, 5.11 | `food-drink` | ☐ |
| W6.1 | Reisen & Tourismus (inkl. Wetter) | 6 | A2 | 50 | 6.2 | `travel-tourism` | ✅ |
| W6.2 | Medien & Technologie | 6 | A2 | 45 | 6.1 | `media-technology` | ☐ |
| W6.3 | Einkaufen & Kleidung | 6 | A2 | 40 | 6.5, 6.6 | `shopping-clothes` | ☐ |
| W6.4 | Körper & Gesundheit | 6 | A2 | 40 | 5.8, 6.9 | `body-health` | ☐ |
| W6.5 | Feste & Traditionen | 6 | A2 | 40 | 6.3 | `festivals-traditions` | ☐ |
| W7.1 | Arbeit & Beruf | 7 | B1 | 50 | 7.2, 7.4 | `work-jobs` | ☐ |
| W7.2 | Migration & Kultur | 7 | B1 | 50 | 7.5 | `migration-culture` | ☐ |
| W7.3 | Umwelt & Nachhaltigkeit | 7 | B1 | 45 | 7.1, 7.4 | `environment` | ☐ |
| W7.4 | Gefühle, Beziehungen & Meinung | 7 | B1 | 40 | 7.4, 7.5 | `feelings-opinions` | ☐ |
| W7.5 | Bildung & Zukunftspläne | 7 | B1 | 40 | 7.1, 7.4 | `education-future` | ☐ |

Spanien-Wortschatz (*el ordenador, el móvil, el coche, el zumo, conducir*); lateinamerikanische Varianten nur als Hinweis. **Umfang:** 17 Wortfelder, ≈ 720 Vokabeln.

## 3. Weitere Bereiche

| Bereich | Inhalt | Phase |
|---|---|---|
| Startseite | Einstieg nach Klasse (5./6./7.) oder Bereich (Zeiten & Modi, Weitere Grammatik, Vokabeln, Typische Fehler); Suche über Einheiten und Vokabeln (akzent-tolerant) | 2 |
| Zeitenübersicht | Zeitstrahl Pluscuamperfecto → Indefinido / Imperfecto / Perfecto → Presente / *estar* + Gerundio → *ir a* / Futuro, daneben Condicional, Subjuntivo, Imperativo; je Bildung + Beispiel + Link zur Einheit | 2 |
| Verbtabellen | *hablar, comer, vivir* + 20 unregelmäßige: *ser, estar, ir, haber, tener, hacer, poder, querer, decir, venir, poner, salir, saber, conocer, dar, ver, traer, pedir, dormir, jugar* – in allen gelernten Zeiten (Presente, Perfecto, Indefinido, Imperfecto, Pluscuamperfecto, Futuro, Condicional, Subjuntivo, Imperativo, Gerundio, Partizip) | 2 |
| Typische Fehler | eigene Einheiten (TF, siehe oben), mit Übungen | 3 |
| Mix-Test | zufällige Aufgaben aus gewählten Einheiten oder einer ganzen Klasse (10/20/30), Auswertung pro Einheit, „Falsche wiederholen" | 2 |
| Fortschritt | localStorage: erledigte Übungen, Testergebnisse, Vokabel-Fächer; Übersicht pro Klasse; Zurücksetzen mit Bestätigung | 2 |
| Extra: Vorlesen | 🔊-Button bei Beispielsätzen, Vokabeln, Karteikarten, Mustertexten | 2 |
| Extra: Verb-Drill | zufällige Abfrage Verb × Zeit × Person aus den Verbtabellen | 2 |
| Extra: Textsorten | Gerüst + E-Mail in Phase 2, restliche Textsorten in Phase 3 nach Klasse 7 | 2 / 3 |

### Textsorten (Extra)

Schreibaufgaben der B1-Matura (lt. ÖSZ-Materialien zur SRDP: Artikel, Bericht, Blog, E-Mail).

| Nr. | Textsorte | Klasse | GERS | ID | Status |
|---|---|---|---|---|---|
| T1 | E-Mail (informell & halbformell) | 6 | A2/B1 | `email` | ✅ |
| T2 | Blogeintrag | 6 | A2/B1 | `blog-post` | ☐ |
| T3 | Artikel | 7 | B1 | `article` | ☐ |
| T4 | Bericht | 7 | B1 | `report` | ☐ |

## 4. Aufbau einer Einheit

**Grammatik (ZM, GR)**
1. **Auf einen Blick** – kompakte Tabelle (Formen + wann verwenden), druckbar
2. **Erklärung** – Bildung (regelmäßig → unregelmäßig) · Verwendung + Signalwörter · Unterschied zum Deutschen · Typische Fehler · Merkhilfe; Vergleichs-Einheiten (6.4, 7.5, 7.8) zusätzlich mit Entscheidungs-Checkliste
3. **Beispiele** – 8–12 Sätze ES + DE
4. **Übungen** – leicht / mittel / schwer, je ≥ 8 Aufgaben, ≥ 3 Übungstypen pro Einheit
5. **Mini-Test** – 10 gemischte Aufgaben mit Punkten

**Typische Fehler (TF):** Auf einen Blick (falsch → richtig), kurze Erklärung, Beispiele, Übungen leicht + mittel je ≥ 8 Aufgaben (≥ 2 Typen), kein eigener Mini-Test (Aufgaben fließen in den Mix-Test).

**Übungstypen:** Lückentext (Verb in Klammern) · Multiple Choice · Konjugationstabelle · Zuordnen · Satzbau (Wörter antippen) · Fehler finden & korrigieren · Übersetzen DE → ES (freie Sätze: Musterlösung + Selbstbewertung).

## 5. Datenmodell (Skizze)

```ts
type Grade = number;                             // 5, 6, 7 – Klasse 8 = nur neue Daten
type Area = 'tenses' | 'grammar' | 'mistakes';   // ZM | GR | TF
type Cefr = 'A1' | 'A2' | 'A2/B1' | 'B1';
type Level = 'easy' | 'medium' | 'hard';

interface Unit {                                 // src/content/units/<id>.ts
  id: string; title: string; subtitle: string;
  grade: Grade; area: Area; cefr: Cefr; order: number;
  prerequisites: string[];                       // Unit-IDs
  summary: Block[];                              // „Auf einen Blick"
  explanation: { title: string; blocks: Block[] }[];
  examples: { es: string; de: string }[];
  exercises: Exercise[];
  test?: Task[];                                 // Mini-Test (10)
}

type Block =                                     // Erklärungsblock
  | { type: 'text'; text: string }               // **fett** erlaubt
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'list' | 'checklist'; items: string[] }
  | { type: 'tip' | 'warning'; text: string };   // Merkhilfe | Typischer Fehler

interface Exercise { id: string; level: Level; instruction: string; tasks: Task[] }

type Task = { reason: string; points?: number } & (    // Begründung ist Pflicht
  | { type: 'gap'; text: string; hint?: string; answers: string[] }  // "Ayer ___ al cine." (ir, yo)
  | { type: 'choice'; prompt: string; options: string[]; answer: string }
  | { type: 'table'; verb: string; tense: string; forms: string[]; given?: number[] }
  | { type: 'match'; pairs: [string, string][] }
  | { type: 'order'; words: string[]; answers?: string[]; de?: string }
  | { type: 'fix'; wrong: string; answers: string[] }
  | { type: 'translate'; de: string; answers: string[]; free?: boolean }
);

interface VocabField {                           // src/content/vocab/<id>.ts
  id: string; title: string; grade: Grade; cefr: Cefr; order: number;
  words: Word[];
}
interface Word {
  es: string;                                    // Nomen mit Artikel: "el billete"
  de: string; pos: 'noun' | 'verb' | 'adj' | 'adv' | 'phrase' | 'other';
  example?: { es: string; de: string };          // bei mehrdeutigen Wörtern
  accept?: string[];                             // weitere richtige Antworten (Tipp-Modus)
}
```

- Inhalte werden per `import.meta.glob` automatisch eingesammelt → neue Datei = neuer Inhalt, keine Registrierung, kein Umbau.
- Fortschritt: ein versionierter localStorage-Eintrag – `exercises[id]` (bestes Ergebnis), `tests[unitId]` (Punkte), `vocab[Wort + Richtung]` (Fach 1–5).
- Leitner: neu → Fach 1; gewusst → ein Fach höher (max. 5); nicht gewusst → Fach 1; geübt wird von den niedrigen Fächern aufwärts.

## 6. Routen (HashRouter)

| Route | Seite |
|---|---|
| `#/` | Start: Klasse oder Bereich wählen, Suche |
| `#/grade/:grade` | Klasse: Einheiten, Wortfelder, Fortschritt |
| `#/area/:area` | Bereich: Zeiten & Modi · Weitere Grammatik · Typische Fehler |
| `#/unit/:id` | Einheit: Auf einen Blick, Erklärung, Beispiele |
| `#/unit/:id/exercises` | Übungen (leicht / mittel / schwer) |
| `#/unit/:id/test` | Mini-Test |
| `#/vocab` | alle Wortfelder |
| `#/vocab/:id` | Wortliste (Spalte verdecken, drucken) |
| `#/vocab/:id/cards` | Karteikarten ES ↔ DE (Leitner) |
| `#/vocab/:id/type` | Tipp-Modus DE → ES |
| `#/tenses` | Zeitenübersicht |
| `#/verbs`, `#/verbs/:verb` | Verbtabellen |
| `#/verb-drill` | Verb-Drill (Extra) |
| `#/text-types`, `#/text-types/:id` | Textsorten & Redemittel (Extra) |
| `#/mix` | Mix-Test |
| `#/progress` | Fortschritt |

Pfade englisch (Code), alle sichtbaren Texte deutsch.

## 7. Antwortprüfung

- Egal: Groß-/Kleinschreibung, Leerzeichen, Satzzeichen (¿ ¡ ? ! . , ; :).
- Subjektpronomen optional (*yo hablo* = *hablo*); mehrere richtige Lösungen pro Aufgabe.
- Nur Akzent/Tilde falsch → „Fast – Akzent!", zählt aber als falsch (*hablo* ≠ *habló*).
- Akzent-Buttons (á é í ó ú ñ ü ¿ ¡) an jedem Eingabefeld, Enter = prüfen.
- Eindeutige Lücken: Infinitiv + Person in Klammern, Signalwort im Satz; wo mehrere Lösungen korrekt sind (z. B. *le/lo* für männliche Personen, *quizá/quizás*), werden alle akzeptiert.

## 8. Ablauf

- **Phase 2 – Gerüst + Pilot:** Projekt, Layout & Navigation (mobile first, Druck-CSS), alle Seiten aus Abschnitt 3 + 6, alle 7 Übungstypen, Vokabeltrainer, Fortschritt, Vitest-Tests, GitHub-Pages-Vorbereitung (`base: './'`, Deploy-Workflow nur manuell startbar), `CLAUDE.md`, `materialien/`. Pilot: **6.2 Pretérito indefinido + W6.1 Reisen & Tourismus**; dazu Daten für Zeitenübersicht und Verbtabellen.
- **Phase 3 – Inhalte:** pro Klasse alle Einheiten in Nr.-Reihenfolge, danach die Wortfelder; je Einheit Gegenlesen, `npm test`, Commit, Häkchen hier. Stopp nach jeder Klasse. Nach Klasse 7: restliche Textsorten.
- Commit nach jeder Phase und Einheit; Push und Deploy nur nach Freigabe.

## 9. Extras (alle drei freigegeben)

1. **🔊 Vorlesen** (Browser-Sprachausgabe, bevorzugt lokale Stimme es-ES): Beispielsätze, Vokabeln und Karteikarten per Klick anhören – trainiert Aussprache und Hörverstehen; nutzt nur die eingebaute Sprachausgabe des Browsers, keine eigene externe API.
2. **✍️ Textsorten & Redemittel:** Aufbau, Redemittel und ein Musterbeispiel für Matura-Textsorten (E-Mail, Blogeintrag, Artikel, Bericht) – direkt nutzbar für Schularbeiten und die schriftliche Matura.
3. **🔁 Verb-Drill:** zufällige Abfrage „Verb × Zeit × Person" aus den Verbtabellen mit derselben Antwortprüfung – trainiert unregelmäßige Formen gezielt in kurzen Runden.
