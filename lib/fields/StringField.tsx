import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'stringField',
  setup(props, { slots, attrs }) {
    return () => {
      return <div>string field</div>
    }
  },
})
