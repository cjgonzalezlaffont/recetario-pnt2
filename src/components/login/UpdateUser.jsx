import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UpdateUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    email: localStorage.getItem("email"),
    birthdate: localStorage.getItem("birthdate"),
    password: "",
  });

  const handleFirstNameChange = (event) => {
    setFormData({
      firstName: event.target.value,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      birthdate: formData.birthdate,
    });
  };
  const handleLastNameChange = (event) => {
    setFormData({
      firstName: formData.firstName,
      lastName: event.target.value,
      email: formData.email,
      password: formData.password,
      birthdate: formData.birthdate,
    });
  };
  const handleEmailChange = (event) => {
    setFormData({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: event.target.value,
      password: formData.password,
      birthdate: formData.birthdate,
    });
  };
  const handlePasswordChange = (event) => {
    setFormData({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: event.target.value,
      birthdate: formData.birthdate,
    });
  };
  const handleBirthdateChange = (event) => {
    setFormData({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      birthdate: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    const urlApiUsers =
      "http://localhost:3001/api/users/" + localStorage.getItem("_Id");
    event.preventDefault();
    fetch(urlApiUsers, {
      method: "PUT",
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        birthDate: formData.birthdate,
      }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate("/");
        if (formData.birthdate) {
          localStorage.setItem("birthdate", formData.birthdate);
        }
        if (formData.password) {
          localStorage.setItem("password", formData.password);
        }
        if (formData.email) {
        }
        localStorage.setItem("email", formData.email);
        if (formData.firstName) {
          localStorage.setItem("firstName", formData.firstName);
        }
        if (formData.lastName) {
          localStorage.setItem("lastName", formData.lastName);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    if (
      formData.password &&
      formData.email &&
      localStorage.getItem("password") !== formData.password
    ) {
      const urlApiUsersPassword =
        "http://localhost:3001/api/users/email/" +
        localStorage.getItem("email");
      fetch(urlApiUsersPassword, {
        method: "PUT",
        body: JSON.stringify({ password: formData.password }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
        .then(navigate("/"))
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleButtonDelete = (event) => {
    const urlApiUsers =
      "http://localhost:3001/api/users/" + localStorage.getItem("_Id");
    event.preventDefault();
    fetch(urlApiUsers, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("_Id");
        localStorage.removeItem("password");
        localStorage.removeItem("email");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("birthdate");
        navigate("/");
      })
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
            <label>birthdate</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter your birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleBirthdateChange}
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
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
              /* name="Newpassword" */
              value={formData.password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
          <div className="d-grid mt-4">
            <button
              type="submit"
              className="btn btn-danger"
              onClick={handleButtonDelete}
            >
              Delete Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
