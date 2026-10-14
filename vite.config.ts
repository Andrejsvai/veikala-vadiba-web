import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/veikala-vadiba-web/',
  server: {
    host: '127.0.0.1',
    port: 43127,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 43127,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react-dom/client'],
      output: {
        paths: {
          react: 'https://esm.sh/react@19.2.8',
          'react-dom': 'https://esm.sh/react-dom@19.2.8',
          'react/jsx-runtime': 'https://esm.sh/react@19.2.8/jsx-runtime',
          'react-dom/client': 'https://esm.sh/react-dom@19.2.8/client',
        },
      },
    },
  },
})
