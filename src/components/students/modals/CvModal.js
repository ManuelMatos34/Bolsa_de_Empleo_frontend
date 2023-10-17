import React from 'react'

const CvModal = () => {

    const formFields = [
        { label: '(CV) - Hoja de vida', id: 'cv', type: 'file' }
    ];

    return (
        <div>
            <div className="modal fade" id="staticBackdropCv" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">(CV) - Hoja de vida</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                {formFields.map((field) => (
                                    <div className="mb-3" key={field.id}>
                                        <label htmlFor={field.id} className="form-label">{field.label}</label>
                                        <input type={field.type} className="form-control" id={field.id} />
                                    </div>
                                ))}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button style={{ border: "none" }} type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal">Cerrar</button>
                            <button style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CvModal
