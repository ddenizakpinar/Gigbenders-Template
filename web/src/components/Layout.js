import React, { Component } from "react"
import { ToastContainer } from "react-toastify"
export default class Layout extends Component {
  render() {
    return (
      <div className="layout ">
           <ToastContainer position="bottom-left" newestOnTop={true} />
        {this.props.children}
      </div>
    )
  }
}
