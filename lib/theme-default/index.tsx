import SelectionWidget from './SelectionWidget'
import TextWidget from './TextWidget'
import NumberWidget from './NumberWidget'
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
    TextWidget,
    NumberWidget,
  },
}
