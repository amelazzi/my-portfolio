import * as React from "react"
import Layout from "../layout/layout"
import Seo from "../components/seo"

const IndexPage = () => { 
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Welcome to my portfolio</h1>
    </Layout>
  )
}

export default IndexPage
