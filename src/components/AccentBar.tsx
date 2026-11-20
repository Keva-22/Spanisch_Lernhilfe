const CHARS = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡']

/** Leiste mit Sonderzeichen; der Fokus bleibt im Eingabefeld */
export default function AccentBar({ onInsert }: { onInsert: (ch: string) => void }) {
  return (
    <div className="accent-bar no-print" role="group" aria-label="Sonderzeichen einfügen">
      {CHARS.map((ch) => (
        <button
          key={ch}
          type="button"
          tabIndex={-1}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onInsert(ch)}
        >
          {ch}
        </button>
      ))}
    </div>
  )
}
