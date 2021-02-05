import React, { Component } from "react"
export default class ServiceCard extends Component {
  render() {
    let data = this.props.data
    return (
      <div className="service-card ">
        <div className="img-container">
          <img
            alt={data.title}
            style={{
              width: data.image.size,
              height: data.image.size,
            }}
            src={data.image.src}
          />
        </div>
        <h5>{data.title}</h5>
        <p>{data.description}</p>
      </div>
    )
  }
}
