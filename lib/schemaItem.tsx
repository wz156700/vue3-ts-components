import { defineComponent, PropType } from 'vue'

import { Schema, SchemaTypes } from './type'

import StringField from './fields/StringField'
import NumberField from './fields/NumberField'

export default defineComponent({
  name: 'schemaItem',
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
  setup(props, { slots, attrs }) {
    return () => {
      const { schema } = props
      //TODO:如果type 没写,可以猜测type类型
      const type = schema.type
      let Component: any
      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }
        default: {
          console.warn(`${type}is not supported`)
        }
      }

      return <Component {...props} />
    }
  },
})
