import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import wellington_main from "../images/wellington_main.png";
import wellington_district from "../images/wellington_district.png";
import wellington_suburb from "../images/wellington_suburb.png";

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