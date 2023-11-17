import React from 'react'
import photoNull from '../../assets/img/no image.png';
import AdminModals from './modals/AdminModals';
const CompaniesDescription = ({ dataDescription }) => {
    return (
        <div className="card m-1">
            <AdminModals />
            <img src={photoNull} alt="Imagen de la empresa" className="card-img-top" style={{ position: 'absolute', top: '10px', right: '10px', width: '200px' }} />
            <div className="card-body">
                <h4 className="card-title m-1 icon-color">{dataDescription.Comp_Name}</h4>
                <h6 className="card-subtitle mb-2 text-muted m-1">RNC: {dataDescription.Comp_ID}</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Teléfono: {dataDescription.Comp_Telephone}</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Calle 1: {dataDescription.Comp_FirstStreet}</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Calle 2: {dataDescription.Comp_SecondStreet}</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Ciudad: {dataDescription.Comp_City}</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Estado: {dataDescription.Comp_State}</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Código Postal: {dataDescription.Comp_PostalCode}</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Contacto Principal: {dataDescription.Comp_KeyContact}</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Teléfono del Contacto: {dataDescription.Comp_KYTelephone}</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Correo Electrónico: {dataDescription.Comp_EmailAddress}</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Sitio Web: {dataDescription.Comp_Website}</h6>
                <div>
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropAcceptComp" style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-success m-1 mb-0 btn-sm">Aceptar</button>
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropCancelComp" type="button" className="btn btn-danger m-1 mb-0 btn-sm">Denegar</button>
                </div>
            </div>
        </div>
    )
}

export default CompaniesDescription
