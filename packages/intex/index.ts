import type { App } from 'vue'

import TpButton from "@tsword/button"

const allComponents = {
  TpButton,
}

/** 暴露出全局安装方法 */
export const createUI = (components: Record<string, any> = allComponents) => {
  const install = (app: App) => {
    for (const key of Object.keys(components)) {
      const component = components[key]
      app.component(key, component)
    }
  }
  return { install }
}

export {
  TpButton
}
