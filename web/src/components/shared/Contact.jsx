import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import emailjs from "emailjs-com"
import { toast } from "react-toastify"
export default class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }
  sendEmail = event => {
    event.preventDefault()
    const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: "",
      message: this.state.message,
    }
    emailjs
      .send(
        "",
        "",
        templateParams,
        ""
      )
      .then(
        function (response) {
          toast("Hold on... we're reading.")
          console.log("SUCCESS!", response.status, response.text)
        },
        function (response) {
          toast.error("Sad, we will never know what you said.")
          console.log("ERROR!", response.status, response.text)
        }
      )
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            imageOne: file(relativePath: { eq: "gbblue.png" }) {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <div id="contact" className="contact content-container">
            <div className="content-area">
              <h1>Let’s get in touch</h1>
              <p>
                Duis consequat sint velit aliquip eiusmod. Eu Lorem sunt ex nisi
                ex aute in quis et esse labore fugiat. Velit amet proident anim
                ex esse incididunt voluptate dolor tempor.
              </p>
              <div className="form-area">
                <div className="left-box">
                  <Img
                    fixed={data.imageOne.childImageSharp.fixed}
                    fadeIn={false}
                    loading={"eager"}
                  />
                  <h4>info@gigbenders.com</h4>
                </div>
                <div className="right-box">
                  <form>
                    <div className="input-group">
                      <input
                        name="name"
                        type="text"
                        placeholder=""
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                      />
                      <label
                        className={
                          this.state.name.length ? "label-control" : "label-top"
                        }
                        htmlFor="name"
                      >
                        Name
                      </label>
                    </div>
                    <div className="input-group">
                      <input
                        name="email"
                        type="email"
                        placeholder=""
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                      <label
                        className={
                          this.state.email.length
                            ? "label-control"
                            : "label-top"
                        }
                        htmlFor="email"
                      >
                        Email
                      </label>
                    </div>
                    <div className="input-group">
                      <textarea
                        name="message"
                        type="text"
                        placeholder=""
                        rows={6}
                        value={this.state.message}
                        onChange={e =>
                          this.setState({ message: e.target.value })
                        }
                      />
                      <label
                        className={
                          this.state.message.length
                            ? "label-control"
                            : "label-top"
                        }
                        htmlFor="message"
                      >
                        Your Message
                      </label>
                    </div>
                    <div className="button-container">
                      <button
                        onClick={event => this.sendEmail(event)}
                        disabled={
                          !(
                            this.state.name.length &&
                            this.state.email.length &&
                            this.state.message.length
                          )
                        }
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}
