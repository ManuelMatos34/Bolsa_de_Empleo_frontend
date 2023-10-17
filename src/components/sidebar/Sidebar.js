/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import unphuImage from '../../assets/img/image.png';

const Sidebar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav flex-column mb-2 mb-lg-0" style={{ flex: 1 }}>
                        <div className="d-flex align-items-center mt-4">
                            <div style={{ flex: 1 }}>
                                <img src={unphuImage} alt="unphu" width="80" height="80" style={{ borderRadius: "50%" }} />
                            </div>
                            <div style={{ flex: 2 }}>
                                <div className="small">Bienvenido:</div>
                                Manuel Alexander Matos Guerrero
                            </div>
                        </div>
                        <div className='mt-4'>
                            <li className="nav-item mt-2">
                                <a className="nav-link d-flex align-items-center" href="/homestudents">
                                    <i className="icon-color fas fa-home mr-2"></i>&nbsp; Inicio
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link d-flex align-items-center" href="/studentapplications">
                                    <i className="icon-color fas fa-graduation-cap mr-2"></i>&nbsp; Mis Postulaciones
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link d-flex align-items-center" href="/jobvacancies">
                                    <i className="icon-color fas fa-briefcase mr-2"></i>&nbsp; Ofertas de Empleo
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link d-flex align-items-center" href="/notifications">
                                    <i className="icon-color fas fa-bell mr-2"></i>&nbsp; Notificaciones
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
