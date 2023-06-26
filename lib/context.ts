import { defineComponent, inject } from 'vue'
import { CommonFieldType } from './type'

export const SchemaFormContextKey = Symbol()

export function useVJSFContext() {
  const context: { SchemaItem: CommonFieldType } | undefined =
    inject(SchemaFormContextKey)

  if (!context) {
    throw new Error('SchemaForm should be used')
  }

  return context
}
