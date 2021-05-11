import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Investigating Covid using Shiny</h1>
      <iframe height="400" width="400" frameBorder="no"
              src="Covidmap.html"></iframe>
    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default SecondPage
