const { build } = require('esbuild')
const fs = require('fs')
const shell = require('shelljs')
const path = require('path')

const transformPlugin = {
  name: 'transformPlugin',
  setup(build) {
    /**
     * filter每个回调都必须提供一个过滤器，它是一个正则表达式。当路径与此过滤器不匹配时，将跳过注册的回调。
     * https://esbuild.github.io/plugins/#load-callbacks
     */
    build.onLoad({ filter: /\.ts$/ }, async (args) => {
      // args => 每个ts文件
      let contents = await fs.promises.readFile(args.path, "utf8")
      /** 全局替换引入的依赖项为本地依赖 */
      contents = contents.replace(
        /@tsword\//g, './'
      )
      return {
        contents,
        loader: 'ts',
      }
    })

    build.onEnd(result => {
      shell.cp('-R', 'packages/types', 'types')
      shell.rm('-f', 'types/package.json')
    })
  },
}

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (
      d.isDirectory() &&
      ![ 'styles', 'types' ].includes(d.name)
    ) yield* await walk(entry);
    else if (
      d.isFile() && d.name !== 'package.json'
    ) yield entry;
  }
}

const buildLib = async () => {
  let components = []

  for await (const p of walk('./packages'))
    components.push(p)
  await build({
    /** 这里将多个文件作为入口，也就是可以实现分包打包，并且下面相较于boundle.js少了bundle配置，可以查看boundle.js配置项说明*/
    entryPoints: ['packages/index.ts'].concat(components),
    format: "esm",
    minify: false,
    loader: {
      ".ts": "ts",
      ".json": "json",
      ".js": "js"
    },
    plugins: [transformPlugin],
    /** 出入目录，静默覆盖已有文件 */
    outdir: "lib",
    target: ['es6'],
    define: {
      'process.env.NODE_ENV': "'development'",
    },
    tsconfig: 'tsconfig.build.json'
  })
}

buildLib()