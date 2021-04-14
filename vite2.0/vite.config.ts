import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias: {
      "@": pathResolve("src"),
    },
  }
  
  // proxy: {
  //   // 如果是 /lsbdb 打头，则访问地址如下
  //   '/lsbdb': 'http://10.192.195.96:8087',
  //   // 如果是 /lsbdb 打头，则访问地址如下
  //   // '/lsbdb': {
  //   //   target: 'http://10.192.195.96:8087/',
  //   //   changeOrigin: true,
  //   //   // rewrite: path => path.replace(/^\/lsbdb/, '')
  //   // }
  // }
})
