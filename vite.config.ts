import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        // @/xxxx  =>  src/xxx
        find: /^@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },
  server: {
    open: true,
    proxy: {
      '/g/v1': {
        target: 'http://10.35.128.20:9900',
        changeOrigin: true,
      },
    },
    hmr: {
      overlay: true,
    },
  },
})
