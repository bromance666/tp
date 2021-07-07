import { computed, defineComponent, PropType } from 'vue';
import { TpButtonProps } from '../types/button';
// import '../../lib/css/color.styl'
import '../styles/button.less';
const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
  large: 'large',
};
const TYPE_CLASS = {
  plain: 'plain',
  primary: 'primary',
};
const TpButtonPlugin = defineComponent({
  name: 'TpButtonPlugin',
  props: {
    size: {
      type: String as PropType<TpButtonProps['size']>,
      default: 'normal',
      validator: (prop: string) => ['normal', 'small', 'large'].includes(prop),
    },
    type: {
      type: String as PropType<TpButtonProps['type']>,
      default: 'plain',
      validator: (prop: string) => ['plain', 'primary'].includes(prop),
    },
  },
  setup(props: TpButtonProps, { slots }) {
    const rootClasses = computed(() => ({
      [`tp-button__${props.size}`]: SIZE_CLASS[props.size!],
      [`tp-button__${props.type}`]: TYPE_CLASS[props.type!],
      'tp-button': true,
    }));
    // console.log(rootClasses.value)
    return () => <button class={rootClasses.value}>{slots}</button>;
  },
});

export default TpButtonPlugin;
