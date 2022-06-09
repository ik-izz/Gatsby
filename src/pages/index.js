import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the gatsby tutorial</p>
      <StaticImage 
      src="../images/logo.png"
      alt="Cat photo"
      />
    </Layout>
  )
}

export default IndexPage
