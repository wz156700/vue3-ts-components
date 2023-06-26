import { computed, defineComponent, PropType } from 'vue'

import { SchemaTypes, FiledPropsDefine } from './type'

import StringField from './fields/StringField.vue'
import NumberField from './fields/NumberField.vue'
import ObjectField from './fields/ObjectField'
import ArrayField from './fields/ArrayField'

import { retrieveSchema } from './utils'
export default defineComponent({
  name: 'schemaItem',
  props: FiledPropsDefine,
  setup(props, { slots, attrs }) {
    const retrieveSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })
    return () => {
      const { schema } = props
      const retrievedSchema = retrieveSchemaRef.value
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
        case SchemaTypes.OBJECT: {
          Component = ObjectField
          break
        }
        case SchemaTypes.ARRAY: {
          Component = ArrayField
          break
        }
        default: {
          console.warn(`${type}is not supported`)
        }
      }

      return <Component {...props} schema={retrievedSchema} />
    }
  },
})
