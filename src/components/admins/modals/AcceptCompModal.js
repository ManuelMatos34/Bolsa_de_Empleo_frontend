import React from "react";
import { updateCompAprov } from "../../../services/services";

const AcceptCompModal = ({ selectData }) => {
  console.log(selectData);
  const compName = selectData?.Comp_Name;
  const compEmail = selectData?.User_Email;

  const acceptComp = async () => {
    try {
      let getResponse = await updateCompAprov(
        selectData.Comp_ID,
        "1",
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
      id="staticBackdropAcceptComp"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <form onSubmit={acceptComp}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Aceptar Empresa
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Estas seguro que deseas aceptar esta empresa?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }}
                type="submit"
                className="btn btn-primary btn-sm"
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

export default AcceptCompModal;
