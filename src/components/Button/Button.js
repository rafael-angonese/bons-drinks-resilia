import React from "react";

class Button extends React.Component {
  constructor(props) {
    // devemos passar as props pelo constructor e pelo super para não ficarem undefined
    super(props);
    // declarando o estado e inicializando no constructor(sempre inicializamos no constructor e nunca atualizamos no constructor!!)
    this.state = {
      disabled: false,
    };
    // fazendo o bind do this - importante para que o método use o mesmo contexto da classe
    this.meuClique = this.meuClique.bind(this);
  }

  // método que manipula evento do clique do botão
  meuClique(event) {
    console.log("Fui clicado");
    // ao clicar o estado muda para verdadeiro pra deixar o botao disabled
    // importante lembrar que setState eh uma funcao e estamos acessando o objeto state via desestruturacao
    // poderia ser tambem:
    //this.setState(this.setState.disabled = true);
    this.setState({ disabled: true });
    // adicionamos na funcao de clique o setinterval que apos 3000 milisegundos (3s) vai disparar o setState de volta para falso para o botao voltar ao normal
    setInterval(() => {
      this.setState({ disabled: false });
    }, 3000);
  }

  render() {
    return (
      <button disabled={this.state.disabled} onClick={this.meuClique}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
