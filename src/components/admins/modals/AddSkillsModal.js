import React, { useState } from "react";
import { postSkill } from "../../../services/services";

const AddSkillsModal = () => {
  const [formData, setFormData] = useState({
    Ca_Description: "",
    Skill: "",
    Ca_ID: 0,
    Skill_Status: "0",
    Skill_ID: 0,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const formFields = [
    {
      label: "Nombre de la Habilidad",
      id: "Skill",
      type: "text",
      maxLength: "25",
      required: true,
      value: formData.Skill,
    },
    {
      label: "Carrera",
      id: "Ca_ID",
      type: "select",
      required: true,
      value: formData.Ca_ID,
    },
  ];

  const handleAddSkill = async () => {
    try {
      await postSkill(formData.Skill, formData.Ca_ID);
    } catch (error) {
      // Manejo de errores
    }
  };

  return (
    <div
      className="modal fade"
      id="staticBackdropAddSkills"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Agregar Habilidad
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleAddSkill}>
            <div className="modal-body">
              {formFields.map((field) => (
                <div className="mb-3" key={field.id}>
                  <label htmlFor={field.id} className="form-label">
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      className="form-select"
                      id={field.id}
                      style={{ boxShadow: "none" }}
                      required={field.required}
                      value={field.value}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">Selecciona una opcion</option>
                      <option value="1">Dr. en Medicina</option>
                      <option value="2">Dr. en Odontología</option>
                      <option value="3">Lic. en Farmacia</option>
                      <option value="4">Lic. en Psicología Clínica</option>
                      <option value="5">Lic. en Psicología Escolar</option>
                      <option value="6">Lic. en Psicologia Industrial</option>
                      <option value="7">
                        Lic. en Educación, mención Educación Especial
                      </option>
                      <option value="8">
                        Lic. en Matemática Orientada a la Educación Secundaria
                      </option>
                      <option value="9">
                        Lic. en Química Orientada a la Educación Secundaria
                      </option>
                      <option value="10">
                        Lic. en Física Orientada a la Educación Secundaria
                      </option>
                      <option value="11">Lic. en Educación Física</option>
                      <option value="12">Arquitectura y Urbanismo</option>
                      <option value="13">Lic. en Diseño de Interiores</option>
                      <option value="14">Lic. en Música</option>
                      <option value="15">Agrimensura</option>
                      <option value="16">Ingeniería Civil</option>
                      <option value="17">Ingeniería Química</option>
                      <option value="18">Ingeniería Industrial</option>
                      <option value="19">Ingeniería Geomatica</option>
                      <option value="20">
                        Ingeniería en Sistemas Computacionales
                      </option>
                      <option value="21">Lic. en Derecho</option>
                      <option value="22">
                        Ingeniería Agronómica mención Cultivos
                      </option>
                      <option value="23">Dr. en Veterinaria</option>
                      <option value="24">
                        Lic. en Administración de Empresas
                      </option>
                      <option value="25">Lic. en Mercadeo</option>
                      <option value="26">
                        Lic. en Administración Hotelera y Turística
                      </option>
                      <option value="27">
                        Lic. en Contabilidad y Auditoria
                      </option>
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      className="form-control"
                      id={field.id}
                      style={{ boxShadow: "none" }}
                      maxLength={field.maxLength}
                      required={field.required}
                      value={field.value}
                      onChange={(e) => handleChange(e)}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }}
                type="submit"
                className="btn btn-primary btn-sm"
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSkillsModal;
