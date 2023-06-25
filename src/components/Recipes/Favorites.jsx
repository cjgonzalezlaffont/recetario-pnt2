import React, { useEffect, useState } from "react";
import { RecipeList } from "./RecipeList";
import { useLocation } from "react-router-dom";

export function Favorites() {
  //const location = useLocation();
  //const search = location.state?.search || "";
  const [recipes, setRecipes] = useState([]);
  const apiFavorites =
    `http://localhost:3001/api/recipes/favorites/` +
    localStorage.getItem("_Id");

  useEffect(() => {
    fetch(apiFavorites)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <RecipeList Recipes={recipes} />
    </div>
  );
}
