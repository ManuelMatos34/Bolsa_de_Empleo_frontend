/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">UNPHU</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <button className="btn btn-danger" type="button">
                    <i className="fas fa-sign-out-alt"></i> {/* Icono de salida de Font Awesome */}
                </button>
            </div>
        </nav>

    )
}

export default Header
