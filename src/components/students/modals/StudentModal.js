import React from "react";

const StudentModal = ({ formData, handleChange, handlePutStd, setDataImg }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setDataImg(file);
    };

    const formFields = [
        {
            label: "Correo Personal",
            id: "Std_PersonalEmail",
            type: "email",
            value: formData.Std_PersonalEmail,
            maxLength: "30",
            requeried: true,
        },
        {
            label: "Foto de perfil",
            name: "Img",
            id: "Img",
            type: "file",
            requeried: false,
            accept: ".png, .jpg, .jpeg",
            maxlength: "1048576"
        },
    ];

    return (
        <div>
            <div
                className="modal fade"
                id="staticBackdropStudent"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <form onSubmit={handlePutStd}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                    Estudiante
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                {formFields.map((field) =>
                                    field.type === "file" ? (
                                        <div className="mb-3" key={field.id}>
                                            <label htmlFor={field.id} className="form-label">
                                                {field.label}
                                            </label>
                                            <input
                                                className="form-control"
                                                type={field.type}
                                                id={field.id}
                                                name={field.name}
                                                onChange={handleFileChange}
                                                accept={field.accept}
                                                maxLength={field.maxlength}
                                                size="85"
                                            />
                                        </div>
                                    ) : (
                                        <div className="mb-3" key={field.id}>
                                            <label htmlFor={field.id} className="form-label">
                                                {field.label}
                                            </label>
                                            <input
                                                type={field.type}
                                                className="form-control"
                                                id={field.id}
                                                style={{ boxShadow: "none" }}
                                                value={field.value}
                                                onChange={(e) => handleChange(e)}
                                                maxLength={field.maxLength}
                                                name={field.name}
                                                required={field.requeried}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="modal-footer">
                                <button
                                    style={{ border: "none" }}
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                    data-bs-dismiss="modal"
                                >
                                    Cerrar
                                </button>
                                <button
                                    type="submit"
                                    style={{ backgroundColor: "#0C4770", border: "none" }}
                                    className="btn btn-primary btn-sm"
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentModal;
