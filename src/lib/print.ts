/** Druckt nur einen Teil der Seite: body bekommt kurz eine Klasse, die das Druck-CSS auswertet. */
export function printOnly(mode: string) {
  const className = `print-${mode}`
  const cleanup = () => {
    document.body.classList.remove(className)
    window.removeEventListener('afterprint', cleanup)
  }
  document.body.classList.add(className)
  window.addEventListener('afterprint', cleanup)
  window.print()
}
