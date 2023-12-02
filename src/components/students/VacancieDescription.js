import React, { useEffect, useState } from "react";
import ApplyJob from "./modals/ApplyJob";
import { getAllByJob } from "../../services/services";
import { calculateTimePassed, getUserCookies } from "../../helpers/Helpers";

const VacancieDescription = ({ dataDescription }) => {
  const stdId = getUserCookies();
  const userId = stdId[0].Std_ID;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dataDescription !== null || dataDescription !== undefined) {
      try {
        async function fetchData() {
          const response = await getAllByJob(dataDescription.Job_ID);
          const data = response.data;

          if (data === undefined) {
            setLoading(0);
          } else {
            if (userId !== null && data[0]?.Std_ID === userId) {
              // Verifica que userId no sea null
              setLoading(1);
            } else {
              setLoading(0);
            }
          }
        }

        fetchData();
      } catch (error) {
        // Manejo de errores
        console.error("error", error.response?.data.message); // Usa ?. para evitar errores si no existe response
        setLoading(0);
      }
    } else {
      setLoading(1);
    }
  }, [dataDescription.Job_ID]);

  return (
    <>
      <div className="card m-1 style-title">
        <h6 className="m-2">Descripción</h6>
      </div>
      {loading !== 1 ? (
        <div className="card m-1">
          <div className="card-body">
            <ApplyJob Job_ID={dataDescription.Job_ID} />
            <h5 className="card-title icon-color">
              {dataDescription.Job_Title}
            </h5>
            <p className="card-subtitle text-muted">
              <b>{dataDescription.Comp_Name}</b> ·{" "}
              {dataDescription.Job_Location} ·{" "}
              {calculateTimePassed(dataDescription.Job_CreationDate)}
            </p>
            <p className="card-subtitle text-muted mt-1">
              <i className="fas fa-briefcase"></i>{" "}
              {dataDescription.Job_Modality} ·{" "}
              {dataDescription.Job_ContractType}
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropApply"
              style={{ backgroundColor: "#0C4770", border: "none" }}
              type="button"
              className="btn btn-primary btn-sm mt-2"
            >
              Aplicar
            </button>
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
        </div>
      ) : (
        <>
          <div className="card m-1">
            <div className="card-body mt-2">
              <p>
                Ya has aplicado a esta vacante, dirígete a ({" "}
                <i className="icon-color fas fa-graduation-cap"></i>{" "}
                Postulaciones) para que veas el estado de tu postulación.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default VacancieDescription;
