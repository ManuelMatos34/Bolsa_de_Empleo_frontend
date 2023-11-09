import React from 'react'
import photoNull from '../../assets/img/no image.png';
const CompaniesDescription = () => {
    return (
        <div className="card m-1">
            <img src={photoNull} alt="Imagen de la empresa" className="card-img-top" style={{ position: 'absolute', top: '10px', right: '10px', width: '100px' }} />
            <div className="card-body">
                <h4 className="card-title m-1 icon-color">Comp_Name</h4>
                <h5 className="card-subtitle mb-2 text-muted m-1">Empresa: Comp_Description</h5>
                <h5 className="card-subtitle mb-2 text-muted m-1">RNC: Comp_Description</h5>
                <h5 className="card-subtitle mb-2 text-muted m-1">Teléfono: Comp_Telephone</h5>
                <h5 className="card-subtitle mb-2 text-muted m-1">Calle 1: Comp_FirstStreet</h5>
                <h5 className="card-subtitle mb-2 text-muted m-1">Calle 2: Comp_SecondStreet</h5>
                <h5 className="card-subtitle mb-2 text-muted m-1">Ciudad: Comp_City</h5>
                <h5 className="card-subtitle mb-2 text-muted m-1">Estado: Comp_State</h5>
                <h5 className="card-subtitle mb-2 text-muted m-1">Código Postal: Comp_PostalCode</h5>
                <h5 className="card-subtitle mb-2 text-muted m-1">Contacto Principal: Comp_KeyContact</h5>
                <h5 className="card-subtitle mb-2 text-muted m-1">Teléfono del Contacto: Comp_KYTelephone</h5>
                <h5 className="card-subtitle mb-2 text-muted m-1">Correo Electrónico: Comp_EmailAddress</h5>
                <h5 className="card-subtitle mb-2 text-muted m-1">Sitio Web: Comp_Website</h5>
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
