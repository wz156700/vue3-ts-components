import {
  computed,
  defineComponent,
  inject,
  PropType,
  provide,
  ComputedRef,
} from 'vue'

import { Theme, SelectionWidgetNames, CommonWidgetNames } from './type'

const THEME_PROVIDER_KEY = Symbol()

const ThemeProvider = defineComponent({
  name: 'ThemeProvider',
  props: {
    theme: {
      type: Object as PropType<Theme>,
      required: true,
    },
  },
  setup(props, { slots }) {
    // 使用computed的目的是当theme变化时，可以传递给子组件
    const context = computed(() => props.theme)

    // 使用provide提供context
    provide(THEME_PROVIDER_KEY, context)

    return () => slots.default && slots.default()
  },
})

// 提供工具函数，快速获取对应的widget组件
export function getWidget<T extends SelectionWidgetNames | CommonWidgetNames>(
  name: T,
) {
  const context: ComputedRef<Theme> | undefined =
    inject<ComputedRef<Theme>>(THEME_PROVIDER_KEY)

  if (!context) {
    throw new Error('vjsf theme required')
  }

  const widgetRef = computed(() => {
    return context.value.widgets[name]
  })

  return widgetRef
}

export default ThemeProvider
