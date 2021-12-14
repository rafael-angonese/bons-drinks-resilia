import React from "react";

import styles from "./styles.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.navMenu}>
        <nav className={styles.myNav}>
          <a
            href="#drinks"
            className={styles.menuItem}
            onMouseOver="this.style.color='red'"
          >
            Drinks
          </a>
          <a href="#sobre" className={styles.menuItem}>
            Sobre Nós
          </a>
          <a href="#home" className={styles.logo}>
            Bons Drinks
          </a>
          <a href="#time" className={styles.menuItem}>
            Nosso Time
          </a>
          <a href="#contact" className={styles.menuItem}>
            Contato
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
