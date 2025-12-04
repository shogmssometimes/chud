import { defineConfig } from 'vite'
// For local build compatibility, omit the plugin while we validate port and build behavior. If you want fast-refresh support in dev, re-add '@vitejs/plugin-react'.
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/chud/' : '/',
  plugins: [],
  server: {
    port: 5173
  },
  preview: {
    port: 8080,
    strictPort: true
  }
})
