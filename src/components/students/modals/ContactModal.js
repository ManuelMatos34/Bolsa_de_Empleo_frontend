import React from 'react'

const ContactModal = ({ formData, handleChange, handlePutStd }) => {
    const formFields = [
        { label: 'Telefono', id: 'Std_HomePhone', type: 'text', value: formData.Std_HomePhone, maxLength: "10", requeried: true, pattern: "[0-9]*" },
        { label: 'Celular', id: 'Std_Telephone', type: 'text', value: formData.Std_Telephone, maxLength: "10", requeried: true, pattern: "[0-9]*" },
    ];

    return (
        <div>
            <div className="modal fade" id="staticBackdropContact" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <form onSubmit={handlePutStd}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Contacto</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {formFields.map((field) => (
                                    <div className="mb-3" key={field.id}>
                                        <label htmlFor={field.id} className="form-label">{field.label}</label>
                                        <input
                                            type={field.type}
                                            className="form-control"
                                            id={field.id}
                                            style={{ boxShadow: "none" }}
                                            value={field.value}
                                            onChange={(e) => handleChange(e)}
                                            required={field.requeried}
                                            maxLength={field.maxlength}
                                            pattern={field.pattern}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button style={{ border: "none" }} type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal">Cerrar</button>
                                <button style={{ backgroundColor: "#0C4770", border: "none" }} type="submit" className="btn btn-primary btn-sm">Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactModal
