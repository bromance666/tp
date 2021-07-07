import TpButton from './index';
export const ButtonPlugin = {
  install: (instance: any) => {
    instance.component(TpButton.name, TpButton);
  },
};
