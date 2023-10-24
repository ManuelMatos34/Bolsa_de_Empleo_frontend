import React, { useState } from 'react';

const CompRegisterFormDynamic = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    rnc: '',
    companyName: '',
    phone: '',
    website: '',
    hrPhone: '',
    firstStreet: '',
    secondStreet: '',
    city: '',
    state: '',
    postalCode: '',
    companyEmail: '',
    companyLogo: null,
  });

  const formFields = [
    { id: 'email', label: 'Email de Usuario', type: 'email', placeholder: 'Correo Electrónico' },
    { id: 'password', label: 'Contraseña', type: 'password', placeholder: 'Contraseña' },
    { id: 'confirmPassword', label: 'Confirmar Contraseña', type: 'password', placeholder: 'Confirmar Contraseña' },
    { id: 'rnc', label: 'RNC (Registro Nacional de Contribuyentes)', type: 'text', placeholder: 'RNC' },
    { id: 'companyName', label: 'Nombre de la Compañía', type: 'text', placeholder: 'Nombre de la Compañía' },
    { id: 'phone', label: 'Teléfono', type: 'tel', placeholder: 'Teléfono' },
    { id: 'website', label: 'Website', type: 'url', placeholder: 'Sitio Web' },
    { id: 'hrPhone', label: 'Teléfono de Recursos Humanos', type: 'tel', placeholder: 'Teléfono de Recursos Humanos' },
    { id: 'firstStreet', label: 'Primera Calle', type: 'text', placeholder: 'Primera Calle' },
    { id: 'secondStreet', label: 'Segunda Calle', type: 'text', placeholder: 'Segunda Calle' },
    { id: 'city', label: 'Ciudad', type: 'text', placeholder: 'Ciudad' },
    { id: 'state', label: 'Estado', type: 'text', placeholder: 'Estado' },
    { id: 'postalCode', label: 'Código Postal', type: 'text', placeholder: 'Código Postal' },
    { id: 'companyEmail', label: 'Correo de la Compañía', type: 'email', placeholder: 'Correo de la Compañía' },
    { id: 'companyPhoto', label: 'Logo de la Compañía', type: 'file', placeholder: 'Logo de la Compañía' },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className='mt-4'>
      <form className="row g-3">
        {formFields.map((field) => (
          <div key={field.id} className="col-md-4">
            <label htmlFor={field.id} className="form-label">
              {field.label}
            </label>
            <input
              type={field.type}
              className="form-control"
              id={field.id}
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={handleInputChange}
              style={{ boxShadow: "none" }}
              required
            />
          </div>
        ))}
        <div className="col-12 d-flex justify-content-end">
          <button
            style={{
              width: '150px',
              backgroundColor: '#0D4671',
              border: 'none',
            }}
            className="btn btn-primary"
            type="submit"
          >
            Enviar formulario
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompRegisterFormDynamic;
