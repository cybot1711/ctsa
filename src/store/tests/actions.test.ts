import { getData } from '../actions'
import { GET_DATA, SET_LOADING } from '../types'

test('returns a thunk action', async () => {
  const dispatch = jest.fn()
  const thunk = getData()

  await thunk(dispatch, () => ({ factList: [], loading: false }), null)
  expect(dispatch).toHaveBeenCalledTimes(3)

  const action = dispatch.mock.calls
  expect(action[0][0].type).toBe(SET_LOADING)
  expect(action[0][0].payload).toBe(true)
  expect(action[1][0].type).toBe(GET_DATA)
  expect(action[1][0].payload).toBe(undefined)
  expect(action[2][0].type).toBe(SET_LOADING)
  expect(action[2][0].payload).toBe(false)
})
