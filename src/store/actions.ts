import { GET_DATA, SET_LOADING } from './types'
import { Dispatch } from 'redux'
import { fetchCatData } from '../api'
import { AppThunk } from './index'

export const getData = (): AppThunk => async (dispatch: Dispatch) => {
  dispatch({ type: SET_LOADING, payload: true })
  try {
    const result = await fetchCatData()

    dispatch({
      type: GET_DATA,
      payload: result.all,
    })

    dispatch({ type: SET_LOADING, payload: false })
  } catch (e) {
    dispatch({
      type: GET_DATA,
      payload: e,
      error: true,
    })
    dispatch({ type: SET_LOADING, payload: false })
    throw e
  }
}
