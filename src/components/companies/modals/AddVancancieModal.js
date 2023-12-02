import React, { useState } from "react";
import {
  tiposDeContrato,
  modalidades,
  getUserCookies,
} from "../../../helpers/Helpers";
import { addOfert } from "../../../services/services";

const AddVancancieModal = () => {
  const comp = getUserCookies();
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

  const handleAddVacancie = async () => {
    try {
      await addOfert(
        formData.Job_Title,
        formData.Job_Description,
        formData.Job_Requeriments,
        formData.Job_Modality,
        formData.Job_ContractType,
        comp[0].Comp_ID,
        formData.Ca_ID,
        formData.Job_EndDate,
        formData.Job_Location
      );
    } catch (error) {
      // Manejo de errores
    }
  };

  const formFields = [
    {
      label: "Titulo de la Vacante",
      name: "Job_Title",
      type: "text",
      required: true,
      value: formData?.Job_Title || "",
    },
    {
      label: "Descripcion de la Vacante",
      name: "Job_Description",
      type: "textarea",
      required: true,
      value: formData?.Job_Description || "",
    },
    {
      label: "Requisitos de la Vacante",
      name: "Job_Requeriments",
      type: "textarea",
      required: true,
      value: formData?.Job_Requeriments || "",
    },
    {
      label: "Direccion de la Vacante",
      name: "Job_Location",
      type: "textarea",
      required: true,
      value: formData?.Job_Location || "",
    },
    {
      label: "Fecha de fin de la Vacante",
      name: "Job_EndDate",
      type: "date",
      required: true,
      value: formData?.Job_EndDate || "",
    },
    {
      label: "Tipo de Contrato",
      name: "Job_ContractType",
      type: "select",
      required: true,
      options: "contratos",
      value: formData?.Job_ContractType || "",
    },
    {
      label: "Modalidad de Trabajo",
      name: "Job_Modality",
      type: "select",
      required: true,
      value: formData?.Job_Modality || "",
    },
    {
      label: "Carrera dirigida la Vacante",
      name: "Ca_ID",
      options: "carreras",
      type: "select",
      required: true,
      value: formData?.Ca_Description || "",
    },
  ];

  const c = tiposDeContrato;
  const m = modalidades;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div
      className="modal fade"
      id="staticBackdropAddVancancie"
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
              Agregar Vacante
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onChange={handleAddVacancie}>
            <div className="modal-body row">
              {formFields.map((field, index) => (
                <div key={index} className="mb-3 col-md-6">
                  <label className="form-label">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      className="form-control"
                      name={field.name}
                      required={field.required}
                      value={field.value}
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  ) : field.type === "select" ? (
                    <select
                      className="form-select"
                      name={field.name}
                      required={field.required}
                      onChange={(e) => handleChange(e)}
                    >
                      <option>Elige una opcion</option>
                      {field.options === "contratos" ? (
                        Object.values(c).map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))
                      ) : field.options === "carreras" ? (
                        <>
                          <option value="1">Dr. en Medicina</option>
                          <option value="2">Dr. en Odontología</option>
                          <option value="3">Lic. en Farmacia</option>
                          <option value="4">Lic. en Psicología Clínica</option>
                          <option value="5">Lic. en Psicología Escolar</option>
                          <option value="6">
                            Lic. en Psicologia Industrial
                          </option>
                          <option value="7">
                            Lic. en Educación, mención Educación Especial
                          </option>
                          <option value="8">
                            Lic. en Matemática Orientada a la Educación
                            Secundaria
                          </option>
                          <option value="9">
                            Lic. en Química Orientada a la Educación Secundaria
                          </option>
                          <option value="10">
                            Lic. en Física Orientada a la Educación Secundaria
                          </option>
                          <option value="11">Lic. en Educación Física</option>
                          <option value="12">Arquitectura y Urbanismo</option>
                          <option value="13">
                            Lic. en Diseño de Interiores
                          </option>
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
                        </>
                      ) : (
                        Object.values(m).map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))
                      )}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      className="form-control"
                      name={field.name}
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
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVancancieModal;
