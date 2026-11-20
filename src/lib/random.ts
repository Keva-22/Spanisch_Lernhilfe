/** Kopie in zufälliger Reihenfolge (Fisher-Yates) */
export function shuffle<T>(items: readonly T[]): T[] {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Wie shuffle, aber (wenn möglich) nicht in der Original-Reihenfolge */
export function shuffleChanged<T>(items: readonly T[]): T[] {
  for (let attempt = 0; attempt < 10; attempt++) {
    const a = shuffle(items)
    if (a.some((x, i) => x !== items[i])) return a
  }
  return [...items]
}

export const pick = <T>(items: readonly T[]): T => items[Math.floor(Math.random() * items.length)]
