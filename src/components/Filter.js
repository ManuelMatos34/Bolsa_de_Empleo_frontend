import React from "react";

const Filter = ({
    jobTitleFilter,
    setJobTitleFilter,
    contractTypeFilter,
    setContractTypeFilter,
    modalityFilter,
    setModalityFilter,
}) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <input
                                style={{ boxShadow: "none" }}
                                type="text"
                                className="form-control"
                                placeholder="Buscar..."
                                value={jobTitleFilter}
                                onChange={(e) => setJobTitleFilter(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="input-group">
                            <select
                                style={{ boxShadow: "none" }}
                                className="form-select"
                                value={contractTypeFilter}
                                onChange={(e) => setContractTypeFilter(e.target.value)}
                            >
                                <option value="">Tipo contrato</option>
                                <option>Temporal</option>
                                <option>Por Servicio</option>
                                <option>Prácticas</option>
                            </select>
                            <button style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }} onClick={(e) => setContractTypeFilter("")} className="btn btn-outline-secondary" type="button"><i style={{ color: "white" }} className="fas fa-times m-1"></i></button>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="input-group">
                            <select
                                style={{ boxShadow: "none" }}
                                className="form-select"
                                value={modalityFilter}
                                onChange={(e) => setModalityFilter(e.target.value)}
                            >
                                <option value="">Tipo Modalidad</option>
                                <option>Remoto</option>
                                <option>Presencial</option>
                                <option>Híbrido</option>
                            </select>
                            <button style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }} onClick={(e) => setModalityFilter("")} className="btn btn-outline-secondary" type="button"><i style={{ color: "white" }} className="fas fa-times m-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
