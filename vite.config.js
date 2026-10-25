import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
      "Cross-Origin-Embedder-Policy": "unsafe-none",
    },
    proxy: {
      '/twilio-api': {
        target: 'https://api.twilio.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/twilio-api/, ''),
        configure: (proxy, _options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            // Remove the WWW-Authenticate header to prevent browser's native login prompt on 401
            delete proxyRes.headers['www-authenticate'];
          });
        }
      },
      '/textbelt-api': {
        target: 'https://textbelt.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/textbelt-api/, '')
      },
    },
  },
});
