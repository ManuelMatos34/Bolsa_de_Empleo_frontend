import React, { useEffect, useState } from "react";
import AddSkillsModal from "./AddSkillsModal";
import DeleteSkillModal from "./DeleteSkillModal";
import EditSkillModal from "./EditSkillModal";
import CancelCompModal from "./CancelCompModal";
import AcceptCompModal from "./AcceptCompModal";
import ConfigAdminModal from "./ConfigAdminModal";

const AdminModals = ({ selected, data, selectData }) => {
  const [formData, setFormData] = useState({
    Ca_Description: "",
    Skill: "",
    Ca_ID: 0,
    Skill_Status: "0",
    Skill_ID: 0,
  });

  const [formDataAdmin, setFormDataAdmin] = useState({
    User_ID: 0,
    User_Name: "",
    User_Phone: 0,
    User_CreationDate: "",
    User_Email: "",
  });

  useEffect(() => {
    if (selected) {
      setFormData((prevData) => ({
        ...prevData,
        ...selected,
      }));
    }

    if (data) {
      setFormDataAdmin((prevData) => ({
        ...prevData,
        ...data,
      }));
    }
  }, [data, selected]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleChangeAdmin = (e) => {
    const { id, value } = e.target;
    setFormDataAdmin((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div>
      <AddSkillsModal handleChange={handleChange} formData={formData} />
      <DeleteSkillModal formData={formData} />
      <EditSkillModal formData={formData} handleChange={handleChange} />
      <CancelCompModal selectData={selectData}/>
      <AcceptCompModal selectData={selectData}/>
      <ConfigAdminModal formDataAdmin={formDataAdmin} handleChangeAdmin={handleChangeAdmin}/>
    </div>
  );
};

export default AdminModals;
