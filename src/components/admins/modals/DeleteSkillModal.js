import React from 'react'

const DeleteSkillModal = () => {
    return (
        <div className="modal fade" id="staticBackdropDeleteSkills" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Eliminar Habilidad</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Estas seguro que deseas eliminar esta habilidad?, esta habilidad tomara el estado de inactivo y no se mostrara en la pagina.
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }} className="btn btn-primary btn-sm">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteSkillModal
