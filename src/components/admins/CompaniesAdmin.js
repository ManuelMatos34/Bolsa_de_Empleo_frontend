import React from 'react'
import CompaniesDescription from './CompaniesDescription'

const CompaniesAdmin = () => {
    return (
        <div className="row">
            <div className="col-md-4 overflow-auto" style={{ maxHeight: "80vh" }}>
                <div className="card m-1 card-style">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted m-1">
                            <b>Empresa de Transmision Electrica Dominicana</b>
                        </h6>
                        <button style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Más Info</button>
                    </div>
                </div>
                <div className="card m-1 card-style">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted m-1">
                            <b>Empresa de Transmision Electrica Dominicana</b>
                        </h6>
                        <button style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Más Info</button>
                    </div>
                </div>
                <div className="card m-1 card-style">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted m-1">
                            <b>Empresa de Transmision Electrica Dominicana</b>
                        </h6>
                        <button style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Más Info</button>
                    </div>
                </div>

                {/* <div className='card m-1'>
                        <div className='card-body'>
                            <div className="d-flex align-items-center">
                                <p className='m-1'>Cargando...</p>
                                <div className="spinner-border icon-color m-1" role="status">
                                    <span className="visually-hidden"></span>
                                </div>
                            </div>
                        </div>
                    </div> */}


            </div>
            <div className="col-md-8 overflow-auto mb-5" style={{ maxHeight: "80vh" }}>
                <CompaniesDescription />
                {/* {appDescription ? (
                    <ApplicationDescription dataDescription={appDescription} />
                ) : (
                    <div className='card m-1'>
                        <div className='card-body'>
                            <div className='m-2' style={{ display: 'inline' }}>Haz click en <p className='btn-style' style={{ display: 'inline' }}>Más Info</p> para ver más a detalle la vacante.</div>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default CompaniesAdmin
