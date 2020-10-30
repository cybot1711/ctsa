import { Action, applyMiddleware, CombinedState, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import reducer from './reducer'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const store = createStore(
  persistReducer(persistConfig, reducer),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState> & CombinedState<any>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store
