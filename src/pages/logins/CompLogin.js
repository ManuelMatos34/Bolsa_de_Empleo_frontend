import React from "react";
import CompLoginForm from "../../components/companies/CompLoginForm";
import imagen from "../../assets/img/pexels-shoeb-khan-2973323.jpg";
import logo from "../../assets/img/image.png";

const CompLogin = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="row">
        <div className="col-md-3 p-5">
          <div className="card-header text-center mt-5">
            <img src={logo} alt="logo" className="img-fluid" />
          </div>
          <div className="container mt-5">
            <CompLoginForm />
          </div>
        </div>
        <div
          className="col-md-9"
          style={{
            height: "100vh",
            margin: 0,
            padding: 0,
            backgroundColor: "#008D31",
          }}
        >
          <img
            className="no-img-responsive"
            src={imagen}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CompLogin;
