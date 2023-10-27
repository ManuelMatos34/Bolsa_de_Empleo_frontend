import Cookies from 'universal-cookie';
import { getStdById } from '../services/services';
const cookies = new Cookies();

export const dateConverter = (date) => {
    const fechaObj = new Date(date);
    const day = fechaObj.getUTCDate();
    const month = fechaObj.getUTCMonth() + 1;
    const year = fechaObj.getUTCFullYear();

    return `${day}-${month}-${year}`;
};

export const filterJobs = (response, jobTitleFilter, contractTypeFilter, modalityFilter) => {

    if (jobTitleFilter) {
        response = response.filter((job) =>
            job.Job_Title.toLowerCase().includes(jobTitleFilter.toLowerCase())
        );
    }
    if (contractTypeFilter) {
        response = response.filter(
            (job) => job.Job_ContractType.toLowerCase() === contractTypeFilter.toLowerCase()
        );
    }
    if (modalityFilter) {
        response = response.filter(
            (job) => job.Job_Modality.toLowerCase() === modalityFilter.toLowerCase()
        );
    }

    return response;
};


export const setUserCookies = (user) => {
    // Establecer las cookies
    const cookieOptions = {
        path: '/',
    };

    cookies.set('user', user, cookieOptions);
};

export const deleteUserCookies = () => {
    // Eliminar las cookies
    cookies.remove('user', { path: '/' });
};

export const getUserCookies = () => {
    // Obtener las cookies
    if (cookies.get('user') === undefined) {
        return false;
    }
    else {
        return cookies.get('user');
    }
};

export const setIsAuthenticatedCookies = (isAuthenticated) => {
    // Establecer las cookies
    cookies.set('isAuthenticated', isAuthenticated, { path: '/' });
};

export const getIsAuthenticatedCookies = () => {
    // Obtener las cookies
    if (cookies.get('isAuthenticated') === undefined) {
        return false;
    }
    else {
        return cookies.get('isAuthenticated');
    }
};

export const deleteIsAuthenticatedCookies = () => {
    // Eliminar las cookies
    cookies.remove('isAuthenticated', { path: '/' });
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
    Valverde: "Valverde"
};

export const convertImage = (data) => {
    const uint8Array = new Uint8Array(data);
    let binaryString = '';
    uint8Array.forEach((byte) => {
        binaryString += String.fromCharCode(byte);
    });
    const base64ImageData = btoa(binaryString);
    return base64ImageData;
};

export const tiposDeContrato = {
    contratoPracticas: 'Contrato de Prácticas',
    contratoFormacion: 'Contrato de Formación',
    contratoTemporal: 'Contrato Temporal',
    jornadaCompleta: 'Jornada Completa',
    jornadaParcial: 'Jornada Parcial',
    autonomo: 'Autónomo',
    profesionalIndependiente: 'Profesional Independiente',
    temporal: 'Temporal',
};

export const modalidades = {
    presencial: 'Presencial',
    remoto: 'Remoto',
    hibrido: 'Híbrido',
};