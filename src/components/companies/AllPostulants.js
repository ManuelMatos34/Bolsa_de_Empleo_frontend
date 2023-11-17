import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPostulantByJob } from '../../services/services';

const AllPostulants = ({ jobid }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getOfByComp = async () => {
            try {
                let getResponse = await getPostulantByJob(jobid);
                let response = getResponse.data;

                if (response.message === "No hay registros") {
                    response = null;
                }
                setData(response);
            } catch (error) {
                // Manejo de errores
                setData(null);
            }
        };
        getOfByComp();
    }, [jobid]);
    return (
        <>
            <div className="card m-1">
                <div className="card-body">
                    <h6 className="card-subtitle text-muted m-1">
                        <b>Postulantes</b>
                    </h6>
                </div>
            </div>
            <div className="overflow-auto" style={{ maxHeight: "75vh" }}>
                {
                    data ? (
                        data.map((postulant) => (
                            <div key={postulant.Std_ID} className="card m-1 card-style">
                                <div className="card-body">
                                    <h6 className="card-subtitle text-muted m-1">
                                        <b>
                                            <i className="fas fa-user-graduate"></i> - {postulant.Std_FirstName} {postulant.Std_LastName}
                                        </b>
                                    </h6>
                                    <Link
                                        to="/postulantcomp"
                                        state={{ data: postulant.Std_ID }}
                                        style={{ backgroundColor: "#0C4770", border: "none" }} type="button" className="btn btn-primary btn-sm m-1 mt-2">Más Info
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="card m-1 card-style">
                            <div className="card-body">
                                <h6 className="card-subtitle text-muted m-1">
                                    <b>
                                        No hay postulantes
                                    </b>
                                </h6>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
    //     return (
    //         <>
    //             <div className="card m-1">
    //                 <div className="card-body">
    //                     <h6 className="card-subtitle text-muted m-1">
    //                         <b>Postulantes</b>
    //                     </h6>
    //                 </div>
    //             </div>
    //             <div className="overflow-auto" style={{ maxHeight: "75vh" }}>
    //                 <div className="card m-1 card-style">
    //                     <div className="card-body">
    //                         <h6 className="card-subtitle text-muted m-1">
    //                             <b>
    //                                 <i className="fas fa-user-graduate"></i> -  Manuel Matos Guerrero
    //                             </b>
    //                         </h6>
    //                         <Link
    //                             to="/postulantcomp"
    //                             style={{ backgroundColor: "#0C4770", border: "none" }}
    //                             type="button"
    //                             className="btn btn-primary btn-sm m-1 mt-2"
    //                         >
    //                             Más Info
    //                         </Link>
    //                     </div>
    //                 </div>
    //                 <div className="card m-1 card-style">
    //                     <div className="card-body">
    //                         <h6 className="card-subtitle text-muted m-1">
    //                             <b>
    //                                 <i className="fas fa-user-graduate"></i> -  Manuel Matos Guerrero
    //                             </b>
    //                         </h6>
    //                         <Link
    //                             to="/postulantcomp"
    //                             style={{ backgroundColor: "#0C4770", border: "none" }}
    //                             type="button"
    //                             className="btn btn-primary btn-sm m-1 mt-2"
    //                         >
    //                             Más Info
    //                         </Link>
    //                     </div>
    //                 </div>
    //             </div>
    //         </>
    //     )
}

export default AllPostulants
