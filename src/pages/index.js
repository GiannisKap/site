import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import background from "../images/back-01.png"
// import { css } from "@emotion/core"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  

{/* // Tagged template literal styles:
const backgroundStyles = css`
  background-image: url(${background}); */}
`
    <StaticImage
      src="../images/letters-01.png"
      width={2200}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

  </Layout>
)

export default IndexPage
