import React, { useContext, useEffect, useState } from 'react'
import ApplicationDescription from './ApplicationDescription'
import { getOfeByEst } from '../../services/services';
import Context from '../global/Context';

const Applications = () => {

    const s = useContext(Context);
    const [data, setData] = useState(null);
    const [appDescription, setAppDescription] = useState(null);
    const userId = s.authUser[0].Std_ID;

    const getAplications = async () => {
        try {
            const response = await getOfeByEst(userId);
            setData(response.data);
        } catch (error) {
            // Manejo de errores
            console.error("error", error);
            setData(null);
        }
    };

    useEffect(() => {
        getAplications();
    }, []);


    const handleToDescription = async (vacId) => {
        const job = data.find(item => item.Job_ID === vacId);
        if (job) {
            setAppDescription(job);
        } else {
            console.log("No se encontró un trabajo con el Job_ID especificado.");
        }
    };

    return (
        <div className="row">
            <div className="col-md-3 overflow-auto" style={{ maxHeight: "89vh" }}>
                {data ? (
                    data.map((item) => (
                        <div key={item.Job_ID} className="card m-1">
                            <div className="card-body">
                                <h5 className="card-title m-1 icon-color">
                                    <b>{item.Job_Title}</b>
                                </h5>
                                <div className="mb-2 m-2">
                                    <h6 className="card-subtitle text-muted m-1">
                                        <b>Empresa: {item.Comp_Name}</b>
                                    </h6>
                                    <h6 className="card-subtitle text-muted m-1">
                                        <b>Modalidad: {item.Job_Modality}</b>
                                    </h6>
                                    <h6 className="card-subtitle text-muted m-1">
                                        <b>Contrato: {item.Job_ContractType}</b>
                                    </h6>
                                </div>
                                <button onClick={() => handleToDescription(item.Job_ID)} style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Más Info</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='card m-1'>
                        <div className='card-body'>
                            <p className='m-2'>Cargando...</p>
                        </div>
                    </div>
                )}

            </div>
            <div className="col-md-9 overflow-auto" style={{ maxHeight: "89vh" }}>
                {appDescription ? (
                    <ApplicationDescription dataDescription={appDescription} />
                ) : (
                    <div className='card m-1'>
                        <div className='card-body'>
                            <p className='m-2'>Haz click en Más Info para ver más a detalle la vacante.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Applications
