import { Recipe } from "./Recipe";
//import { CardGroup } from "react-bootstrap";
export function RecipeList(props) {
  return (
    <div className={"container"}>
      <h1 className="text m-4 display-4">RECIPES</h1>
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
      </div>
    </div>
  );
}
