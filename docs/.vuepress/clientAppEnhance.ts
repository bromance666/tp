import { defineClientAppEnhance } from '@vuepress/client'
import components from '../../src/index'
console.log('components', components)
export default defineClientAppEnhance(({
     app, router, siteData
}) => {
  app.use(components);
})
