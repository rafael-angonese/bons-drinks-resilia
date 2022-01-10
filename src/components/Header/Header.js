import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import UserContext from "../../contexts/userContext";

import styles from "./styles.module.css";

function Header() {
  const { name } = useContext(UserContext);

  return (
    <header className={styles.navMenu}>
      <nav className={styles.myNav}>
        <Link className={styles.menuItem} to="/drinks">
          Drinks
        </Link>
        <Link className={styles.menuItem} to="/drinksFunk">
          Drinks Func
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
        <p>Usuario: {name}</p>
      </nav>
    </header>
  );
}

export default Header;
