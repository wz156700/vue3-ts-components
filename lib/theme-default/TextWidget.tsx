import { defineComponent } from 'vue'
import { CommonWidgetPropsDefine, CommonWidgetDefine } from '../type'

const TextWidget: CommonWidgetDefine = defineComponent({
  name: 'TextWidget',
  props: CommonWidgetPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      console.log(e.target.value)
      props.onChange(e.target.value)
    }
    return () => {
      const { value } = props
      return <input type="text" value={value} onInput={handleChange} />
    }
  },
})

export default TextWidget
