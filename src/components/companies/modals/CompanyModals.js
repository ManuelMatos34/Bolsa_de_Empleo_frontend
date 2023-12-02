import React, { useEffect, useState } from "react";
import AddVancancieModal from "./AddVancancieModal";
import EditVanacieModal from "./EditVanacieModal";
import EditCompModal from "./EditCompModal";
import DeleteVacancieModal from "./DeleteVacancieModal";
import DeletePostulant from "./DeletePostulant";
import AcceptPostulant from "./AcceptPostulant";

const CompanyModals = ({
  selectedData,
  data,
  postulantData,
  postulationID,
}) => {
  const [formDataComp, setFormDataComp] = useState({
    Comp_City: "",
    Comp_Description: "",
    Comp_EmailAddress: "",
    Comp_FirstStreet: "",
    Comp_ID: 0,
    Comp_KYTelephone: 0,
    Comp_KeyContact: "",
    Comp_Name: "",
    Comp_SecondStreet: "",
    Comp_Telephone: 0,
    Comp_Website: "",
    User_Email: "",
  });

  const [formData, setFormData] = useState({
    Job_Title: "",
    Job_Description: "",
    Job_Requeriments: "",
    Job_EndDate: "",
    Job_ContractType: "",
    Job_Modality: "",
    Job_Salary: "",
    Job_Location: "",
    Job_ID: 0,
    Ca_ID: 0,
    Ca_Description: "",
  });

  useEffect(() => {
    if (selectedData) {
      setFormData((prevData) => ({
        ...prevData,
        ...selectedData,
      }));
    }
    if (data) {
      setFormDataComp((prevData) => ({
        ...prevData,
        ...data,
      }));
    }
  }, [selectedData, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeComp = (e) => {
    const { name, value } = e.target;
    setFormDataComp((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <AddVancancieModal />
      <EditVanacieModal selectedData={formData} handleChange={handleChange} />
      <EditCompModal
        formDataComp={formDataComp}
        handleChangeComp={handleChangeComp}
      />
      <DeleteVacancieModal selectedData={formData} />
      <DeletePostulant postulationID={postulationID} postulantData={postulantData}/>
      <AcceptPostulant postulationID={postulationID} postulantData={postulantData}/>
    </div>
  );
};

export default CompanyModals;
