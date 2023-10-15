import React from 'react'

const CompRegisterForm = () => {
    return (
        <div className='mt-4'>
            <form className="row g-3">
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Email de Usuario</label>
                    <input type="email" className="form-control" id="validationCustom01" placeholder="Correo Electrónico" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="validationCustom02" placeholder="Contraseña" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Confirmar Contraseña</label>
                    <input type="password" className="form-control" id="validationCustomUsername" placeholder="Confirmar Contraseña" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">RNC (Registro Nacional de Contribuyentes)</label>
                    <input type="text" className="form-control" id="validationCustom03" placeholder="RNC" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">Nombre de la Compañía</label>
                    <input type="text" className="form-control" id="validationCustom04" placeholder="Nombre de la Compañía" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" id="validationCustom05" placeholder="Teléfono" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom06" className="form-label">Website</label>
                    <input type="url" className="form-control" id="validationCustom06" placeholder="Sitio Web" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom07" className="form-label">Teléfono de Recursos Humanos</label>
                    <input type="tel" className="form-control" id="validationCustom07" placeholder="Teléfono de Recursos Humanos" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom08" className="form-label">Primera Calle</label>
                    <input type="text" className="form-control" id="validationCustom08" placeholder="Primera Calle" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom09" className="form-label">Segunda Calle</label>
                    <input type="text" className="form-control" id="validationCustom09" placeholder="Segunda Calle" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom10" className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="validationCustom10" placeholder="Ciudad" required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom11" className="form-label">Estado</label>
                    <select className="form-select" id="validationCustom11" required>
                        <option selected disabled value="">Elige...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom12" className="form-label">Código Postal</label>
                    <input type="text" className="form-control" id="validationCustom12" placeholder="Código Postal" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom13" className="form-label">Correo de la Compañía</label>
                    <input type="email" className="form-control" id="validationCustom13" placeholder="Correo de la Compañía" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom14" className="form-label">Logo de la Compañía</label>
                    <input type="file" className="form-control" id="validationCustom14" accept="image/*" required />
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <button style={{
                        width: '150px',
                        backgroundColor: "#0D4671",
                        border: "none",
                    }} className="btn btn-primary" type="submit">Enviar formulario</button>
                </div>
            </form>

        </div>
    )
}

export default CompRegisterForm
