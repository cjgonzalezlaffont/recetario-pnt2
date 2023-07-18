import React, { useEffect, useState } from "react";
import { RecipeList } from "./RecipeList";

export function Favorites() {
  const [recipes, setRecipes] = useState([]);
  const apiFavorites =
    `http://localhost:3001/api/recipes/favorites/` +
    localStorage.getItem("_Id");
  useEffect(() => {
    fetch(apiFavorites, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setRecipes(data);
        }
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
