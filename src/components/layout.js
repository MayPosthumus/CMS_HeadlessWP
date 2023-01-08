import * as React from 'react'
import { Link } from 'gatsby'
import Header from './Header/header'
import Footer from './Footer/footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Header/>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
