import { Recipe } from "./Recipe";

export function RecipeList(props) {
  return (
    <div className={"container"}>
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
