import TpButton from './index';
const Plugin = {
  install: (instance: any) => {
    instance.component(TpButton.name, TpButton);
  },
};

export default Plugin;
