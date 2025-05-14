import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@swc/core-win32-x64-msvc'],
  },
  resolve: {
    alias: {
      '@swc/wasm': '@swc/wasm',
    },
  },
  assetsInclude: ['**/*.node'],
})
