import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

/* Store should be mocked */
test('renders learn react link', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )

  const search = getByTestId('search')
  fireEvent.change(search, { target: { value: 'search some text' } })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(search.value).toBe('search some text')
  const linkElement = screen.getByText(/USER ID/i)
  expect(linkElement).toBeInTheDocument()
})
