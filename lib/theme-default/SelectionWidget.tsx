import { defineComponent, PropType, ref, watch } from 'vue'
import { SelectionWidgetPropsDefine } from '../type'
export default defineComponent({
  name: 'selectionWidget',
  props: SelectionWidgetPropsDefine,
  setup(props, ctx) {
    //eslint-disable-next-line
    let currentValueRef = ref(props.value)
    watch(currentValueRef, (newV, oldV) => {
      if (newV !== props.value) {
        props.onChange(newV)
      }
    })

    watch(
      () => props.value,
      (newV, oldV) => {
        if (newV != currentValueRef.value) {
          currentValueRef.value = newV
        }
      },
    )
    return () => {
      const options = props.options
      return (
        <select multiple={true} v-model={currentValueRef.value}>
          {options.map((op) => (
            <option value={op.value}>{op.key}</option>
          ))}
        </select>
      )
    }
  },
})
