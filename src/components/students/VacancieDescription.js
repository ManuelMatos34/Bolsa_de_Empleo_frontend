import React from "react";

const VacancieDescription = () => {
    return (
        <div className="card m-1">
            <div className="card-body">
                <h4 className="card-title m-1 icon-color">iOS Software Engineer (L5) - Streaming and Discovery Experiences</h4>
                <h5 className="card-subtitle mb-2 text-muted m-1">Empresa: Netflix</h5>
                <h6 className="card-subtitle mb-2 text-muted m-1">Modalidad: Remoto</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Contrato: Practicas</h6>
                <h6 className="card-subtitle mb-2 text-muted m-1">Vacantes disponibles: 2</h6>
                <button style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Aplicar</button>
                <hr />
                <div className="overflow-auto" style={{ maxHeight: "50vh" }}>
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
                    </p>
                    <h6 className="card-subtitle mb-2 text-muted">Requerimientos</h6>
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
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VacancieDescription;
