import { defineComponent, PropType, inject } from 'vue'
import { useVJSFContext } from '../context'
import { FiledPropsDefine } from '../type'
import { isObject } from '../utils'

export default defineComponent({
  name: 'objectField',
  props: FiledPropsDefine,
  setup(props) {
    return () => {
      const { schema, rootSchema, value } = props
      const context = useVJSFContext()
      const { SchemaItem } = context
      const currentValue: any = isObject(value) ? value : {}
      const properties = schema.properties || {}

      const handleObjectFieldChange = (key: string, v: any) => {
        const value: any = isObject(props.value) ? props.value : {}

        // 如果为undefined，说明需要删除该项
        if (v === undefined) {
          delete value[key]
        } else {
          value[key] = v
        }

        props.onChange(value)
      }

      return Object.keys(properties).map((key, index) => {
        return (
          <SchemaItem
            schema={properties[key]}
            rootSchema={rootSchema}
            value={currentValue[key]}
            key={index}
            onChange={(v: any) => handleObjectFieldChange(key, v)}
          />
        )
      })
    }
  },
})
