/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import Context from './global/Context';
import { useNavigate } from "react-router-dom";
import { deleteUserCookies, deleteIsAuthenticatedCookies } from '../helpers/Helpers';

const Header = () => {
    const s = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = () => {
        s.setAuthUser([]);
        deleteUserCookies();
        deleteIsAuthenticatedCookies();
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0C4770" }}>
            <div className="container">
                <h6 className="navbar-brand m-1"><b style={{ color: "white" }}>UNPHU - Bolsa de Empleos</b></h6>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <button className="btn btn-danger" type="button" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i>
                </button>
            </div>
        </nav>

    )
}

export default Header
