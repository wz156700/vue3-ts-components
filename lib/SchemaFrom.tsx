import { defineComponent, PropType } from 'vue'
import { Schema, SchemaTypes } from './type'
import SchemaItem from './schemaItem'
export default defineComponent({
  name: 'SchemaForm',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  setup(props, { slots, emit, attrs }) {
    return () => {
      const { schema, value } = props
      const handleChange = (v: any) => {
        props.onChange(v)
      }
      return (
        <SchemaItem schema={schema} value={value} onChange={handleChange} />
      )
    }
  },
})
