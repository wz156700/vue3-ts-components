import { defineComponent, PropType, provide } from 'vue'
import { Schema, Theme } from './type'
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
    theme: {
      type: Object as PropType<Theme>,
      required: true,
    },
  },
  setup(props, { slots, emit, attrs }) {
    provide(SchemaFormContextKey, { SchemaItem, theme: props.theme })
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
