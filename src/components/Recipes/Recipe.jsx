import { Link } from "react-router-dom";

export function Recipe(props) {
  return (
    <Link to={`./RecipeDetails`}>
      <div className="card p-2 m-4" style={{ width: "18rem", height: "31rem" }}>
        <img
          class="card-img-top"
          src={props.Image}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
          alt={props.Title}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              height: "3rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {props.Title}{" "}
          </h5>
          <p
            class="card-text"
            style={{
              height: "6rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
            }}
          >
            {props.Instructions.split(" ").slice(0, 20).join(" ") + "..."}
          </p>
          <a href="./RecipeDetails" className="btn btn-primary">
            Full recipe...
          </a>
        </div>
      </div>
    </Link>
  );
}
