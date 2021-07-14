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
      <div class="flex-column">
        {/* {val.value}
        <input type="text" v-model={val.value} placeholder={val.value} /> */}
        <div class="m-10">
          <div>按钮种类：</div>
          <TpButton>plain</TpButton>
          <TpButton type="primary">primary</TpButton>
          <TpButton type="primary" circle>
            circle
          </TpButton>
          <TpButton type="primary" loading>
            loading
          </TpButton>
        </div>
        <div class="m-10">
          <div>按钮大小：</div>
          <TpButton size="small">small</TpButton>
          <TpButton size="normal">nromal</TpButton>
          <TpButton size="large" type="primary">
            large
          </TpButton>
        </div>
      </div>
    );
  },
});

export default ButtonView;
