import React, { useState } from "react";
import { setImgEmp, updateComp } from "../../../services/services";
import { getUserCookies } from "../../../helpers/Helpers";

const EditCompModal = ({ handleChangeComp, formDataComp }) => {
  const [dataImg, setDataImg] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setDataImg(file);
  };
  const userId = getUserCookies();
  const handleUpdate = async () => {
    try {
      if (dataImg !== null) {
        const id = userId[0].Comp_ID;
        const img = dataImg;
        await setImgEmp(id, img);
      }
      await updateComp(
        userId[0].Comp_ID,
        formDataComp.Comp_Name,
        formDataComp.Comp_Description,
        formDataComp.Comp_Telephone,
        formDataComp.Comp_FirstStreet,
        formDataComp.Comp_SecondStreet,
        formDataComp.Comp_City,
        formDataComp.Comp_KeyContact,
        formDataComp.Comp_KYTelephone,
        formDataComp.Comp_EmailAddress,
        formDataComp.Comp_Website,
        formDataComp.User_Email
      );
    } catch (error) {
      // Manejo de errores
    }
  };
  const formFields = [
    {
      label: "Nombre empresa",
      name: "Comp_Name",
      type: "text",
      required: true,
      value: formDataComp.Comp_Name,
    },
    {
      label: "Correo usuario",
      name: "User_Email",
      type: "text",
      required: true,
      value: formDataComp.User_Email,
    },
    {
      label: "Descripción empresa",
      name: "Comp_Description",
      type: "textarea",
      required: true,
      value: formDataComp.Comp_Description,
    },
    {
      label: "Teléfono",
      name: "Comp_Telephone",
      type: "text",
      required: true,
      value: formDataComp.Comp_Telephone,
    },
    {
      label: "Correo empresa",
      name: "Comp_EmailAddress",
      type: "text",
      required: true,
      value: formDataComp.Comp_EmailAddress,
    },
    {
      label: "Sitio web",
      name: "Comp_Website",
      type: "text",
      required: true,
      value: formDataComp.Comp_Website,
    },
    {
      label: "Direccion 1",
      name: "Comp_FirstStreet",
      type: "textarea",
      required: true,
      value: formDataComp.Comp_FirstStreet,
    },
    {
      label: "Direccion 2",
      name: "Comp_SecondStreet",
      type: "textarea",
      required: true,
      value: formDataComp.Comp_SecondStreet,
    },
    {
      label: "Ciudad",
      name: "Comp_City",
      type: "text",
      required: true,
      value: formDataComp.Comp_City,
    },
    {
      label: "Contacto clave",
      name: "Comp_KeyContact",
      type: "text",
      required: true,
      value: formDataComp.Comp_KeyContact,
    },
    {
      label: "Teléfono contacto",
      name: "Comp_KYTelephone",
      type: "text",
      required: true,
      value: formDataComp.Comp_KYTelephone,
    },
    { label: "Foto de perfil", id: "photo", type: "file" },
  ];
  return (
    <div
      className="modal fade"
      id="staticBackdropEditCompConfig"
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
              Configuracion
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleUpdate}>
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
                      onChange={(e) => handleChangeComp(e)}
                    ></textarea>
                  ) : field.type !== "file" ? (
                    <input
                      type={field.type}
                      className="form-control"
                      name={field.name}
                      required={field.required}
                      value={field.value}
                      onChange={(e) => handleChangeComp(e)}
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

export default EditCompModal;
