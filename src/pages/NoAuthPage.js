import React from "react";
import { Link } from "react-router-dom";
import { getUserRol } from "../helpers/Helpers";

const NoAuthPage = () => {
  const rol = getUserRol();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="text-center mt-4">
            <h1 className="display-1">401</h1>
            <p className="lead">Unauthorized</p>
            <p>No tienes los privilegios para estar aqui.</p>

            {rol === "Común" ? (
              <Link to="/homestudents">
                <i className="fas fa-arrow-left me-1"></i>
                Volver a la pagina principal
              </Link>
            ) : rol === "Empresa" ? (
              <Link to="/homepage">
                <i className="fas fa-arrow-left me-1"></i>
                Volver a la pagina principal
              </Link>
            ) : rol === "Admin" ? (
              <Link to="/homeadmins">
                <i className="fas fa-arrow-left me-1"></i>
                Volver a la pagina principal
              </Link>
            ) : (
              <Link to="/">
                <i className="fas fa-arrow-left me-1"></i>
                Volver a la pagina principal
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoAuthPage;
