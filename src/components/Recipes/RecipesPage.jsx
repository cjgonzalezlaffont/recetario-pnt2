import React, { useEffect, useState } from "react";
import { RecipeList } from "./RecipeList";
import { useLocation } from "react-router-dom";

export function RecipesPage(props) {
  const location = useLocation();
  const search = location.state?.search || "";
  const [recipes, setRecipes] = useState([]);
  const apiRecipes = `http://localhost:3001/api/recipes/${search}`;

  useEffect(() => {
    fetch(apiRecipes)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]);
  return (
    <div
      className={
        "container d-flex justify-content-center align-items-center pt-2"
      }
    >
      <RecipeList Recipes={recipes} />
    </div>
  );
}
