import React from "react";
import { tiposDeContrato, modalidades } from "../../../helpers/Helpers";
import { updateOfert } from "../../../services/services";

const EditVanacieModal = ({ selectedData, handleChange }) => {
  const handlePutVacancie = async () => {
    try {
      await updateOfert(
        selectedData.Job_ID,
        selectedData.Job_Title,
        selectedData.Job_Description,
        selectedData.Job_Requeriments,
        selectedData.Job_Modality,
        selectedData.Job_ContractType,
        selectedData.Ca_ID,
        selectedData.Job_EndDate,
        selectedData.Job_Location
      );
    } catch (error) {
      // Manejo de errores
    }
  };
  function mostrarFechaEnInput(fechaISO) {
    const fechaObj = new Date(fechaISO);
    const fechaFormateada = fechaObj.toISOString().split("T")[0];
    return fechaFormateada;
  }
  const formFields = [
    {
      label: "Titulo de la Vacante",
      name: "Job_Title",
      type: "text",
      required: true,
      value: selectedData?.Job_Title || "",
    },
    {
      label: "Descripcion de la Vacante",
      name: "Job_Description",
      type: "textarea",
      required: true,
      value: selectedData?.Job_Description || "",
    },
    {
      label: "Requisitos de la Vacante",
      name: "Job_Requeriments",
      type: "textarea",
      required: true,
      value: selectedData?.Job_Requeriments || "",
    },
    {
      label: "Direccion de la Vacante",
      name: "Job_Location",
      type: "textarea",
      required: true,
      value: selectedData?.Job_Location || "",
    },
    {
      label: "Fecha de fin de la Vacante",
      name: "Job_EndDate",
      type: "date",
      required: true,
      value:
        selectedData?.Job_EndDate === ""
          ? ""
          : mostrarFechaEnInput(selectedData?.Job_EndDate),
    },
    {
      label: "Tipo de Contrato",
      name: "Job_ContractType",
      type: "select",
      required: true,
      options: "contratos",
      value: selectedData?.Job_ContractType || "",
    },
    {
      label: "Modalidad de Trabajo",
      name: "Job_Modality",
      type: "select",
      required: true,
      value: selectedData?.Job_Modality || "",
    },
    {
      label: "Carrera dirigida la Vacante",
      name: "Ca_ID",
      options: "carreras",
      type: "select",
      required: true,
      value: selectedData?.Ca_Description || "",
    },
  ];

  const c = tiposDeContrato;
  const m = modalidades;
  return (
    <div
      className="modal fade"
      id="staticBackdropEditVanacie"
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
              Editar Vacante
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handlePutVacancie}>
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
                      <option>{field.value}</option>
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
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditVanacieModal;
