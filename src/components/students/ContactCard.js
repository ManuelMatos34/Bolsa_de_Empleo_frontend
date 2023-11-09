import React from 'react'

const ContactCard = ({data}) => {
    return (
            <div className='card h-100'>
                <div className='card-body h-100'>
                    <p className="card-subtitle text-muted m-2 mt-3">
                        <i className="fas fa-phone"></i>&nbsp; <b>Teléfono:</b> {data.Std_HomePhone}
                    </p>
                    <p className="card-subtitle text-muted m-2 mt-3">
                        <i className="fas fa-mobile-alt"></i> &nbsp;<b>Celular:</b> {data.Std_Telephone}
                    </p>
                    <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                        <button data-bs-toggle="modal" data-bs-target="#staticBackdropContact" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                            <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default ContactCard
