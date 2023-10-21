import React, { useState, useContext } from 'react'
import { postAuthStudents } from '../../services/services';
import { messageAlert } from '../../helpers/Alerts';
import { useNavigate } from "react-router-dom";
import Context from '../global/Context';

const UserLoginForm = () => {
    const s  = useContext(Context);
    const initialState = {
        user: "",
        pass: "",
    };
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
        console.log(formData);
    };

    const resetForm = () => {
        setFormData(initialState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postAuthStudents(formData.user, formData.pass)
            .then((response) => {
                s.setIsAuthenticated(true);
                s.setAuthUser(response.data);
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
