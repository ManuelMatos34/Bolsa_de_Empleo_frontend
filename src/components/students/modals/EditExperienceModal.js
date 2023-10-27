import React from 'react';
import { tiposDeContrato, modalidades } from '../../../helpers/Helpers';

const EditExperienceModal = ({ idExp, handleChangeExp, handlePutExp }) => {
    const formFields = [
        { label: 'Posicion', id: 'Position', type: 'text', maxLength: '30', required: true, value: idExp?.Position },
        { label: 'Empresa', id: 'Company', type: 'text', maxLength: '50', required: true, value: idExp?.Company },
        { label: 'Tipo contrato', id: 'ContractType', type: 'select', options: "contratos", required: true, value: idExp?.ContractType },
        { label: 'Fecha de Inicio', id: 'InitiaDate', type: 'month', required: true, value: idExp?.InitiaDate },
        { label: 'Fecha de Finalizacion', id: 'EndDate', type: 'month', required: true, value: idExp?.EndDate },
        { label: 'Pais', id: 'Country', type: 'text', maxLength: '30', required: true, value: idExp?.Country },
        { label: 'Modalidad', id: 'Modality', type: 'select', options: "modalidades", required: true, value: idExp?.Modality },
    ];

    const c = tiposDeContrato;
    const m = modalidades;

    return (
        <div>
            <div className="modal fade" id="staticBackdropExperienceEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handlePutExp}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar Experiencia</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {formFields.map((field) => (
                                    <div className="mb-3" key={field.id}>
                                        <label htmlFor={field.id} className="form-label">{field.label}</label>
                                        {field.type === 'select' ? (
                                            <select
                                                className="form-select"
                                                id={field.id}
                                                style={{ boxShadow: 'none' }}
                                                required={field.required}
                                                onChange={(e) => handleChangeExp(e)}
                                            >
                                                <option value={field.value}>{field.value}</option>
                                                {
                                                    field.options === 'contratos' ?
                                                        (
                                                            Object.values(c).map((option) => (
                                                                <option key={option} value={option}>
                                                                    {option}
                                                                </option>
                                                            ))
                                                        ) : (

                                                            Object.values(m).map((option) => (
                                                                <option key={option} value={option}>
                                                                    {option}
                                                                </option>
                                                            )))
                                                }
                                            </select>
                                        ) : field.type === 'month' ? (
                                            <input
                                                type={field.type}
                                                className="form-control"
                                                id={field.id}
                                                style={{ boxShadow: 'none' }}
                                                required={field.required}
                                                value={field.value}
                                                onChange={(e) => handleChangeExp(e)}
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                value={field.value}
                                                className="form-control"
                                                id={field.id}
                                                style={{ boxShadow: 'none' }}
                                                maxLength={field.maxLength}
                                                required={field.required}
                                                onChange={(e) => handleChangeExp(e)}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button style={{ border: 'none' }} type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal">Cerrar</button>
                                <button style={{ backgroundColor: '#0C4770', border: 'none' }} type="submit" className="btn btn-primary btn-sm">Aplicar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditExperienceModal;
