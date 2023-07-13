import { defineComponent } from 'vue'
import { CommonWidgetPropsDefine, CommonWidgetDefine } from '../type'

const TextWidget: CommonWidgetDefine = defineComponent({
  name: 'TextWidget',
  props: CommonWidgetPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      const num = Number(e.target.value)

      if (Number.isNaN(num)) {
        props.onChange(undefined)
      } else {
        props.onChange(num)
      }
    }
    return () => {
      const { value } = props
      return <input type="text" value={value} onInput={handleChange} />
    }
  },
})

export default TextWidget
