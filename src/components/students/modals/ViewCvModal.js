import React from 'react'

const ViewCvModal = ({ dataCv }) => {
    return (
        <div>
            <div>
                <div
                    className="modal fade"
                    id="staticBackdropViewCv"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                    (CV) - Hoja de vida
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <object
                                    className='w-100 h-100'
                                    data={`data:application/pdf;base64,${dataCv}`}
                                    type="application/pdf"
                                >
                                    <p>
                                        Tu navegador no puede mostrar este archivo PDF. Puedes
                                        descargarlo
                                        <a
                                            href={`data:application/pdf;base64,${dataCv}`}
                                            download
                                        >
                                            aquí
                                        </a>
                                        .
                                    </p>
                                </object>
                            </div>
                            <div className="modal-footer">
                                <button
                                    style={{ border: "none" }}
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                    data-bs-dismiss="modal"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCvModal
