type UserName = {
  first: string
  last: string
}

export type User = {
  _id: string
  name: UserName
}

export type CatFact = {
  _id: string
  text: string
  type: string
  user?: User
  upvotes: number
  userUpvoted: boolean | null
}

export type State = {
  factList: CatFact[]
  loading: boolean
}

export type Pagination = {
  next: () => void
  prev: () => void
  goToPage: (page: number) => void
  currentData: CatFact[]
  currentPage: number
  pageCount: number
}
