import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper'],ttps://github.com/Infini-coders/Infini-website/settings/pages  },
  base: '/',
})

