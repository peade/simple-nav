import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import UnoCss from 'unocss/vite'

export default defineConfig({
  plugins: [react(), UnoCss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8800,
    host: true,
    open: true,
  },
})
