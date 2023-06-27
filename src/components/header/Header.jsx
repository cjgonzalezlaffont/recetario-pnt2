import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/recipesPage", { state: { search: " " + searchTerm + " " } });
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("_Id");
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("birthdate");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-4">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav col-8 me-auto mb-2 mb-lg-0 ms-lg-auto">
              <li className="nav-item me-5 ms-lg-5">
                <Link to={"/"} className="text-decoration-none">
                  <button className="nav-link">
                    <h5>Home</h5>
                  </button>
                </Link>
              </li>
              {localStorage.getItem("token") ? (
                <>
                  <li>
                    <p>Bienvenido {localStorage.getItem("email")}</p>
                  </li>
                  <li className="nav-item me-5">
                    <Link to={"/favorites"} className="text-decoration-none">
                      <button className="nav-link">
                        <h5>Favorites</h5>
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item me-5">
                    <Link to={"/updateUser"} className="text-decoration-none">
                      <button className="nav-link">
                        <h5>Edit Profile</h5>
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item me-5">
                    <Link
                      to={"/"}
                      className="text-decoration-none"
                      onClick={handleSignOut}
                    >
                      <button className="nav-link">
                        <h5>Sign-Out</h5>
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item me-5">
                    <Link to={"/sign-in"} className="text-decoration-none">
                      <button className="nav-link">
                        <h5>Login</h5>
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/sign-up"} className="text-decoration-none">
                      <button className="nav-link">
                        <h5>Sign Up</h5>
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <form
              className="d-flex col-4 justify-content-end"
              role="search"
              onSubmit={handleSearch}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for a recipe"
                aria-label="Search"
                value={searchTerm}
                onChange={handleChange}
              />
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
