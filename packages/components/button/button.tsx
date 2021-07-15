import { computed, defineComponent, PropType } from 'vue';
import { TpButtonProps } from '../../types/button';

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
  name: 'TpButton',
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
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean
  },
  setup(props: TpButtonProps, { slots }) {
    const rootClasses = computed(() => ({
      'tp-button': true,
      [`tp-button__${props.size}`]: SIZE_CLASS[props.size!],
      [`tp-button__${props.type}`]: TYPE_CLASS[props.type!],
      'tp-button__circle': props.circle,
      'tp-button__icon': props.loading,
      'tp-button__disabled': props.disabled
    }));
    return () => (
      <button class={rootClasses.value} disabled={props.disabled}>
        {props.loading}
        {props.loading ? (
          <div class="tp-loading">
            <div class="tp-loading__ring"></div>
          </div>
        ) : null}
        {slots.default ? slots.default() : '按钮'}
      </button>
    );
  },
});

export default TpButtonPlugin;
