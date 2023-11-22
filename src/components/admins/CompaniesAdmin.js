import React, { useState } from 'react'
import CompaniesDescription from './CompaniesDescription'

const CompaniesAdmin = ({ data }) => {

    const [dataDescription, setDataDescription] = useState(null);

    const handleToDescription = async (Id) => {
        const comp = data.find(item => item.Comp_ID === Id);
        if (comp) {
            // Aquí puedes usar la variable 'job' que contiene el objeto con el 'Job_ID' igual a 'vacId'
            setDataDescription(comp);
        } else {
            console.log("No se encontró nada.");
        }
    };

    return (
        <div className="row">
            <div className="col-md-4 overflow-auto" style={{ maxHeight: "75vh" }}>
                {data && data.length > 0 ? (
                    data.map((company) => (
                        <div key={company.Comp_ID} className="card m-1 card-style">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <h6 className="card-subtitle text-muted m-1">
                                            <b>{company.Comp_Name}</b>
                                        </h6>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                                        {
                                            company.User_CreationAproval === "1" ? (
                                                <i className="fas fa-check fa-2x icon-color"></i>
                                            ) : company.User_CreationAproval === "0" ? (
                                                <i className="fas fa-ban fa-2x icon-color"></i>
                                            ) : (
                                                <i className="fas fa-exclamation-triangle fa-2x icon-color"></i>
                                            )
                                        }
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <button onClick={() => handleToDescription(company.Comp_ID)} style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1">Más Info</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='card'>
                        <div className='card-body'>
                            <div className='m-2' style={{ display: 'inline' }}>No hay empresas registradas.</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="col-md-8 overflow-auto mb-5" style={{ maxHeight: "80vh" }}>

                {dataDescription ? (
                    <CompaniesDescription dataDescription={dataDescription} />
                ) : (
                    <div className='card m-1'>
                        <div className='card-body'>
                            <div className='m-2' style={{ display: 'inline' }}>Haz click en <p className='btn-style' style={{ display: 'inline' }}>Más Info</p> para ver más a detalle la empresa.</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CompaniesAdmin
