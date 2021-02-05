import React, { Component } from "react"

import ServiceCard from "../shared/ServiceCard"

import data from "../../assets/data/services"

export default class Services extends Component {
  render() {
    return (
      <div id="service" className="services content-container">
        <h3 style={{ marginBottom: "20px" }}>Services</h3>
        <h2>
          Choose our <br /> Creative Services
        </h2>
        <div className="service-cards">
          {data.map((item, index) => (
            <ServiceCard data={item} key={"service-card" + index} />
          ))}
        </div>
      </div>
    )
  }
}
