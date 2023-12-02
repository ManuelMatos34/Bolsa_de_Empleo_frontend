import React from "react";

const ApplicationDescription = ({ dataDescription }) => {
  return (
    <>
      <div className="card m-1 style-title">
        <h6 className="m-2">Descripción</h6>
      </div>
      <div className="card m-1 mt-2">
        <div className="card-body">
          <h5 className="card-title icon-color">{dataDescription.Job_Title}</h5>
          <div
            className="card-subtitle text-muted"
            style={{ fontSize: "15px" }}
          >
            <b>{dataDescription.Comp_Name}</b> · {dataDescription.Job_Location}
          </div>
          <p className="card-subtitle text-muted mt-1">
            <i className="fas fa-briefcase"></i> {dataDescription.Job_Modality}{" "}
            · {dataDescription.Job_ContractType}
          </p>
          {dataDescription.Req_RequestStatus === "1" ? (
            <div>
              <p className="card-text text-success mt-2">
                <i className="fas fa-check-circle"></i> Tu solicitud ha sido{" "}
                <strong>tomada en cuenta</strong>, El empleador pronto se pondrá
                en contacto contigo.
              </p>
            </div>
          ) : dataDescription.Req_RequestStatus === "0" ? (
            <div>
              <p className="card-text text-danger mt-2">
                <i className="fas fa-times-circle"></i> Tu solicitud ha sido{" "}
                <strong>no aceptada</strong>, Lo sentimos, no has sido aceptado
                para la vacante. No te desmotive, sigue buscando oportunidades.
              </p>
            </div>
          ) : (
            <p className="card-text text-secondary mt-2">
              En espera del empleador...
            </p>
          )}
          <hr />
          <div className="overflow-auto" style={{ maxHeight: "50vh" }}>
            <p className="card-subtitle text-muted mt-1">
              <i className="fas fa-info-circle"></i> Descripción
            </p>
            <div className="card-text m-2" style={{ fontSize: "15px" }}>
              {dataDescription.Job_Description}
            </div>
            <p className="card-subtitle text-muted mt-1">
              <i className="fas fa-check-circle"></i> Requerimientos
            </p>
            <div className="card-text m-2" style={{ fontSize: "15px" }}>
              {dataDescription.Job_Requeriments}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationDescription;
