import { defineComponent, PropType, inject } from 'vue'
import { SchemaFormContextKey } from '../context'
export default defineComponent({
  name: 'objectField',
  setup(props, { slots, attrs }) {
    const context = inject(SchemaFormContextKey)
    console.log(context)
    return () => {
      return <div>ObjectField</div>
    }
  },
})
