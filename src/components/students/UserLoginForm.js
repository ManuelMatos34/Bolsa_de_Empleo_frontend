import React, { useState } from 'react'
import { authUser, postAuthStudents } from '../../services/services';
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
    
        try {
            const [student, admin] = await Promise.all([
                postAuthStudents(formData.user, formData.pass),
                authUser(formData.user, formData.pass)
            ]);
    
            if (student.data[0]?.Std_ID) {
                setUserAndNavigate(student.data, "/homestudents");
            } else if (admin.data[0]?.User_Name) {
                setUserAndNavigate(admin.data, "/homeadmins");
            } else {
                messageAlert("Error", "No ha introducido los datos correctos", "error");
            }
    
            resetForm();
        } catch (error) {
            messageAlert("Error", error.response.data.message, "error");
        }
    };
    
    const setUserAndNavigate = (userData, path) => {
        setUserCookies(userData);
        setIsAuthenticatedCookies(true);
        navigate(path);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="user" className="form-label">
                        Usuario
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
