import { mount } from '@vue/test-utils'
import HolusButton from '@/components/button/HolusButton.vue'

describe('HolusButton.vue', () => {
  const props = {
    ariaLabel: undefined,
    block: false,
    direction: undefined,
    outline: false,
    rounded: false,
    size: 'normal',
    type: undefined,
    uppercase: false,
  }
  const ariaLabel = 'Button'
  let wrapper = null
  beforeEach(async () => {
    wrapper = mount(HolusButton)
  })
  test('should match the basic snapshot', async () => {
    await wrapper.setProps({ ariaLabel })
    expect(wrapper.element).toMatchSnapshot()
  })
  test('should have all these properties', () => {
    const keys = Object.keys(props)
    keys.forEach((prop) => expect(wrapper.props()).toHaveProperty(prop))
  })
  test('should have this props and respective default values', () => {
    const wrapper = mount(HolusButton)
    expect(wrapper.props()).toEqual(props)
    expect(wrapper.props()).toEqual(props)
  })
  test('should have a text passed via slot that override ariaLabel to visual users', () => {
    const text = 'Visual button text'
    const wrapper = mount(HolusButton, {
      propsData: {
        ariaLabel,
      },
      slots: {
        default: `<span>${text}</span>`,
      },
    })
    expect(wrapper.find('.holus-button > span').text()).toBe(text)
    expect(wrapper.element.textContent).toBe(text)
  })

  test('should have CSS class accordlyng props settings', async () => {
    expect(wrapper.classes().length).toEqual(1)
    expect(wrapper.classes()).toEqual(['holus-button'])
    await wrapper.setProps({ block: true })
    expect(wrapper.classes()).toContain('holus-button--block')
    await wrapper.setProps({ color: 'primary' })
    expect(wrapper.classes()).toContain('holus-button--block')
    await wrapper.setProps({ direction: 'row' })
    expect(wrapper.classes()).toContain('holus-button--row')
    await wrapper.setProps({ outline: true })
    expect(wrapper.classes()).toContain('holus-button--outline')
    await wrapper.setProps({ rounded: true })
    expect(wrapper.classes()).toContain('holus-button--rounded')
    await wrapper.setProps({ size: 'small' })
    expect(wrapper.classes()).toContain('holus-button--small')
    await wrapper.setProps({ uppercase: true })
    expect(wrapper.classes()).toContain('holus-button--uppercase')
  })
})
