import React from "react"
import { Link } from "gatsby"

import * as styles from "./header.module.css"

const Header = () => (
  <header>
    <nav className={styles.nav}>
      <h1 className={styles.siteTitle}>May's Gameboys</h1>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link className={styles.navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link className={styles.navLinkText} to="/gameboys">
              GameBoys
            </Link>
          </li>
        </ul>
      </nav>
  </header>
)


export default Header
