import React, { useState, useEffect } from "react";

const DrinkFunc = () => {
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState([]);

  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

  useEffect(() => {
    fetch(url)
      .then((resposta) => resposta.json())
      .then((json) => {
        setLoading(false);
        setDados(json.drinks);
      });
  });

  return (
    <>
      {loading && <>Carregando...</>}

      {dados.map((item) => {
        return (
          <div
            key={item.idDrink}
            //   className={styles.card}
          >
            <img
              src={item.strDrinkThumb}
              alt={item.strDrink}
              //   className={styles.cardImagem}
            />
            <h3
            // className={styles.cardTitulo}
            >
              {item.strDrink}
            </h3>
          </div>
        );
      })}
    </>
  );
};

export default DrinkFunc;
