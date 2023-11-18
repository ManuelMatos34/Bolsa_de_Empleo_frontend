import React, { useState } from 'react';
import VacancieDescription from './VacancieDescription';

const CompVanacies = ({data}) => {
    const [dataDescription, setDataDescription] = useState(null);
    const handleToDescription = async (id) => {
        const job = data.find(item => item.Job_ID === id);
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
                <div className="card m-1">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted m-1">
                            <b>Mis Vacantes</b>
                        </h6>
                    </div>
                </div>
                <div className='overflow-auto' style={{ maxHeight: "75vh" }}>
                    {
                        data ? (
                            data.map((vacancie) => (
                                <div key={vacancie.Job_ID} className="card m-1 card-style">
                                    <div className="card-body">
                                        <h6 className="card-subtitle text-muted m-1">
                                            <b>{vacancie.Job_Title}</b>
                                        </h6>
                                        <button onClick={() => handleToDescription(vacancie.Job_ID)} style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Más Info</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='card m-1'>
                                <div className='card-body'>
                                    <div className='m-2' style={{ display: 'inline' }}>No hay vacantes registradas.</div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
            <div className="col-md-9 overflow-auto mb-5" style={{ maxHeight: "80vh" }}>
                {dataDescription ? (
                    <VacancieDescription dataDescription={dataDescription} />
                ) : (
                    <div className='card m-1'>
                        <div className='card-body'>
                            <div className='m-2' style={{ display: 'inline' }}>Haz click en <p className='btn-style' style={{ display: 'inline' }}>Más Info</p> para ver más a detalle la Empresa.</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompVanacies;
