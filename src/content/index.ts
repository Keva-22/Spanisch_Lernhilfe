// Sammelt alle Inhalte automatisch ein: neue Datei = neuer Inhalt, keine Registrierung nötig.
import type { Area, Grade, TextType, Unit, VocabField } from './types.ts'

const byGradeAndOrder = (a: { grade: Grade; order: number }, b: { grade: Grade; order: number }) =>
  a.grade - b.grade || a.order - b.order

export const units: Unit[] = Object.values(
  import.meta.glob<Unit>('./units/*.ts', { eager: true, import: 'default' }),
).sort(byGradeAndOrder)

export const vocabFields: VocabField[] = Object.values(
  import.meta.glob<VocabField>('./vocab/*.ts', { eager: true, import: 'default' }),
).sort(byGradeAndOrder)

export const textTypes: TextType[] = Object.values(
  import.meta.glob<TextType>('./text-types/*.ts', { eager: true, import: 'default' }),
).sort(byGradeAndOrder)

export const getUnit = (id: string) => units.find((u) => u.id === id)
export const getVocabField = (id: string) => vocabFields.find((f) => f.id === id)
export const getTextType = (id: string) => textTypes.find((t) => t.id === id)

export const unitsOfGrade = (grade: Grade) => units.filter((u) => u.grade === grade)
export const unitsOfArea = (area: Area) => units.filter((u) => u.area === area)
export const vocabOfGrade = (grade: Grade) => vocabFields.filter((f) => f.grade === grade)

/** Nummer wie in docs/PLAN.md, z. B. „6.2" */
export const unitNumber = (u: Unit) => `${u.grade}.${u.order}`
