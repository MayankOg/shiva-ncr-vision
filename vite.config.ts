import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path: VITE_BASE or BASE_PATH (e.g. "/shiva-ncr-vision/" or "/" for a custom domain).
const raw = process.env.VITE_BASE || process.env.BASE_PATH || '/shiva-ncr-vision/'
const base = ('/' + raw.replace(/^\/+|\/+$/g, '') + '/').replace('//', '/')
// Absolute site URL used for canonical, OG, sitemap and robots.
process.env.VITE_SITE_URL = (process.env.VITE_SITE_URL || `https://mayankog.github.io${base}`).replace(/\/?$/, '/')

export default defineConfig({
  base,
  plugins: [react()],
  build: { chunkSizeWarningLimit: 600 },
})
