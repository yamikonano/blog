import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: process.env.PORT,
    open: false,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')

      }
    }
  },
  base:'./',
  plugins: [vue(), svgLoader({
    svgoConfig: {
      multipass: true
    }
  })],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ]
  },

})
