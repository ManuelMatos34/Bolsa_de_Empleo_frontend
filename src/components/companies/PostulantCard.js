import React, { useEffect, useState } from 'react'
import photoNull from '../../assets/img/no image.png';
import { getStdById } from '../../services/services';
import { convertImage, dateConverter } from '../../helpers/Helpers';

const PostulantCard = ({ data }) => {
    const [postulantData, setPostulantData] = useState(null);
    const [img, setImg] = useState(null);

    useEffect(() => {
        const getOfByComp = async () => {
            try {
                const response = await getStdById(data);
                if (response && response.data) {
                    if (response.data.Img && (response.data.Img.data === null || response.data.Img.data === undefined || response.data.Img.data === "")) {
                        setImg(false);
                    }
                    if (response.data.Img) {
                        setImg(convertImage(response.data.Img.data));
                    }
                    setPostulantData(response.data);
                } else {
                    setPostulantData(null);
                    setImg(null);
                }
            } catch (error) {
                console.error("error", error);
            }
        };
        getOfByComp();
    }, [data]);
    return (
        <div className='card m-1'>
            <div className='card-body'>
                {postulantData && (
                    <div className='mt-2'>
                        <div className='mt-2 text-center'>
                            <div className='container'>
                                {img ? (
                                    <img
                                        src={`data:image/png;base64,${img}`}
                                        alt="unphu"
                                        className="img-fluid"
                                        style={{ maxWidth: '70%' }}
                                    />
                                ) : (
                                    <img
                                        src={photoNull}
                                        alt="unphu"
                                        className="img-fluid"
                                        style={{ maxWidth: '70%' }}
                                    />
                                )}
                            </div>
                        </div>
                        <p className="card-subtitle text-muted m-2 mt-4">
                            <i className="fas fa-user"></i>&nbsp; <b>Nombres: {postulantData.Std_FirstName + " " + postulantData.Std_SecondName}</b>
                        </p>
                        <p className="card-subtitle text-muted m-2 mt-3">
                            <i className="fas fa-user"></i>&nbsp; <b>Apellidos: {postulantData.Std_LastName}</b>
                        </p>
                        <p className="card-subtitle text-muted m-2 mt-3">
                            <i className="fas fa-graduation-cap"></i> &nbsp;<b>Carrera: {postulantData.Ca_Description}</b>
                        </p>
                        <p className="card-subtitle text-muted m-2 mt-3">
                            <i className="fas fa-envelope"></i>&nbsp; <b>Correo Personal: {postulantData.Std_PersonalEmail}</b>
                        </p>
                        <p className="card-subtitle text-muted m-2 mt-3">
                            <i className="fas fa-calendar-alt"></i> &nbsp;<b>Fecha de Nacimiento: {dateConverter(postulantData.Std_Birthday)}</b>
                        </p>
                        <p className="card-subtitle text-muted m-2 mt-3">
                            <i className="fas fa-phone"></i>&nbsp; <b>Teléfono: {postulantData.Std_HomePhone}</b>
                        </p>
                        <p className="card-subtitle text-muted m-2 mt-3">
                            <i className="fas fa-mobile-alt"></i> &nbsp;<b>Celular: {postulantData.Std_Telephone}</b>
                        </p>
                    </div>
                )}
                <div className='container text-center'>
                    <button className='btn btn-primary btn-sm m-1'>Aceptar</button>
                    <button className='btn btn-danger btn-sm m-1'>Denegar</button>
                </div>
            </div>
        </div>
    )
}

export default PostulantCard
