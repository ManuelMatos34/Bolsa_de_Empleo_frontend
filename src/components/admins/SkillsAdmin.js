import React from "react";

const SkillsAdmin = ({ data, getSkill }) => {
  return (
    <div>
      <div className="card mb-5 p-4 pt-1">
        <div className="card-body p-0 m-0 mt-3">
          <table className="table table-sm text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Habilidad</th>
                <th scope="col">Carrera</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((skill, index) => (
                  <tr key={skill.Skill_ID}>
                    <th scope="row">{skill.Skill_ID}</th>
                    <td>{skill.Skill}</td>
                    <td>{skill.Ca_Description}</td>
                    <td>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdropEditSkills"
                        className="btn btn-success btn-sm m-1"
                        onClick={() => getSkill(skill.Skill_ID)}
                      >
                        <i className="fas fa-pencil-alt"></i>{" "}
                        {/* Icono para Editar */}
                      </button>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdropDeleteSkills"
                        className="btn btn-danger btn-sm m-1"
                        onClick={() => getSkill(skill.Skill_ID)}
                      >
                        <i className="fas fa-trash-alt"></i>{" "}
                        {/* Icono para Eliminar */}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">
                    <div>
                      <p>Sin datos...</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SkillsAdmin;
