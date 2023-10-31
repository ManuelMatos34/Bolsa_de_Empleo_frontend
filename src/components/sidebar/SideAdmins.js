import React from 'react'
import { Link } from 'react-router-dom'

const SideAdmins = () => {
    return (
        <div>
            <li className="nav-item mt-3">
                <Link className="nav-link d-flex align-items-center text-white" to="">
                    <i className="icon-second-color fas fa-home align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Inicio</p>
                </Link>
            </li>
        </div>
    )
}

export default SideAdmins
