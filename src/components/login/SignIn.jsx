import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorCredentials, setErrorCredentials] = useState(null);
  const handleEmailChange = (event) => {
    setFormData({
      email: event.target.value,
      password: formData.password,
    });
  };
  const handlePasswordChange = (event) => {
    setFormData({
      email: formData.email,
      password: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    //agregar Url de backend
    const urlApiUsers = "http://localhost:3001/api/users/login"; //SACAR HARCODEADO
    event.preventDefault();
    // Envía los datos al backend usando una solicitud HTTP (por ejemplo, fetch o axios)
    fetch(urlApiUsers, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // El token se recibió correctamente
          const token = data.token;
          // Almacenar el token en el almacenamiento local (localStorage)
          localStorage.setItem("token", token);
          localStorage.setItem("mail", formData.email);
          localStorage.setItem("_Id", data.user._id );
          console.log("token: " + token);
          // Hacer algo con el token, como guardarlo en el almacenamiento local o en las cookies. Para recuperarlo: localStorage.getItem("token")
          navigate("/");
        } else {
          // No se recibió un token en la respuesta del backend
          setErrorCredentials("Credenciales inválidas. Inténtalo de nuevo.");
        }
      })
      .catch((error) => {
        setErrorCredentials("Error de conexión. Inténtalo de nuevo.");
      });
  };
  return (
    <div className="auth-wrapper pt-lg-5 pb-lg-5">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
        {errorCredentials && <div className="error">{errorCredentials}</div>}
      </div>
    </div>
  );
};
