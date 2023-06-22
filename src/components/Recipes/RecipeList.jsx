import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

export function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const apiRecipes = "http://localhost:3001/api/recipes/fried chicken"; //SACAR HARCODEADO
  useEffect(() => {
    fetch(apiRecipes)
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
      <h1>RECIPE LIST</h1>
      <ListGroup>
        {recipes.map((recipe, index) => (
          <ListGroup.Item key={index}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3 className="col-2">{recipe.title}</h3>
              <p className="col-2">{recipe.ingredients}</p>
              <img
                src={`${recipe.image}`}
                alt={recipe.title}
                style={{ width: "200px" }}
              />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
