import { defineComponent, PropType } from 'vue'
import { FiledPropsDefine, CommonWidgetNames } from '../type'
import { getWidget } from '../theme'
export default defineComponent({
  name: 'stringField',
  props: FiledPropsDefine,
  setup(props, { slots, attrs }) {
    const handleChange = (v) => {
      props.onChange(v)
    }
    const TextWidgetRef = getWidget(CommonWidgetNames.TextWidget)
    return () => {
      const TextWidget = TextWidgetRef.value
      const { schema, rootSchema, ...rest } = props
      return <TextWidget {...rest} onChange={handleChange} />
    }
  },
})
