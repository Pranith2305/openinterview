import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginIgnore from 'vite-plugin-ignore'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginIgnore({
      ignoreBuildErrors: true, // This will ignore build errors (use with caution)
    }),
  ],
  logLevel: 'silent', // Suppress logs during build
})
