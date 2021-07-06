/* eslint-disable */
import * as components from './components/index';
console.log(components);
export default {
  install: (instance: any) => {
    for (let componentKey in components) {
      // @ts-ignore
      instance.use(components[componentKey]);
    }
  },
};
