import getComponentPath from './get-component-path';

type TInputType = Record<string, string>;

const input:TInputType = getComponentPath('packages/components').reduce((memo, path) => {
  const pathArr = path.split('/');
  const len = pathArr.length;
  const key = pathArr[len - 1];
  return {
    ...memo,
    [key]: path,
  }
}, {});

input.index = './packages';
/**
 * build:BuildOptions.commonjsOptions.extensions
 */
export default {
  build: {
    outDir: 'lib',
    // assetsDir: '',
    // assetsDir: 'lib/style',
    cssCodeSplit: true,
    lib: {
      entry: './packages',
      name: 'tp',
      formats: ['es']
    },
    commonjsOptions: {
      extensions: ['.tsx', '.ts', '.d.ts', '.js', '.less', '.css']
    },
    rollupOptions: {
      input,
      output: 
        {
          // extend: true,
        	// externalLiveBindings: true,
          // format: 'es',
          // 资源文件
          assetFileNames(info){
            // console.log(info)
            return `style/${info.name}`
          },
          // 每个入口文件(每个组件入口及index.ts)输出名字设置
          entryFileNames(info) {
            // console.log(info)
            if(info.name.includes('index')) return `${info.name}.js`
            return `${info.name}/index.js`
          },
          
          // 公共代码块
          chunkFileNames(info) {
            if(info.name.includes('bundler'))  return `bundle.js`;
            return `${info.name}.js`
          },
        }
    }
  },
}