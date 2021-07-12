import { defineComponent } from 'vue';

const ButtonView = defineComponent({
  name: 'ButtonView',
  props: {
  },
  setup() {
    return () => <button>按钮</button>;
  },
});

export default ButtonView;