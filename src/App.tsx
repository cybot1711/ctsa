import './components/Layout/styles/index.scss'
import React, {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import Table from './components/Table'
import { CatFact } from './interfaces'
import Layout from './components/Layout'
import { useGetFactData, usePagination } from './hooks'
import Pagination from './components/Pagination'
import SearchFilter from './components/SearchFilter'

const App: FunctionComponent = () => {
  /* Set initial state */
  const { factList, loading } = useGetFactData()
  const [data, setData] = useState<CatFact[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [resultsPerPage] = useState(20)

  /* Set local data copy */
  useEffect(() => {
    if (data.length === 0) {
      setData(factList)
    }
  }, [factList])

  /* Get pagination data */
  const {
    currentData,
    goToPage,
    pageCount,
    next,
    prev,
    currentPage,
  } = usePagination(data, resultsPerPage)

  /* Handle input change */
  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }, [])

  /* Handle text search and update local data */
  useEffect(() => {
    const term = searchTerm.toLowerCase()
    if (term.length !== 0) {
      goToPage(1)
      // I would have liked to destructure this but the length of the list does not allow for speedy evaluation
      const results = factList.filter(
        (item: CatFact) =>
          item.text.toLowerCase().includes(term) ||
          (item.user && item.user.name.first.toLowerCase().includes(term)) ||
          (item.user && item.user.name.last.toLowerCase().includes(term))
      )

      if (results.length !== 0) setData(results)
    } else {
      setData(factList)
    }
  }, [searchTerm])

  return (
    <Layout>
      <span className="input">
        <SearchFilter
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          placeholder="Search"
        />
      </span>

      <Pagination
        goToPage={goToPage}
        pageCount={pageCount}
        loading={loading}
        next={next}
        prev={prev}
        currentPage={currentPage}
      >
        <Table data={currentData} loading={loading} />
      </Pagination>
    </Layout>
  )
}

export default App
