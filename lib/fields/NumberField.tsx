import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'numberField',
  setup(props, { slots, attrs }) {
    return () => {
      return <div>number field</div>
    }
  },
})
