import React from 'react'
import { Link } from 'gatsby'
import wellington_main from'../images/wellington_main.png'
import wellington_district from'../images/wellington_district.png'
import wellington_suburb from'../images/wellington_suburb.png'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
      <img src={wellington_main} alt={"wellington region"}/>
      <img src={wellington_district} alt={"wellington districts"}/>
      <img src={wellington_suburb} alt={"wellington suburbs"}/>


    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default SecondPage
