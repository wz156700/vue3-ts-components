import { defineComponent, PropType } from 'vue'
import { FiledPropsDefine, Schema } from '../type'
export default defineComponent({
  name: 'stringField',
  props: FiledPropsDefine,
  setup(props, { slots, attrs }) {
    const handleChange = (e: any) => {
      console.log(e)
      props.onChange(e.target.value)
    }
    return () => {
      const { value } = props
      return <input type="text" value={value} onInput={handleChange} />
    }
  },
})
