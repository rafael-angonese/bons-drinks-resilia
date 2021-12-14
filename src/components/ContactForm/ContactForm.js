import React from "react";

import styles from "./styles.module.css";

class ConctactForm extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.title}>Olá, mundo!</h1>

        <p className={styles.subTitle}>Meu primeiro form com JSX</p>

        <form className={styles.form}>
          <label>Nome</label>
          <input className={styles.meuInput} />
          <label>Email</label>
          <input className={styles.meuInput} />
          <label>Telefone</label>
          <input className={styles.meuInput} />
          <button className={styles.meuBotao}>Enviar</button>
        </form>
      </div>
    );
  }
}

export default ConctactForm;
