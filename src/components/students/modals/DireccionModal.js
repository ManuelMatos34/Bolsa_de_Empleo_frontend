import React from "react";
import { provincias } from "../../../helpers/Helpers";

const DireccionModal = ({ formData, handleChange, handlePutStd }) => {
    const formFields = [
        {
            label: "Direccion 1",
            id: "Std_FirstStreet",
            type: "textarea",
            value: formData.Std_FirstStreet,
            required: true,
        },
        {
            label: "Direccion 2 (Opcional)",
            id: "Std_SecondStreet",
            type: "textarea",
            value: formData.Std_SecondStreet,
            required: false,
        },
        {
            label: "Provincias",
            id: "Std_City",
            type: "select",
            value: formData.Std_City,
            required: true,
        },
    ];

    const p = provincias;

    return (
        <div>
            <div
                className="modal fade"
                id="staticBackdropDireccion"
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
                                    Dirección
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                {formFields.map((field) => (
                                    <div className="mb-3" key={field.id}>
                                        <label>{field.label}</label>
                                        {field.type === "textarea" ? (
                                            <textarea
                                                className="form-control"
                                                id={field.id}
                                                value={field.value}
                                                onChange={(e) => handleChange(e)}
                                                style={{ boxShadow: "none" }}
                                                required={field.required}
                                            />
                                        ) : field.type === "select" ? (
                                            // Renderiza el campo como un select
                                            <select
                                                className="form-control"
                                                id={field.id}
                                                value={field.value}
                                                onChange={(e) => handleChange(e)}
                                                style={{ boxShadow: "none" }}
                                                required={field.required}
                                            >
                                                <option value="">Selecciona una provincia</option>
                                                {Object.values(p).map((provincia) => (
                                                    <option key={provincia} value={provincia}>
                                                        {provincia}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type={field.type}
                                                className="form-control"
                                                id={field.id}
                                                style={{ boxShadow: "none" }}
                                                value={field.value}
                                                onChange={(e) => handleChange(e)}
                                                required={field.required}
                                            />
                                        )}
                                    </div>
                                ))}
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
                                    style={{ backgroundColor: "#0C4770", border: "none" }}
                                    type="submit"
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

export default DireccionModal;
