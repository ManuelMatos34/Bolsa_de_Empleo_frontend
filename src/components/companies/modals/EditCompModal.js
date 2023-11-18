import React from 'react'

const EditCompModal = () => {
    const formFields = [
        {
            label: "Nombre de la Empresa",
            name: "jobTitle",
            type: "text",
            required: true,
        },
        {
            label: "Correo Personal",
            name: "jobDescription",
            type: "text",
            required: true,
        },
        {
            label: "Descripción de la Empresa",
            name: "jobRequirements",
            type: "textarea",
            required: true,
        },
        {
            label: "Teléfono",
            name: "jobEndDate",
            type: "text",
            required: true,
        },
        {
            label: "Correo de la Empresa",
            name: "jobContractType",
            type: "text",
            required: true,
            options: "contratos"
        },
        {
            label: "Sitio Web",
            name: "jobModality",
            type: "text",
            required: true,
        },
        {
            label: "Primera Calle",
            name: "jobNoVacancy",
            type: "textarea",
            required: true,
        },
        {
            label: "Segunda Calle",
            name: "jobSalary",
            type: "textarea",
            required: true,
        },
        {
            label: "Ciudad",
            name: "jobSalary",
            type: "text",
            required: true,
        },
        {
            label: "Estado",
            name: "jobSalary",
            type: "text",
            required: true,
        },
        {
            label: "Código Postal",
            name: "jobSalary",
            type: "text",
            required: true,
        },
        {
            label: "Contacto Clave",
            name: "jobSalary",
            type: "text",
            required: true,
        },
        {
            label: "Teléfono de Contacto",
            name: "jobSalary",
            type: "text",
            required: true,
        },
    ];
    return (
        <div className="modal fade" id="staticBackdropEditCompConfig" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Configuracion</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div className="modal-body row">
                            {formFields.map((field, index) => (
                                <div key={index} className="mb-3 col-md-6">
                                    <label className="form-label">{field.label}</label>
                                    {field.type === "textarea" ? (
                                        <textarea className="form-control" name={field.name} required={field.required}></textarea>
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

export default EditCompModal
