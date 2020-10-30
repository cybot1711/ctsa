import { GET_DATA, SET_LOADING } from './types'
import { CatFact, State } from '../interfaces'
import { ThunkDispatch } from 'redux-thunk'

export type getDataActionType = {
  type: typeof GET_DATA
  payload?: CatFact[]
  error?: boolean
}

export type setLoadingActionType = {
  type: typeof SET_LOADING
  payload?: boolean
  error?: boolean
}

export type Actions = getDataActionType | setLoadingActionType

export type AppDispatch = ThunkDispatch<State, any, Actions>
