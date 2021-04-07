import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Navbar() {
  //! query from the component
  //! we cannot use query variabels in these queries
  //! can be used once
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <nav>
     <Link to = '/'><h1>{title}</h1></Link> 
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}
