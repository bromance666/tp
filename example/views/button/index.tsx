import { defineComponent, getCurrentInstance, ref, ComponentInternalInstance } from 'vue';
// import { TpButton } from '../../../lib'

const ButtonView = defineComponent({
  name: 'ButtonView',
  props: {},
  setup(props) {
    const instance = getCurrentInstance();
    const TpButton: any = instance.appContext.components.TpButton;
    const ButtonX = TpButton as any;
    const val = ref('12312321');
    const scopedSlots = {};

    return () => (
      <div>
        {val.value}
        <input type="text" v-model={val.value} placeholder={val.value} />
        {/* <TpButton v-slots={{
            default: (n: string) => <span>这是按钮</span>,
          }}></TpButton> */}
        <TpButton>这是按钮</TpButton>
      </div>
    );
  },
});

export default ButtonView;
