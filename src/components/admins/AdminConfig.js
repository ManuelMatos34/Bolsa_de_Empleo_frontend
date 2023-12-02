import React, { useEffect, useState } from "react";
import photoNull from "../../assets/img/no image.png";
import AdminModals from "./modals/AdminModals";
import { getUserById } from "../../services/services";
import {
  convertImage,
  dateConverter,
  getUserCookies,
} from "../../helpers/Helpers";

const AdminConfig = () => {
  const [data, setData] = useState(null);
  const [img, setImg] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userId = getUserCookies();
      try {
        const response = await getUserById(userId[0].User_ID);
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
      <AdminModals data={data} />
      <div className="card" style={{ border: "2px solid #0C4770" }}>
        <div className="card-body">
          <h6 className="card-title text-center">
            Configuración de administrador
          </h6>
          <div className="row mt-4">
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
              <p className="card-subtitle text-muted m-2">
                <i className="fas fa-user"></i>&nbsp; <b>Nombre:</b>{" "}
                {data?.User_Name}
              </p>
              <p className="card-subtitle text-muted m-2 mt-3">
                <i className="fas fa-envelope"></i>&nbsp; <b>Correo:</b>{" "}
                {data?.User_Email}
              </p>
              <p className="card-subtitle text-muted m-2 mt-3">
                <i className="fas fa-phone"></i>&nbsp; <b>Teléfono:</b>{" "}
                {data?.User_Phone}
              </p>
              <p className="card-subtitle text-muted m-2 mt-3 mb-4">
                <i className="fas fa-calendar-alt"></i>&nbsp;{" "}
                <b>Fecha de creación:</b>{" "}
                {dateConverter(data?.User_CreationDate)}
              </p>
            </div>
          </div>
        </div>
        <div
          className="m-1"
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          <button
            style={{ backgroundColor: "#FFFFFF", border: "none" }}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdropConfAdminModal"
            className="btn btn-light"
          >
            <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminConfig;
