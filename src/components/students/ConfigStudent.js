import React from 'react';
import unphuImage from '../../assets/img/image.png';
import StudentModal from './modals/StudentModal';
import DireccionModal from './modals/DireccionModal';
import ContactModal from './modals/ContactModal';
import CvModal from './modals/CvModal';

const ConfigStudent = () => {
    return (
        <div className='row'>
            <StudentModal />  
            <DireccionModal />  
            <ContactModal />
            <CvModal />
            <div className='col-md-3 mt-2'>
                <div className='card' style={{ height: "81vh" }}>
                    <div className='card-body'>
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src={unphuImage}
                                    alt="unphu"
                                    style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                                />
                            </div>
                        </div>
                        <hr />
                        <p className="card-subtitle text-muted m-2"><b>First Name:</b> Manuel</p>
                        <p className="card-subtitle text-muted m-2"><b>Last Name:</b> Matos Guerrero</p>
                        <p className="card-subtitle text-muted m-2"><b>Matricula:</b> 23-4356</p>
                        <p className="card-subtitle text-muted m-2"><b>Carrera:</b> Ingenieria de sistemas computacionales</p>
                        <p className="card-subtitle text-muted m-2"><b>Educational Email:</b> manuel.matos@unphu.edu</p>
                        <p className="card-subtitle text-muted m-2"><b>Personal Email:</b> manuel.matos@gmail.com</p>
                        <p className="card-subtitle text-muted m-2"><b>Cédula:</b> 123456789</p>
                        <p className="card-subtitle text-muted m-2"><b>Birthday:</b> 01/15/1995</p>
                        <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                            <button data-bs-toggle="modal" data-bs-target="#staticBackdropStudent" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                                <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-9'>
                <div>
                    <div className='col-md-12 mt-2'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className="card-title m-1 icon-color">Dirección</h5>
                                <p className="card-subtitle text-muted m-2"><b>First Street:</b> 123 Main St</p>
                                <p className="card-subtitle text-muted m-2"><b>Second Street:</b> Apt 4B</p>
                                <p className="card-subtitle text-muted m-2"><b>City:</b> Santo Domingo</p>
                                <p className="card-subtitle text-muted m-2"><b>State:</b> DN</p>
                                <p className="card-subtitle text-muted m-2"><b>Postal Code:</b> 10101</p>
                                <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropDireccion" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                                        <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 mt-2'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className="card-title m-1 icon-color">Contacto</h5>
                                <p className="card-subtitle text-muted m-2"><b>Telephone:</b> 809-123-4567</p>
                                <p className="card-subtitle text-muted m-2"><b>Mobile:</b> 809-987-6543</p>
                                <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropContact" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                                        <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 mt-2'>
                        <div className='card' style={{ height: "27vh" }}>
                            <div className='card-body'>
                                <h5 className="card-title m-1 icon-color">Habilidades</h5>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <p className="card-subtitle text-muted m-1">Mis Habilidades:</p>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-times"></i>
                                        </button>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-times"></i>
                                        </button>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-times"></i>
                                        </button>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-times"></i>
                                        </button>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-times"></i>
                                        </button>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-times"></i>
                                        </button>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-times"></i>
                                        </button>
                                        {/* Otros botones de habilidades existentes */}
                                    </div>
                                    <div className='col-md-6'>
                                        <p className="card-subtitle text-muted m-1">Agregar Habilidades:</p>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nueva Habilidad" />
                                        </div>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-plus"></i>
                                        </button>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-plus"></i>
                                        </button>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-plus"></i>
                                        </button>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-plus"></i>
                                        </button>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-plus"></i>
                                        </button>
                                        <button style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            SQL Server <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 mt-2'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className="card-title m-1 icon-color">(CV) - Hoja de vida</h5>
                                <p className="card-subtitle text-muted m-2"><b>Nombre archivo:</b> Mi CV.pdf</p>
                                <button style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Ver</button>
                                <button style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Descargar</button>
                                <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropCv" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                                        <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfigStudent;