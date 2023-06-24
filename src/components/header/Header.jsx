import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  //hook para navegar a /recipes cuando se le da click al boton 'GO' del buscador
  const navigate = useNavigate();
  //ruta del recipes
  const navigateToRecipe = () => {
    navigate("/recipes");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-4">
        <div className="container-fluid">
          <a className="navbar-brand me-5" href="#">
            <img src={logo} alt="Bootstrap" width="120" height="50"></img>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-5 ms-lg-5">
                <Link to={"/"} className={"text-decoration-none"}>
                  <button className={"nav-link"}>
                    <h5>Home</h5>
                  </button>
                </Link>
              </li>
              <li className="nav-item me-5 ">
                <Link to={"/recipesPage"} className={"text-decoration-none"}>
                  <button className={"nav-link"}>
                    <h5>Recipes</h5>
                  </button>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to={"/sign-in"} className={"text-decoration-none"}>
                  <button className={"nav-link"}>
                    <h5>Login</h5>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/sign-up"} className={"text-decoration-none"}>
                  <button className={"nav-link"}>
                    <h5>Sign Up</h5>
                  </button>
                </Link>
              </li>
            </ul>
            <form
              className="d-flex col-4"
              role="search"
              onSubmit={navigateToRecipe}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for a recipe"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                GO!
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
