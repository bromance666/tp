import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  bundler: '@vuepress/vite',
  bundlerConfig: {
    // vite options
    viteOptions: {
      // tsx support
      esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: "import { h } from 'vue'"
      },
    }
  },
})
