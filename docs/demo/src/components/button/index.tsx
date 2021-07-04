import { defineComponent, computed, mergeProps, warn, PropType } from 'vue'
interface ButtonProps {
  type: 'primary' | 'dashed' | 'link'
}
const TpButton = defineComponent({
    setup(props, { slots }) {
    return () => (
      <button class='btn, btn-1'>21</button>
    )
  }
})

export default TpButton