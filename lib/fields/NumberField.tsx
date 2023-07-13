import { defineComponent, PropType } from 'vue'
import { FiledPropsDefine, CommonWidgetNames } from '../type'
import { getWidget } from '../theme'
export default defineComponent({
  name: 'numberField',
  props: FiledPropsDefine,
  setup(props, { slots, attrs }) {
    const NumberWidgetRef = getWidget(CommonWidgetNames.NumberWidget)
    const handleChange = (v: number) => {
      props.onChange(v)
    }
    return () => {
      const { schema, rootSchema, ...rest } = props
      const NumberWidget = NumberWidgetRef.value
      return <NumberWidget {...rest} onChange={handleChange} />
    }
  },
})
