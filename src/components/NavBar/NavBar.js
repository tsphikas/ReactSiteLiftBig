import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles/Global";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div class={styles.backfill}>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <a href="/" className={styles.navbarLogo}>
            LIFTBIG
          </a>

          <div className={styles.menuIcon} onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul
            className={click ? `${styles.navMenu} active` : `${styles.navMenu}`}
          >
            <li className={styles.navItem}>
              <a href="/" className={styles.navLinks} onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="/About"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="/Programs"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Programs
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="/Contact"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

/* <li className="nav-item">
<a
  href="/sign-up"
  className="nav-links-mobile"
  onClick={closeMobileMenu}
>
  Sign Up
</a>
</li> */
