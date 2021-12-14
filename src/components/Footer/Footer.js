import React from "react";

import styles from "./styles.module.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p className={styles.text}>
          Resilia {new Date().getFullYear()} - Alguns direitos reservados
        </p>
      </footer>
    );
  }
}

export default Footer;
