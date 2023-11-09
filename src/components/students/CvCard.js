import React from 'react'

const CvCard = ({ data }) => {
    return (
        <div className='card mt-2'>
            <div className='card-body'>
                <div className="card-subtitle text-muted m-2 mt-3">
                    <i className="far fa-file-pdf"></i> &nbsp;<b>Nombre archivo:</b> {
                        data.Cv_ID ?
                            (
                                <div className='d-flex align-items-center card-text text-success'>
                                    <p className='m-0'>Ya hay un CV cargado</p> &nbsp;
                                    <i className="fas fa-check-circle"></i>
                                </div>
                            ) : (
                                <div className="d-flex align-items-center card-text text-danger">
                                    <p className="m-0">No hay un CV cargado</p> &nbsp;
                                    <i className="fas fa-times-circle"></i>
                                </div>
                            )
                    }
                </div>
                {data.Cv_ID ?
                    (
                        <button data-bs-toggle="modal" data-bs-target="#staticBackdropViewCv" style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Ver</button>
                    ) : (
                        <div></div>
                    )
                }
                <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropCv" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                        <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CvCard
