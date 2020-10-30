import reducer from '../reducer'
import { State } from '../../interfaces'
import { TEST_DATA } from '../../constants'
import { GET_DATA, SET_LOADING } from '../types'

test('should set loading to true', () => {
  const initialState: State = { factList: [], loading: false }
  const result = reducer(initialState, { type: SET_LOADING, payload: true })
  expect(result.loading).toBe(true)
})

test('should set loading to false', () => {
  const initialState: State = { factList: [], loading: true }
  const result = reducer(initialState, { type: SET_LOADING, payload: false })
  expect(result.loading).toBe(false)
})

test('should update factList on GET_DATA', () => {
  const initialState: State = { factList: [], loading: true }
  const result = reducer(initialState, { type: GET_DATA, payload: TEST_DATA })
  expect(result.factList).toBe(TEST_DATA)
})

test('should should do nothing on error', () => {
  const initialState: State = { factList: [], loading: true }
  const result = reducer(initialState, {
    type: GET_DATA,
    error: true,
  })
  expect(result).toBe(initialState)
})
