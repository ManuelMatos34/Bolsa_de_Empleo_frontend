import React, { useState } from "react";
import { setCvEst } from "../../../services/services";
import { getUserCookies } from "../../../helpers/Helpers";

const CvModal = () => {
    const [formData, setFormData] = useState();

    const formFields = [{ label: "(CV) - Hoja de vida", id: "cv", type: "file" }];

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(file);
    };

    const handleSetCv = async () => {
        try {
            const stdId = getUserCookies();
            const id = stdId[0].Std_ID
            const cvv = formData;
            await setCvEst(id, cvv);

        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <div>
            <div
                className="modal fade"
                id="staticBackdropCv"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <form onSubmit={handleSetCv}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                    (CV) - Hoja de vida
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
                                        <label htmlFor={field.id} className="form-label">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            className="form-control"
                                            id={field.id}
                                            onChange={handleFileChange}
                                            style={{ boxShadow: "none" }}
                                            accept=".pdf"
                                            size="85"
                                        />
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

export default CvModal;
