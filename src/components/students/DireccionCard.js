import React from 'react'

const DireccionCard = ({data}) => {
    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <p className="card-subtitle text-muted m-2 mt-3">
                        <i className="fas fa-map-marker-alt"></i>&nbsp; <b>Dirección 1:</b> {data.Std_FirstStreet}
                    </p>
                    <p className="card-subtitle text-muted m-2 mt-3">
                        <i className="fas fa-map-marker-alt"></i> &nbsp;<b>Dirección 2:</b> {data.Std_SecondStreet}
                    </p>
                    <p className="card-subtitle text-muted m-2 mt-3">
                        <i className="fas fa-city"></i> &nbsp;<b>Provincias:</b> {data.Std_City}
                    </p>
                    <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                        <button data-bs-toggle="modal" data-bs-target="#staticBackdropDireccion" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                            <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DireccionCard
