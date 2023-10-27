import React, { useEffect, useState } from 'react'
import { getUserCookies } from '../../helpers/Helpers';
import { getExpByEst, getExpById } from '../../services/services';

const ExperienceCard = ({ setIdExp }) => {
    const [data, setData] = useState(false);
    const stdId = getUserCookies();

    const getExperiences = async () => {
        try {
            const response = await getExpByEst(stdId[0]?.Std_ID);
            if (response && response.data) {
                setData(response.data);
            }
            if (response.data.message === "No hay registros") {
                setData(null);
            }
        } catch (error) {
            // Error handling
            console.error("error", error);
        }
    };

    const handleGetExp = async (id) => {
        try {
            const response = await getExpById(id);
            if (response && response.data) {
                setIdExp(response.data);

            } else {
                setIdExp(null);
            }
        } catch (error) {
            // Error handling
            console.error("error", error);
        }
    };

    useEffect(() => {
        getExperiences();
    }, []);


    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <div className='overflow-auto' style={{ maxHeight: "25vh" }}>
                        {data ? (
                            data.map((item) => (
                                <div key={item.Exp_ID} className='m-3' style={{ position: 'relative' }}>
                                    <h5 className="mb-0">{item.Position}</h5>
                                    <p className="mb-0">{item.Company} · {item.ContractType}</p>
                                    <p className="mb-0">{item.InitiaDate} - {item.EndDate} · 3 meses</p>
                                    <p className="mb-0">{item.Country} · {item.Modality}</p>
                                    <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                                        <button onClick={() => handleGetExp(item.Exp_ID)} data-bs-toggle="modal" data-bs-target="#staticBackdropExperienceEdit" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light m-1 text-success">
                                            <i className="fas fa-edit"></i> {/* Icono de editar */}
                                        </button>
                                        <button style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light m-1 text-danger">
                                            <i className="fas fa-trash-alt"></i> {/* Icono de eliminar */}
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>
                                <p className='m-1'>Si tienes experiencia laboral puedes colocarla aqui</p>
                            </div>
                        )}
                    </div>
                    <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                        <button data-bs-toggle="modal" data-bs-target="#staticBackdropExperience" style={{ backgroundColor: "#FFFFFF", border: "none" }} className="btn btn-light">
                            <i className="fas fa-plus"></i> {/* Ícono de tuerca */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
