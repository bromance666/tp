import { defineComponent, getCurrentInstance, ref, ComponentInternalInstance } from 'vue';
// import { TpButton } from '../../../lib'

const ButtonView = defineComponent({
  name: 'ButtonView',
  props: {},
  setup() {
    const instance = getCurrentInstance();
    const TpButton: any = instance.appContext.components.TpButton;
    return () => (
      <div class="flex-column">
        {/* {val.value}
        <input type="text" v-model={val.value} placeholder={val.value} /> */}
        <div class="m-10">
          <div>按钮种类：</div>
          <TpButton>plain</TpButton>
          <TpButton type="primary">primary</TpButton>
        </div>
        <div class="m-10">
          <div>按钮大小：</div>
          <TpButton size="small">small</TpButton>
          <TpButton size="small" type="primary">
            small
          </TpButton>
          <TpButton size="normal">nromal</TpButton>
          <TpButton size="normal" type="primary">
            nromal
          </TpButton>
          <TpButton size="large" type="primary">
            large
          </TpButton>
        </div>
        <div class="m-10">
          <div>圆角按钮：</div>
          <TpButton size="small" circle>
            small
          </TpButton>
          <TpButton size="normal" circle>
            nromal
          </TpButton>
          <TpButton size="large" type="primary" circle>
            large
          </TpButton>
        </div>
        <div class="m-10">
          <div>加载按钮：</div>
          <TpButton size="small" loading>
            small
          </TpButton>
          <TpButton size="small" circle loading>
            small
          </TpButton>
          <TpButton size="normal" loading>
            nromal
          </TpButton>
          <TpButton size="large" type="primary" loading>
            primary
          </TpButton>
        </div>
        <div class="m-10">
          <div>禁用按钮：</div>
          <TpButton size="small" loading disabled>
            small
          </TpButton>
          <TpButton size="normal" disabled>
            nromal
          </TpButton>
          <TpButton size="large" type="primary" disabled>
            primary
          </TpButton>
        </div>
      </div>
    );
  },
});

export default ButtonView;
