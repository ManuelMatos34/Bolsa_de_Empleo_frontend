import React, { useEffect, useState } from "react";
import ApplyJob from "./modals/ApplyJob";
import { getAllByJob } from "../../services/services";
import { getUserCookies } from "../../helpers/Helpers";

const VacancieDescription = ({ dataDescription }) => {
    const stdId = getUserCookies();
    const userId = stdId[0].Std_ID
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
                        if (userId !== null && data[0]?.Std_ID === userId) { // Verifica que userId no sea null
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
        <div className="card m-1">
            {loading !== 1 ? (
                <div className="card-body">
                    <ApplyJob Job_ID={dataDescription.Job_ID} />
                    <h4 className="card-title m-1 icon-color">{dataDescription.Job_Title}</h4>
                    <h5 className="card-subtitle mb-2 text-muted m-1">Empresa: {dataDescription.Comp_Name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted m-1">Modalidad: {dataDescription.Job_Modality}</h6>
                    <h6 className="card-subtitle mb-2 text-muted m-1">Contrato: {dataDescription.Job_ContractType}</h6>
                    <h6 className="card-subtitle mb-2 text-muted m-1">Vacantes disponibles: {dataDescription.Job_NoVacancy}</h6>
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropApply" style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Aplicar</button>
                    <hr />
                    <div className="overflow-auto" style={{ maxHeight: "50vh" }}>
                        <h6 className="card-subtitle mb-2 mt-1 text-muted">Descripción</h6>
                        <p className="card-text">
                            {dataDescription.Job_Description}
                        </p>
                        <h6 className="card-subtitle mb-2 text-muted">Requerimientos</h6>
                        <p className="card-text">
                            {dataDescription.Job_Requeriments}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="card-body">
                    <p>Ya has aplicado a esta vacante,
                        dirigete a ( <i className="icon-color fas fa-graduation-cap"></i> Postulaciones) para que veas el estado de tu postulacion.</p>

                </div>)}
        </div>
    );
};

export default VacancieDescription;
