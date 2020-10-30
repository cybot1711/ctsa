import { act, renderHook } from '@testing-library/react-hooks'
import { usePagination } from './index'
import { TEST_DATA } from '../constants'

test('should return the expected data', () => {
  const { result } = renderHook(() => usePagination(TEST_DATA, 10))

  expect(result.current.currentData.length).toEqual(10)
  expect(result.current.currentPage).toEqual(1)
  expect(result.current.pageCount).toEqual(27)
  expect(result.current.goToPage).toBeDefined()
  expect(result.current.next).toBeDefined()
  expect(result.current.prev).toBeDefined()
})

test('should go to page indices', () => {
  const { result } = renderHook(() => usePagination(TEST_DATA, 10))

  act(() => {
    result.current.goToPage(2)
  })

  expect(result.current.currentPage).toEqual(2)
})

test('should go to the next index', () => {
  const { result } = renderHook(() => usePagination(TEST_DATA, 10))

  act(() => {
    result.current.next()
  })

  expect(result.current.currentPage).toEqual(2)
})

test('should go to the next index', () => {
  const { result } = renderHook(() => usePagination(TEST_DATA, 10))

  act(() => {
    result.current.next()
    result.current.next()
    result.current.next()
    result.current.next()
    result.current.prev()
  })

  expect(result.current.currentPage).toEqual(4)
})
