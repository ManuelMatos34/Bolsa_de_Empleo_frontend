import React from 'react'

const ApplicationDescription = ({ dataDescription }) => {
    return (
        <div className="card m-1">
            <div className="card-body">
                <div className='row'>
                    <div className='col-md-4'>
                        <h4 className="card-title m-1 icon-color">{dataDescription.Job_Title}</h4>
                        <h5 className="card-subtitle mb-2 text-muted m-1">Empresa: {dataDescription.Job_Title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted m-1">Modalidad: {dataDescription.Job_Modality}</h6>
                        <h6 className="card-subtitle mb-2 text-muted m-1">Contrato: {dataDescription.Job_ContractType}</h6>
                        <h6 className="card-subtitle mb-2 text-muted m-1">Vacantes disponibles: {dataDescription.Job_NoVacancy}</h6>
                    </div>
                    <div className='col-md-8'>
                        <div className='card h-100'>
                            <div className='card-body h-100'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <h5 className="card-title">Resultado de Solicitud</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                Estado de la solicitud: {dataDescription.Req_RequestStatus}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            {dataDescription.Req_RequestStatus === "Apto" ? (
                                                <div>
                                                    <p className="card-text text-success">
                                                        Tu solicitud ha sido <strong>aceptada</strong>{" "}
                                                        <i className="fas fa-check-circle"></i>
                                                    </p>
                                                    <p>
                                                        Felicidades, has sido aceptado para la vacante. El empleador pronto
                                                        se pondrá en contacto contigo.
                                                    </p>
                                                </div>
                                            ) : dataDescription.Req_RequestStatus === "No Apto" ? (
                                                <div>
                                                    <p className="card-text text-danger">
                                                        Tu solicitud ha sido <strong>no aceptada</strong>{" "}
                                                        <i className="fas fa-times-circle"></i>
                                                    </p>
                                                    <p>
                                                        Lo sentimos, no has sido aceptado para la vacante. No te desmotive,
                                                        sigue buscando oportunidades.
                                                    </p>
                                                </div>
                                            ) : (
                                                <p>En espera del empleador...</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="overflow-auto" style={{ maxHeight: "66vh" }}>
                    <h6 className="card-subtitle mb-2 mt-1 text-muted">Descripción</h6>
                    <p className="card-text">
                        {dataDescription.Job_Description}
                    </p>
                    <h6 className="card-subtitle mb-2 text-muted">Requerimientos</h6>
                    <p className="card-text">
                        {dataDescription.Job_Requeriments}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ApplicationDescription
