import React, { useState } from 'react';
import VacancieDescription from './VacancieDescription';

const CompVanacies = () => {
    const [workers, setWorkers] = useState(false);

    return (
        <div className="row">
            <div className="col-md-3 overflow-auto" style={{ maxHeight: "80vh" }}>
                <div className="card m-1 card-style">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted m-1">
                            <b>Programador Frontend</b>
                        </h6>
                        <button style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Más Info</button>
                    </div>
                </div>
            </div>
            <div className={`col-md-${workers ? '6' : '9'} overflow-auto mb-5`} style={{ maxHeight: "80vh" }}>
                <VacancieDescription setWorkers={setWorkers} />
            </div>
            {
                workers === true ? (
                    <div className="col-md-3 overflow-auto" style={{ maxHeight: "80vh" }}>
                        <div className="card m-1 card-style">
                            <div className="card-body">
                                <h6 className="card-subtitle text-muted m-1">
                                    <b>Programador Frontend</b>
                                </h6>
                                <button style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Más Info</button>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default CompVanacies;
