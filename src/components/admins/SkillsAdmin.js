import React from "react";
import AdminModals from "./modals/AdminModals";

const SkillsAdmin = ({ data }) => {
  return (
    <div>
      <AdminModals />
      <div className="card mb-5 p-4 pt-1">
        <div style={{ border: "none" }} className="card-header bg-white d-flex justify-content-between align-items-center">
          <h5 className="m-1 mt-0">Habilidades</h5>
          <button
            data-bs-toggle="modal"
            data-bs-target="#staticBackdropAddSkills"
            style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }}
            className="btn btn-outline-secondary"
            type="button"
          >
            <i style={{ color: "white" }} className="fas fa-plus"></i>{" "}
            {/* Icono para Agregar */}
          </button>
        </div>
        <div className="card-body p-0 m-0">
          <table className="table table-sm text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Habilidad</th>
                <th scope="col">Carrera</th>
                <th scope="col">Estado</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((skill, index) => (
                  <tr key={skill.Skill_ID}>
                    <th scope="row">{skill.Skill_ID}</th>
                    <td>{skill.Skill}</td>
                    <td>{skill.Ca_Description}</td>
                    <td>{skill.Skill_Status}</td>
                    <td>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdropEditSkills"
                        className="btn btn-success btn-sm m-1"
                      >
                        <i className="fas fa-pencil-alt"></i>{" "}
                        {/* Icono para Editar */}
                      </button>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdropDeleteSkills"
                        className="btn btn-danger btn-sm m-1"
                      >
                        <i className="fas fa-trash-alt"></i>{" "}
                        {/* Icono para Eliminar */}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">
                    <div>
                      <p>Sin datos...</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SkillsAdmin;
