import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relativer Pfad: funktioniert auf GitHub Pages unabhängig vom Repo-Namen (HashRouter).
  base: './',
  plugins: [react()],
})
