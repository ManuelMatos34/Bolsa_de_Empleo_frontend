/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import unphuImage from "../../assets/img/image.png";
import Context from "../global/Context";

const Sidebar = () => {


    const s = useContext(Context);
    const fullname =
        s.authUser[0]?.Std_FirstName +
        " " +
        s.authUser[0]?.Std_SecondName +
        " " +
        s.authUser[0]?.Std_LastName;

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav flex-column mb-2 mb-lg-0">
                        <div className="d-flex align-items-center mt-4">
                            <div>
                                <img src={unphuImage} alt="unphu" width="80" height="80" style={{ borderRadius: "50%" }} />
                            </div>
                            <div className="ms-3">
                                <div className="small">Bienvenido:</div>
                                {fullname}
                            </div>
                        </div>
                        <div className="mt-4">
                            <li className="nav-item mt-2">
                                <Link className="nav-link d-flex align-items-center" to="/homestudents">
                                    <i className="icon-color fas fa-home mr-2"></i>&nbsp; Inicio
                                </Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link d-flex align-items-center" to="/studentapplications">
                                    <i className="icon-color fas fa-graduation-cap mr-2"></i>&nbsp; Mis Postulaciones
                                </Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link d-flex align-items-center" to="/jobvacancies">
                                    <i className="icon-color fas fa-briefcase mr-2"></i>&nbsp; Ofertas de Empleo
                                </Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link d-flex align-items-center" to="/notifications">
                                    <i className="icon-color fas fa-bell mr-2"></i>&nbsp; Notificaciones
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
