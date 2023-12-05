import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { postComp, setImgEmp } from "../../services/services";

const CompRegisterFormDynamic = () => {
  const [dataImg, setDataImg] = useState(null);

  const handlePutComp = async () => {
    try {
      if (formData.User_Password !== formData.Confirm_User_Password) {
        alert("Las contraseñas no coinciden");
        return;
      } else {
        const res = await postComp(
          formData.Comp_ID,
          formData.User_Email,
          formData.User_Password,
          formData.Comp_Name,
          formData.Comp_Description,
          formData.Comp_Telephone,
          formData.Comp_FirstStreet,
          formData.Comp_SecondStreet,
          formData.Comp_City,
          formData.Comp_State,
          formData.Comp_PostalCode,
          formData.Comp_KeyContact,
          formData.Comp_KYTelephone,
          formData.Comp_EmailAddress,
          formData.Comp_Website
        );
        if (dataImg !== null) {
          const id = formData.Comp_ID;
          const img = dataImg;
          await setImgEmp(id, img);
        }
        // if (res.status === 200) {
        //   alert("Empresa registrada con éxito");
        //   window.location.href = "/login";
        // } else {
        //   alert("Ha ocurrido un error");
        // }
      }
    } catch (error) {
      // Manejo de errores
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setDataImg(file);
  };

  const [formData, setFormData] = useState({
    Comp_ID: "",
    User_Email: "",
    User_Password: "",
    Comp_Name: "",
    Comp_Description: "",
    Comp_Telephone: "",
    Comp_FirstStreet: "",
    Comp_SecondStreet: "",
    Comp_City: "",
    Comp_State: "",
    Comp_PostalCode: "",
    Comp_KeyContact: "",
    Comp_KYTelephone: "",
    Comp_EmailAddress: "",
    Comp_Website: "",
    Confirm_User_Password: "",
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
      id: "User_Email",
      label: "Email de usuario",
      type: "email",
      options: "login company",
      required: true,
      message: "Email con el que vas a iniciar seccion",
    },
    {
      id: "Comp_KeyContact",
      label: "Nombre usuario",
      type: "text",
      options: "login company",
      required: true,
      message: "Propietario de la cuenta",
    },
    {
      id: "Comp_KYTelephone",
      label: "Teléfono de contacto",
      type: "tel",
      options: "login company",
      required: true,
    },
    {
      id: "User_Password",
      label: "Contraseña",
      type: "password",
      options: "login company",
      required: true,
    },
    {
      id: "Confirm_User_Password",
      label: "Confirmar Contraseña",
      type: "password",
      options: "login company",
      required: true,
    },
    {
      id: "Comp_ID",
      label: "RNC",
      type: "text",
      required: true,
    },
    {
      id: "Comp_Name",
      label: "Nombre de la Empresa",
      type: "text",
      required: true,
    },
    {
      id: "Comp_Telephone",
      label: "Teléfono de la Empresa",
      type: "tel",
      required: true,
    },
    {
      id: "Comp_Website",
      label: "Sitio Web",
      type: "text",
      options: "opcional",
      required: false,
    },
    {
      id: "Comp_FirstStreet",
      label: "Direccion 1",
      type: "textarea",
      required: true,
    },
    {
      id: "Comp_SecondStreet",
      label: "Direccion 2",
      type: "textarea",
      options: "opcional",
      required: false,
    },
    {
      id: "Comp_Description",
      label: "Acerca de la Empresa",
      type: "textarea",
      required: true,
    },
    { id: "Comp_City", label: "Ciudad", type: "text", required: true },
    {
      id: "Comp_State",
      label: "Estado",
      type: "text",
      options: "opcional",
      required: false,
    },
    {
      id: "Comp_PostalCode",
      label: "Código Postal",
      type: "text",
      options: "opcional",
      required: false,
    },
    {
      id: "companyPhoto",
      label: "Logo de la Compañía",
      type: "file",
      options: "opcional",
      required: false,
    },
  ];

  return (
    <div className="mt-5 container">
      <Tooltip
        id="my-tooltip-inline"
        style={{ backgroundColor: "#0C4770", color: "#FFFFFF" }}
      />
      <form className="row" onSubmit={handlePutComp}>
        {formFields.map((field, index) => (
          <div key={field.id} className="col-md-6">
            {field.options === "login company" ? (
              <div style={{ position: "relative" }}>
                <label className="form-label mt-1">
                  {field.options !== "opcional" ? (
                    <span>
                      {field.label} <span style={{ color: "red" }}>*</span>
                    </span>
                  ) : (
                    field.label
                  )}
                </label>{" "}
                {field.message ? (
                  <i
                    style={{ marginLeft: "1rem" }}
                    data-tooltip-id="my-tooltip-inline"
                    data-tooltip-content={field.message}
                    className="fas fa-question"
                  ></i>
                ) : null}
                <input
                  type={field.type}
                  className="form-control"
                  id={field.id}
                  style={{ boxShadow: "none" }}
                  required={field.required}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            ) : field.type === "file" ? (
              <div>
                <label className="form-label mt-2">
                  {field.options !== "opcional" ? (
                    <span>
                      {field.label} <span style={{ color: "red" }}>*</span>
                    </span>
                  ) : (
                    field.label
                  )}
                </label>{" "}
                {field.message ? (
                  <i
                    data-tooltip-id="my-tooltip-inline"
                    data-tooltip-content={field.message}
                    className="fas fa-question"
                  ></i>
                ) : null}
                <input
                  type={field.type}
                  className="form-control"
                  id={field.id}
                  style={{ boxShadow: "none" }}
                  onChange={(e) => handleFileChange(e)}
                  required={field.required}
                />
              </div>
            ) : field.type === "textarea" ? (
              <div>
                <label className="form-label mt-2">
                  {field.options !== "opcional" ? (
                    <span>
                      {field.label} <span style={{ color: "red" }}>*</span>
                    </span>
                  ) : (
                    field.label
                  )}
                </label>{" "}
                {field.message ? (
                  <i
                    data-tooltip-id="my-tooltip-inline"
                    data-tooltip-content={field.message}
                    className="fas fa-question"
                  ></i>
                ) : null}
                <textarea
                  className="form-control"
                  id={field.id}
                  onChange={(e) => handleChange(e)}
                  style={{ boxShadow: "none", resize: "none" }}
                  required={field.required}
                />
              </div>
            ) : (
              <div>
                <label className="form-label mt-2">
                  {field.options !== "opcional" ? (
                    <span>
                      {field.label} <span style={{ color: "red" }}>*</span>
                    </span>
                  ) : (
                    field.label
                  )}
                </label>{" "}
                {field.message ? (
                  <i
                    data-tooltip-id="my-tooltip-inline"
                    data-tooltip-content={field.message}
                    className="fas fa-question"
                  ></i>
                ) : null}
                <input
                  type={field.type}
                  className="form-control"
                  id={field.id}
                  onChange={(e) => handleChange(e)}
                  style={{ boxShadow: "none" }}
                  required={field.required}
                />
              </div>
            )}
          </div>
        ))}
        <div className="col-12 d-flex justify-content-end">
          <button
            style={{
              width: "150px",
              backgroundColor: "#0D4671",
              border: "none",
            }}
            className="btn btn-primary mt-3"
            type="submit"
          >
            Enviar formulario
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompRegisterFormDynamic;
