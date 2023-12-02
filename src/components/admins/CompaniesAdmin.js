import React, { useState } from "react";
import CompaniesDescription from "./CompaniesDescription";
import { calculateTimePassed } from "../../helpers/Helpers";

const CompaniesAdmin = ({ data }) => {
  const [dataDescription, setDataDescription] = useState(null);

  const handleToDescription = async (Id) => {
    const comp = data.find((item) => item.Comp_ID === Id);
    if (comp) {
      // Aquí puedes usar la variable 'job' que contiene el objeto con el 'Job_ID' igual a 'vacId'
      setDataDescription(comp);
    } else {
      console.log("No se encontró nada.");
    }
  };

  return (
    <div className="row">
      <div className="col-md-3 ">
        <div className="card mt-1 style-title">
          <h6 className="m-2">Empresas</h6>
        </div>
        {data && data.length > 0 ? (
          <div className="overflow-auto mt-1" style={{ maxHeight: "73vh" }}>
            {data.map((company) => (
              <div
                key={company.Comp_ID}
                className="card m-1 card-style position-relative"
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h6 className="card-subtitle text-muted m-1">
                        <b>{company.Comp_Name}</b>
                      </h6>
                    </div>
                    <div
                      className="col-md-6 d-flex justify-content-end align-items-center"
                      style={{ position: "absolute", top: "20px", right: "0" }}
                    >
                      {company.User_CreationAproval === "1" ? (
                        <i className="fas fa-check fa-lg text-success"></i>
                      ) : company.User_CreationAproval === "0" ? (
                        <i className="fas fa-ban fa-lg text-danger"></i>
                      ) : (
                        <i className="fas fa-exclamation-triangle fa-lg text-warning"></i>
                      )}
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <button
                        onClick={() => handleToDescription(company.Comp_ID)}
                        style={{ backgroundColor: "#0C4770", border: "none" }}
                        type="button"
                        className="btn btn-primary btn-sm m-1"
                      >
                        Más Info
                      </button>
                    </div>
                  </div>
                  <div
                    className="position-absolute bottom-0 end-0 m-3 text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {calculateTimePassed(company.Comp_RegisterDate)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="card mt-1">
              <div className="card-body">
                <div className="m-2" style={{ display: "inline" }}>
                  No hay empresas registradas.
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div
        className="col-md-9 overflow-auto mb-5"
        style={{ maxHeight: "80vh" }}
      >
        {dataDescription ? (
          <CompaniesDescription dataDescription={dataDescription} />
        ) : (
          <>
            <div className="card mt-1 style-title">
              <h6 className="m-2">Descripción</h6>
            </div>
            <div className="card mt-1">
              <div className="card-body">
                <div className="m-2" style={{ display: "inline" }}>
                  Haz click en{" "}
                  <p className="btn-style" style={{ display: "inline" }}>
                    Más Info
                  </p>{" "}
                  para ver más a detalle la empresa.
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CompaniesAdmin;
