import { Component } from "react"
import { navigate } from "gatsby"
export default class NotFound extends Component {
  componentDidMount() {
    navigate("/")
  }

  render() {
    return null
  }
}
