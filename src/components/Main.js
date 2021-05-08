import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

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
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
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
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
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
          <p>
            <h3 className="major">Education</h3>
          </p>
          <p>
            Bachelors of Science, Statistics
          </p>
          <p>
            Certificate in Apiculture Level 3
          </p>
          <p>
            <h3 className="major">Work Experience</h3>
          </p>
          <p>
            Wilderland Organics (March 2020 - April 2021)
            <br/>
            Planning Team Leader, People Team Leader, Financial Manager
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
            </ul>
          </p>
          <p>
            St Andrew's Village (March 2017 - February 2020)
            <br/>
            Data Analyst
          </p>
          <ul>
            <li>
              Using Excel, Python, Power BI, and R to create databases, data visualisations, statistical models, and
              time series to present an in depth summary of our healthcare outcomes to the Executive Team weekly
            </li>
            <li>
              Manage the supply, costings, installation, training, and management of new IT infrastructure on site
              (Time keeping devices, Cloud Based Healthcare management software, and 600+ RFID keytag locks with database
              management for appropriate access levels)
            </li>
          </ul>
          <p>
            Positive ID & Sth Akl Line Markers (April 2015 - March 2017)
            <br/>
            Office Administrator
            <ul>
              <li>
                Extensive usage of Xero for bookkeeping
              </li>
              <li>
                Liaising with external companies to  determine and deliver requirements
              </li>
            </ul>
          </p>
          <ul>
            <li>
              2IC of two small businesses
            </li>
          </ul>
          <p>
            Eastridge & Accent Construction (September 2010 - January 2012)
            <br/>
            Hammerhand
          </p>
          <p>
            <h3 className="major">Volunteership</h3>
            <p>
              Kiwiburn Web Team Member (May 2021 - Current)
            </p>
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
