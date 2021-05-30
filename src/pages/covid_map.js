import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const ThirdPage = () => (
  <Layout>
    <h1>Investigating Covid using Shiny</h1>
      <iframe src="/src/pages/covid_map.html"></iframe>
      <br />
      <iframe src="https://davidjamespugh.shinyapps.io/nzcovidcases/"></iframe>
      <br />
    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default ThirdPage