<h1>RECIPE DETAILS</h1>


export function RecipeDetails(props) {
    return (
      <div>
        <h1>  DETAILS </h1>
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