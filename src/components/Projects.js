import PropTypes from 'prop-types'
import React from 'react'


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
                style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}
            >

                <article
                    id="project1"
                    className={`${this.props.article === 'project1' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{display: 'none'}}
                >

                </article>


                <article
                    id="project2"
                    className={`${this.props.article === 'project2' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{display: 'none'}}
                >
                </article>
                <article
                    id="project3"
                    className={`${this.props.article === 'project3' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{display: 'none'}}
                >
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