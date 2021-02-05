import React, { Component } from "react"
import data from "../../assets/data/info"
export default class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: false,
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateSize)
    this.updateSize()
  }
  updateSize = () => {
    if (window.innerWidth > 990) {
      this.setState({
        response: true,
      })
    } else {
      this.setState({
        response: false,
      })
    }
  }
  render() {
    return (
      <div className="info ">
        {data.map((item, index) => (
          <div
            id="about"
            key={"info-card" + index}
            className="info-card content-container"
            style={{
              flexDirection: this.state.response
                ? index % 2 === 1
                  ? "row-reverse"
                  : "row"
                : null,
            }}
          >
            <div className="left-box">
              {this.state.response}
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="right-box">
              <img alt={item.title} src={item.image}></img>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
