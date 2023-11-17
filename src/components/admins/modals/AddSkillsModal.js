import React from 'react'

const AddSkillsModal = () => {
    const formFields = [
        { label: 'Nombre de la Habilidad', id: 'habilidad', type: 'text', maxLength: '25', required: true, },
        { label: 'Carrera', id: 'carrera', type: 'select', required: true, },
    ];

    return (
        <div className="modal fade" id="staticBackdropAddSkills" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Agregar Habilidad</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            {formFields.map((field) => (
                                <div className="mb-3" key={field.id}>
                                    <label htmlFor={field.id} className="form-label">{field.label}</label>
                                    {field.type === 'select' ? (
                                        <select
                                            className="form-select"
                                            id={field.id}
                                            style={{ boxShadow: 'none' }}
                                            required={field.required}
                                        >
                                            <option value="">Selecciona una opcion</option>
                                            {

                                                // Object.values(c).map((option) => (
                                                //     <option key={option} value={option}>
                                                //         {option}
                                                //     </option>
                                                // ))
                                            }
                                        </select>
                                    ) : (
                                        <input
                                            type={field.type}
                                            className="form-control"
                                            id={field.id}
                                            style={{ boxShadow: 'none' }}
                                            maxLength={field.maxLength}
                                            required={field.required}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cerrar</button>
                            <button style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }} type="button" className="btn btn-primary btn-sm">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddSkillsModal
