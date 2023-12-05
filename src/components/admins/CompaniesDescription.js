import React, { useEffect, useState } from "react";
import photoNull from "../../assets/img/no image.png";
import AdminModals from "./modals/AdminModals";
import { convertImage } from "../../helpers/Helpers";
import { getImgEmp } from "../../services/services";
const CompaniesDescription = ({ dataDescription }) => {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const getIMG = async () => {
      try {
        const response = await getImgEmp(dataDescription.Comp_ID);
        // console.log(response.data.Img);
        if (response && response.data) {
          if (response.data.Img === undefined) {
            setImg(false);
          }
          if (response.data.Img) {
            setImg(convertImage(response.data.Img.data));
          }
        } else {
          setImg(null);
        }
      } catch (error) {
        // Manejo de errores
        console.error("error", error);
      }
    };
    getIMG();
  }, [dataDescription.Comp_ID]);

  return (
    <>
      <div className="card mt-1 style-title">
        <h6 className="m-2">Descripción</h6>
      </div>
      <div className="card m-1">
        <AdminModals selectData={dataDescription} />
        {
          <img
            className="card-img-top"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "200px",
            }}
            src={img ? `data:image/png;base64,${img}` : photoNull}
            alt="unphu"
          />
        }
        <div className="card-body">
          <h4 className="card-title icon-color">{dataDescription.Comp_Name}</h4>
          <p className="mb-1 text-muted">RNC: {dataDescription.Comp_ID}</p>
          <p className="mb-1 text-muted">
            Teléfono: {dataDescription.Comp_Telephone}
          </p>
          <p className="mb-1 text-muted">
            Direccion 1: {dataDescription.Comp_FirstStreet}
          </p>
          <p className="mb-1 text-muted">
            Direccion 2: {dataDescription.Comp_SecondStreet}
          </p>
          <p className="mb-1 text-muted">Ciudad: {dataDescription.Comp_City}</p>
          <p className="mb-1 text-muted">
            Estado: {dataDescription.Comp_State}
          </p>
          <p className="mb-1 text-muted">
            Código Postal: {dataDescription.Comp_PostalCode}
          </p>
          <p className="mb-1 text-muted">
            Contacto Principal: {dataDescription.Comp_KeyContact}
          </p>
          <p className="mb-1 text-muted">
            Teléfono del Contacto: {dataDescription.Comp_KYTelephone}
          </p>
          <p className="mb-1 text-muted">
            Correo Electrónico:{" "}
            <a href={`mailto:${dataDescription.User_Email}`}>
              {dataDescription.User_Email}
            </a>
          </p>
          <p className="mb-1 text-muted">
            Sitio Web:{" "}
            <a
              href={dataDescription.Comp_Website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dataDescription.Comp_Website}
            </a>
          </p>
          <p className="mb-1 text-muted">
            Acerca de la empresa: {dataDescription.Comp_Description}
          </p>
          <div>
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropAcceptComp"
              style={{ backgroundColor: "#0C4770", border: "none" }}
              type="button"
              className="btn btn-success m-1 mb-0 btn-sm"
            >
              Aceptar
            </button>
            <button
              style={{ border: "none" }}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropCancelComp"
              type="button"
              className="btn btn-danger m-1 mb-0 btn-sm"
            >
              Denegar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompaniesDescription;
