# Spanisch-Lernhilfe

Statische Lern-Website für Spanisch an der AHS-Oberstufe (5.–7. Klasse, Ziel B1 zur Matura):
Erklärungen, Übungen, Mini-Tests, Vokabeltrainer (Leitner), Verbtabellen, Zeitenübersicht, Textsorten.

## Starten

```bash
npm install
npm run dev
```

Dann die angezeigte Adresse (meist http://localhost:5173) im Browser öffnen.

## Prüfen & bauen

```bash
npm test        # prüft alle Inhalte und die Antwortprüfung
npm run build   # erzeugt dist/
npm run preview # gebaute Seite lokal ansehen
```

## Veröffentlichen (GitHub Pages)

Einmalig in GitHub: Settings → Pages → Source „GitHub Actions“.
Danach: Actions → „Deploy to GitHub Pages“ → Run workflow.

Mehr Details (Datenmodell, Regeln für neue Inhalte): siehe [CLAUDE.md](CLAUDE.md) und [docs/PLAN.md](docs/PLAN.md).
