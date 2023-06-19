import { useState } from "react";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const imprimirConsola = () => {
    console.log(formData);
  };

  const handleFirstNameChange = (event) => {
    // Actualiza el estado del formulario al cambiar el valor de first name, mantiene los otros values
    setFormData({
      firstName: event.target.value,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    });
  };

  const handleLastNameChange = (event) => {
    setFormData({
      firstName: formData.firstName,
      lastName: event.target.value,
      email: formData.email,
      password: formData.password,
    });
  };

  const handleEmailChange = (event) => {
    setFormData({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: event.target.value,
      password: formData.password,
    });
  };
  const handlePasswordChange = (event) => {
    setFormData({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    //agregar Url de backend
    const urlApiUsers = "http://localhost:3001/api/users/"; //SACAR HARCODEADO
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
        // Maneja la respuesta del backend si es necesario
        setFormData(data);
      })
      .catch((error) => {
        // Maneja los errores de la solicitud si es necesario
        console.error(error);
      });
  };

  return (
    <div className="auth-wrapper pt-lg-5 pb-lg-5">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleFirstNameChange}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleLastNameChange}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
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
              name="password"
              value={formData.password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={imprimirConsola}
            >
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
};
