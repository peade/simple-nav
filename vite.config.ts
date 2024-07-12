import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import UnoCss from 'unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  base: '/simple-nav/',
  plugins: [
    react(),
    UnoCss(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      includeAssets: [],
      manifest: {
        name: 'Simple Nav',
        short_name: 'Simple Nav',
        description: 'A simple navigation app',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/simple-nav/192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/simple-nav/512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
        runtimeCaching: [
          {
            urlPattern: /\.(js|css|html|ico|png|svg|jpg|jpeg|webp)(\?|$)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'StaticResource',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 9100,
    host: true,
    open: true,
  },
})
