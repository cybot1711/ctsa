import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Layout, { Props as LayoutProps } from '../components/Layout'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Example/Layout',
  component: Layout,
} as Meta

const Template: Story<LayoutProps> = (args) => (
  <Router>
    <Layout {...args}>
      <h1>Layout</h1>
    </Layout>
  </Router>
)

export const Primary = Template.bind({})
