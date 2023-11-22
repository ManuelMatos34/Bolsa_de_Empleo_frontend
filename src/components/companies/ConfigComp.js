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
        <div className='container w-75'>
            <CompanyModals />
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title text-center'>Configuración de Empresa</h5>
                    <div className='row mt-3'>
                        <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
                            <img src={photoNull} alt="Imagen del usuario" className="img-fluid rounded-circle" />
                        </div>
                        <div className='col-lg-8 col-md-6 col-sm-12'>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-user"></i>&nbsp; <b>Nombre Empresa: </b>{data?.Comp_Name}
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-envelope"></i>&nbsp; <b>Correo usuario: </b>{data?.User_Email}
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-building"></i>&nbsp; <b>Descripción de la Empresa: </b>{data?.Comp_Description}
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-phone"></i>&nbsp; <b>Teléfono de la Empresa: </b>{data?.Comp_Telephone}
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-globe"></i>&nbsp; <b>Sitio Web:</b> {data?.Comp_Website}
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-road"></i>&nbsp; <b>Direccion 1:</b>{data?.Comp_FirstStreet}
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-road"></i>&nbsp; <b>Direccion 2: </b>{data?.Comp_SecondStreet}
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-city"></i>&nbsp; <b>Ciudad:</b> {data?.Comp_City}
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-mail-bulk"></i>&nbsp; <b>Código Postal:</b> {data?.Comp_PostalCode}
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-at"></i>&nbsp; <b>Correo de la Empresa:</b> {data?.Comp_EmailAddress}
                                    </p>

                                    {/* <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-user-circle"></i>&nbsp; <b>Contacto Clave: {data?.Comp_KeyContact}</b>
                                    </p>
                                    <p className="card-subtitle text-muted mt-3">
                                        <i className="fas fa-phone"></i>&nbsp; <b>Teléfono de Contacto: {data?.Comp_KYTelephone}</b>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-1 text-end' style={{ backgroundColor: "#FFFFFF", border: "none" }}>
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdropEditCompConfig" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                        <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ConfigComp
