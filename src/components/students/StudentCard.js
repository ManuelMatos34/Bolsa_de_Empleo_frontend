import React from 'react'
import photoNull from '../../assets/img/no image.png';
import { dateConverter } from '../../helpers/Helpers';

const StudentCard = ({ data, img }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <div className="d-flex justify-content-center align-items-center mb-4">
                    <div style={{ textAlign: 'center' }}>
                        {img ? (
                            <img
                                src={`data:image/png;base64,${img}`}
                                alt="unphu"
                                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                            />
                        ) : (
                            <img
                                src={photoNull}
                                alt="unphu"
                                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                            />
                        )}
                    </div>
                </div>
                <hr />
                <p className="card-subtitle text-muted m-2 mt-3">
                    <i className="fas fa-user"></i>&nbsp; <b>Primer Nombre:</b> {data.Std_FirstName}
                </p>
                <p className="card-subtitle text-muted m-2 mt-3">
                    <i className="fas fa-user"></i>&nbsp; <b>Segundo Nombre:</b> {data.Std_SecondName}
                </p>
                <p className="card-subtitle text-muted m-2 mt-3">
                    <i className="fas fa-user"></i>&nbsp; <b>Apellidos:</b> {data.Std_LastName}
                </p>
                <p className="card-subtitle text-muted m-2 mt-3">
                    <i className="fas fa-id-card"></i> &nbsp;<b>Matricula:</b> {data.Std_ID}
                </p>
                <p className="card-subtitle text-muted m-2 mt-3">
                    <i className="fas fa-graduation-cap"></i> &nbsp;<b>Carrera:</b> {data.Ca_Description}
                </p>
                <p className="card-subtitle text-muted m-2 mt-3">
                    <i className="fas fa-envelope"></i> &nbsp;<b>Correo Institucional:</b> {data.Std_EducationalEmail}
                </p>
                <p className="card-subtitle text-muted m-2 mt-3">
                    <i className="fas fa-envelope"></i>&nbsp; <b>Correo Personal:</b> {data.Std_PersonalEmail}
                </p>
                <p className="card-subtitle text-muted m-2 mt-3">
                    <i className="fas fa-id-card"></i> &nbsp;<b>Cédula:</b> {data.Std_Identification}
                </p>
                <p className="card-subtitle text-muted m-2 mt-3">
                    <i className="fas fa-calendar-alt"></i> &nbsp;<b>Fecha de Nacimiento:</b> {dateConverter(data.Std_Birthday)}
                </p>
                <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropStudent" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                        <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StudentCard
