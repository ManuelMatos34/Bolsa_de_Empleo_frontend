import React from 'react'

const CompLoginForm = () => {
    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="user" className="form-label">
                        Usuario
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="user"
                        name="user"
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
                <div className="mb-3 form-check">
                    <input className="form-check-input" type="checkbox" id="invalidCheck" />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Recuérdame
                    </label>
                </div>
                <div className="mb-3">
                    <p className="mb-0">No tienes una cuenta? <a href="/registration">Regístrate aquí</a></p>
                </div>
                <div className="mb-3 text-center">
                    <button
                        style={{
                            width: '100%', backgroundColor: "#014223",
                            border: "none",
                        }}
                        type="button"
                        className="btn btn-primary"

                    >
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CompLoginForm
