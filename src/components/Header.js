/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteUserCookies } from "../helpers/Helpers";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    deleteUserCookies();
    navigate("/");
  };

  return (
    <header className="py-3 navbar" style={{ backgroundColor: "#0C4770" }}>
      <div className="container">
        <h6 className="navbar-brand m-1">
          <b style={{ color: "white" }}>UNPHU - Bolsa de Empleos</b>
        </h6>
        <button className="btn btn-danger" type="button" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
