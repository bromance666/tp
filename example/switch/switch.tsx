import { defineComponent, PropType, ref } from 'vue';
import { ITpSwitchProps } from './type';
import './style.less'

const TpSwitchPlugin = defineComponent({
  name: 'TpSwitch',
  props: {
    loading: {
      type: Boolean as PropType<ITpSwitchProps['loading']>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<ITpSwitchProps['disabled']>,
      default: false,
    },
    size: {
      type: String as PropType<ITpSwitchProps['size']>,
      default: 'normal',
      validator: (prop: string) => ['normal', 'small', 'large'].includes(prop),
    },
    vModel: {
      type: String as PropType<ITpSwitchProps['vModel']>,
      default: '',
    },
    activeText: {
      type: String as PropType<ITpSwitchProps['activeText']>,
      default: '',
    },
    inactiveText: {
      type: String as PropType<ITpSwitchProps['inactiveText']>,
      default: '',
    },
    checkedChildren: {
      type: [String, Object],
      default: '开启',
    },
    unCheckedChildren: {
      type:  [String, Object],
      default: '关闭',
    },
    activeColor: {
      type: String as PropType<ITpSwitchProps['activeColor']>,
      default: '',
    },
    inactiveColor: {
      type: String as PropType<ITpSwitchProps['inactiveColor']>,
      default: '',
    },
    change: {
      type: Function,
      default: () => void(0),
    },
    focus: {
      type: Function,
      default: () => void(0),
    },
    blur: {
      type: Function,
      default: () => void(0),
    }
  },

  setup(props) {
    // @ts-ignore
    const { loading, disabled, size, vModel, activeText, inactiveText, checkedChildren, unCheckedChildren, activeColor, inactiveColor, change, focus, blur} = props
    const isActive = ref(true);
    const handleChangeSwitch = () => {
      if(disabled) return;
      isActive.value = !isActive.value;
      change && change(isActive.value);
    }
    return () => (
      <button 
        class={`
          tp-switch 
          ${isActive.value ? 'tp-switch-checked' : ''} 
          ${disabled ? 'tp-switch-disabled':''}
        `}
        onClick={handleChangeSwitch}
      >
        <div class="tp-switch-circle"></div>
        <div class="tp-switch-text">{isActive.value ? checkedChildren : unCheckedChildren}</div>
      </button>
    );
  },
});

export default TpSwitchPlugin;
