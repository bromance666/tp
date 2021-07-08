import fs from 'fs';

export default {
  build: {
    outDir: 'lib',
    assetsDir: '',
    rollupOptions: {
      input: {
        // index: './packages',
        button: './packages/button',
        'button-test': './packages/button-test',
      },
      output: 
        {
          extend: true,
        	externalLiveBindings: true,
          format: 'es',
          esModule: true,
          exports: 'named',
          sanitizeFileName(info) {
            console.log(info)
            return info
          },
          entryFileNames(info) {
            // if(info.name.includes('index')) return `${info.name}.js`
            return `${info.name}/index.js`
          },
          assetFileNames(info){
            return `style/${info.name}`
          },
          chunkFileNames(info) {
            // console.log(info)
            // if(info.name.includes('index')) return `${info.name}.js`
            return `index.js`
          },
        }
    }
  },
}