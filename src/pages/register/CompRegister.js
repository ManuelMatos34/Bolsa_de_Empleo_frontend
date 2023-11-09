import React from 'react'
import CompRegisterForm from '../../components/companies/CompRegisterForm'
import logo from "../../assets/img/unphu-logo.webp";

const CompRegister = () => {
  return (
    <div className='mt-5'>
      <div className="container">
        <div className='card shadow mt-4 mb-5'>
          <div className='card-body m-4'>
            <div className="row">
              <div className="col-lg-3 p-4">
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
              <div className="col-lg-8">
                <div className="text-center">
                  <div>
                    <h1 style={{ color: "#438F32", fontSize: "3rem" }}>Universidad Nacional Pedro Henríquez Ureña</h1>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="m-1">(809) 562-6601</p>
                    <p className="m-1">info@unphu.edu.do</p>
                    <p className="m-1">Av. John F. Kennedy 1/2, Santo Domingo</p>
                  </div>
                </div>
              </div>
            </div>
            <CompRegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompRegister
