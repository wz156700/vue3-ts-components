import { shallowMount, mount } from '@vue/test-utils'
import SchemaForm, { NumberField, StringField } from '../../lib'
describe('ObjectFiled', () => {
  let schema: any
  // 进入每个测试用例前初始化shema
  beforeEach(() => {
    schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'number',
        },
      },
    }
  })

  // 测试组件是否被正确渲染
  it('组件是否被正确渲染', async () => {
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: {},
        //eslint-disable-next-line
        onChange: () => {
          console.log()
        },
      },
    })

    const strFiled = wrapper.findComponent(StringField)
    const numField = wrapper.findComponent(NumberField)

    expect(strFiled.exists()).toBeTruthy()
    expect(numField.exists()).toBeTruthy()
  })

  it('组件值变化时是否正确更新', async () => {
    let value: any = {}
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: value,
        onChange: (v) => {
          value = v
          console.log(v)
        },
      },
    })

    const strFiled = wrapper.findComponent(StringField)
    const numField = wrapper.findComponent(NumberField)

    await strFiled.props('onChange')('1')
    expect(value.name).toEqual('1')
    await numField.props('onChange')(1)
    expect(value.age).toEqual(1)
    // expect(numField.exists()).toBeTruthy()
  })

  it('组件的值变为undefined时是否被正确处理', async () => {
    let value: any = {
      name: '123',
    }
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: value,
        onChange: (v) => {
          value = v
        },
      },
    })

    const strFiled = wrapper.findComponent(StringField)
    // const numField = wrapper.findComponent(NumberFiled)
    await strFiled.props('onChange')(undefined)

    expect(value.name).toBeUndefined()
    // expect(numField.exists()).toBeTruthy()
  })
})
