import React, { useState } from 'react'
import { postAuthStudents } from '../../services/services';
import { messageAlert } from '../../helpers/Alerts';
import { useNavigate } from "react-router-dom";
import { setIsAuthenticatedCookies, setUserCookies } from '../../helpers/Helpers';

const UserLoginForm = () => {

    const initialState = {
        user: "",
        pass: "",
    };
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const resetForm = () => {
        setFormData(initialState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postAuthStudents(formData.user, formData.pass)
            .then((response) => {
                setUserCookies(response.data);
                setIsAuthenticatedCookies(true);
                navigate("/homestudents");
            })
            .catch((error) => {
                messageAlert("Error", error.response.data.message, "error");
                console.error("Error al obtener los datos del servidor:", error.response.data);
            });

        resetForm();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="user" className="form-label">
                        Matrícula
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="user"
                        value={formData.user}
                        onChange={handleInputChange}
                        required
                        autoComplete="username"
                        style={{ boxShadow: "none" }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="pass"
                        value={formData.pass}
                        onChange={handleInputChange}
                        required
                        autoComplete="current-password"
                        style={{ boxShadow: "none" }}
                    />
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button
                        style={{
                            width: "100%",
                            backgroundColor: "#0D4671",
                            border: "none",
                        }}
                        type="submit"
                        className="btn btn-primary mb-3"
                    >
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserLoginForm
