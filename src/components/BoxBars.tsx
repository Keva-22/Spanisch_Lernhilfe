/** Leitner-Fächer 1–5 als kleine Balken */
export default function BoxBars({ counts }: { counts: number[] }) {
  const total = counts.reduce((a, b) => a + b, 0) || 1
  return (
    <div className="box-bars" aria-label="Verteilung auf die Lernfächer">
      {counts.map((count, i) => (
        <div key={i} className="box-bar">
          <div className="box-bar-track">
            <span className={`box-fill box-${i + 1}`} style={{ height: `${(count / total) * 100}%` }} />
          </div>
          <span className="box-label">
            Fach {i + 1}
            <br />
            <strong>{count}</strong>
          </span>
        </div>
      ))}
    </div>
  )
}
