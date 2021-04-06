import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {StaticImage} from 'gatsby-plugin-image';


export default function Projects({ data }) {
  //! this data comes from page query below
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  // console.log(data)

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>My Work</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link key={project.id} to={"/projects/" + project.frontmatter.slug}>
              <div>
                <GatsbyImage image={getImage(project.frontmatter.thumb)} />
                
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Contact me at {contact}</p>
      </div>
    </Layout>
  )
}
//! export page query

export const query = graphql`
  query ProjectPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
