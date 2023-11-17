import React from "react";

const FilterSkills = ({
  skillNameFilter,
  setSkillNameFilter,
  stateFilter,
  setStateFilter,
  carFilter,
  setCarFilter,
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
                value={skillNameFilter}
                onChange={(e) => setSkillNameFilter(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="input-group">
              <select
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                style={{ boxShadow: "none" }}
                className="form-select"
              >
                <option value="">Estado</option>
                <option value="1">Activos</option>
                <option value="0">Inactivos</option>
              </select>

              <button
                style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }}
                className="btn btn-outline-secondary"
                type="button"
                onClick={(e) => setStateFilter("")}
              >
                <i style={{ color: "white" }} className="fas fa-times m-1"></i>
              </button>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="input-group">
              <select
                value={carFilter}
                onChange={(e) => setCarFilter(e.target.value)}
                style={{ boxShadow: "none" }} className="form-select">
                <option value="">Carrera</option>
                <option>Dr. en Medicina</option>
                <option>Dr. en Odontología</option>
                <option>Lic. en Farmacia</option>
                <option>Lic. en Psicología Clínica</option>
                <option>Lic. en Psicología Escolar</option>
                <option>Lic. en Psicologia Industrial</option>
                <option>Lic. en Educación, mención Educación Especial</option>
                <option>Lic. en Matemática Orientada a la Educación Secundaria</option>
                <option>Lic. en Química Orientada a la Educación Secundaria</option>
                <option>Lic. en Física Orientada a la Educación Secundaria</option>
                <option>Lic. en Educación Física</option>
                <option>Arquitectura y Urbanismo</option>
                <option>Lic. en Diseño de Interiores</option>
                <option>Lic. en Música</option>
                <option>Agrimensura</option>
                <option>Ingeniería Civil</option>
                <option>Ingeniería Química</option>
                <option>Ingeniería Industrial</option>
                <option>Ingeniería Geomatica</option>
                <option>Ingeniería en Sistemas Computacionales</option>
                <option>Lic. en Derecho</option>
                <option>Ingeniería Agronómica mención Cultivos</option>
                <option>Dr. en Veterinaria</option>
                <option>Lic. en Administración de Empresas</option>
                <option>Lic. en Mercadeo</option>
                <option>Lic. en Administración Hotelera y Turística</option>
                <option>Lic. en Contabilidad y Auditoria</option>
              </select>
              <button
                style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }}
                className="btn btn-outline-secondary"
                type="button"
                onClick={(e) => setCarFilter("")}
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
