import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

function DrinkShow() {
  const [loading, setLoading] = useState(true);
  const [drink, setDrink] = useState(null);

  const { id } = useParams();

  const location = useLocation();

  // console.log(location)
  // console.log(window.location)

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
