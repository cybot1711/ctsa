import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Table from './index'
import { TEST_DATA } from '../../constants'
import store from '../../store'

test('renders the table', () => {
  render(
    <Provider store={store}>
      <Router>
        <Table data={TEST_DATA} loading={false} />
      </Router>
    </Provider>
  )
  const linkElement = screen.getByText(/USER ID/i)
  expect(linkElement).toBeInTheDocument()
})
