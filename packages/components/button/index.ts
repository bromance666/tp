import TpButtonPlugin from './button';

export const TpButton = {
  install: (instance: any) => {
    instance.component(TpButtonPlugin.name, TpButtonPlugin);
  },
};
