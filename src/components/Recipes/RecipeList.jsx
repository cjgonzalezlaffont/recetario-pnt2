import { Recipe } from "./Recipe";
//import { CardGroup } from "react-bootstrap";
export function RecipeList(props) {
  return (
    <div>
      <h1> ☻ ☻ ☻ RECIPE LIST ☻ ☻ ☻</h1>
      <div className="card-group d-flex justify-content-center align-items-center">
        {props.Recipes.map((recipe) => {
          return (
            <Recipe
              Image={recipe.image}
              Title={recipe.title}
              Ingredients={recipe.ingredients}
              Instructions={recipe.instructions}
            />
          );
        })}
        ;
      </div>
    </div>
  );
}
