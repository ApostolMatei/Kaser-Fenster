import { fileURLToPath, URL } from 'node:url'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ...
    Pages({
      onRoutesGenerated: () => {
        const explicitRoutes = ['/', '/ueber-uns', '/leistungen', '/produkte', '/kontakt']
        generateSitemap({ routes: explicitRoutes })
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
