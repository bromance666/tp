import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
console.log(resolve(__dirname, 'src'))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3001,
    open: true,
  },
  // 配置tsx
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue'"
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'comps': resolve(__dirname, 'src/components'),
    }
  }
})
