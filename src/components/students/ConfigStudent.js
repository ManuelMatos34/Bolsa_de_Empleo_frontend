import React, { useEffect, useState } from 'react';
import { convertImage, getUserCookies } from '../../helpers/Helpers';
import SkillsStudents from './SkillsStudents';
import Modals from './modals/Modals';
import { getCvEst, getStdById } from '../../services/services';
import StudentCard from './StudentCard';
import CvCard from './CvCard';
import DireccionCard from './DireccionCard';
import ContactCard from './ContactCard';
import ExperienceCard from './ExperienceCard';

const ConfigStudent = () => {
    const [data, setData] = useState(null);
    const [img, setImg] = useState(null);
    const [dataCv, setDataCv] = useState(null);
    const [idExp, setIdExp] = useState(null);

    const stdId = getUserCookies();
    const getStd = async () => {
        try {
            const response = await getStdById(stdId[0].Std_ID);
            if (response && response.data) {
                if (response.data.Img && (response.data.Img.data === null || response.data.Img.data === undefined || response.data.Img.data === "")) {
                    setImg(false);
                }
                if (response.data.Img) {
                    setImg(convertImage(response.data.Img.data));
                }
                setData(response.data);
            } else {
                setData(null);
                setImg(null);
            }
        } catch (error) {
            console.error("error", error);
        }
    };

    const GetCv = async () => {
        try {
            const response = await getCvEst(stdId[0]?.Std_ID);
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

    useEffect(() => {
        getStd();
        GetCv();
    }, []);

    return (
        <div className='row' style={{ maxHeight: "25vh" }}>
            {
                data ? (
                    <>
                        <Modals data={data} dataCv={dataCv} idExp={idExp} />
                        <div className='col-md-3 mt-2'>
                            <StudentCard data={data} img={img} />
                            <CvCard data={data} />
                        </div>
                        <div className='col-md-9'>
                            <div className='col-md-12 mt-2'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <DireccionCard data={data} />
                                    </div>
                                    <div className='col-md-6'>
                                        <ContactCard data={data} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 mt-2'>
                                <SkillsStudents />
                            </div>
                            <div className='col-md-12 mt-2 mb-5'>
                                <ExperienceCard setIdExp={setIdExp} />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='card m-1'>
                        <div className='card-body'>
                            <div className="d-flex align-items-center">
                                <p className='m-1'>Cargando...</p>
                                <div className="spinner-border icon-color m-1" role="status">
                                    <span className="visually-hidden"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default ConfigStudent;