/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import unphuImage from "../../assets/img/image.png";
import { getUserCookies } from "../../helpers/Helpers";


const Sidebar = () => {
    const message = false;
    const stdId = getUserCookies();
    const fullname =
        stdId[0]?.Std_FirstName +
        " " +
        stdId[0]?.Std_SecondName +
        " " +
        stdId[0]?.Std_LastName;

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="m-1">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav flex-column mb-2 mb-lg-0">
                    <div className="text-center mt-4">
                            <div>
                                <img src={unphuImage} alt="unphu" width="80" height="80" style={{ borderRadius: "50%" }} />
                            </div>
                            <div className="mt-2">
                                <div className="small">Bienvenido:</div>
                                <div>{fullname}</div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <li className="nav-item mt-2">
                                <Link className="nav-link d-flex align-items-center" to="/homestudents">
                                    <i className="icon-color fas fa-home"></i>&nbsp; Inicio
                                </Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link d-flex align-items-center" to="/studentapplications">
                                    <i className="icon-color fas fa-graduation-cap"></i>&nbsp; Postulaciones
                                </Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link d-flex align-items-center" to="/jobvacancies">
                                    <i className="icon-color fas fa-briefcase"></i>&nbsp; Ofertas
                                </Link>
                            </li>
                            {message ? (
                                <li className="nav-item mt-2">
                                    <Link className="nav-link d-flex align-items-center" to="/notifications">
                                        <i className="icon-color fas fa-bell"></i>&nbsp; Notificaciones
                                    </Link>
                                </li>) : (
                                <li className="nav-item mt-2">
                                    <Link className="nav-link d-flex align-items-center" to="/notifications">
                                        <span className="icon-notification">
                                            <i className="icon-color fas fa-bell"></i>
                                            <span className="notification-dot"></span>
                                        </span>
                                        &nbsp; Notificaciones
                                    </Link>
                                </li>)}
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
