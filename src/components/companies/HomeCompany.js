import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStatsByComp } from "../../services/services";
import { getUserCookies } from "../../helpers/Helpers";

const HomeCompany = () => {
  const [data, setData] = useState(null);
  const userdata = getUserCookies();

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await getStatsByComp(userdata[0]?.Comp_ID);
        setData(response.data[0]);
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };
    getStats();
  }, []);

  return (
    <div className="row mt-2 mb-5">
      <div className="m-1 mt-2">
        <h4>Centro de administracion - UNPHU Bolsa de Empleos</h4>
      </div>
      <div className="m-1 mt-4">
        <h6>
          <i className="fas fa-tasks"></i>
          &nbsp; Tareas Pendientes
        </h6>
      </div>
      <div className="col-md-4">
        <div className="card shadow card-style">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto m-1">
                <i className="fas fa-building fa-2x icon-color"></i>
              </div>
              <div className="col">
                <h5 className="card-title">Ofertas vigentes</h5>
                <div className="h2 font-weight-bold">{data?.VIGENTES}</div>
                <p className="card-text">
                  Ofertas de empleo vigentes las cuales no has elegido un
                  candidato.
                </p>
                <Link
                  style={{ backgroundColor: "#0C4770", border: "none" }}
                  className="btn btn-primary btn-sm"
                  to="/vacanciescomp"
                >
                  Administrar Ofertas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-1 mt-5">
        <h6>
          <i className="fas fa-info-circle mr-2"></i>
          &nbsp; Estado
        </h6>
      </div>
      <div className="col-md-2 mt-1">
        <div className="card shadow card-style">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto m-2">
                <i className="fas fa-briefcase fa-2x icon-color"></i>
              </div>
              <div className="col">
                <h6 className="card-title">Ofertas creadas</h6>
                <div className="h3 font-weight-bold">{data?.TOTAL_CREADAS}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCompany;
