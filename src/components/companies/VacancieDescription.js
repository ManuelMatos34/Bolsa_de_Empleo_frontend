import React from 'react'

const VacancieDescription = ({ setWorkers }) => {
    return (
        <div className='card m-1'>
            <div className="card-body">
                <h4 className="card-title m-1 icon-color">Programador frontend</h4>
                <h6 className="card-subtitle mb-2 text-muted m-1">Modalidad: </h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Contrato: </h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Vacantes disponibles: </h6>
                <hr />
                <div className="overflow-auto" style={{ maxHeight: "50vh" }}>
                    <h6 className="card-subtitle mb-2 mt-1 text-muted">Descripción</h6>
                    <p className="card-text"> </p>
                    <h6 className="card-subtitle mb-2 text-muted">Requerimientos</h6>
                    <p className="card-text"> </p>
                </div>
            </div>
            <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                <button style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                    <i className="fas fa-edit"></i> {/* Ícono de editar */}
                </button>
            </div>
            <div className='mt-2' style={{ position: 'absolute', top: '0', right: '50px' }}>
                <button onClick={() => setWorkers(true)} style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm">
                    Ver postulantes
                </button>
            </div>
        </div>
    )
}

export default VacancieDescription
