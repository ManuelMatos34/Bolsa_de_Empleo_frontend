import React, { useState } from "react";
import VacancieDescription from "./VacancieDescription";
import { calculateTimePassed } from "../../helpers/Helpers";

const CompVanacies = ({ data, setSelectedData }) => {
  const [dataDescription, setDataDescription] = useState(null);
  const handleToDescription = async (id) => {
    const job = data.find((item) => item.Job_ID === id);
    if (job) {
      // Aquí puedes usar la variable 'job' que contiene el objeto con el 'Job_ID' igual a 'vacId'
      setDataDescription(job);
    } else {
      console.log("No se encontró un trabajo con el Job_ID especificado.");
    }
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <div className="card m-1 style-title">
          <h6 className="m-2">Vacantes</h6>
        </div>
        <div className="overflow-auto" style={{ maxHeight: "75vh" }}>
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
                    <p style={{ fontSize: "12px" }}>{item.Job_Location} </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-end mt-auto">
                    <button
                      onClick={() => handleToDescription(item.Job_ID)}
                      style={{ backgroundColor: "#0C4770", border: "none" }}
                      type="button"
                      className="btn btn-primary btn-sm"
                    >
                      Más Info
                    </button>
                    <div className="text-muted small">
                      {calculateTimePassed(item.Job_CreationDate)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="card m-1">
              <div className="card-body">
                <div className="m-2" style={{ display: "inline" }}>
                  No hay vacantes registradas.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className="col-md-9 overflow-auto mb-5"
        style={{ maxHeight: "80vh" }}
      >
        {dataDescription ? (
          <VacancieDescription
            dataDescription={dataDescription}
            setSelectedData={setSelectedData}
          />
        ) : (
          <>
            <div className="card m-1 style-title">
              <h6 className="m-2">Descripcion</h6>
            </div>
            <div className="card m-1">
              <div className="card-body">
                <div className="m-2" style={{ display: "inline" }}>
                  Haz click en{" "}
                  <p className="btn-style" style={{ display: "inline" }}>
                    Más Info
                  </p>{" "}
                  para ver más a detalle la Empresa.
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CompVanacies;
