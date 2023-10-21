import React from "react";
import ApplyJob from "./modals/ApplyJob";

const VacancieDescription = ({ dataDescription }) => {

    return (
        <div className="card m-1">
            <ApplyJob Job_ID={dataDescription.Job_ID}/>
            <div className="card-body">
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
        </div>
    );
};

export default VacancieDescription;
