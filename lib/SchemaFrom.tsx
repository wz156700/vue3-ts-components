import { defineComponent, PropType, provide } from 'vue'
import { Schema, SchemaTypes } from './type'
import SchemaItem from './schemaItem'
import { SchemaFormContextKey } from './context'
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
    provide(SchemaFormContextKey, { SchemaItem })
    return () => {
      const { schema, value } = props
      const handleChange = (v: any) => {
        props.onChange(v)
      }
      return (
        <SchemaItem
          schema={schema}
          value={value}
          onChange={handleChange}
          rootSchema={schema}
        />
      )
    }
  },
})
