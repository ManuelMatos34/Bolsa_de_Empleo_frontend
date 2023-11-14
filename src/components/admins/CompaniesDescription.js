import React from 'react'
import photoNull from '../../assets/img/no image.png';
import AdminModals from './modals/AdminModals';
const CompaniesDescription = () => {
    return (
        <div className="card m-1">
            <AdminModals />
            <img src={photoNull} alt="Imagen de la empresa" className="card-img-top" style={{ position: 'absolute', top: '10px', right: '10px', width: '100px' }} />
            <div className="card-body">
                <h4 className="card-title m-1 icon-color">Comp_Name</h4>
                <h6 className="card-subtitle mb-2 text-muted m-1">Empresa: Comp_Description</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">RNC: Comp_Description</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Teléfono: Comp_Telephone</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Calle 1: Comp_FirstStreet</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Calle 2: Comp_SecondStreet</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Ciudad: Comp_City</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Estado: Comp_State</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Código Postal: Comp_PostalCode</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Contacto Principal: Comp_KeyContact</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Teléfono del Contacto: Comp_KYTelephone</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Correo Electrónico: Comp_EmailAddress</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Sitio Web: Comp_Website</h6>
                <div>
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropAcceptComp" style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-success m-1 mb-0 btn-sm">Aceptar</button>
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropCancelComp" type="button" className="btn btn-danger m-1 mb-0 btn-sm">Denegar</button>
                </div>
            </div>
        </div>
        /* ) : (
                <div className="card-body">
                    <p>Ya has aplicado a esta vacante,
                        dirigete a ( <i className="icon-color fas fa-graduation-cap"></i> Postulaciones) para que veas el estado de tu postulacion.</p>

                </div>)} */
    )
}

export default CompaniesDescription
