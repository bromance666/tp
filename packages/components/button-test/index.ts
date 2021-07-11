import TpButtonTestPlugin from './button-test';

export const TpButtonTest = {
  install: (instance: any) => {
    instance.component(TpButtonTestPlugin.name, TpButtonTestPlugin);
  },
};
