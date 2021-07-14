// export * from './components/button';
// export * from './components/button-test';
import type { App } from 'vue';
import TpButton from './components/button/index';
const allComponents = {
  TpButton,
};
/** 暴露出全局安装方法 */
export const createTp = (components: Record<string, any> = allComponents) => {
  const install = (app: App) => {
    for (const key of Object.keys(components)) {
      const component = components[key];
      app.component(key, component);
    }
  };
  return { install };
};
export { TpButton };
