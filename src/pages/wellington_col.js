import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import wellington_main from'../images/wellington_main.png'
import wellington_district from'../images/wellington_district.png'
import wellington_suburb from'../images/wellington_suburb.png'


const SecondPage = () => (
  <Layout>
    <h1>Investigating Wellington rents</h1>
      <img src={wellington_main}
           width="800px" alt="wellington rentals overview"/>
      <br />
      <img src={wellington_district}
           width="800px" alt="wellington rentals overview"/>
      <br />
      <img src={wellington_suburb}
           width="960px" alt="wellington rentals overview"/>
      <br />

    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default SecondPage