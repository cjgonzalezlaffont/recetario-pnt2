import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UpdateUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    email: localStorage.getItem("mail"),
    password: "",
  });

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
    const urlApiUsers =
      "http://localhost:3001/api/users/" + localStorage.getItem("_Id");
    event.preventDefault();
    // Envía los datos al backend usando una solicitud HTTP (por ejemplo, fetch o axios)
    fetch(urlApiUsers, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then(navigate("/"))
      .catch((error) => {
        console.error(error);
      });

    fetch(urlApiUsers, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then(navigate("/"))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="auth-wrapper pt-lg-5 pb-lg-5">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Edit Profile</h3>
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
            <label>Current Password </label>
            <input
              type="password"
              className="form-control"
              placeholder=""
              name="password"
              value={localStorage.getItem("password")}
              disabled
            />
          </div>
          <div className="mb-3">
            <label>Enter new Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
              name="Newpassword"
              value={formData.password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Update
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
