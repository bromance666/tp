import path from 'path'
export default {
  // root: './packages/index.ts',
  // BuildOptions
  build: {
    outDir: 'lib',
    lib: {
      entry: './packages/index.ts',
      name: 'tp',
      formats: ['es', 'cjs']
    },
    // target: 'modules',
    rollupOptions: {
      output: {
        // esModule: true
        input: {
          index: '../packages/index.ts',
          button: '../packages/button/index.ts'
        }
      }
    },
    commonjsOptions: {
      exclude: [/node_modules/],
      extensions: ['.tsx','.ts','.js','.less','.css']
    }
  },
}