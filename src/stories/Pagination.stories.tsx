import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0'

import Pagination, { Props as PaginationProps } from '../components/Pagination'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Example/Pagination',
  component: Pagination,
} as Meta

const Template: Story<PaginationProps> = (props) => (
  <Router>
    <Pagination {...props}>
      <h1>Pagination</h1>
    </Pagination>
  </Router>
)

export const Primary = Template.bind({})
Primary.args = {
  currentPage: 1,
  next: () => {
    return 2
  },
  prev: () => {
    return 1
  },
  goToPage: (num) => num,
  pageCount: 30,
}
