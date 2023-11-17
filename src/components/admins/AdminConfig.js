import React from 'react'
import photoNull from '../../assets/img/no image.png';
import AdminModals from './modals/AdminModals';

const AdminConfig = () => {
    return (
        <div className='container w-50'>
            <AdminModals />
            <div className='card'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
                            <img src={photoNull} alt="Imagen del usuario" className="img-fluid" />
                        </div>
                        <div className='col-lg-8 col-md-6 col-sm-12'>
                            <p className="card-subtitle text-muted m-2">
                                <i className="fas fa-user"></i>&nbsp; <b>Nombre:</b> Juan Pérez
                            </p>
                            <p className="card-subtitle text-muted m-2 mt-3">
                                <i className="fas fa-envelope"></i>&nbsp; <b>Correo Personal:</b> juan.perez@example.com
                            </p>
                            <p className="card-subtitle text-muted m-2 mt-3">
                                <i className="fas fa-user-tag"></i>&nbsp; <b>Rol:</b> Usuario Registrado
                            </p>
                        </div>
                    </div>
                </div>
                <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropConfAdminModal" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                        <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminConfig
