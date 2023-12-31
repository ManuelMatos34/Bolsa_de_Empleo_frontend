import React from "react";
import { updateCompAprov } from "../../../services/services";

const CancelCompModal = ({ selectData }) => {
  const compName = selectData?.Comp_Name;
  const compEmail = selectData?.Comp_EmailAddress;
  const cancelComp = async () => {
    try {
      let getResponse = await updateCompAprov(
        selectData.Comp_ID,
        "0",
        compName,
        compEmail
      );
      let response = getResponse;
      console.log(response);
    } catch (error) {
      // Manejo de errores
      console.error("error", error);
    }
  };
  return (
    <div
      className="modal fade"
      id="staticBackdropCancelComp"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <form onSubmit={cancelComp}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Denegar Empresa
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Estas seguro que deseas denegar el acceso a esta empresa?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="submit" className="btn btn-danger btn-sm">
                Confirmar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CancelCompModal;
