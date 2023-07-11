import { shallowMount, mount } from '@vue/test-utils'
import SchemaForm, { NumberField } from '../../lib'
describe('HelloWorld.vue', () => {
  it('should render correct number field', () => {
    let value = 0
    const wrapper = mount(SchemaForm, {
      props: {
        schema: {
          type: 'number',
        },
        value: value,
        onChange: (v) => {
          value = v
        },
      },
    })
    const numberField = wrapper.findComponent({ name: 'numberField' })
    expect(numberField.exists()).toBeTruthy()
    const input = numberField.find('input')
    input.element.value = '123'
    input.trigger('input')
    expect(value).toBe(123)
  })
})
