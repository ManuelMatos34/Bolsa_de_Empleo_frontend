import Cookies from "universal-cookie";
import { getStdById } from "../services/services";
const cookies = new Cookies();

export const dateConverter = (date) => {
  const fechaObj = new Date(date);
  const day = fechaObj.getUTCDate();
  const month = fechaObj.getUTCMonth() + 1;
  const year = fechaObj.getUTCFullYear();

  return `${day}-${month}-${year}`;
};

export const filterJobs = (
  response,
  jobTitleFilter,
  contractTypeFilter,
  modalityFilter
) => {
  if (jobTitleFilter) {
    response = response.filter((job) =>
      job.Job_Title.toLowerCase().includes(jobTitleFilter.toLowerCase())
    );
  }
  if (contractTypeFilter) {
    response = response.filter(
      (job) =>
        job.Job_ContractType.toLowerCase() === contractTypeFilter.toLowerCase()
    );
  }
  if (modalityFilter) {
    response = response.filter(
      (job) => job.Job_Modality.toLowerCase() === modalityFilter.toLowerCase()
    );
  }

  return response;
};

export const filterJobsComp = (response, jobTitleFilter, statusFilter) => {
  if (jobTitleFilter) {
    response = response.filter((job) =>
      job.Job_Title.toLowerCase().includes(jobTitleFilter.toLowerCase())
    );
  }
  if (statusFilter) {
    response = response.filter((job) => job.Job_Status === statusFilter);
  }

  return response;
};

export const filterSkills = (
  response,
  skillNameFilter,
  stateFilter,
  carFilter
) => {
  if (skillNameFilter) {
    response = response.filter((skill) =>
      skill.Skill.toLowerCase().includes(skillNameFilter.toLowerCase())
    );
  }
  if (stateFilter) {
    response = response.filter(
      (skill) => skill.Skill_Status.toLowerCase() === stateFilter.toLowerCase()
    );
  }
  if (carFilter) {
    response = response.filter(
      (skill) =>
        skill.Ca_Description.replace(/[\r\n]/g, "").toLowerCase() ===
        carFilter.toLowerCase()
    );
  }

  return response;
};

export const filterComp = (response, nameFilter, approFilter) => {
  if (nameFilter) {
    response = response.filter((comp) =>
      comp.Comp_Name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
  if (approFilter) {
    response = response.filter(
      (comp) => comp.User_CreationAproval === approFilter
    );
  }
  return response;
};

export const calculateTimePassed = (date) => {
  // Get the current date
  var currentDate = new Date();

  // Convert the provided date to a Date object
  var providedDate = new Date(date);

  // Calculate the time difference in milliseconds
  var timeDifferenceInMilliseconds = currentDate - providedDate;

  // Calculate the components of the difference
  var millisecondsInASecond = 1000;
  var millisecondsInAMinute = millisecondsInASecond * 60;
  var millisecondsInAnHour = millisecondsInAMinute * 60;
  var millisecondsInADay = millisecondsInAnHour * 24;
  var millisecondsInAWeek = millisecondsInADay * 7;

  var weeksPassed = Math.floor(
    timeDifferenceInMilliseconds / millisecondsInAWeek
  );
  var daysPassed = Math.floor(
    (timeDifferenceInMilliseconds % millisecondsInAWeek) / millisecondsInADay
  );
  var hoursPassed = Math.floor(
    (timeDifferenceInMilliseconds % millisecondsInADay) / millisecondsInAnHour
  );
  var minutesPassed = Math.floor(
    (timeDifferenceInMilliseconds % millisecondsInAnHour) /
      millisecondsInAMinute
  );

  // Build the time passed message
  var message = "";

  if (weeksPassed > 0) {
    message += weeksPassed + (weeksPassed === 1 ? " semana" : " semanas");
  } else if (daysPassed > 0) {
    message += daysPassed + (daysPassed === 1 ? " día" : " días");
  } else if (hoursPassed > 0) {
    message += hoursPassed + (hoursPassed === 1 ? " hora" : " horas");
  } else {
    message += minutesPassed + (minutesPassed === 1 ? " minuto" : " minutos");
  }

  return message;
};

export const setUserCookies = (user) => {
  // Establecer las cookies
  const cookieOptions = {
    path: "/",
  };

  cookies.set("user", user, cookieOptions);
};

export const setUserRolCookies = (rol) => {
  // Establecer las cookies
  const cookieOptions = {
    path: "/",
  };

  cookies.set("rol", rol, cookieOptions);
};

export const setIsAuthenticatedCookies = (isAuthenticated) => {
  // Establecer las cookies
  cookies.set("isAuthenticated", isAuthenticated, { path: "/" });
};

export const deleteUserCookies = () => {
  // Eliminar las cookies
  cookies.remove("user", { path: "/" });
  cookies.remove("rol", { path: "/" });
  cookies.remove("isAuthenticated", { path: "/" });
};

export const getUserCookies = () => {
  // Obtener las cookies
  if (cookies.get("user") === undefined) {
    return false;
  } else {
    return cookies.get("user");
  }
};

export const getUserRol = () => {
  // Obtener las cookies
  if (cookies.get("rol") === undefined) {
    return false;
  } else {
    return cookies.get("rol");
  }
};

export const getIsAuthenticatedCookies = () => {
  // Obtener las cookies
  if (cookies.get("isAuthenticated") === undefined) {
    return false;
  } else {
    return cookies.get("isAuthenticated");
  }
};

export const confirmUser = async () => {
  const inSession = getUserCookies();
  const response = await getStdById(inSession);
  return response.data;
};

export const provincias = {
  Azua: "Azua",
  Bahoruco: "Bahoruco",
  Barahona: "Barahona",
  Dajabon: "Dajabón",
  Duarte: "Duarte",
  EliasPina: "Elías Piña",
  ElSeibo: "El Seibo",
  Espaillat: "Espaillat",
  HatoMayor: "Hato Mayor",
  HermanasMirabal: "Hermanas Mirabal",
  Independencia: "Independencia",
  LaAltagracia: "La Altagracia",
  LaRomana: "La Romana",
  LaVega: "La Vega",
  MariaTrinidadSanchez: "María Trinidad Sánchez",
  MonseñorNouel: "Monseñor Nouel",
  MonteCristi: "Monte Cristi",
  MontePlata: "Monte Plata",
  Pedernales: "Pedernales",
  Peravia: "Peravia",
  PuertoPlata: "Puerto Plata",
  Samana: "Samaná",
  SanchezRamirez: "Sánchez Ramírez",
  SanCristobal: "San Cristóbal",
  SanJoseDeOcoa: "San José de Ocoa",
  SanJuan: "San Juan",
  SanPedroDeMacoris: "San Pedro de Macorís",
  Santiago: "Santiago",
  SantiagoRodriguez: "Santiago Rodríguez",
  SantoDomingo: "Santo Domingo",
  Valverde: "Valverde",
};

export const convertImage = (data) => {
  const uint8Array = new Uint8Array(data);
  let binaryString = "";
  uint8Array.forEach((byte) => {
    binaryString += String.fromCharCode(byte);
  });
  const base64ImageData = btoa(binaryString);
  return base64ImageData;
};

export const tiposDeContrato = {
  contratoPracticas: "Contrato de Prácticas",
  contratoFormacion: "Contrato de Formación",
  contratoTemporal: "Contrato Temporal",
  jornadaCompleta: "Jornada Completa",
  jornadaParcial: "Jornada Parcial",
  autonomo: "Autónomo",
  profesionalIndependiente: "Profesional Independiente",
  temporal: "Temporal",
};

export const modalidades = {
  presencial: "Presencial",
  remoto: "Remoto",
  hibrido: "Híbrido",
};

export const getUserName = (dataUser) => {
  if (dataUser[0]?.Std_FirstName !== undefined) {
    return (
      dataUser[0].Std_FirstName +
      " " +
      dataUser[0]?.Std_SecondName +
      " " +
      dataUser[0]?.Std_LastName
    );
  } else if (dataUser[0]?.User_Name !== undefined) {
    return dataUser[0].User_Name;
  } else if (dataUser[0]?.Comp_Name !== undefined) {
    return dataUser[0].Comp_Name;
  }
};

export const dateDifference = (startDate, endDate) => {
  // Convert the date strings to Date objects
  const start = new Date(startDate + "-01");
  const end = new Date(endDate + "-01");

  // Calculate the difference in months
  const monthsDifference =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // Extract years and remaining months
  const years = Math.floor(monthsDifference / 12);
  const months = monthsDifference % 12;

  // Return the result
  if (years > 0 && months > 0) {
    return `${years} ${years === 1 ? "año" : "años"}, ${months} ${
      months === 1 ? "mes" : "meses"
    }`;
  } else if (years > 0) {
    return `${years} ${years === 1 ? "año" : "años"}`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "mes" : "meses"}`;
  } else {
    return "son iguales";
  }
};
