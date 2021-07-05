import { defineComponent } from 'vue'

const TpButton = defineComponent({
    name: 'TpButton',
    setup(props, { slots }) {
    return () => (
      <button class='btn, btn-1'>button</button>
    )
  }
})

export default TpButton