import React from "react";
import { confirmPostulant } from "../../../services/services";

const AcceptPostulant = ({ postulationID, postulantData }) => {
  const nameUser =
    postulantData?.Std_FirstName + " " + postulantData?.Std_LastName;

  const emailUser = postulantData?.Std_PersonalEmail;

  const handleUpdateState = async () => {
    try {
      await confirmPostulant(postulationID, nameUser, emailUser);
    } catch (error) {
      // Error handling
      console.error("error", error);
    }
  };
  return (
    <div
      className="modal fade"
      id="staticBackdropAcceptPostulant"
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
                Aceptar postulante
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Estas seguro que deseas aceptar a este postulante? al hacer esto
              el estudiante sera notificado de que fue tomado en cuenta para la
              vacante.
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

export default AcceptPostulant;
