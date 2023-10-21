import React from 'react'

const Notifications = () => {
    return (
        <div className='container mt-4 overflow-auto' style={{ maxHeight: "85vh" }}>
            <div className='m-2 p-2'>

                <div className="card card-style m-1">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2 col-12 d-flex align-items-center justify-content-center mb-3">
                                <i className="fas fa-briefcase icon-color" style={{ fontSize: "4rem" }}></i>
                            </div>
                            <div className="col-md-10 col-12">
                                <h5 className="card-title"><b>UNPHU</b> ha cambiado el estado de tu solicitud:</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p className="card-text text-end">hace 2 minutos</p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Notifications
