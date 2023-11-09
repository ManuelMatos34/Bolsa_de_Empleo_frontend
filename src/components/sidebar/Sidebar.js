/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { convertImage, getUserCookies, getUserName } from "../../helpers/Helpers";
import { getImgEst } from "../../services/services";
import photoNull from '../../assets/img/no image.png';
import SideStudents from "./SideStudents";
import SideAdmins from "./SideAdmins";


const Sidebar = () => {
    const [data, setData] = useState(null);
    const [name, setName] = useState(null);
    const dataUser = getUserCookies();
    const userRol = dataUser[0]?.Rol_ID;
    const message = true;

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
        setName(getUserName(dataUser));
        getImg();
    }, []);

    return (
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar bg-white left-col-size">
            <div className="position-sticky">

                <div className='card bg-first-color mt-2'>
                    <div className='card-body'>

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
                                <div className="text-color">{name}</div>
                            </div>
                        </div>

                        <div>
                            {userRol === 2 ? <SideAdmins /> : userRol === 4 ? <SideStudents /> : null}
                            {message ? (
                                <ul className="nav flex-column mb-3">
                                    <li className="nav-item mt-3">
                                        <Link className="nav-link d-flex align-items-center text-white" to="/notifications">
                                            <i className="icon-second-color fas fa-bell align-self-center"></i>&nbsp; <p className="mb-0 ml-2">Notificaciones</p>
                                        </Link>
                                    </li>
                                </ul>
                            ) : (
                                <ul className="nav flex-column mb-3">
                                    <li className="nav-item mt-3">
                                        <Link className="nav-link d-flex align-items-center text-white" to="/notifications">
                                            <span className="icon-notification">
                                                <i className="icon-second-color fas fa-bell align-self-center"></i>
                                                <span className="notification-dot"></span>
                                            </span>
                                            &nbsp; <p className="mb-0 ml-2">Notificaciones</p>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Sidebar;
