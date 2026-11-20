// Vorlesen mit der eingebauten Sprachausgabe des Browsers (Web Speech API).
// Bevorzugt eine lokale Stimme für Spanien-Spanisch (es-ES).

export const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window

function pickVoice(): SpeechSynthesisVoice | undefined {
  const rank = (v: SpeechSynthesisVoice) =>
    (v.lang.toLowerCase().replace('_', '-') === 'es-es' ? 0 : 2) + (v.localService ? 0 : 1)
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith('es'))
    .sort((a, b) => rank(a) - rank(b))[0]
}

export function speak(text: string) {
  if (!canSpeak()) return
  const synth = window.speechSynthesis
  synth.cancel()
  const utterance = new SpeechSynthesisUtterance(text.replace(/[*~]/g, ''))
  utterance.lang = 'es-ES'
  utterance.rate = 0.9
  const voice = pickVoice()
  if (voice) utterance.voice = voice
  synth.speak(utterance)
}
