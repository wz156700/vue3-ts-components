import SelectionWidget from './Selections'
import { defineComponent } from 'vue'
import { CommonWidgetPropsDefine, CommonWidgetDefine } from '../type'

const CommonWidget: CommonWidgetDefine = defineComponent({
  name: 'CommonWidget',
  props: CommonWidgetPropsDefine,
  setup() {
    return () => null
  },
})

export default {
  widgets: {
    SelectionWidget,
    TextWidget: CommonWidget,
    NumberWidget: CommonWidget,
  },
}
