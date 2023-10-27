import React, { useState, useEffect } from 'react'
import { postEstuxhabilidades, deleteEstxHab, getHabNotEst, postEstxHab } from '../../services/services';
import { Tooltip } from 'react-tooltip'
import { getUserCookies } from '../../helpers/Helpers';

const SkillsStudents = () => {
    const [data, setData] = useState(null);
    const [dataSkillsNot, setDataSkillsNot] = useState(null);
    const [searchSkill, setSearchSkill] = useState('');

    const stdData = getUserCookies();
    const userid = stdData[0].Std_ID;
    const userCa = stdData[0].Ca_ID;

    const updateSkills = async () => {
        try {
            let getResponse = await postEstuxhabilidades(userid);
            let response = getResponse.data;

            if (response.message === 0) {
                response = false;
            }

            setData(response);
        } catch (error) {
            // Manejo de errores
            console.error("error", error.response.data.message);
            setData(false);
        }
    };

    const updateSkillsNot = async () => {
        try {
            let getResponse = await getHabNotEst(userid, userCa);
            let response = getResponse.data;
            if (response.message === 0) {
                response = false;
            }

            if (searchSkill) {
                response = response.filter((skill) =>
                    skill.Skill.toLowerCase().includes(searchSkill.toLowerCase())
                );
            }

            setDataSkillsNot(response);
        } catch (error) {
            // Manejo de errores
            console.error("error", error.response.data.message);
            setDataSkillsNot(false);
        }
    };

    useEffect(() => {
        updateSkills();
        updateSkillsNot();
    }, [searchSkill]);

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
            <div className='card'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <p className="card-subtitle text-muted m-1">Mis Habilidades:</p>
                            {data ? (
                                data.map((item) => (
                                    <button onClick={() => handleDeleteSkills(item.ID)} key={item.ID} style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                        {item.Skill} <i className="fas fa-times"></i>
                                    </button>
                                ))
                            ) : (
                                <div>
                                    <p className='m-1'>Elige una habilidad que poseas.</p>
                                </div>
                            )}
                        </div>
                        <div className='col-md-6 col-12'>
                            <p className="card-subtitle text-muted m-1">Agregar Habilidades:</p>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Buscar..."
                                    value={searchSkill}
                                    style={{ boxShadow: "none" }}
                                    onChange={(e) => setSearchSkill(e.target.value)}
                                />
                            </div>
                            {dataSkillsNot ? (
                                dataSkillsNot.map((item) => (
                                    <button onClick={() => handleAddSkill(item.Skill_ID)} key={item.Skill_ID} style={{ backgroundColor: "#0C4770", border: "none" }} className="btn btn-primary btn-sm m-1">
                                        {item.Skill} <i className="fas fa-plus"></i>
                                    </button>
                                ))
                            ) : (
                                <div>
                                    <p className='m-1'>Ya tienes todas las habilidades!!.</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='m-1' style={{ position: 'absolute', top: '0', right: '0' }}>
                        <button style={{ backgroundColor: "#FFFFFF", border: "none" }}>
                            <i data-tooltip-id="my-tooltip-inline" data-tooltip-content="Aqui podras agregar las habilidades que tienes, los reclutadores podran verlas." className="fas fa-question"></i>
                        </button>
                        <Tooltip id="my-tooltip-inline" style={{ backgroundColor: "#0C4770", color: "#FFFFFF" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsStudents
