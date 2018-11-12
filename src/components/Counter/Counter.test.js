import React from 'react'
import Counter from './Counter'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

test('counter increments the count', () => {
  const container = shallow(<Counter />)
  const button = container.find('.counter__button')
  button.simulate('click')
  expect(button.textContent).toBe('1')
})
