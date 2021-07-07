export default {
  build: {
    outDir: 'lib',
    lib: {
      entry: './packages/index.ts',
      name: 'tp',
      formats: ['es', 'cjs']
    },
    // target: 'modules',
    // rollupOptions: {
    //   output: {
    //     esModule: true
    //   }
    // }
  },
}