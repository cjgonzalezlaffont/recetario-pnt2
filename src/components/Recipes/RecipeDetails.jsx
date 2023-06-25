import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export function RecipeDetails() {
  const isFavorite = true;
  const location = useLocation();
  const details = location.state?.Recipe || "";
  //console.log(details.Title);
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
            className={`btn btn-outline-danger btn-lg ${
              isFavorite ? "active" : ""
            }`}
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
