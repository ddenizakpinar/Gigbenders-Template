import React, { Component } from "react"
import Layout from "../components/Layout"
import Navbar from "../components/shared/NavigationBar"
import Landing from "../components/shared/Landing"
import Divider from "../components/shared/Divider"
import Services from "../components/shared/Services"
import Info from "../components/shared/Info"
import Footer from "../components/shared/Footer"
import Contact from "../components/shared/Contact"
import { Helmet } from 'react-helmet'
export default class Home extends Component {

  render() {
    if (typeof window === `undefined`) {
      return <div></div>
    }
    return (
      <>
        <Helmet title="Gigbenders" defer={false} />
        <Layout>
          <Navbar />
          <Landing />
          <Divider />
          <Services />
          <Info />
          <Contact />
          <Footer />
        </Layout>
      </>
    )
  }
}
