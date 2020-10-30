import React from 'react'
import Pagination from './index'
import Table from '../Table'
import store from '../../store'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { TEST_DATA } from '../../constants'
import { usePagination } from '../../hooks'
import { act, renderHook } from '@testing-library/react-hooks'

/* There are more assertions here than need to be, can be segregated */
test('renders the table with pagination', () => {
  const {
    result: {
      current: { currentData, goToPage, pageCount, next, prev, currentPage },
    },
  } = renderHook(() => usePagination(TEST_DATA, 10))
  const { getAllByTestId } = render(
    <Provider store={store}>
      <Router>
        <Pagination
          goToPage={(num) => {
            goToPage(num)
          }}
          pageCount={pageCount}
          loading={false}
          next={next}
          prev={prev}
          currentPage={currentPage}
        >
          <Table data={currentData} loading={false} />
        </Pagination>
      </Router>
    </Provider>
  )
  const paginate = getAllByTestId('test-1')
  expect(paginate.length).toBe(2)

  act(() => {
    fireEvent.click(paginate[0])
  })

  const linkElement = screen.getByText(/Next/i)
  expect(linkElement).toBeInTheDocument()
})
