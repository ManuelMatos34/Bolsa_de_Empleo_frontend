import React from 'react'
import { deleteExp } from '../../../services/services';

const DeleteExperienceModal = ({ idExp }) => {

    const deleExp = async () => {
        try {
            const response = await deleteExp(idExp?.Exp_ID);
            console.log(response);
        } catch (error) {
            // Manejo de errores
            console.error("Error:", error);
        }
    };

    return (
        <div className="modal fade" id="staticBackdropDeleteExperience" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form onSubmit={deleExp}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Eliminar Experiencia</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Estas seguro que deseas eliminar esta experiencia?
                        </div>
                        <div className="modal-footer">
                            <button style={{ backgroundColor: '#0C4770', border: 'none' }} type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cerrar</button>
                            <button style={{ border: 'none' }} type="submit" className="btn btn-danger btn-sm">Eliminar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DeleteExperienceModal
