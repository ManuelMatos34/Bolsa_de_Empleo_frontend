import React, { useContext, useState, useEffect } from 'react'
import Context from '../global/Context';
import { postEstuxhabilidades, deleteEstxHab, getHabNotEst, postEstxHab } from '../../services/services';

const SkillsStudents = () => {
    const [data, setData] = useState(null);
    const [dataSkillsNot, setDataSkillsNot] = useState(null);

    const s = useContext(Context);
    const userid = s.authUser[0].Std_ID;
    const userCa = s.authUser[0].Ca_ID;

    const updateSkills = async () => {
        try {
            const response = await postEstuxhabilidades(userid);
            setData(response.data);
        } catch (error) {
            // Manejo de errores
            console.error("error", error);
            setData(null);
        }
    };

    const updateSkillsNot = async () => {
        try {
            const response = await getHabNotEst(userid, userCa);
            setDataSkillsNot(response.data);
        } catch (error) {
            // Manejo de errores
            console.error("error", error);
            setDataSkillsNot(null);
        }
    };

    useEffect(() => {
        updateSkills();
        updateSkillsNot();
    }, []);

    const handleDeleteSkills = async (skillId) => {
        try {
            await deleteEstxHab(skillId);
            await updateSkills(); // Espera a que se complete la actualización
            await updateSkillsNot(); // Espera a que se complete la actualización
        } catch (error) {
            // Manejo de errores
            console.error(error);
        }
    };

    const handleAddSkill = async (skillId) => {
        try {
            await postEstxHab(userid, skillId);
            await updateSkills(); // Espera a que se complete la actualización
            await updateSkillsNot(); // Espera a que se complete la actualización
        } catch (error) {
            // Manejo de errores
            console.error(error);
        }
    };

    return (
        <div>
            <div className='col-md-12 mt-2'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className="card-title m-1 icon-color">Habilidades</h5>
                        <div className='row m-3'>
                            <div className='col-md-6 col-12'>
                                <p className="card-subtitle text-muted m-1">Mis Habilidades:</p>
                                {data ? (
                                    data.map((item) => (
                                        <button onClick={() => handleDeleteSkills(item.ID)} key={item.ID} style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            {item.Skill} <i className="fas fa-times"></i>
                                        </button>
                                    ))
                                ) : (
                                    <p>Cargando...</p>
                                )}
                            </div>
                            <div className='col-md-6 col-12'>
                                <p className="card-subtitle text-muted m-1">Agregar Habilidades:</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nueva Habilidad" />
                                </div>
                                {dataSkillsNot ? (
                                    dataSkillsNot.map((item) => (
                                        <button onClick={() => handleAddSkill(item.Skill_ID)} key={item.Skill_ID} style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                            {item.Skill} <i className="fas fa-plus"></i>
                                        </button>
                                    ))
                                ) : (
                                    <p>Cargando...</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsStudents
