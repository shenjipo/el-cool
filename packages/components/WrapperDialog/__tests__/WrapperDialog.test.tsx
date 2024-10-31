import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import WrapperDialog from '../src/WrapperDialog.vue'

const AXIOM = 'Rem is the best girl'

describe('WrapperDialog.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <WrapperDialog>{AXIOM}</WrapperDialog>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
