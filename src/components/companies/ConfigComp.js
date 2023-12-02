import React, { useEffect, useState } from "react";
import photoNull from "../../assets/img/no image.png";
import CompanyModals from "./modals/CompanyModals";
import { convertImage, getUserCookies } from "../../helpers/Helpers";
import { getCompById } from "../../services/services";

const ConfigComp = () => {
  const [data, setData] = useState(null);
  const [img, setImg] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userId = getUserCookies();
      try {
        const response = await getCompById(userId[0].Comp_ID);
        if (response && response.data) {
          if (
            response.data.Img &&
            (response.data.Img.data === null ||
              response.data.Img.data === undefined ||
              response.data.Img.data === "")
          ) {
            setImg(false);
          }
          if (response.data.Img) {
            setImg(convertImage(response.data.Img.data));
          }
          setData(response.data);
        } else {
          setData(null);
          setImg(null);
        }
      } catch (error) {
        // Manejo de errores
        console.error("error", error);
        setData(null);
      }
    };
    getUser();
  }, []);

  return (
    <div className="container w-75">
      <CompanyModals data={data} />
      <div className="card" style={{ border: "2px solid #0C4770" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Configuración de Empresa</h5>
          <div className="row mt-3">
            <div className="col-lg-4 col-md-6 col-sm-12 text-center">
              {
                <img
                  className="image_sm"
                  src={img ? `data:image/png;base64,${img}` : photoNull}
                  alt="unphu"
                />
              }
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="row">
                <div className="col-md-6">
                  <p className="card-subtitle text-muted mt-3">
                    <i className="fas fa-user"></i>&nbsp;{" "}
                    <b>Nombre empresa: </b>
                    {data?.Comp_Name}
                  </p>
                  <p className="card-subtitle text-muted mt-3">
                    <i className="fas fa-envelope"></i>&nbsp;{" "}
                    <b>Correo usuario: </b>
                    {data?.User_Email}
                  </p>
                  <p className="card-subtitle text-muted mt-3">
                    <i className="fas fa-building"></i>&nbsp;{" "}
                    <b>Descripción empresa: </b>
                    {data?.Comp_Description}
                  </p>
                  <p className="card-subtitle text-muted mt-3">
                    <i className="fas fa-phone"></i>&nbsp;{" "}
                    <b>Teléfono empresa: </b>
                    {data?.Comp_Telephone}
                  </p>
                  <p className="card-subtitle text-muted mt-3">
                    <i className="fas fa-globe"></i>&nbsp; <b>Sitio web:</b>{" "}
                    {data?.Comp_Website}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="card-subtitle text-muted mt-3">
                    <i className="fas fa-road"></i>&nbsp; <b>Direccion 1:</b>
                    {data?.Comp_FirstStreet}
                  </p>
                  <p className="card-subtitle text-muted mt-3">
                    <i className="fas fa-road"></i>&nbsp; <b>Direccion 2: </b>
                    {data?.Comp_SecondStreet}
                  </p>
                  <p className="card-subtitle text-muted mt-3">
                    <i className="fas fa-city"></i>&nbsp; <b>Ciudad:</b>{" "}
                    {data?.Comp_City}
                  </p>
                  <p className="card-subtitle text-muted mt-3">
                    <i className="fas fa-at"></i>&nbsp; <b>Correo empresa:</b>{" "}
                    {data?.Comp_EmailAddress}
                  </p>
                  <p className="card-subtitle text-muted mt-3">
                    <i className="fas fa-user-circle"></i>&nbsp;{" "}
                    <b>Contacto clave:</b> {data?.Comp_KeyContact}
                  </p>
                  <p className="card-subtitle text-muted mt-3">
                    <i className="fas fa-phone"></i>&nbsp;{" "}
                    <b>Teléfono contacto:</b> {data?.Comp_KYTelephone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-1 text-end">
          <button
            data-bs-toggle="modal"
            data-bs-target="#staticBackdropEditCompConfig"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              backgroundColor: "#FFFFFF",
              border: "none",
            }}
            className="btn btn-light"
          >
            <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigComp;
