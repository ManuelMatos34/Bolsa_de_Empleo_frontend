import React from 'react'

const AdminPage = () => {
    return (

        <div className="row mt-2 mb-5">
            <div className="col-md-4 mb-4">
                <div className="card border-2 shadow py-2">
                    <div className="card-body m-2">
                        <div className="row align-items-center">
                            <div className="col-auto m-2">
                                {/* Icono para Empresas */}
                                <i className="fas fa-building fa-2x"></i>
                            </div>
                            <div className="col mr-2">
                                <div className="small">
                                    Empresas
                                </div>
                                <div className="text-xs font-weight-bold text-uppercase mb-1">
                                    Empresas registradas:
                                </div>
                                <div className="row">
                                    <div className='col-md-6'>
                                        <div className="text-xs font-weight-bold text-uppercase mb-1">
                                            Confirmadas:
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            50
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="text-xs font-weight-bold text-uppercase mb-1">
                                            Sin Confirmar:
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card border-2 shadow py-2">
                    <div className="card-body m-2">
                        <div className="row align-items-center">
                            <div className="col-auto m-2">
                                {/* Icono para Ofertas de Empleo */}
                                <i className="fas fa-briefcase fa-2x"></i>
                            </div>
                            <div className="col mr-2">
                                <div className="small">
                                    Ofertas de Empleo
                                </div>
                                <div className="text-xs font-weight-bold text-uppercase mb-1">
                                    Ofertas de Empleo Registradas:
                                </div>
                                <div className="row">
                                    <div className='col-md-6'>
                                        <div className="text-xs font-weight-bold text-uppercase mb-1">
                                            Total:
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card border-2 shadow py-2">
                    <div className="card-body m-2">
                        <div className="row align-items-center">
                            <div className="col-auto m-2">
                                {/* Icono para Estudiantes */}
                                <i className="fas fa-graduation-cap fa-2x"></i>
                            </div>
                            <div className="col mr-2">
                                <div className="small">
                                    Estudiantes
                                </div>
                                <div className="text-xs font-weight-bold text-uppercase mb-1">
                                    Estudiantes Registrados:
                                </div>
                                <div className="row">
                                    <div className='col-md-6'>
                                        <div className="text-xs font-weight-bold text-uppercase mb-1">
                                            Total:
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminPage
