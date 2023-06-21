import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'objectField',
  setup(props, { slots, attrs }) {
    return () => {
      return <div>ObjectField</div>
    }
  },
})
