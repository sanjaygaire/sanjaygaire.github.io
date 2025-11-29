import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    allowedHosts: ['gairesanjay.com.np'],
    cors: {
      origin: ['https://gairesanjay.com.np', 'http://gairesanjay.com.np']
    },
    open: false
  },
})
