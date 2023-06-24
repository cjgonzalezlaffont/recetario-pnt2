
//import { CardGroup } from "react-bootstrap";
import { Recipe } from "./Recipe";



export function RecipeList(props) {

  return (
    <div>
      <h1>RECIPE LIST</h1>
      <div className="card-group">
        {props.Recipes.map((recipe) => {
          return (
            <Recipe
              Image={recipe.image}
              Title={recipe.title}
              Ingredients={recipe.ingredients}
              Instructions={recipe.instructions}
            />
          );
        })};
  
        </div>
  
    </div>
  )
};


