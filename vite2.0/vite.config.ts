import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '@hooks': pathResolve('src/hooks'),
      '@assets': pathResolve('src/assets')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.mgblog.cn/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/')
      }
    }
  }
})
