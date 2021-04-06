//! index.js is the root route for any subfolders

import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import {  Link } from "gatsby"
import {StaticImage} from 'gatsby-plugin-image';

export default function Home() { //! destructure the props to get the data

  
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Learn</h2>
          <h3>Apply </h3>
          <p>Create</p>
          <Link className={styles.btn} to="/projects">
            My projects
          </Link>
        </div>
        <StaticImage src = '../images/banner.png' alt='Banner'/>
      </section>
    </Layout>
  )
}


//! gatsby fire this query first of all and we get the data variable in the props object
//! this way is only for pages not components
//! so this is a page query
//! we can use query variable in this
// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `
