import React from "react";
import logo from "../../assets/img/image.png";
import UserLoginForm from "../../components/students/UserLoginForm";
import imagen from "../../assets/img/pexels-min-an-775998.jpg";

const UserLogin = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${imagen})`,
        height: "100%",
        width: "100%",
        position: "fixed",
        backgroundRepeat: "no-repeat", // Add background-repeat property
        overflow: "hidden", // Add overflow property
        backgroundSize: "cover", // Add background-size property
      }}
    >
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div style={{ border: "none" }} className="card shadow">
              <div
                className="card-header text-center"
                style={{ backgroundColor: "white", borderColor: "white" }}
              >
                <img src={logo} alt="logo" className="mt-4 img-fluid" />
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-12 mt-1">
                    <div className="m-1">
                      <UserLoginForm />
                    </div>
                  </div>
                  <div className="col-md-1 col-12 border-end mt-1">
                    {/* Línea vertical */}
                  </div>
                  <div className="col-md-5 col-12 mt-1">
                    <div className="m-1">
                      <h3>¿Eres una empresa?</h3>
                      <p>
                        Ingresa como empresa para que puedas publicar tus
                        ofertas de empleo.
                      </p>
                      <div className="d-flex justify-content-center">
                        <div className="mb-3">
                          <a
                            style={{
                              width: "150px",
                              backgroundColor: "#0D4671",
                              border: "none",
                            }}
                            className="btn btn-primary"
                            href="/complogin"
                          >
                            Ingresa aquí
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
