import React from 'react'
import { Link } from 'react-router-dom'

const SideCompany = () => {
    return (
        <div>
            <ul className="nav flex-column">
                <li className="nav-item mt-3">
                    <Link className="nav-link d-flex align-items-center text-white" to="/homepage">
                        <i className="fas fa-home icon-alusivo align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Inicio</p>
                    </Link>
                </li>
                <li className="nav-item mt-3">
                    <Link className="nav-link d-flex align-items-center text-white" to="/vacanciescomp">
                        <i className="fas fa-tags icon-alusivo align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Ofertas</p>
                    </Link>
                </li>
                <li className="nav-item mt-3">
                    <Link className="nav-link d-flex align-items-center text-white" to="/configcomp">
                        <i className="fas fa-cogs icon-alusivo align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Configuración</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideCompany
