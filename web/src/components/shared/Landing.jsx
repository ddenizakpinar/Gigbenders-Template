import React, { Component, createRef } from "react"
import lottie from "lottie-web"
import animation from "../../assets/animations/animation7.json";

export default class Landing extends Component {
  animationRef = createRef();

  componentDidMount() {
    lottie.loadAnimation({
      container: this.animationRef.current,
      animationData: animation,
      renderer: "svg",
      loop: true,
      autoplay: true,
    })
  }

  render() {
    return (
      <div id="home" className="landing">
        <div className="content-container landing-content">
          <div className="left-box">
            <h3 style={{ marginBottom: "20px" }}>We Are Professional</h3>
            <h1 style={{ marginBottom: "20px" }}>
              We are the Best Proffesional Creative Agency
            </h1>
            <p>
              Mollit do duis tempor eiusmod anim deserunt aliqua magna commodo
              tempor aliqua fugiat anim. Est non sunt duis veniam anim laboris
              aliqua proident nostrud velit eu Lorem qui enim. Fugiat in ipsum
              ullamco quis voluptate irure labore est. Reprehenderit non sint in
              eiusmod occaecat excepteur.
            </p>
          </div>
          <div className="right-box">
            <div className="animation-container image" ref={this.animationRef} />
          </div>
        </div>
      </div>
    )
  }
}
