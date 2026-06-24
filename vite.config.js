import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      includeAssets: ['icon/logo.png', 'icon/logo-192.png', 'icon/logo-512.png', 'sprites/**/*'],
      manifest: {
        name: 'Daya Homeopathy',
        short_name: 'Daya',
        description: 'Your trusted destination for classical and advanced homeopathic care.',
        theme_color: '#0cb78f',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/icon/logo-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icon/logo-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      devOptions: {
        enabled: false
      }
    })
  ],
});
