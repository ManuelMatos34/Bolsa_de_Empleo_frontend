import React from "react";
import AdminModals from "./modals/AdminModals";

const SkillsAdmin = () => {
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
              <tr>
                <th scope="row">1</th>
                <td>SQL Server</td>
                <td>Ing. Sistemas Computacionales</td>
                <td>A</td>
                <td>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropEditSkills"
                    className="btn btn-success btn-sm m-1">
                    <i className="fas fa-pencil-alt"></i>{" "}
                    {/* Icono para Editar */}
                  </button>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropDeleteSkills"
                    className="btn btn-danger btn-sm m-1">
                    <i className="fas fa-trash-alt"></i>{" "}
                    {/* Icono para Eliminar */}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SkillsAdmin;
