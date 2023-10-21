import React, { useContext } from 'react';
import unphuImage from '../../assets/img/image.png';
import StudentModal from './modals/StudentModal';
import DireccionModal from './modals/DireccionModal';
import ContactModal from './modals/ContactModal';
import CvModal from './modals/CvModal';
import Context from '../global/Context';
import { dateConverter } from '../../helpers/Helpers';
import SkillsStudents from './SkillsStudents';

const ConfigStudent = () => {
    const s = useContext(Context);
    return (
        <div className='row'>
            <StudentModal />
            <DireccionModal />
            <ContactModal />
            <CvModal />
            <div className='col-md-3 mt-2'>
                <div className='card' >
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
                        <p className="card-subtitle text-muted m-2"><b>Primer Nombre: </b>{s.authUser[0].Std_FirstName}</p>
                        <p className="card-subtitle text-muted m-2"><b>Segundo Nombre: </b>{s.authUser[0].Std_SecondName}</p>
                        <p className="card-subtitle text-muted m-2"><b>Apellidos: </b>{s.authUser[0].Std_LastName}</p>
                        <p className="card-subtitle text-muted m-2"><b>Matricula: </b>{s.authUser[0].Std_ID}</p>
                        <p className="card-subtitle text-muted m-2"><b>Carrera: </b>{s.authUser[0].Ca_Description}</p>
                        <p className="card-subtitle text-muted m-2"><b>Correo Institucional: </b>{s.authUser[0].Std_EducationalEmail}</p>
                        <p className="card-subtitle text-muted m-2"><b>Correo Personal: </b>{s.authUser[0].Std_PersonalEmail}</p>
                        <p className="card-subtitle text-muted m-2"><b>Cédula: </b>{s.authUser[0].Std_Identification}</p>
                        <p className="card-subtitle text-muted m-2"><b>Fecha de Nacimiento: </b>{dateConverter(s.authUser[0].Std_Birthday)}</p>
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
                                <p className="card-subtitle text-muted m-2"><b>Direccion 1: </b>{s.authUser[0].Std_FirstStreet}</p>
                                <p className="card-subtitle text-muted m-2"><b>Direccion 2: </b>{s.authUser[0].Std_SecondStreet}</p>
                                <p className="card-subtitle text-muted m-2"><b>Ciudad: </b>{s.authUser[0].Std_City}</p>
                                <p className="card-subtitle text-muted m-2"><b>Estado: </b>{s.authUser[0].Std_State}</p>
                                <p className="card-subtitle text-muted m-2"><b>Codigo Postal: </b>{s.authUser[0].Std_PostalCode}</p>
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
                                <p className="card-subtitle text-muted m-2"><b>Telefono: </b>{s.authUser[0].Std_HomePhone}</p>
                                <p className="card-subtitle text-muted m-2"><b>Celular: </b>{s.authUser[0].Std_Telephone}</p>
                                <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropContact" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                                        <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SkillsStudents />
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