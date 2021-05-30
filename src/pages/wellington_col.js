import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import wellington_main from'../images/wellington_main.png'
import wellington_district from'../images/wellington_district.png'
import wellington_suburb from'../images/wellington_suburb.png'


const SecondPage = () => (
  <Layout>
    <h1>Investigating Wellington rents</h1>
      <iframe src={wellington_main}></iframe>
      <br />

    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default SecondPage