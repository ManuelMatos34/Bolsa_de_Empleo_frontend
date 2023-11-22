import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStatsComp, getStatsUser } from '../../services/services';

const AdminPage = () => {
    const [dataUser, setDataUser] = useState(null);
    const [dataComp, setDataComp] = useState(null);

    useEffect(() => {
        const getStats = async () => {
            try {
                const response = await getStatsUser();
                setDataUser(response.data[0]);
                const response2 = await getStatsComp();
                setDataComp(response2.data[0]);
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        };
        getStats();
    }, []);

    return (
        <div className="row mt-2 mb-5">
            <div className='m-1 mt-2'>
                <h4>Centro de administracion - UNPHU Bolsa de Empleos</h4>
            </div>
            <div className='m-1 mt-4'>
                <h6>
                    <i className="fas fa-tasks"></i>
                    &nbsp; Tareas Pendientes
                </h6>
            </div>
            <div className="col-md-4">
                <div className="card shadow card-style">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-auto m-1">
                                <i className="fas fa-building fa-2x icon-color"></i>
                            </div>
                            <div className="col">
                                <h5 className="card-title">Empresas sin confirmar</h5>
                                <div className="h2 font-weight-bold">{dataComp?.Pendientes}</div>
                                <p className="card-text">Empresas que estan a la espera del
                                    administrador poder ingresar al sistema.
                                </p>
                                <Link style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm" to="/companiesadmin">
                                    Administrar Empresas
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-1 mt-5'>
                <h6>
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Estado
                </h6>
            </div>
            <div className="col-md-2 mt-1">
                <div className="card shadow card-style">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-auto m-2">
                                <i className="fas fa-users fa-2x icon-color"></i>
                            </div>
                            <div className="col">
                                <h6 className="card-title">Usuarios</h6>
                                <div className="h3 font-weight-bold">{dataUser?.Total}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 mt-1">
                <div className="card shadow card-style">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-auto m-2">
                                <i className="fas fa-user-tie fa-2x icon-color"></i>
                            </div>
                            <div className="col">
                                <h6 className="card-title">Administradores</h6>
                                <div className="h3 font-weight-bold">{dataUser?.Administradores}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 mt-1">
                <div className="card shadow card-style">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-auto m-2">
                                <i className="fas fa-graduation-cap fa-2x icon-color"></i>
                            </div>
                            <div className="col">
                                <h6 className="card-title">Egresados</h6>
                                <div className="h3 font-weight-bold">{dataUser?.Egresados}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 mt-1">
                <div className="card shadow card-style">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-auto m-2">
                                <i className="fas fa-user-graduate fa-2x icon-color"></i>
                            </div>
                            <div className="col">
                                <h6 className="card-title">Estudiantes</h6>
                                <div className="h3 font-weight-bold">{dataUser?.Estudiantes}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 mt-1">
                <div className="card shadow card-style">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-auto m-2">
                                <i className="fas fa-building fa-2x icon-color"></i>
                            </div>
                            <div className="col">
                                <h6 className="card-title">Empresas</h6>
                                <div className="h3 font-weight-bold">{dataComp?.Total}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
