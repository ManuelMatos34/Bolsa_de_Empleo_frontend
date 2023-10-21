import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import VacanciesStudents from '../../components/students/VacanciesStudents'
import Filter from '../../components/Filter'
import Context from '../../components/global/Context'
import { getOfeByCa } from '../../services/services'

const JobVacancies = () => {
    const s = useContext(Context);
    const [data, setData] = useState(null);
    const userCa = s.authUser[0].Ca_ID;

    const [jobTitleFilter, setJobTitleFilter] = useState('');
    const [contractTypeFilter, setContractTypeFilter] = useState('');
    const [modalityFilter, setModalityFilter] = useState('');

    const getVacancies = async () => {
        try {
            let getResponse = await getOfeByCa(userCa);
            let response = getResponse.data;

            if (jobTitleFilter) {
                response = response.filter((job) =>
                    job.Job_Title.toLowerCase().includes(jobTitleFilter.toLowerCase())
                );
            }
            if (contractTypeFilter) {
                response = response.filter(
                    (job) => job.Job_ContractType.toLowerCase() === contractTypeFilter.toLowerCase()
                );
            }
            if (modalityFilter) {
                response = response.filter(
                    (job) => job.Job_Modality.toLowerCase() === modalityFilter.toLowerCase()
                );
            }

            setData(response);

        } catch (error) {
            // Manejo de errores
            console.error("error", error);
            setData(null);
        }
    };

    useEffect(() => {
        getVacancies();
    }, [jobTitleFilter, contractTypeFilter, modalityFilter]);


    return (
        <div className="d-flex flex-column">
            <Header />
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-md-2 col-12 bg-white d-flex flex-column">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 col-12 bg-second-color d-flex flex-column">
                        <div className="mt-2 container ">
                            <Filter
                                jobTitleFilter={jobTitleFilter}
                                setJobTitleFilter={setJobTitleFilter}
                                contractTypeFilter={contractTypeFilter}
                                setContractTypeFilter={setContractTypeFilter}
                                modalityFilter={modalityFilter}
                                setModalityFilter={setModalityFilter}
                            />
                        </div>
                        <div className='mt-2 container'>
                            <VacanciesStudents data={data} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JobVacancies
