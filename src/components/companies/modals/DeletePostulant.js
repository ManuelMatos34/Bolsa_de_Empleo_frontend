import React from "react";
import { deletePostulant } from "../../../services/services";

const DeletePostulant = ({ postulationID, postulantData }) => {
  const nameUser =
    postulantData?.Std_FirstName + " " + postulantData?.Std_LastName;

  const emailUser = postulantData?.Std_PersonalEmail;

  const handleUpdateState = async () => {
    try {
      await deletePostulant(postulationID, nameUser, emailUser);
    } catch (error) {
      // Error handling
      console.error("error", error);
    }
  };
  return (
    <div
      className="modal fade"
      id="staticBackdropDeletePostulant"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <form onSubmit={handleUpdateState}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Rechazar postulante
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Estas seguro que deseas rechazar a este postulante? al hacer esto
              el estudiante sera notificado de que no fue tomado en cuenta para
              la vacante.
            </div>
            <div className="modal-footer">
              <button
                style={{ backgroundColor: "#0C4770", border: "none" }}
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                style={{ border: "none" }}
                type="submit"
                className="btn btn-danger btn-sm"
              >
                Confirmar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeletePostulant;
