import { defineComponent, PropType, ref, watch } from 'vue'
export default defineComponent({
  name: 'selectionWidget',
  props: {
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
    options: {
      type: Array as PropType<
        {
          key: string
          value: any
        }[]
      >,
      required: true,
    },
  },
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
