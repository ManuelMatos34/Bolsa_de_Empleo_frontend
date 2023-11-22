import React, { useEffect, useState } from 'react'
import PostulantCard from './PostulantCard'
import { convertImage, dateDifference } from '../../helpers/Helpers';
import { getCvEst, getExpByEst } from '../../services/services';
import { postEstuxhabilidades } from '../../services/services';

const PostulantInfo = ({ data }) => {
    const [dataCv, setDataCv] = useState(null);
    const [dataExp, setDataExp] = useState(null);
    const [dataSkills, setDataSkills] = useState(null);

    useEffect(() => {
        const getCv = async () => {
            try {
                const response = await getCvEst(data);
                if (response && response.data && response.data.message && response.data.message.Cv) {
                    const cv = response.data.message.Cv.data;
                    setDataCv(convertImage(cv));
                } else {
                    setDataCv(null);
                }
            } catch (error) {
                // Manejo de errores
                console.error("Error:", error);
            }
        };

        const getExperiences = async () => {
            try {
                const response = await getExpByEst(data);
                if (response && response.data) {
                    setDataExp(response.data);
                }
                if (response.data.message === "No hay registros") {
                    setDataExp(null);
                }
            } catch (error) {
                // Error handling
                console.error("error", error);
            }
        };

        const getSkills = async () => {
            try {
                let getResponse = await postEstuxhabilidades(data);
                let response = getResponse.data;

                if (response.message === 0) {
                    response = false;
                }

                setDataSkills(response);
            } catch (error) {
                // Manejo de errores
                console.error("error", error.response.data.message);
                setDataSkills(false);
            }
        };
        getCv();
        getExperiences();
        getSkills();
    }, [data]);

    return (
        <div className='row'>
            <div className='col-md-4'>
                <PostulantCard data={data} />
            </div>
            <div className='col-md-4 mt-1'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='m-1 mt-2'>
                            <h6>Habilidades</h6>
                            <div className='overflow-auto' style={{ maxHeight: "37vh" }}>
                                {dataSkills ? (
                                    dataSkills.map((item) => (
                                        <div key={item.ID} style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            {item.Skill}
                                        </div>
                                    ))
                                ) : (
                                    <div>
                                        <p className='m-1'>Este candidato no tiene habilidades.</p>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className='m-1 mt-2'>
                            <h6>Experiencia</h6>
                            <div className='overflow-auto' style={{ maxHeight: "56vh" }}>
                                {dataExp ? (
                                    dataExp.map((item) => (
                                        <div key={item.Exp_ID} className='m-3' style={{ position: 'relative' }}>
                                            <h5 className="mb-0">{item.Position}</h5>
                                            <p className="mb-0">{item.Company} · {item.ContractType}</p>
                                            <p className="mb-0">{item.InitiaDate} - {item.EndDate} · {dateDifference(item.InitiaDate,item.EndDate)}</p>
                                            <p className="mb-0">{item.Country} · {item.Modality}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div>
                                        <p className='m-1'>Este candidato no tiene experiencia.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card w-100 h-100 m-1'>
                    <div className='card-body'>
                        {dataCv && (
                            <object
                                className='w-100 h-100'
                                data={`data:application/pdf;base64,${dataCv}`}
                                type="application/pdf"
                            >
                                <p>
                                    Tu navegador no puede mostrar este archivo PDF. Puedes
                                    descargarlo
                                    <a
                                        className='btn btn-primary'
                                        href={`data:application/pdf;base64,${dataCv}`}
                                        download
                                    >
                                        aquí
                                    </a>
                                    .
                                </p>
                            </object>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostulantInfo
