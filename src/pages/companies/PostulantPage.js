import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostulantInfo from "../../components/companies/PostulantInfo";
import { useLocation } from "react-router-dom";

const PostulantPage = () => {
  const location = useLocation();
  const { data } = location.state || {};
  // Obtener datos del estado local al cargar la página
  const [storedData, setStoredData] = useState(
    localStorage.getItem("postulantData") || ""
  );

  // Almacenar datos en el estado local al recibir nuevos datos
  useEffect(() => {
    if (data) {
      setStoredData(data);
      // Almacenar datos en localStorage para que persistan después de recargar la página
      localStorage.setItem("postulantData", data);
    }
  }, [data]);

  // Split de los datos almacenados
  let partes = storedData.split("/");
  let stdID = partes.length > 0 ? partes[0] : "";
  let postulationID = partes.length > 1 ? partes[1] : "";
  return (
    <div>
      <Header />
      <div className="container-fluid mt-3">
        <div className="row">
          <main className="right-col-size">
            <PostulantInfo data={stdID} postulationID={postulationID} />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostulantPage;
