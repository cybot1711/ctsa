import './styles/index.scss'
import React, { FunctionComponent, ReactElement } from 'react'

export type Props = {
  readonly goToPage: (num: number) => void
  readonly children: ReactElement
  readonly loading: boolean
  readonly pageCount: number
  readonly next: () => void
  readonly prev: () => void
  readonly currentPage: number
}

const Pagination: FunctionComponent<Props> = ({
  goToPage,
  children,
  loading,
  pageCount,
  next,
  prev,
  currentPage,
}) => {
  const pageNumbers = []
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i)
  }
  const numbersRow = (
    <ul className="pagination">
      {pageNumbers.map((number) => {
        return (
          <li
            data-testid={`test-${number}`}
            className={currentPage === number ? 'active' : undefined}
            key={number}
            onClick={() => goToPage(number)}
          >
            {number}
          </li>
        )
      })}
    </ul>
  )
  return (
    <>
      <div className="mobile-page">
        <button disabled={currentPage === 1} onClick={prev}>
          Prev
        </button>
        <span>
          {currentPage} of {pageCount}
        </span>
        <button disabled={currentPage === pageCount} onClick={next}>
          Next
        </button>
      </div>
      {!loading && numbersRow}
      {children}
      {!loading && numbersRow}
    </>
  )
}

export default Pagination
