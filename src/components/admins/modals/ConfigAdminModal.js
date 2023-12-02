import React, { useState } from "react";
import { setImgAdmin, updateAdmin } from "../../../services/services";

const ConfigAdminModal = ({ handleChangeAdmin, formDataAdmin }) => {
  const [dataImg, setDataImg] = useState(null);

  const update = async () => {
    try {
      if (dataImg !== null) {
        const id = formDataAdmin.User_ID;
        const img = dataImg;
        await setImgAdmin(id, img);
      }
      let getResponse = await updateAdmin(
        formDataAdmin.User_ID,
        formDataAdmin.User_Phone,
        formDataAdmin.User_Email
      );
      let response = getResponse;
      console.log(response);
    } catch (error) {
      // Manejo de errores
      console.error("error", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setDataImg(file);
  };

  const formFields = [
    {
      label: "Correo",
      id: "User_Email",
      type: "text",
      value: formDataAdmin.User_Email,
      maxLength: "30",
    },
    {
      label: "Telefono",
      id: "User_Phone",
      type: "text",
      value: formDataAdmin.User_Phone,
      pattern: "[0-9]{10}",
      maxLength: "10",
    },
    { label: "Foto de perfil", id: "photo", type: "file" },
  ];
  return (
    <div
      className="modal fade"
      id="staticBackdropConfAdminModal"
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
              Configuración de Administrador
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={update}>
            <div className="modal-body">
              {formFields.map((field) => (
                <div className="mb-3" key={field.id}>
                  <label htmlFor={field.id} className="form-label">
                    {field.label}
                  </label>
                  {field.type === "text" ? (
                    <input
                      type="text"
                      id={field.id}
                      className="form-control"
                      style={{ boxShadow: "none" }}
                      value={field.value}
                      onChange={(e) => handleChangeAdmin(e)}
                      maxLength={field.maxLength}
                      pattern={field.pattern}
                    />
                  ) : (
                    <input
                      type="file"
                      id={field.id}
                      className="form-control"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => handleFileChange(e)}
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
                type="submit"
                className="btn btn-primary btn-sm"
                style={{ backgroundColor: "#0C4770", borderColor: "#0C4770" }}
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

export default ConfigAdminModal;
