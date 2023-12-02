import React from "react";
import { deleteOfert } from "../../../services/services";

const DeleteVacancieModal = ({ selectedData }) => {
  const deleVacan = async () => {
    try {
      await deleteOfert(selectedData?.Job_ID);
    } catch (error) {
      // Manejo de errores
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="modal fade"
      id="staticBackdropDeleteOf"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <form onSubmit={deleVacan}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Eliminar oferta
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Estas seguro que deseas eliminar esta oferta? la oferta ya no
              saldra en la lista de ofertas de los postulantes, pero los
              postulantes que ya se postularon a esta oferta seguiran en la
              lista de postulantes.
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
                Eliminar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteVacancieModal;
