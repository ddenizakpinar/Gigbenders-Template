import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="text-area">
          <h1>Gigbenders</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper
          </p>
          <ul>
            <a
              href=""
              rel="noreferrer"
              target="_blank"
            >
              <li className="facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </li>
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <li className="twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </li>
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <li className="instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </a>
            <a href="#">
              <li className="whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </li>
            </a>
          </ul>
          <p>Copyright © All Rights Reserved</p>
        </div>
      </div>
    )
  }
}
