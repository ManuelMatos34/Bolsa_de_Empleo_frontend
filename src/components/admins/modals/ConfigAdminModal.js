import React from 'react'

const ConfigAdminModal = () => {
    const formFields = [{ label: "Foto de perfil", id: "photo", type: "file" }];
    return (
        <div className="modal fade" id="staticBackdropConfAdminModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Admin</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            {formFields.map((field) => (
                                <div className="mb-3" key={field.id}>
                                    <label htmlFor={field.id} className="form-label">
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type}
                                        className="form-control"
                                        style={{ boxShadow: "none" }}
                                        accept=".pdf"
                                        size="85"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }} className="btn btn-primary btn-sm">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfigAdminModal
