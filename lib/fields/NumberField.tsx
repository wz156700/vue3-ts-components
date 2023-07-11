import { defineComponent, PropType } from 'vue'
import { FiledPropsDefine } from '../type'
export default defineComponent({
  name: 'numberField',
  props: FiledPropsDefine,
  setup(props, { slots, attrs }) {
    console.log(props.onChange)
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
      return <input type="number" value={value} onInput={handleChange} />
    }
  },
})
