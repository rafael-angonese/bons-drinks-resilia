import axios from "axios";
import React, { useEffect, useState } from "react";

function DrinkShow() {
  const id = 15346;
  const [loading, setLoading] = useState(true);
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    async function getDrink() {
      setLoading(true);
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      setDrink(response.data.drinks[0]);
      setLoading(false);
    }

    getDrink();
  }, []);

  return (
    <>
      Show de Drinks
      <br />
      {loading ? "loading..." : ""}
      <br />
      ID: {drink?.idDrink}
      <br />
      strDrink: {drink?.strDrink}
    </>
  );
}

export default DrinkShow;
