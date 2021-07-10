/* eslint-disable */
import * as components from '../lib/';
import '../lib/style.css';

export default {
  install: (instance: any) => {
    for (let componentKey in components) {
      // @ts-ignore
      instance.use(components[componentKey]);
    }
  },
};
