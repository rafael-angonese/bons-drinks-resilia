import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.navMenu}>
        <nav className={styles.myNav}>
          <Link className={styles.menuItem} to="/drinks">
            Drinks
          </Link>
          <Link className={styles.menuItem} to="/time">
            Sobre Nós
          </Link>
          <Link className={styles.logo} to="/">
            Bons Drinks
          </Link>
          <Link className={styles.menuItem} to="/time">
            Nosso Time
          </Link>
          <Link className={styles.menuItem} to="/contact">
            Contato
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
