import React from 'react'

const VacanciesFilter = ({
    searchJob,
    setSearchJob,
    status,
    setStatus
}) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <input
                                value={searchJob || ''}
                                onChange={(e) => setSearchJob(e.target.value)}
                                style={{ boxShadow: "none" }}
                                type="text"
                                className="form-control"
                                placeholder="Buscar..."
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="input-group">
                            <select
                                value={status || ''}
                                onChange={(e) => setStatus(e.target.value)}
                                style={{ boxShadow: "none" }} className="form-select"
                            >
                                <option value="">Elige una opcion</option>
                                <option value="1">Vigentes</option>
                                <option value="0">Finalizadas</option>
                            </select>
                            <button
                                onClick={(e) => setStatus("")}
                                style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }}
                                className="btn btn-outline-secondary"
                                type="button"
                            >
                                <i style={{ color: "white" }} className="fas fa-times m-1"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <button
                            style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }}
                            className="btn btn-outline-secondary"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdropAddVancancie"
                        >
                            <i style={{ color: "white" }} className="fas fa-plus m-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VacanciesFilter
