import React from 'react'
import { Link } from 'react-router-dom'

const SideAdmins = () => {
    return (
        <div>
            <ul className="nav flex-column">
                <li className="nav-item mt-3">
                    <Link className="nav-link d-flex align-items-center text-white" to="/homeadmins">
                        <i className="icon-second-color fas fa-home align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Inicio</p>
                    </Link>
                </li>
                <li className="nav-item mt-3">
                    <Link className="nav-link d-flex align-items-center text-white" to="/skills">
                        <i className="icon-second-color fas fa-cogs align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Habilidades</p>
                    </Link>
                </li>
                <li className="nav-item mt-3">
                    <Link className="nav-link d-flex align-items-center text-white" to="/companiesadmin">
                        <i className="icon-second-color fas fa-building align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Empresas</p>
                    </Link>
                </li>
                {/* <li className="nav-item mt-3">
                    <Link className="nav-link d-flex align-items-center text-white" to="/ratings">
                        <i className="icon-second-color fas fa-star align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Calificaciones</p>
                    </Link>
                </li> */}
                <li className="nav-item mt-3">
                    <Link className="nav-link d-flex align-items-center text-white" to="/statspage">
                        <i className="icon-second-color fas fa-chart-bar align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Estadísticas</p>
                    </Link>
                </li>
                <li className="nav-item mt-3">
                    <Link className="nav-link d-flex align-items-center text-white" to="/configadmin">
                        <i className="icon-second-color fas fa-cogs align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Configuración</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideAdmins
