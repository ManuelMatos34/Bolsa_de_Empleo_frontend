import React from 'react'
import AllPostulants from './AllPostulants'

const VacancieDescription = ({ dataDescription }) => {
    return (
        <div className="row">
            <div className="col-md-8">
                <div className="card m-1">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted m-1">
                            <b>Decripcion Vacante</b>
                        </h6>
                    </div>
                </div>
                <div className='card m-1'>
                    <div className="card-body">
                        <h4 className="card-title m-1 icon-color">
                            {dataDescription?.Job_Title}
                        </h4>
                        <h6 className="card-subtitle mb-2 text-muted m-1 mt-2">
                            <i className="fas fa-clock"></i> Modalidad: {dataDescription?.Job_Modality}
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted m-1">
                            <i className="fas fa-file-contract"></i> Contrato: {dataDescription?.Job_ContractType}
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted m-1">
                            <i className="fas fa-users"></i> Vacantes disponibles: {dataDescription?.Job_NoVacancy}
                        </h6>
                        <hr />
                        <div className="overflow-auto" style={{ maxHeight: "50vh" }}>
                            <h6 className="card-subtitle mb-2 mt-1 text-muted">
                                <i className="fas fa-file-alt"></i> Descripción
                            </h6>
                            <p className="card-text">{dataDescription?.Job_Description}</p>
                            <h6 className="card-subtitle mb-2 text-muted">
                                <i className="fas fa-check-square"></i> Requerimientos
                            </h6>
                            <p className="card-text">{dataDescription?.Job_Requeriments}</p>
                        </div>
                    </div>
                    <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                        <button data-bs-toggle="modal" data-bs-target="#staticBackdropEditVanacie" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                            <i className="fas fa-edit"></i> {/* Ícono de editar */}
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <AllPostulants jobid={dataDescription.Job_ID} />
            </div>
        </div>
    )
}

export default VacancieDescription
