import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
import devConfig from './env/vite.dev'
import proConfig from './env/vite.prod'
/**
 * 
 * build:BuildOptions.commonjsOptions.extensions
 */
const envConfig = process.env.NODE_ENV === 'dev' ? devConfig : proConfig

// console.log(envConfig)

const finnalConfig: Partial<UserConfigExport> = {
  plugins: [vue()],
  // 配置tsx
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue'"
  },
  ...envConfig,
}
export default defineConfig(finnalConfig)
