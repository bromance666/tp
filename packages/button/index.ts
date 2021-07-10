import TpButton from './button';

export const ButtonPlugin = {
  install: (instance: any) => {
    instance.component(TpButton.name, TpButton);
  },
};

export default TpButton
// export default ButtonPlugin