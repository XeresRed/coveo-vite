import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import App from '../App'

test('must be render test message and increment counter', () => {
  const testMessage = 'Test Message'
  const result = render(<App>{testMessage}</App>)

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeDefined()
  const getCounterLabel = result.container.querySelector('#counterLabel');
  const getButtonCounter = result.container.querySelector('#counterIncrement');
  expect(getCounterLabel.textContent).toBe(`contador: 0`)

  fireEvent.click(getButtonCounter);
  expect(getCounterLabel.textContent).toBe(`contador: 1`)
})