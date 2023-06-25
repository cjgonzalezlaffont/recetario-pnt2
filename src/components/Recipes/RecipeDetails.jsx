import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

export function RecipeDetails() {
  const [isFavorite, setIsFavorite] = useState(false); // Cambié el valor inicial a `false`

  // useEffect(() => {
  //   setIsFavorite ();
  // }, []); // No se necesita añadir localStorage.token como dependencia



  const location = useLocation();
  const navigate = useNavigate();
  const details = location.state?.Recipe || "";

  const handleFavorites = (event) => {
    const urlRecipesFavorites = "http://localhost:3001/api/recipes/favorites/"+details.Title+"/user/"+localStorage.getItem("_Id");
    event.preventDefault();
    navigate("/favorites");
  

    fetch(urlRecipesFavorites)
      .then((response) => {
        if (response) {
          response.json();
          setIsFavorite(true);
          console.log("fetch si hay response"+response.json());
        } else {
          console.log("fetch si NO hay response"+response);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    fetch(urlRecipesFavorites, {
      method: "POST",
      body: JSON.stringify({
        title: details.Title,
        instructions: details.Instructions,
        ingredients: details.Ingredients,
        image: details.URLImage,
        userId: localStorage.getItem("_Id"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json();
        setIsFavorite(true);
        
      })
      .catch((error) => {
        console.error(error);
      });
    };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card p-2 m-4" style={{ width: "70%" }}>
        <img
          className="card-img-top"
          src={details.URLImage}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
          alt={details.Title}
        />
        <div className="card-body">
          <h5 className="card-title">{details.Title}</h5>
          <p className="card-text">{details.Instructions}</p>
          <h6>Ingredients:</h6>
          <ul>
            {details.Ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="text-end p-4">
          <button
            onClick={handleFavorites}
            className={`btn btn-outline-danger btn-lg ${isFavorite ? "active" : ""}`}
          >
            add to favorites&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            {isFavorite ? (
              <FontAwesomeIcon icon={faHeart} />
            ) : (
              <FontAwesomeIcon icon={faHeartRegular} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

          
