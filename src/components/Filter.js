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
                                type="text"
                                className="form-control"
                                placeholder="Buscar..."
                                value={jobTitleFilter}
                                onChange={(e) => setJobTitleFilter(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className="input-group">
                            <select
                                className="form-select"
                                value={contractTypeFilter}
                                onChange={(e) => setContractTypeFilter(e.target.value)}
                            >
                                <option value="">Tipo contrato</option>
                                <option>Temporal</option>
                                <option>Por Servicio</option>
                                <option>Prácticas</option>
                            </select>
                            <button onClick={(e) => setContractTypeFilter("")} className="btn btn-outline-secondary" type="button"><i className="fas fa-times m-1"></i></button>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className="input-group">
                            <select
                                className="form-select"
                                value={modalityFilter}
                                onChange={(e) => setModalityFilter(e.target.value)}
                            >
                                <option value="">Modalidad...</option>
                                <option>Remoto</option>
                                <option>Presencial</option>
                                <option>Híbrido</option>
                            </select>
                            <button onClick={(e) => setModalityFilter("")} className="btn btn-outline-secondary" type="button"><i className="fas fa-times m-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
