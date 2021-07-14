// npm install --save-dev rollup-plugin-uglify
import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx  from '@vitejs/plugin-vue-jsx'
import transformStyle from './env/stlye.plugin'
// https://vitejs.dev/config/
import devConfig from './env/vite.dev'
import proConfig from './env/vite.prod'
const envConfig = process.env.NODE_ENV === 'dev' ? devConfig : proConfig

const finnalConfig: Partial<UserConfigExport> = {
  plugins: [
    vueJsx ({
      transformOn: true
    }),
    vue({}),
    // 转移styles目录不进行打包
    transformStyle()
  ],
  // 配置tsx
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue'"
  },
  ...envConfig,
}
export default defineConfig(finnalConfig)
