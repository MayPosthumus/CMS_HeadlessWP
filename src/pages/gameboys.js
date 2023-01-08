import * as React from "react"
import { graphql,useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Gameboy from "../components/Gameboy/gameboy"

export default function GameboysPage() {
const data = useStaticQuery(graphql`
query MyQuery {
  allWpGameboy {
    edges {
      node {
        slug
        gameboyMeta {
          gameboyTitle
          gameboyImage {
            sourceUrl
          }
          description
          display
          screenCover
          battery
          shell
          buttons
          audio
        }
      }
    }
  }
}

`)
  
  return(
  <Layout>
    <h1>GameBoys</h1>
    <div>
    {data.allWpGameboy.edges.map((cGameboy,index) => <Gameboy key={index} gameboy={cGameboy.node}/>)}

    </div>
  </Layout>
)}