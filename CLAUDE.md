# CLAUDE.md – Arbeitsanleitung für dieses Projekt

Spanisch-Lernhilfe: statische Website (Vite + React + TypeScript, HashRouter) für Spanisch an der
AHS-Oberstufe in Österreich (2. lebende Fremdsprache ab der 5. Klasse, Ziel B1 zur Matura).
Plan, Reihenfolge und Status aller Inhalte: **docs/PLAN.md** (dort Häkchen setzen).

## Grundregeln

- Mit dem Nutzer **knapp auf Deutsch** kommunizieren. Nach jedem größeren Schritt eine Zeile `✅ …`.
- Alle sichtbaren Texte und Erklärungen **Deutsch**; Code, Dateinamen, IDs und Routen **Englisch**.
- Spanisch = **Spanien-Spanisch** inkl. *vosotros* (z. B. *el ordenador, el móvil, el coche, el zumo, conducir*).
  Lateinamerikanische Varianten höchstens als Hinweis.
- Erlaubte Pakete: Vite-Template react-ts, `react-router-dom`, `vitest`. Alles andere → vorher fragen.
- Kein Backend, Login, externe API, Tracking, UI- oder CSS-Framework. Code schlicht halten.
- **Vorher fragen:** Dateien löschen, Datenmodell (`src/content/types.ts`) ändern.
  Push nach jeder Phase/Einheit ist freigegeben; jeder Push auf `main` deployt automatisch (freigegeben).
- Fehler nach 2 Versuchen nicht gelöst → stoppen und Problem beschreiben.
- Commit nach jeder Einheit; Commit-Nachrichten auf Deutsch, kurz.

## Befehle

| Befehl | Zweck |
|---|---|
| `npm run dev` | Entwicklungsserver (http://localhost:5173) |
| `npm test` | Vitest: Inhalte + Antwortprüfung (muss grün sein) |
| `npm run build` | Typecheck + Build nach `dist/` (muss fehlerfrei sein) |
| `npm run lint` | oxlint |

## Struktur

```
src/content/           Inhalte (nur Daten, kein UI)
  types.ts             Datenmodell
  meta.ts              Klassen (grades), Bereiche (areas), Stufen, Wortarten
  index.ts             sammelt units/, vocab/, text-types/ automatisch ein (import.meta.glob)
  units/<id>.ts        eine Datei pro Einheit (Grammatik oder Typische Fehler)
  vocab/<id>.ts        eine Datei pro Wortfeld
  text-types/<id>.ts   eine Datei pro Textsorte
  verbs.ts             Verbtabellen (einfache Zeiten ausgeschrieben)
  tenses.ts            Zeitenübersicht
  content.test.ts      Inhaltsprüfung
src/lib/               Logik: answer.ts (Antwortprüfung), progress.ts (localStorage), verbs.ts, vocab.ts …
src/components/        Layout, Übungstypen (tasks/), ExerciseView, TestRunner …
src/pages/             eine Datei pro Route
materialien/           eigene Unterlagen des Nutzers (Quelle, wird nicht angezeigt)
docs/PLAN.md           Plan mit IDs und Status
```

**Neuer Inhalt = neue Datei.** Kein Umbau, keine Registrierung. Die ID muss vorher in `docs/PLAN.md`
stehen (der Test prüft das), nach Fertigstellung Status auf ✅ setzen (wird ebenfalls geprüft).
**Klasse 8:** Eintrag in `grades` (`src/content/meta.ts`) + Inhalte mit `grade: 8` + Zeilen im Plan.

## Datenmodell (Kurzfassung, Details in `src/content/types.ts`)

```ts
Unit {
  id, title, subtitle, grade, area: 'tenses' | 'grammar' | 'mistakes', cefr, order,  // order = Nr. im Plan
  prerequisites: string[],   // Unit-IDs
  keywords?: string[],       // für die Suche
  summary: Block[],          // „Auf einen Blick" (druckbar)
  explanation: { title, blocks: Block[] }[],
  examples: { es, de }[],    // 8–12 (Typische Fehler: ≥ 4)
  exercises: Exercise[],     // { id: '<unit-id>-e1', level: 'easy'|'medium'|'hard', instruction, tasks }
  test?: Task[],             // Mini-Test: genau 10 (bei Typische Fehler optional)
}
Block = text | table { head, rows, caption? } | list | checklist | tip | warning
Task  = gap | choice | table | match | order | fix | translate   (+ reason, points?, instruction?)
VocabField { id, title, grade, cefr, order, words: Word[] }      // 30–50 Wörter
Word  { es, de, pos, example?, accept? }
TextType { id, title, grade, cefr, order, description, structure, phrases, model, checklist }
```

Inline-Formatierung in allen Texten: `**fett**`, `*kursiv*` (spanische Wörter im deutschen Text),
`~~falsch~~` (durchgestrichen, für falsche Formen). Nicht verschachteln.

### Aufgabentypen

| type | Felder | Hinweise |
|---|---|---|
| `gap` | `text` mit genau einem `___`, `hint` („ir, yo"), `answers` | Hinweis = Infinitiv + Person |
| `choice` | `prompt` (darf `___` enthalten), `options`, `answer` | Optionen werden gemischt; nur **eine** darf richtig sein |
| `table` | `verb`, `tense`, `forms` (6: yo … ellos), `given?` (vorausgefüllte Zeilen) | |
| `match` | `pairs: [links, rechts][]` | ≥ 3 Paare, beide Seiten eindeutig |
| `order` | `words` (richtige Reihenfolge, klein, ohne Satzzeichen), `answers?` (weitere Reihenfolgen), `de?` | |
| `fix` | `wrong` (genau ein Fehler), `answers` | `wrong` darf nicht als richtig gelten (Test) |
| `translate` | `de`, `answers`, `free?` | `free: true` = Musterlösung + Selbstbewertung; nicht im Mix-Test |

`reason` ist Pflicht: kurze Begründung, z. B. „*ayer* → abgeschlossen → **Indefinido**". Sie erscheint nach jedem Prüfen.
Mini-Test-Aufgaben bekommen `instruction`, wenn die Standard-Anweisung nicht eindeutig ist
(z. B. „Setze das Verb im Pretérito indefinido ein.").

### Antwortprüfung (`src/lib/answer.ts`)

- egal: Groß-/Kleinschreibung, Leerzeichen, Satzzeichen (¿ ¡ ? ! . , ; : …)
- Subjektpronomen optional (*yo hablo* = *hablo*), außer nach Präpositionen/Vergleichen (*para él*, *que yo*)
- mehrere Lösungen: alle in `answers` eintragen
- nur Akzent/Tilde falsch → `accent` („Fast – Akzent!"), zählt als falsch
- Vokabeln (Tipp-Modus): `el/la turista` akzeptiert auch *el turista* / *la turista*; `barato/-a` akzeptiert *barato* / *barata*.
  Andere Varianten (z. B. *español, española*) über `accept`. Fehlt nur der Artikel → Hinweis „Artikel fehlt".

## Stilregeln für Erklärungen

1. Reihenfolge der Abschnitte (Grammatik): **Bildung** (regelmäßig → unregelmäßig) · **Verwendung & Signalwörter** ·
   **Unterschied zum Deutschen** · **Typische Fehler** · **Merkhilfe**. Vergleichs-Einheiten (6.4, 7.5, 7.8)
   zusätzlich mit `checklist` („Entscheidungs-Checkliste": nummerierte Fragen, die zur Lösung führen).
2. „Auf einen Blick" = nur das Nötigste zum Ausdrucken: Formentabelle(n) + Wann/Signalwörter in einer kurzen Liste.
3. Kurze Sätze, Du-Form, schülergerecht. Fachbegriffe deutsch (Stamm, Endung, Signalwort); spanische Wörter *kursiv*.
4. Jede Regel mit einem kurzen spanischen Beispiel. Falsch → richtig immer als `~~falsch~~ → *richtig*`.
5. Tabellen schmal halten (max. 4–5 Spalten), Personen als `yo, tú, él/ella/usted, nosotros/-as, vosotros/-as, ellos/ellas/ustedes`.
6. `tip` = Merkhilfe/Eselsbrücke, `warning` = typischer Fehler.
7. Beispielsätze: Alltag von Jugendlichen in Österreich/Spanien, Deutsch natürlich (österreichisch ok: „Schularbeit", „auf Urlaub").
8. Personen-, Orts- und Firmennamen frei erfunden oder allgemein bekannt; keine echten Schüler:innen.

## Qualitätsregeln (vor jedem Commit)

- `npm test` und `npm run build` grün.
- Umfang je Grammatik-Einheit: 3 Stufen × ≥ 8 Aufgaben, ≥ 3 Aufgabentypen, Mini-Test mit 10 Aufgaben, 8–12 Beispiele.
  Typische Fehler: Stufen leicht + mittel × ≥ 8 Aufgaben, ≥ 2 Typen.
- **Jede spanische Form gegenlesen:** Akzente (auch *fui, dio, vio* ohne Akzent), unregelmäßige Formen, *vosotros*-Formen,
  Genus-/Numerus-Angleichung, Rechtschreibung (*-qué, -gué, -cé*), ¿/¡ am Satzanfang.
- **Jede Lücke eindeutig:** Infinitiv + Person im Hinweis, Signalwort im Satz, Zeit in der Arbeitsanweisung.
  Wenn trotzdem mehrere Lösungen korrekt sind → alle in `answers` (z. B. *lo/le* für männliche Personen, *quizá/quizás*).
- Multiple Choice: Ablenker dürfen nicht in einer anderen Lesart richtig sein (Person im Satz festlegen, z. B. „(tú)").
- Übersetzungen: nur kurze Sätze automatisch prüfen und alle natürlichen Wortstellungen in `answers` aufnehmen;
  längere Sätze als `free: true`.
- Antwortposition und Schwierigkeit mischen; Begründungen kurz (1 Satz) und konkret.
- Nach der Einheit: in `docs/PLAN.md` Status ☐ → ✅, Commit „Einheit 5.3 ser, estar & hay", Push,
  Ausgabe `✅ [Einheit] – [Anzahl Übungen/Aufgaben/Vokabeln]`.

## Material aus `materialien/` einpflegen

1. Datei ansehen (PDF/Foto/Text). Personenbezogenes (Namen, Noten) **nie** übernehmen.
2. Zuordnen: Welche Klasse, welche Einheit/welches Wortfeld aus `docs/PLAN.md`? Neues Thema → zuerst Zeile im Plan
   ergänzen (mit Nutzer abstimmen).
3. **Vokabellisten:** Wörter in das passende `src/content/vocab/<id>.ts` übernehmen (Nomen mit Artikel, Adjektive als
   `…o/-a`, mehrdeutige Wörter mit Beispielsatz). Eigene Listen haben Vorrang vor meinen Vorschlägen; 30–50 Wörter pro
   Feld – größere Listen auf zwei Felder aufteilen (im Plan ergänzen).
4. **Arbeitsblätter/Schularbeiten:** Aufgabentypen und Schwerpunkte übernehmen, Sätze **nicht wörtlich kopieren**
   (Urheberrecht), sondern eigene Aufgaben im selben Stil schreiben. Häufige Fehler daraus als `warning`-Blöcke
   oder Fehler-Aufgaben (`fix`) aufnehmen.
5. Reihenfolge/Schwerpunkte laut Material im Plan anpassen (Nr. bzw. `order`).
6. Tests, Build, Commit wie oben.

## Fortschritt (localStorage)

Schlüssel `spanisch-lernhilfe:progress:v1`. Übungs-IDs und Wortfeld-IDs **nie umbenennen** – sonst geht der
gespeicherte Fortschritt verloren. Vokabel-Fächer hängen an `fieldId|es|Richtung`.

## Deploy

`vite.config.ts` nutzt `base: './'` (funktioniert mit HashRouter unabhängig vom Repo-Namen).
Workflow `.github/workflows/deploy.yml` baut, testet und veröffentlicht bei jedem Push auf `main`
(vom Nutzer freigegeben). Seite: https://keva-22.github.io/Spanisch_Lernhilfe/
Keine weiteren Pages-Workflows anlegen (z. B. Jekyll-Vorlagen) – sie würden die ungebaute Seite veröffentlichen.
