import React from 'react'

const FilterCompanies = ({
    approve,
    setApprove,
    search,
    setSearch
}) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-group input-group-sm">
                            <input
                                value={search || ''}
                                onChange={(e) => setSearch(e.target.value)}
                                style={{ boxShadow: "none" }}
                                type="text"
                                className="form-control"
                                placeholder="Buscar..."
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="input-group input-group-sm">
                            <select
                                value={approve || ''}
                                onChange={(e) => setApprove(e.target.value)}
                                style={{ boxShadow: "none" }} className="form-select"
                            >
                                <option value="">Elige una opcion</option>
                                <option value="1">Aprovadas</option>
                                <option value="0">Rechazadas</option>
                                <option value="2">Pendientes</option>
                            </select>
                            <button
                                style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }}
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={(e) => setApprove("")}
                            >
                                <i style={{ color: "white" }} className="fas fa-times m-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterCompanies
