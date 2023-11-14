import React from 'react'

const DeleteExperienceModal = () => {
    return (
        <div className="modal fade" id="staticBackdropDeleteExperience" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Eliminar Habilidad</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary btn-sm">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteExperienceModal
