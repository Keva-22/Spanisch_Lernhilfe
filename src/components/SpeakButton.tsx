import { canSpeak, speak } from '../lib/speech.ts'

/** 🔊-Button: liest spanischen Text mit der Sprachausgabe des Browsers vor */
export default function SpeakButton({ text, label = 'Vorlesen' }: { text: string; label?: string }) {
  if (!canSpeak()) return null
  return (
    <button type="button" className="speak-btn no-print" onClick={() => speak(text)} title={label} aria-label={label}>
      🔊
    </button>
  )
}
