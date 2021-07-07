import TpButton from './button';

export const Button = {
  install: (instance: any) => {
    instance.component(TpButton.name, TpButton);
  },
};
