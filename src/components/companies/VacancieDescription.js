import React from "react";
import AllPostulants from "./AllPostulants";
import { calculateTimePassed } from "../../helpers/Helpers";

const VacancieDescription = ({ dataDescription, setSelectedData }) => {
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="card m-1 style-title">
          <h6 className="m-2">Descripcion</h6>
        </div>
        <div className="card m-1">
          <div className="card-body">
            <h5 className="card-title icon-color">
              {dataDescription.Job_Title}
            </h5>
            <p className="card-subtitle text-muted">
              {dataDescription.Job_Location} ·{" "}
              {calculateTimePassed(dataDescription.Job_CreationDate)}
            </p>
            <p className="card-subtitle text-muted mt-1">
              <i className="fas fa-briefcase"></i>{" "}
              {dataDescription.Job_Modality} ·{" "}
              {dataDescription.Job_ContractType}
            </p>
            <hr />
            <div className="overflow-auto" style={{ maxHeight: "50vh" }}>
              <p className="card-subtitle text-muted mt-2">
                <i className="fas fa-info-circle"></i> Descripción
              </p>
              <p className="card-text">{dataDescription.Job_Description}</p>
              <p className="card-subtitle text-muted mt-2">
                <i className="fas fa-check-circle"></i> Requerimientos
              </p>
              <p className="card-text">{dataDescription.Job_Requeriments}</p>
            </div>
          </div>
          <div
            className="m-1"
            style={{ position: "absolute", top: "0", right: "0" }}
          >
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropEditVanacie"
              style={{ backgroundColor: "#FFFFFF", border: "none" }}
              className="btn btn-light text-success"
              onClick={() => setSelectedData(dataDescription)}
            >
              <i className="fas fa-edit"></i> {/* Ícono de editar */}
            </button>
          </div>
          <div
            className="m-1"
            style={{ position: "absolute", top: "0", right: "40px" }}
          >
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropDeleteOf"
              style={{ backgroundColor: "#FFFFFF", border: "none" }}
              className="btn btn-light text-danger"
              onClick={() => setSelectedData(dataDescription)}
            >
              <i className="fas fa-trash"></i> {/* Ícono de eliminar */}
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <AllPostulants jobid={dataDescription.Job_ID} />
      </div>
    </div>
  );
};

export default VacancieDescription;
