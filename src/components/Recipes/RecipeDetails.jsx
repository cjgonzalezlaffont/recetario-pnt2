import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

export function RecipeDetails() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const details = location.state?.Recipe || "";
  const urlGetFavoriteRecipe =
    "http://localhost:3001/api/recipes/favorites/" +
    details.Title +
    "/user/" +
    localStorage.getItem("_Id");
  const urlAddFavoriteRecipe =
    "http://localhost:3001/api/recipes/favorites/add"; //URL para agregar receta

  async function getFavoriteRecipe() {
    try {
      const response = await fetch(urlGetFavoriteRecipe, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }); //jwtcheck
      const res = await response.json();
      if (res) {
        setIsFavorite(true);
        setFavoriteId(res._id);
      }
      return res._id;
    } catch (error) {
      console.error(error);
    }
  }
  getFavoriteRecipe();
  const handleFavorites = (event) => {
    let urlDeleteFavoriteRecipe =
      "http://localhost:3001/api/recipes/favorites/delete/" + favoriteId;

    if (isFavorite && localStorage.getItem("token")) {
      fetch(urlDeleteFavoriteRecipe, {
        //jwtcheck
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          setIsFavorite(false);
          console.log("La solicitud de eliminación se completó con éxito");
        } else {
          console.log("Hubo un error en la solicitud de eliminación");
        }
      });
    } else if (!isFavorite && localStorage.getItem("token")) {
      fetch(urlAddFavoriteRecipe, {
        method: "POST",
        body: JSON.stringify({
          title: details.Title,
          instructions: details.Instructions,
          ingredients: details.Ingredients,
          image: details.URLImage,
          userId: localStorage.getItem("_Id"),
        }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
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
            className={`btn btn-outline-danger btn-lg ${
              isFavorite ? "active" : ""
            }`}
          >
            add to favorites&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {isFavorite && localStorage.getItem("token") ? (
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
