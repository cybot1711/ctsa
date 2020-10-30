import { useEffect, useState } from 'react'
import { CatFact, Pagination, State } from '../interfaces'
import { AppDispatch } from '../store/actionTypes'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../store/actions'
import { fetchAvatarData } from '../api'
import { useParams } from 'react-router-dom'
import { userSelector } from '../selectors/userSelector'

export const usePagination = (
  data: CatFact[],
  itemsPerPage: number
): Pagination => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageCount = Math.ceil(data.length / itemsPerPage)

  const begin = (currentPage - 1) * itemsPerPage
  const end = begin + itemsPerPage
  const currentData = data.slice(begin, end)

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, pageCount))
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }

  function goToPage(page: number) {
    const pageNumber = Math.max(1, page)
    setCurrentPage(() => Math.min(pageNumber, pageCount))
  }

  return { next, prev, goToPage, currentData, currentPage, pageCount }
}

export const useGetFactData = (): State => {
  const dispatch: AppDispatch = useDispatch()

  const { factList, loading } = useSelector<State, State>((state) => state)

  useEffect(() => {
    if (factList.length === 0) {
      dispatch(getData())
    }
  }, [dispatch, factList.length])

  return { factList, loading }
}

export const useFetchAvatarData = (): any => {
  const { id } = useParams<{ id: string }>()
  // eslint-disable-next-line no-console
  console.log(id)
  const fact = useSelector<State, CatFact | undefined>((state) =>
    userSelector(state, id)
  )
  const [response, setResponse] = useState<string | null>(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetchAvatarData(
          fact && fact.user
            ? `${fact.user.name.first}+${fact.user.name.last}`
            : ''
        )
        setResponse(URL.createObjectURL(res))
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [fact])
  return { response, error, isLoading, data: fact }
}
