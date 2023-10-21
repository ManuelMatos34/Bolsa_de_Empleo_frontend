import axios from 'axios';


export const postAuthStudents = (Std_ID, Std_Password) => {
    return axios.post("http://localhost:4000/authStudent", { Std_ID, Std_Password });
};

export const postEstuxhabilidades = (Std_ID) => {
    return axios.post("http://localhost:4000/estuxhabilidades", { Std_ID });
};

export const postEstxHab = (Std_ID,Skill_ID ) => {
    return axios.post("http://localhost:4000/estuxhabilidadnew", { Skill_ID, Std_ID});
};

export const getHabNotEst = (Std_ID, Ca_ID) => {
    return axios.post("http://localhost:4000/estuxhabilidad", { Ca_ID, Std_ID});
};

export const deleteEstxHab = (Id) => {
    return axios.delete(`http://localhost:4000/estuxhabilidad/${Id}`);
};

export const getOfeByCa = (Id) => {
    return axios.get(`http://localhost:4000/ofertaByCa/${Id}`);
};

export const getOfeById = (Id) => {
    return axios.get(`http://localhost:4000/oferta/${Id}`);
};

export const getOfeByEst = (Id) => {
    return axios.get(`http://localhost:4000/getJobsByStudent/${Id}`);
};

export const postApplyJob = (Job_ID, Std_ID, Req_SalaryExpetation ) => {
    return axios.post("http://localhost:4000/postSolicitud", { Job_ID, Std_ID, Req_SalaryExpetation});
};

