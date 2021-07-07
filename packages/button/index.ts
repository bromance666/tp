import TpButton from './button';

export const ButtonPlugin = {
  install: (instance: any) => {
    instance.component(TpButton.name, TpButton);
  },
};
