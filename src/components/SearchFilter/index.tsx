import React, { ChangeEvent, FunctionComponent } from 'react'

export type Props = {
  searchTerm: string
  readonly handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
  readonly placeholder: string
}

const SearchFilter: FunctionComponent<Props> = ({
  searchTerm,
  handleSearch,
  placeholder,
}) => (
  <input
    data-testid="search"
    type="text"
    value={searchTerm}
    onChange={handleSearch}
    placeholder={placeholder}
  />
)

export default SearchFilter
