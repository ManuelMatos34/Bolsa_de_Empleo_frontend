import React, { useEffect, useState } from 'react'
import photoNull from '../../assets/img/no image.png';
import CompanyModals from './modals/CompanyModals';
import { getUserCookies } from '../../helpers/Helpers';
import { getCompById } from '../../services/services';

const ConfigComp = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const userId = getUserCookies();
            try {
                let getResponse = await getCompById(userId[0].Comp_ID);
                let response = getResponse.data;
                setData(response);
            } catch (error) {
                // Manejo de errores
                console.error("error", error);
                setData(null);
            }
        };
        getUser();
    }, []);
    
    return (
        <div className='container'>
            <CompanyModals />
            <div className='card'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
                            <img src={photoNull} alt="Imagen del usuario" className="img-fluid" />
                        </div>
                        <div className='col-lg-8 col-md-6 col-sm-12'>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-user"></i>&nbsp; <b>Nombre: {data?.Comp_Name}</b>
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-envelope"></i>&nbsp; <b>Correo usuario: {data?.User_Email}</b>
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-building"></i>&nbsp; <b>Descripción de la Empresa: {data?.Comp_Description}</b>
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-phone"></i>&nbsp; <b>Teléfono de la Empresa: {data?.Comp_Telephone}</b>
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-at"></i>&nbsp; <b>Correo de la Empresa: {data?.Comp_EmailAddress}</b>
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-globe"></i>&nbsp; <b>Sitio Web: {data?.Comp_Website}</b>
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-road"></i>&nbsp; <b>Primera Calle:{data?.Comp_FirstStreet}</b>
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-road"></i>&nbsp; <b>Segunda Calle: {data?.Comp_SecondStreet}</b>
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-city"></i>&nbsp; <b>Ciudad: {data?.Comp_City}</b>
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-flag"></i>&nbsp; <b>Estado: {data?.Comp_State}</b>
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-mail-bulk"></i>&nbsp; <b>Código Postal: {data?.Comp_PostalCode}</b>
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-user-circle"></i>&nbsp; <b>Contacto Clave: {data?.Comp_KeyContact}</b>
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-phone"></i>&nbsp; <b>Teléfono de Contacto: {data?.Comp_KYTelephone}</b>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropEditCompConfig" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                        <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ConfigComp
