import React, { useEffect, useState } from 'react'
import ContactModal from './ContactModal'
import CvModal from './CvModal'
import DireccionModal from './DireccionModal'
import StudentModal from './StudentModal'
import { postExp, putExp, putStd, setImgEst } from '../../../services/services'
import { getUserCookies } from '../../../helpers/Helpers'
import ExperienceModal from './ExperienceModal'
import ViewCvModal from './ViewCvModal'
import EditExperienceModal from './EditExperienceModal'
import DeleteExperienceModal from './DeleteExperienceModal'
import NoCvModal from './NoCvModal'

const Modals = ({ data, dataCv, idExp }) => {
    const stdId = getUserCookies();
    const [dataImg, setDataImg] = useState(null);

    const [dataExpe, setDataExpe] = useState({
        Exp_ID: 0,
        Position: "",
        Company: "",
        ContractType: "",
        Country: "",
        Modality: "",
        Exp_Status: "",
        InitiaDate: "",
        EndDate: "",
        Std_ID: "",
    });

    const [formData, setFormData] = useState({
        Std_PersonalEmail: "",
        Std_City: "",
        Std_FirstName: "",
        Std_FirstStreet: "",
        Std_HomePhone: 0,
        Std_ID: "",
        Std_LastName: "",
        Std_PostalCode: "",
        Std_SecondName: "",
        Std_SecondStreet: "",
        Std_State: "",
        Std_Telephone: 0,
    });

    useEffect(() => {
        if (data) {
            setFormData((prevData) => ({
                ...prevData,
                ...data
            }));
        }
        if (idExp) {
            setDataExpe((prevData) => ({
                ...prevData,
                ...idExp
            }));
        }
    }, [data, idExp]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleChangeExp = (e) => {
        const { id, value } = e.target;
        setDataExpe((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handlePutStd = async () => {
        try {
            if (dataImg !== null) {
                const id = stdId[0].Std_ID
                const img = dataImg
                await setImgEst(id, img);
            }
            await putStd(formData.Std_City, formData.Std_FirstName, formData.Std_FirstStreet, formData.Std_HomePhone, formData.Std_ID,
                formData.Std_LastName, formData.Std_PersonalEmail, formData.Std_PostalCode, formData.Std_SecondName, formData.Std_SecondStreet,
                formData.Std_State, formData.Std_Telephone);

        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    const handlePutExp = async () => {
        try {
            await putExp(
                stdId[0].Std_ID,
                dataExpe.Exp_ID,
                dataExpe.Position,
                dataExpe.Company,
                dataExpe.ContractType,
                dataExpe.Country,
                dataExpe.Modality,
                dataExpe.InitiaDate,
                dataExpe.EndDate
            );

        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    const handlePostExp = async () => {
        try {
            await postExp(
                stdId[0].Std_ID,
                dataExpe.Position,
                dataExpe.Company,
                dataExpe.ContractType,
                dataExpe.Country,
                dataExpe.Modality,
                dataExpe.InitiaDate,
                dataExpe.EndDate
            );

        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };
    return (
        <div>
            <DeleteExperienceModal idExp={dataExpe}/>
            <StudentModal formData={formData} handleChange={handleChange} handlePutStd={handlePutStd} setDataImg={setDataImg} />
            <DireccionModal formData={formData} handleChange={handleChange} handlePutStd={handlePutStd} />
            <CvModal />
            <ContactModal formData={formData} handleChange={handleChange} handlePutStd={handlePutStd} />
            <ExperienceModal handleChangeExp={handleChangeExp} handlePostExp={handlePostExp} />
            <ViewCvModal dataCv={dataCv} />
            <NoCvModal data={data} dataCv={dataCv}/>
            <EditExperienceModal idExp={dataExpe} handleChangeExp={handleChangeExp} handlePutExp={handlePutExp} />
        </div>
    )
}

export default Modals
