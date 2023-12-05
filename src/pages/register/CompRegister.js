import React from "react";
import CompRegisterForm from "../../components/companies/CompRegisterForm";
import Footer from "../../components/Footer";

const CompRegister = () => {
  return (
    <div>
      <div className="container-fluid mt-3">
        <div className="row">
          <main className="right-col-size">
            <div className="col-lg-12">
              <div className="text-center">
                <div>
                  <h1 style={{ color: "#0C4770", fontSize: "4rem" }}>
                    Universidad Nacional Pedro Henríquez Ureña
                  </h1>
                </div>
                <div className="d-flex justify-content-center">
                  <p className="m-1">(809) 562-6601</p> -{" "}
                  <p className="m-1">info@unphu.edu.do</p> -{" "}
                  <p className="m-1">Av. John F. Kennedy 1/2, Santo Domingo</p>
                </div>
              </div>
            </div>
            <div className="m-4 mt-0">
              <CompRegisterForm />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompRegister;
