import React from 'react'

const AcceptCompModal = () => {
    return (
        <div className="modal fade" id="staticBackdropAcceptComp" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Aceptar Empresa</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Estas seguro que deseas aceptar esta empresa?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
                        <button style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }} type="button" className="btn btn-primary btn-sm">Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcceptCompModal
