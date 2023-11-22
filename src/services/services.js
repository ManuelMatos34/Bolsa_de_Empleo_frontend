import axios from "axios";

export const postAuthStudents = (Std_ID, Std_Password) => {
  return axios.post("http://localhost:4000/authStudent", {
    Std_ID,
    Std_Password,
  });
};

export const postEstuxhabilidades = (Std_ID) => {
  return axios.post("http://localhost:4000/estuxhabilidades", { Std_ID });
};

export const postEstxHab = (Std_ID, Skill_ID) => {
  return axios.post("http://localhost:4000/estuxhabilidadnew", {
    Skill_ID,
    Std_ID,
  });
};

export const getHabNotEst = (Std_ID, Ca_ID) => {
  return axios.post("http://localhost:4000/estuxhabilidad", { Ca_ID, Std_ID });
};

export const deleteEstxHab = (Id) => {
  return axios.delete(`http://localhost:4000/estuxhabilidad/${Id}`);
};

export const getOfeByCa = (Id) => {
  return axios.get(`http://localhost:4000/ofertaByCa/${Id}`);
};

export const getOfeByComp = (Id) => {
  return axios.get(`http://localhost:4000/ofertasbycomp/${Id}`);
};

export const getPostulantByJob = (Id) => {
  return axios.get(`http://localhost:4000/getAllDataBySoli/${Id}`);
};

export const getOfeById = (Id) => {
  return axios.get(`http://localhost:4000/oferta/${Id}`);
};

export const getOfeByEst = (Id) => {
  return axios.get(`http://localhost:4000/getJobsByStudent/${Id}`);
};

export const postApplyJob = (Job_ID, Std_ID, Req_SalaryExpetation) => {
  return axios.post("http://localhost:4000/postSolicitud", {
    Job_ID,
    Std_ID,
    Req_SalaryExpetation,
  });
};

export const getAllByJob = (Id) => {
  return axios.get(`http://localhost:4000/getAllDataBySoli/${Id}`);
};

export const getStdById = (Id) => {
  return axios.get(`http://localhost:4000/estudiantes/${Id}`);
};

export const putStd = (
  Std_City,
  Std_FirstName,
  Std_FirstStreet,
  Std_HomePhone,
  Std_ID,
  Std_LastName,
  Std_PersonalEmail,
  Std_PostalCode,
  Std_SecondName,
  Std_SecondStreet,
  Std_State,
  Std_Telephone
) => {
  return axios.put("http://localhost:4000/estudiantes", {
    Std_City,
    Std_FirstName,
    Std_FirstStreet,
    Std_HomePhone,
    Std_ID,
    Std_LastName,
    Std_PersonalEmail,
    Std_PostalCode,
    Std_SecondName,
    Std_SecondStreet,
    Std_State,
    Std_Telephone,
  });
};

export const getImgEmp = (Id) => {
  return axios.get(`http://localhost:4000/getImgEmp/${Id}`);
};

export const getImgEst = (Id) => {
  return axios.get(`http://localhost:4000/getEstImg/${Id}`);
};

export const getUserById = (Id) => {
  return axios.get(`http://localhost:4000/usuarios/${Id}`);
};

export const getCompById = (Id) => {
  return axios.get(`http://localhost:4000/empresas/${Id}`);
};

export const setImgEst = async (id, image) => {
  const img = new FormData();
  img.append("img", image);
  return await axios.put(`http://localhost:4000/uploadEstImg/${id}`, img, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const setCvEst = async (id, cvv) => {
  const cv = new FormData();
  cv.append("cv", cvv);
  return await axios.post(`http://localhost:4000/cv/${id}`, cv, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getCvEst = (Id) => {
  return axios.get(`http://localhost:4000/cv/${Id}`);
};

export const getAllSkills = () => {
  return axios.get(`http://localhost:4000/habilidades`);
};

export const getAllcompanies = () => {
  return axios.get(`http://localhost:4000/empresas`);
};

export const getExpByEst = (Id) => {
  return axios.get(`http://localhost:4000/experienciaest/${Id}`);
};

export const getExpById = (Id) => {
  return axios.get(`http://localhost:4000/experiencia/${Id}`);
};

export const postExp = (
  Std_ID,
  Position,
  Company,
  ContractType,
  Country,
  Modality,
  InitiaDate,
  EndDate
) => {
  return axios.post("http://localhost:4000/experiencia", {
    Std_ID,
    Position,
    Company,
    ContractType,
    Country,
    Modality,
    InitiaDate,
    EndDate,
  });
};

export const putExp = (
  Std_ID,
  Exp_ID,
  Position,
  Company,
  ContractType,
  Country,
  Modality,
  InitiaDate,
  EndDate
) => {
  return axios.put("http://localhost:4000/updateexperiencia", {
    Std_ID,
    Exp_ID,
    Position,
    Company,
    ContractType,
    Country,
    Modality,
    InitiaDate,
    EndDate,
  });
};

export const authUser = (User_Email, User_Password) => {
  return axios.post("http://localhost:4000/authUser", {
    User_Email,
    User_Password,
  });
};

export const authComp = (User_Email, User_Password) => {
  return axios.post("http://localhost:4000/authComp", {
    User_Email,
    User_Password,
  });
};

export const getStatsComp = () => {
  return axios.get(`http://localhost:4000/statscomp`);
};

export const getStatsUser = () => {
  return axios.get(`http://localhost:4000/statsuser`);
};

export const getStatsByComp = (Id) => {
  return axios.get(`http://localhost:4000/statsofertasbycomp/${Id}`);
};

export const chartsByComp = () => {
  return axios.get(`http://localhost:4000/chartcomp`);
};

export const chartsByOfer = () => {
  return axios.get(`http://localhost:4000/chartofer`);
};

export const deleteExp = (Id) => {
  return axios.put(`http://localhost:4000/deleteexperiencia/${Id}`);
};

export const postSkill = (Skill, Ca_ID) => {
  return axios.post("http://localhost:4000/habilidades", {
    Skill,
    Ca_ID,
  });
};

export const putSkill = (Skill_ID, Skill, Ca_ID) => {
  return axios.put("http://localhost:4000/habilidades", {
    Skill_ID,
    Skill,
    Ca_ID,
  });
};

export const getSkillById = (id) => {
  return axios.get(`http://localhost:4000/habilidades/${id}`);
};

export const deleteSkill = (id) => {
  return axios.delete(`http://localhost:4000/habilidades/${id}`);
};
