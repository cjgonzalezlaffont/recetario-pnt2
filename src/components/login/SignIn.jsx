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
    const urlApiUsers = "http://localhost:3001/api/users/login";
    event.preventDefault();
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
          const token = data.token;
          localStorage.setItem("token", token);
          if (data.user._id) {
            localStorage.setItem("_Id", data.user._id);
          }
          if (formData.password) {
            localStorage.setItem("password", formData.password);
          }
          if (formData.email) {
          }
          localStorage.setItem("email", formData.email);
          if (data.user.firstName) {
            localStorage.setItem("firstName", data.user.firstName);
          }
          if (data.user.lastName) {
            localStorage.setItem("lastName", data.user.lastName);
          }
          navigate("/");
        } else {
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
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        {errorCredentials && <div className="error">{errorCredentials}</div>}
      </div>
    </div>
  );
};
