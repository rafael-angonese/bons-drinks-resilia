import React from "react";

import styles from "./styles.module.css";

class Drinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      dados: [],
    };

    //url que vamos usar para o fetch dos dados
    this.url =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
  }

  componentDidMount() {
    fetch(this.url)
      .then((resposta) => resposta.json())
      .then((json) => {
        // após ter os dados da API, precisamos guardá-los em um estado para que ao estado ser atualizado,
        // o React gere uma nova renderização do componente
        // precisamos ver também como é o retorno do servidor,
        // aqui precisamos acessar o objeto dados para ter o array com os drinks
        return this.setState({ loading: false, dados: json.drinks });
      });
  }

  render() {
    return (
      <>
        <div className={styles.grid}>
          <h1 className={styles.tituloGrid}>Drinks</h1>

          {this.state.loading && <>Carregando...</>}
          {this.state.loading ? "Carregando..." : ""}

          {/*vamos usar o método de array map (pois a resposta que temos no estado é um array de objetos) 
          e vamos iterar sobre ele retornando uma li com o nome do drink 
          - OBS.: quando temos elementos HTML sendo gerados com map ou outros iteradores é necessário ter um atributo 
          "key" nesse elemento. Esse atributo "key" tem que ser um identificador único para que o react 
          saiba qual elemento na árvore do DOM ele é. 
          No nosso caso estamos usando o próprio id dos Drinks como esse key,
          mas poderia ser também o argumento index do map*/}
          {this.state.dados.map((item) => {
            return (
              <div key={item.idDrink} className={styles.card}>
                <img
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                  className={styles.cardImagem}
                />
                <h3 className={styles.cardTitulo}>{item.strDrink}</h3>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Drinks;
