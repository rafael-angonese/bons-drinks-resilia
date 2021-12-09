import React from "react";

class ConctactForm extends React.Component {
  render() {
    const meuInput = {
      width: "100%",
      padding: "12px 20px",
      marginBottom: "20px",
    };
    const meuBotao = {
      width: "80px",
      padding: "5px 20px",
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor: "#ddd255",
      border: "1px solid #cccccc",
      marginRight: "15px",
    };

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Olá, mundo!</h1>

        <p style={{ color: "green", textAlign: "center" }}>
          Meu primeiro form com JSX
        </p>

        <form style={{ width: "400px", margin: "0 auto" }}>
          <label>Nome</label>
          <input style={meuInput} />
          <label>Email</label>
          <input style={meuInput} />
          <label>Telefone</label>
          <input style={meuInput} />
          <button style={meuBotao}>Enviar</button>
        </form>
      </div>
    );
  }
}

export default ConctactForm;

