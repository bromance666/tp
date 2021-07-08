import { resolve } from 'path'
export default {
    resolve: {  
        alias: {
            '@': resolve(__dirname, '../example'),
            '@comps': resolve(__dirname, '../example/components'),
        },
        // extensions: ['.tsx', '.ts', '.js', '.css']
    }
  }