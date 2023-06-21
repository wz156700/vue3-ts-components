import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'stringField',
  setup(props, { slots, attrs }) {
    console.log(props)
    return () => {
      return <div>string field</div>
    }
  },
})
