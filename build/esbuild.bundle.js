const { build } = require('esbuild')
const shell = require('shelljs')

/**
 * build使用插件文档
 * https://esbuild.github.io/plugins/#finding-plugins
 */
const copyStylePluin = {
  name: 'copyStylePlugin',
  setup(build) {
    /** 打包结束回调 */
    build.onEnd(result => {
      console.log(`build ended with ${result.errors.length} errors`)
      /**
       * shell脚本语言解析器，本质就是基于node的一层命令封装插件
       * 官方: https://github.com/shelljs/shelljs
       * 第三方: https://blog.csdn.net/weixin_33980459/article/details/91422235
       * 拷贝style文件插件
       */
      /** 拷贝文件 -R递归也就是将所有文件都拷贝 */
      shell.cp('-R', 'packages/style', 'dist/style')
      /** 删除文件 -f强制删除 */
      shell.rm('-f', 'dist/style/package.json')
    })
  }
}

/**
 * api: https://esbuild.github.io/api/#simple-options
 */
build({
  /** 入口 */
  entryPoints: ['packages/index.ts'],
  /** 打包后输出的文件 */
  outfile: 'dist/index.esm.js',
  /** 是否需要map映射 */
  sourcemap: true,
  /** 默认内联的文件应用不会被打包，这里是开启打包捆绑，递归打包依赖以及依赖之间的依赖项 */
  /** 换句话说，将插件分包打包则不添加此配置项，打包成一个文件则添加，因为会同时打包依赖项 */
  bundle: true,
  loader: {
    ".ts": "ts",
    ".json": 'json',
    ".js": 'js'
  },
  plugins: [copyStylePluin],
  target: ['es6'],
  // 排除依赖项中不进行打包的插件
  external: [
    'vue'
  ],
  /** 替换变量，用字符串文字替换某些内容，请记住传递给 esbuild 的替换值本身必须包含引号 */
  define: {
    'process.env.NODE_ENV': "'development'",
  },
  /** 通常会自动发现tsconfig.json文件并读取其内容，此项是指定tsconfig.json自定义文件 */
  tsconfig: 'tsconfig.rollup.json'
})
