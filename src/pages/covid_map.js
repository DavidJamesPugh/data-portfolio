import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Investigating Covid using Shiny</h1>
      <iframe height="400px" width="400" frameBorder="0"
              src="/src/pages/covid_map.html"></iframe>
      <br />
      <iframe height="400px" width="100%" frameBorder="0"
              src="https://davidjamespugh.shinyapps.io/nzcovidcases/"></iframe>
      <br />
    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default SecondPage