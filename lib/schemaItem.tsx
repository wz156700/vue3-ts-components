import { defineComponent, PropType } from 'vue'

import { SchemaTypes, FiledPropsDefine } from './type'

import StringField from './fields/StringField.vue'
import NumberField from './fields/NumberField'

export default defineComponent({
  name: 'schemaItem',
  props: FiledPropsDefine,
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
