import React, { useEffect, useRef } from 'react';

const NoCvModal = ({ data, dataCv }) => {
    const modalButtonRef = useRef(null);

    useEffect(() => {
        if (data.Cv_ID === null && modalButtonRef.current) {
            // Check if modalButtonRef.current is not null before calling click()
            modalButtonRef.current.click();
        }
    }, [data]);
    return (
        <>
            <button ref={modalButtonRef} hidden type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">CV</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Debes cargar un CV para poder postularte a una oferta laboral. Dirígete a la sección de CV y carga uno.
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NoCvModal;