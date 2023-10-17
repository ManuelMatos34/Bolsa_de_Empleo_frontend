import React from 'react'

const ApplicationDescription = () => {
    return (
        <div className="card m-1">
            <div className="card-body">
                <div className='row'>
                    <div className='col-md-4'>
                        <h4 className="card-title m-1 icon-color">ming and Discovery Experiences</h4>
                        <h5 className="card-subtitle mb-2 text-muted m-1">Empresa: Netflix</h5>
                        <h6 className="card-subtitle mb-2 text-muted m-1">Modalidad: Remoto</h6>
                        <h6 className="card-subtitle mb-2 text-muted m-1">Contrato: Practicas</h6>
                        <h6 className="card-subtitle mb-2 text-muted m-1">Vacantes disponibles: 2</h6>
                    </div>
                    <div className='col-md-8'>
                        <div className='card h-100'>
                            <div className='card-body h-100'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h5 className="card-title">Resultado de Solicitud</h5>
                                        <h6 className="card-subtitle mb-2 text-muted m-2">Estado de la solucitud: En proceso</h6>
                                        <p className="m-2 card-text">Tu solicitud ha sido <strong>aceptada</strong><i className="m-1 fas fa-check-circle text-success"></i> </p>
                                        <p className="m-2 card-text">Tu solicitud ha sido <strong>no aceptada</strong><i className="m-1 fas fa-times-circle text-danger"></i></p>

                                    </div>
                                    <div className='col-md-6'>
                                        <div className='p-2'>
                                            <p>Felicidades, has sido aceptado para la vacante, 
                                                El empleador pronto se pondrá en contacto contigo.</p>
                                        </div>                             
                                        {/* <div>
                                            <p>Lo sentimos, no has sido aceptado para la vacante, 
                                            No te desmotive, sigue buscando oportunidades.</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="overflow-auto" style={{ maxHeight: "66vh" }}>
                    <h6 className="card-subtitle mb-2 mt-1 text-muted">Descripción</h6>
                    <p className="card-text">
                        Netflix is the world's leading streaming video service with over 200
                        million paid memberships in 190+ countries. The Consumer Engineering
                        team builds the industry-leading Netflix iOS, Android, and TV apps.
                        To bring new kinds of engaging and cinematic experiences to life, we
                        partner closely with many cross-functional teams including product
                        management, experience design, and creative production. The
                        Streaming and Discovery Experiences Engineering organization
                        continuously improves the Netflix experience to delight, attract,
                        and retain our.
                        Netflix is the world's leading streaming video service with over 200
                        million paid memberships in 190+ countries. The Consumer Engineering
                        team builds the industry-leading Netflix iOS, Android, and TV apps.
                        To bring new kinds of engaging and cinematic experiences to life, we
                        partner closely with many cross-functional teams including product
                        management, experience design, and creative production. The
                        Streaming and Discovery Experiences Engineering organization
                        continuously improves the Netflix experience to delight, attract,
                        and retain our.
                    </p>
                    <h6 className="card-subtitle mb-2 text-muted">Requerimientos</h6>
                    <p className="card-text">
                        iOS, Android, and TV apps.
                        To bring new kinds of engaging and cinematic experiences to life, we
                        partner closely with many cross-functional teams including product
                        management, experience design, and creative production. The
                        Streaming and Discovery Experiences Engineering organization
                        continuously improves the Netflix experience to delight, attract,
                        and retain our.
                        and retain our.
                        Netflix is the world's leading streaming video service with over 200
                        million paid memberships in 190+ countries. The Consumer Engineering
                        team builds the industry-leading Netflix iOS, Android, and TV apps.
                        To bring new kinds of engaging and cinematic experiences to life, we
                        partner closely with many cross-functional teams including product
                        management, experience design, and creative production. The
                        Streaming and Discovery Experiences Engineering organization
                        continuously improves the Netflix experience to delight, attract,
                        and retain our.
                        Netflix is the world's leading streaming video service with over 200
                        million paid memberships in 190+ countries. The Consumer Engineering
                        team builds the industry-leading Netflix iOS, Android, and TV apps.
                        To bring new kinds of engaging and cinematic experiences to life, we
                        partner closely with many cross-functional teams including product
                        management, experience design, and creative production. The
                        Streaming and Discovery Experiences Engineering organization
                        continuously improves the Netflix experience to delight, attract,
                        and retain our.
                        and retain our.
                        Netflix is the world's leading streaming video service with over 200
                        million paid memberships in 190+ countries. The Consumer Engineering
                        team builds the industry-leading Netflix iOS, Android, and TV apps.
                        To bring new kinds of engaging and cinematic experiences to life, we
                        partner closely with many cross-functional teams including product
                        management, experience design, and creative production. The
                        Streaming and Discovery Experiences Engineering organization
                        continuously improves the Netflix experience to delight, attract,
                        and retain our.
                        Netflix is the world's leading streaming video service with over 200
                        million paid memberships in 190+ countries. The Consumer Engineering
                        team builds the indu
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ApplicationDescription
