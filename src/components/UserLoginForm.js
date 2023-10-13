import React from 'react'

const UserLoginForm = () => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="matricula" className="form-label">
                        Matrícula
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="matricula"
                        name="matricula"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        required
                    />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Recuérdame
                    </label>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button
                        style={{
                            width: "100%",
                            backgroundColor: "#0D4671",
                            border: "none",
                        }}
                        type="button"
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
