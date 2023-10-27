/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { convertImage, getUserCookies } from "../../helpers/Helpers";
import { getImgEst } from "../../services/services";
import photoNull from '../../assets/img/no image.png';


const Sidebar = () => {
    const message = true;
    const dataUser = getUserCookies();
    const studentName = dataUser[0]?.Std_FirstName + " " + dataUser[0]?.Std_SecondName + " " + dataUser[0]?.Std_LastName;

    const [data, setData] = useState(null);

    const getImg = async () => {
        try {
            const response = await getImgEst(dataUser[0]?.Std_ID);
            if (response && response.data && response.data.Img) {
                if (response.data.Img.data === null || response.data.Img.data === undefined || response.data.Img.data === "") {
                    setData(false);
                } else {
                    setData(convertImage(response.data.Img.data));
                }
            } else {
                setData(null);
            }
        } catch (error) {
            // Error handling
            console.error("error", error);
        }
    };

    useEffect(() => {
        getImg();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav flex-column">

                    <div className="card bg-first-color" >
                        <div className="card-body">
                            <div className="d-flex justify-content-center align-items-center m-1 mt-4">
                                <div className="text-center m-2">
                                    {
                                        data ? (
                                            <img src={`data:image/png;base64,${data}`} alt="unphu" width="120" height="120" style={{ borderRadius: "50%" }} />
                                        ) : (
                                            <img src={photoNull} alt="unphu" width="120" height="120" style={{ borderRadius: "50%" }} />
                                        )
                                    }
                                </div>
                                <div className="m-2">
                                    <div className="small text-color">Bienvenido:</div>
                                    <div className="text-color">{studentName}</div>
                                </div>
                            </div>

                            <div className="m-2 mt-4 text-nowrap">
                                <li className="nav-item mt-3">
                                    <Link className="nav-link d-flex align-items-center text-white" to="/homestudents">
                                        <i className="icon-second-color fas fa-home align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Inicio</p>
                                    </Link>
                                </li>
                                <li className="nav-item mt-3">
                                    <Link className="nav-link d-flex align-items-center text-white" to="/studentapplications">
                                        <i className="icon-second-color fas fa-graduation-cap align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Postulaciones</p>
                                    </Link>
                                </li>
                                <li className="nav-item mt-3">
                                    <Link className="nav-link d-flex align-items-center text-white" to="/jobvacancies">
                                        <i className="icon-second-color fas fa-briefcase align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Ofertas de Trabajo</p>
                                    </Link>
                                </li>
                                {message ? (
                                    <li className="nav-item mt-3">
                                        <Link className="nav-link d-flex align-items-center text-white" to="/notifications">
                                            <i className="icon-second-color fas fa-bell align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Notificaciones</p>
                                        </Link>
                                    </li>) : (
                                    <li className="nav-item mt-3">
                                        <Link className="nav-link d-flex align-items-center text-white" to="/notifications">
                                            <span className="icon-notification">
                                                <i className="icon-second-color fas fa-bell align-self-center"></i>
                                                <span className="notification-dot"></span>
                                            </span>
                                            &nbsp; <p className="mb-0 ml-2">Notificaciones</p>
                                        </Link>
                                    </li>
                                )}
                            </div>
                        </div>

                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
