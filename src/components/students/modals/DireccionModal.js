import React from 'react'

const DireccionModal = ({ formData, handleChange, handlePutStd }) => {
    const formFields = [
        { label: 'Direccion 1', id: 'Std_FirstStreet', type: 'textarea', value: formData.Std_FirstStreet },
        { label: 'Direccion 2', id: 'Std_SecondStreet', type: 'textarea', value: formData.Std_SecondStreet },
        { label: 'Ciudad', id: 'Std_City', type: 'text', value: formData.Std_City },
        { label: 'Estado', id: 'Std_State', type: 'text', value: formData.Std_State },
        { label: 'Codigo Postal', id: 'Std_PostalCode', type: 'text', value: formData.Std_PostalCode },
    ];

    return (
        <div>
            <div className="modal fade" id="staticBackdropDireccion" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Dirección</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                {formFields.map((field) => (
                                    <div className="mb-3" key={field.id}>
                                        <label>{field.label}</label>
                                        {field.type === 'textarea' ? (
                                            <textarea
                                                className="form-control"
                                                id={field.id}
                                                value={field.value}
                                                onChange={(e) => handleChange(e)}
                                                style={{ boxShadow: "none" }}
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                className="form-control"
                                                id={field.id}
                                                style={{ boxShadow: "none" }}
                                                value={field.value}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        )}
                                    </div>
                                ))}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button style={{ border: "none" }} type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal">Cerrar</button>
                            <button onClick={() => handlePutStd()} style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DireccionModal
