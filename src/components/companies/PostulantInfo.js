import React, { useEffect, useState } from 'react'
import PostulantCard from './PostulantCard'
import { convertImage } from '../../helpers/Helpers';
import { getCvEst } from '../../services/services';

const PostulantInfo = ({ data }) => {
    const [dataCv, setDataCv] = useState(null);

    useEffect(() => {
        const GetCv = async () => {
            try {
                const response = await getCvEst(data);
                if (response && response.data && response.data.message && response.data.message.Cv) {
                    const cv = response.data.message.Cv.data;
                    console.log(cv);
                    setDataCv(convertImage(cv));
                } else {
                    setDataCv(null);
                }
            } catch (error) {
                // Manejo de errores
                console.error("Error:", error);
            }
        };
        GetCv();
    }, [data]);

    return (
        <div className='row'>
            <div className='col-md-4'>
                <PostulantCard data={data} />
            </div>
            <div className='col-md-8'>
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
