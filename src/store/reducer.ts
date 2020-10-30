import { GET_DATA, SET_LOADING } from './types'

import { State } from '../interfaces'
import { Actions } from './actionTypes'

const initialState: State = {
  factList: [],
  loading: false,
}

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case GET_DATA:
      if (action.error) {
        return state
      } else {
        return <State>{
          ...state,
          factList: action.payload,
        }
      }

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload || false,
      }
    default:
      return state
  }
}

export default reducer
