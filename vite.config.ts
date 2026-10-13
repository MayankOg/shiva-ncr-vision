import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/shiva-ncr-site/',
  plugins: [react()],
  build: { chunkSizeWarningLimit: 600 },
})
