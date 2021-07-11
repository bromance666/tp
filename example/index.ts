/* eslint-disable */
import * as components from '../lib';
import '../lib/style/button.css';

export default {
  install: (instance: any) => {
    for (let componentKey in components) {
      // @ts-ignore
      instance.use(components[componentKey]);
    }
  },
};
