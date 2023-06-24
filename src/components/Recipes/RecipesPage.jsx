import React, { useEffect, useState } from "react";
//import { ListGroup } from "react-bootstrap";
import { RecipeList } from "./RecipeList";

export function RecipesPage(props) {
  const [recipes, setRecipes] = useState([]);
  
  const apiRecipes = "http://localhost:3001/api/recipes/tomato"; //SACAR HARCODEADO

  
  useEffect(() => {
      fetch(apiRecipes)
      .then((response) => response.json())
      .then((data) => { setRecipes(data);
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
