import React, { useState } from 'react'
import { postApplyJob } from '../../../services/services'
import { getUserCookies } from '../../../helpers/Helpers';

const ApplyJob = ({ Job_ID }) => {
    const [salaryExpetation, setSalaryExpectation] = useState('');
    const stdId = getUserCookies();

    const userId = stdId[0].Std_ID;
    const jobID = Job_ID;

    const fetchApplyJob = () => {
        postApplyJob(jobID, userId, salaryExpetation)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });

    }
    const formFields = [
        { label: 'Expectativa salarial', id: 'salaryExpetation', type: 'text' },
    ];

    return (
        <div>
            <div className="modal fade" id="staticBackdropApply" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Aplicar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                {formFields.map((field) => (
                                    <div className="mb-3" key={field.id}>
                                        <label htmlFor={field.id} className="form-label">{field.label}</label>
                                        <input
                                            value={salaryExpetation}
                                            onChange={(e) => setSalaryExpectation(e.target.value)}
                                            type={field.type}
                                            className="form-control"
                                            id={field.id}
                                            style={{ boxShadow: "none" }}
                                            required />
                                    </div>
                                ))}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button style={{ border: "none" }} type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal">Cerrar</button>
                            <button onClick={() => fetchApplyJob()} style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm">Aplicar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyJob
