import React from 'react'
import { tiposDeContrato, modalidades } from "../../../helpers/Helpers"

const AddVancancieModal = () => {
  const formFields = [
    {
      label: "Titulo de la Vacante",
      name: "jobTitle",
      type: "text",
      required: true,
    },
    {
      label: "Descripcion de la Vacante",
      name: "jobDescription",
      type: "textarea",
      required: true,
    },
    {
      label: "Requisitos de la Vacante",
      name: "jobRequirements",
      type: "textarea",
      required: true,
    },
    {
      label: "Fecha de fin de la Vacante",
      name: "jobEndDate",
      type: "date",
      required: true,
    },
    {
      label: "Tipo de Contrato",
      name: "jobContractType",
      type: "select",
      required: true,
      options: "contratos"
    },
    {
      label: "Modalidad de Trabajo",
      name: "jobModality",
      type: "select",
      required: true,
    },
    {
      label: "Vacantes Disponibles",
      name: "jobNoVacancy",
      type: "number",
      required: true,
    },
    {
      label: "Salario",
      name: "jobSalary",
      type: "text",
      required: true,
    },
  ];

  const c = tiposDeContrato;
  const m = modalidades;

  return (
    <div className="modal fade" id="staticBackdropAddVancancie" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Agregar Vacante</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form>
            <div className="modal-body">
              {formFields.map((field, index) => (
                <div key={index} className="mb-3">
                  <label className="form-label">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea className="form-control" name={field.name} required={field.required}></textarea>
                  ) : field.type === "select" ? (
                    <select className="form-select" name={field.name} required={field.required}>
                      <option>Seleccione una Opcion</option>
                      {
                        field.options === 'contratos' ?
                          (
                            Object.values(c).map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))
                          ) : (

                            Object.values(m).map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            )))
                      }

                    </select>
                  ) : (
                    <input type={field.type} className="form-control" name={field.name} required={field.required} />
                  )}
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }} type="submit" className="btn btn-primary btn-sm">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddVancancieModal
