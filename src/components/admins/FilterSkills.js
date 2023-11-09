import React from "react";

const FilterSkills = () => {
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
              />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="input-group">
              <select style={{ boxShadow: "none" }} className="form-select">
                <option value="">Tipo contrato</option>
                <option>Temporal</option>
                <option>Por Servicio</option>
                <option>Prácticas</option>
              </select>
              <button
                style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }}
                className="btn btn-outline-secondary"
                type="button"
              >
                <i style={{ color: "white" }} className="fas fa-times m-1"></i>
              </button>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="input-group">
              <select style={{ boxShadow: "none" }} className="form-select">
                <option value="">Tipo contrato</option>
                <option>Temporal</option>
                <option>Por Servicio</option>
                <option>Prácticas</option>
              </select>
              <button
                style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }}
                className="btn btn-outline-secondary"
                type="button"
              >
                <i style={{ color: "white" }} className="fas fa-times m-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSkills;
