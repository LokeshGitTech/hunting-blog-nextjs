import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
          <ul>
            <Link className={styles.navitems} href="/"><li>Home</li></Link>
            <Link className={styles.navitems} href="/about"><li>About</li></Link>
            <Link className={styles.navitems} href="/blog"><li>Blog</li></Link>
            <Link className={styles.navitems} href="/contact"><li>Contact</li></Link>
           </ul>
      </nav>
  )
}

export default Navbar