import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authComp } from "../../services/services";
import { messageAlert } from "../../helpers/Alerts";
import {
  setIsAuthenticatedCookies,
  setUserCookies,
  setUserRolCookies,
} from "../../helpers/Helpers";

const CompLoginForm = () => {
  const initialState = {
    user: "",
    pass: "",
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authComp(formData.user, formData.pass);

      if (response.data.message === "Datos incorrectos") {
        messageAlert("Error", "Usuario o contraseña incorrectos", "error");
        resetForm();
        return;
      }

      setUserCookies(response.data);
      setUserRolCookies("Empresa");
      setIsAuthenticatedCookies(true);
      navigate("/homepage");

      resetForm();
    } catch (error) {
      messageAlert("Error", error.response.data.message, "error");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="user"
            required
            onChange={handleInputChange}
            value={formData.user}
            style={{ boxShadow: "none" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="pass"
            style={{ boxShadow: "none" }}
            onChange={handleInputChange}
            value={formData.pass}
            required
          />
        </div>
        <div className="mb-3">
          <a href="https://cp.unphu.edu.do/verificacion-email">
            ¿Olvidó su contraseña?
          </a>
        </div>
        <div className="mb-3">
          <p className="mb-0">
            No tienes una cuenta? <a href="/compregister">Regístrate aquí</a>
          </p>
        </div>
        <div className="mb-3 text-center">
          <button
            style={{
              width: "100%",
              backgroundColor: "#0D4671",
              border: "none",
            }}
            type="submit"
            className="btn btn-primary"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompLoginForm;
