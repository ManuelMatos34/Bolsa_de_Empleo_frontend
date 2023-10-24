import React, { useEffect, useState } from 'react'
import ContactModal from './ContactModal'
import CvModal from './CvModal'
import DireccionModal from './DireccionModal'
import StudentModal from './StudentModal'
import { putStd } from '../../../services/services'

const Modals = ({ data }) => {

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
        Std_Telephone: 0
    });

    useEffect(() => {
        if (data) {
            setFormData((prevData) => ({
                ...prevData,
                ...data
            }));
        }
    }, [data]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handlePutStd = async () => {
        try {
            await putStd(
                formData.Std_City,
                formData.Std_FirstName,
                formData.Std_FirstStreet,
                formData.Std_HomePhone,
                formData.Std_ID,
                formData.Std_LastName,
                formData.Std_PersonalEmail,
                formData.Std_PostalCode,
                formData.Std_SecondName,
                formData.Std_SecondStreet,
                formData.Std_State,
                formData.Std_Telephone
            );
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };
    return (
        <div>
            <StudentModal formData={formData} handleChange={handleChange} handlePutStd={handlePutStd} />
            <DireccionModal formData={formData} handleChange={handleChange} handlePutStd={handlePutStd} />
            <CvModal formData={formData} handleChange={handleChange} handlePutStd={handlePutStd} />
            <ContactModal formData={formData} handleChange={handleChange} handlePutStd={handlePutStd} />
        </div>
    )
}

export default Modals
