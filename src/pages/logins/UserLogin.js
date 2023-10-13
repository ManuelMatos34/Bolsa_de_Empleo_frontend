import React from "react";
import logo from "../../assets/img/LogoUNPHUvirtual.png";
import UserLoginForm from "../../components/UserLoginForm";

const UserLogin = () => {
    return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div style={{ border:"none" }} className="card shadow">
                            <div className="card-header text-center" style={{ backgroundColor: "#014223", borderColor: "#014223" }}>
                                <img src={logo} alt="logo" className="m-2 img-fluid" />
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 col-12 mt-3">
                                        <div className="m-1">
                                            <UserLoginForm />
                                        </div>
                                    </div>
                                    <div className="col-md-1 col-12 border-end mt-3">
                                        {/* Línea vertical */}
                                    </div>
                                    <div className="col-md-5 col-12 mt-3">
                                        <div className="m-1">
                                            <h3>Eres una empresa?</h3>
                                            <p>
                                                Ingresa como empresa para que puedas publicar tus
                                                vacantes.
                                            </p>
                                            <div className="d-flex justify-content-center">
                                                <div className="mb-3">
                                                    <a style={{
                                                        width: '150px',
                                                        backgroundColor: "#014223",
                                                        border: "none",
                                                    }} className="btn btn-primary" href="/complogin">Ingresa aquí</a>
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
