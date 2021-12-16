import React from "react";

import styles from "./styles.module.css";

class ConctactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sdf",
      email: "",
      phone: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    console.log(this);
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit(event) {
    alert(`seu formluario foi enviado: ${this.state.name}`);
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>Olá, mundo!</h1>

        <p className={styles.subTitle}>Meu primeiro form com JSX</p>

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label>Nome</label>

          <input
            value={this.state.name}
            onChange={this.handleChangeName}
            className={styles.meuInput}
          />

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
