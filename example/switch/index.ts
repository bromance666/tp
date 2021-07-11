import TpSwitchPlugin from './switch';

export const TpSwitch = {
  install: (instance: any) => {
    instance.component(TpSwitchPlugin.name, TpSwitchPlugin);
  },
};
