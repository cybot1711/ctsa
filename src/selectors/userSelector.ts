import { CatFact, State } from '../interfaces'

export const userSelector = (state: State, id: string): CatFact | undefined =>
  state.factList.find((item) => {
    if (item.user) {
      return item._id === id
    }
  })
