import React, { useState } from "react";
import VacancieDescription from "./VacancieDescription";

const VacanciesStudents = ({ data }) => {
  const [dataDescription, setDataDescription] = useState(null);

  const handleToDescription = async (vacId) => {
    const job = data.find((item) => item.Job_ID === vacId);
    if (job) {
      // Aquí puedes usar la variable 'job' que contiene el objeto con el 'Job_ID' igual a 'vacId'
      setDataDescription(job);
    } else {
      console.log("No se encontró un trabajo con el Job_ID especificado.");
    }
  };

  return (
    <div className="row">
      <div
        className="col-md-3 col-12 overflow-auto"
        style={{ maxHeight: "75vh" }}
      >
        {data ? (
          data.map((item) => (
            <div key={item.Job_ID} className="card m-1 card-style">
              <div className="card-body">
                <h6 className="card-title">
                  <b>{item.Job_Title}</b>
                </h6>
                <div>
                  <p className="card-subtitle text-muted">
                    <b>{item.Comp_Name}</b>
                  </p>
                  <p className="card-subtitle text-muted">
                    {item.Job_Modality} · {item.Job_ContractType}
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    Santo Domingo de Guzmán, Distrito Nacional, República
                    Dominicana{" "}
                  </p>
                </div>
                <button
                  onClick={() => handleToDescription(item.Job_ID)}
                  style={{ backgroundColor: "#0C4770", border: "none" }}
                  type="button"
                  className="btn btn-primary btn-sm"
                >
                  Más Info
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="card m-1">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <p className="m-1">Cargando...</p>
                <div className="spinner-border icon-color m-1" role="status">
                  <span className="visually-hidden"></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="col-md-9 col-12 mb-5 overflow-auto"
        style={{ maxHeight: "75vh" }}
      >
        {dataDescription ? (
          <VacancieDescription dataDescription={dataDescription} />
        ) : (
          <div className="card m-1">
            <div className="card-body">
              <div className="m-2" style={{ display: "inline" }}>
                Haz click en{" "}
                <p className="btn-style" style={{ display: "inline" }}>
                  Más Info
                </p>{" "}
                para ver más a detalle la vacante.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VacanciesStudents;
