import TpButtonTestPlugin from './button-test';

const TpButtonTest = {
  install: (instance: any) => {
    instance.component(TpButtonTestPlugin.name, TpButtonTestPlugin);
  },
};
export default TpButtonTest;
