/* eslint-disable */
import * as components from './components/index';
// import * as components from '../lib/src';
console.log('components', components)
export default {
  install: (instance: any) => {
    for (let componentKey in components) {
      // @ts-ignore
      instance.use(components[componentKey]);
    }
  },
};
