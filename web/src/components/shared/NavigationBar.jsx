import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"

export default class Navbar extends Component {
  navbarRef = React.createRef()
  responseRef = React.createRef()

  constructor(props) {
    super(props)
    this.state = {
      responseIcon: false,
      response: false,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateSize)
    window.addEventListener("scroll", this.scroll)
    this.updateSize()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scroll)
  }

  updateSize = () => {
    if (window.innerWidth > 768) {
      this.setState({
        response: true,
      })
    } else {
      this.setState({
        response: false,
      })
    }
  }

  scroll = e => {
    let scrollTop = e.srcElement.documentElement.scrollTop

    if (scrollTop > 80) {
      this.navbarRef.current.style.boxShadow =
        "0px 1px 22px 11px rgba(204,204,204,0.44)"
    } else {
      this.navbarRef.current.style.boxShadow = "none"
    }
  }

  linkClick = () => {
    this.setState({ responseIcon: false })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            imageOne: file(relativePath: { eq: "gbblue.png" }) {
              childImageSharp {
                fixed(width: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <div className="navbar content-container" ref={this.navbarRef}>
            <div className="content">
              <div className="left-content">
                <ScrollLink
                  onClick={() => scroll.scrollToTop()}
                >
                  <Img
                    fixed={data.imageOne.childImageSharp.fixed}
                    fadeIn={false}
                    loading={"eager"}
                  />
                </ScrollLink>
                <ScrollLink
                  className="name"
                  onClick={() => scroll.scrollToTop()}
                >
                  Gigbenders
                </ScrollLink>
              </div>
              <div
                className="bars"
                onClick={() => {
                  this.setState(prevState => ({
                    responseIcon: !prevState.responseIcon,
                  }))
                }}
              >
                {this.state.responseIcon ? (
                  <FontAwesomeIcon icon={faTimes} />
                ) : (
                  <FontAwesomeIcon icon={faBars} />
                )}
              </div>
              <div
                ref={this.responseRef}
                className="right-content"
                style={
                  this.state.responseIcon || this.state.response
                    ? null
                    : { display: "none" }
                }
              >
                <ScrollLink
                  className="link"
                  activeClass="active"
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  onSetActive={this.handleSetActive}
                  onClick={() => {
                    this.linkClick()
                  }}
                >
                  Services
                </ScrollLink>
                <ScrollLink
                  className="link"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  onSetActive={this.handleSetActive}
                  onClick={() => {
                    this.linkClick()
                  }}
                >
                  About
                </ScrollLink>
                <ScrollLink
                  className="link"
                  onClick={() => {
                    this.linkClick()
                  }}
                >
                  Works
                </ScrollLink>

                <ScrollLink
                  className="link"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  onSetActive={this.handleSetActive}
                  onClick={() => {
                    this.linkClick()
                  }}
                >
                  Contact
                </ScrollLink>
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}
