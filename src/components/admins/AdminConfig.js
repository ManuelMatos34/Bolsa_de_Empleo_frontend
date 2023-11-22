import React, { useEffect, useState } from "react";
import photoNull from "../../assets/img/no image.png";
import AdminModals from "./modals/AdminModals";
import { getUserById } from "../../services/services";
import { dateConverter, getUserCookies } from "../../helpers/Helpers";

const AdminConfig = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userId = getUserCookies();
      try {
        let getResponse = await getUserById(userId[0].User_ID);
        let response = getResponse.data;
        setData(response);
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
      <AdminModals data={data}/>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">
            Configuración de Administrador
          </h5>
          <div className="row mt-3">
            <div className="col-lg-4 col-md-6 col-sm-12 text-center">
              <img
                src={photoNull}
                alt="Imagen del usuario"
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
              <p className="card-subtitle text-muted m-2">
                <i className="fas fa-user"></i>&nbsp; <b>Nombre:</b>{" "}
                {data?.User_Name}
              </p>
              <p className="card-subtitle text-muted m-2 mt-3">
                <i className="fas fa-envelope"></i>&nbsp;{" "}
                <b>Correo:</b> {data?.User_Email}
              </p>
              <p className="card-subtitle text-muted m-2 mt-3">
                <i className="fas fa-phone"></i>&nbsp; <b>Teléfono:</b>{" "}
                {data?.User_Phone}
              </p>
              <p className="card-subtitle text-muted m-2 mt-3">
                <i className="fas fa-calendar-alt"></i>&nbsp;{" "}
                <b>Fecha de creación:</b> {dateConverter(data?.User_CreationDate)}
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
