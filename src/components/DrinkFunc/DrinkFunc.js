import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./styles.module.css";

const DrinkFunc = () => {
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState([]);

  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const response = await axios.get(url);
        setLoading(false);
        setDados(response.data.drinks);
      } catch (error) {
        console.log("tratar nosso erro aqui");
      }
    };
    // axios
    //   .get(url)
    //   .then((response) => {
    //     setLoading(false);
    //     setDados(response.data.drinks);
    //   })
    //   .catch((error) => {
    //     console.log("tratar nosso erro aqui");
    //   });

    getDrinks();
  }, []);

  return (
    <>
      <div className={styles.grid}>
        <h1 className={styles.tituloGrid}>Drinks</h1>
        {loading && <>Carregando...</>}

        {dados.map((item) => {
          return (
            <div
              onClick={() => {
                // navegar url/item.id
              }}
              key={item.idDrink}
              className={styles.card}
            >
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
};

export default DrinkFunc;
