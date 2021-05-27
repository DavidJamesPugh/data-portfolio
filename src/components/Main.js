import PropTypes from 'prop-types'
import React from 'react'
import pic03 from '../images/pic03.jpg'
import wellington_plot from'../images/wellington_district.png'
import {Link} from "gatsby";

class Main extends React.Component {
  render() {
    let close = (
      <div
    className="close"
    onClick={() => {
      this.props.onCloseArticle()
    }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >

          <h2 className="major">Project List</h2>
          <img src={wellington_plot} height="100px" width="195px" alt="ridgeplot" />
          <Link to="/wellington_col" target="_blank">Wellington Rents</Link>
          <p>Investigating Rents in Wellington</p>

          {close}
        </article>


        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
            <h3 className="major align-center">Education</h3>

            <h4>Bachelors of Science, Statistics
            <br />The University of Auckland</h4>
          <p className="small">
            Statistics
            <br/>Computer Science
            <br/>Maths
            <br/>Philosophy
            <br/>Accounting
          </p>

            <h4>Certificate in Apiculture Level 3
            <br />Toi Ohomai Institute of Tecnology
            </h4>
          <p className="small">
            Hive Inspections
            <br/>Honey Extraction (3 Frame Spinner)
            <br/>Queen Rearing
            <br/>Feeding
            <br/>Disease & Pest Management
            <br/>Education & Teaching
          </p>
          <h3 className="major">Work Experience</h3>

          <h4 className="align-center">Wilderland Organics (March 2020 - April 2021)
            <br/>
            Planning, People Team Leader, Financial Manager
          </h4>
          <p>
            <ul>
              <li>
              Leading volunteers, and supporting Students and other community members to enable work projects to flourish
              </li>
              <li>
                Bookkeeping and financial reports using Xero for Wilderland Trust
              </li>
              <li>
                Making and reporting of financial decisions to facilitate the functioning of Wilderland
              </li>
              <li>
                Developing policy for how to approach interpersonal issues in the community
              </li>
              <li>
                Fostering a healthy, collaborative culture that enables high quality work to be done
              </li>
              <li>
                Establish new strategies and systems in conjunction with the executive team for data management and access.
              </li>
            </ul>
          </p>

          <h4 className="align-center">St Andrew's Village (March 2017 - February 2020)
            <br/>
            Data Analyst
          </h4>
          <p>
            <ul>
              <li>
              Using Excel, Python, Power BI, and R to create databases, data visualisations, statistical models, and
              time series to present an in depth summary of our healthcare outcomes to the Executive Team weekly
              </li>
              <li>
              Manage the supply, costings, installation, training, and management of new IT infrastructure on site
              </li>
              <li>Assessing, prioritising and providing support to all staff and residents with
                IT issues and queries.
              </li>
              <li>
                Writing of extensive technical documentation
              </li>
              <li>Provide quarterly run chart summaries showing industry targets, trends,
                variation and intervention time points</li>
            </ul>
          </p>


          <h4 className="align-center">Positive ID & Sth Akl Line Markers (April 2015 - March 2017)
            <br/>
            Office Administrator
            </h4>
          <p>
            <ul>
              <li>
              2IC of two small businesses
              </li>
              <li>
                Extensive usage of Xero for bookkeeping
              </li>
              <li>
                Liaising with external companies to  determine and deliver requirements
              </li>
            </ul>
          </p>
          <h4 className="align-center">Eastridge & Accent Construction (Sept 2010 - Jan 2012)
            <br/>
            Hammerhand
          </h4>
          <ul>
            <li>
              Framing out walls, cladding, linings, finishing, and renovating to specification
            </li>
            <li>
              Assisting in labour around the various building sites in a Health and Safety conscious manner
            </li>
          </ul>


            <h3 className="major">Volunteership</h3>
            <h4 className="align-center">
              Kiwiburn Web Team Member (May 2021 - Current)
            </h4>
            <p>
            <ul>
              <li>
                Database creation and data migration into Airtable to support creation of timetables
                and volunteer rosters to facilitate organisation of Kiwiburn
              </li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major align-center">Contact</h2>
          <p>
            <ul className="contact">
            <li>
              davidjamespugh@gmail.com
            </li>
            <li>
              <a href="https://www.linkedin.com/in/david-james-pugh/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/DavidJamesPugh">Github</a>
            </li>
            </ul>
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
