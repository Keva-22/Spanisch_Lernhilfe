import type { KeyboardEvent } from 'react'

/** Fügt ein Zeichen an der Cursor-Position ein und setzt den Cursor dahinter */
export function insertChar(
  el: HTMLInputElement | HTMLTextAreaElement | null | undefined,
  ch: string,
  setValue: (value: string) => void,
) {
  if (!el) return
  const start = el.selectionStart ?? el.value.length
  const end = el.selectionEnd ?? el.value.length
  setValue(el.value.slice(0, start) + ch + el.value.slice(end))
  requestAnimationFrame(() => {
    el.focus()
    el.setSelectionRange(start + ch.length, start + ch.length)
  })
}

/** Gemeinsame Attribute für spanische Eingabefelder (keine Autokorrektur am Handy) */
export const spanishInputProps = {
  lang: 'es',
  autoComplete: 'off',
  autoCorrect: 'off',
  autoCapitalize: 'off',
  spellCheck: false,
} as const

/** Enter (ohne Shift) löst eine Aktion aus */
export const onEnter = (action: () => void) => (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    action()
  }
}
