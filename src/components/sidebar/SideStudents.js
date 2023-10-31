import React from 'react'
import { Link } from 'react-router-dom'

const SideStudents = () => {
    return (
        <div>
            <li className="nav-item mt-3">
                <Link className="nav-link d-flex align-items-center text-white" to="/homestudents">
                    <i className="icon-second-color fas fa-home align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Inicio</p>
                </Link>
            </li>
            <li className="nav-item mt-3">
                <Link className="nav-link d-flex align-items-center text-white" to="/studentapplications">
                    <i className="icon-second-color fas fa-graduation-cap align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Postulaciones</p>
                </Link>
            </li>
            <li className="nav-item mt-3">
                <Link className="nav-link d-flex align-items-center text-white" to="/jobvacancies">
                    <i className="icon-second-color fas fa-briefcase align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Ofertas de Trabajo</p>
                </Link>
            </li>

        </div>
    )
}

export default SideStudents
