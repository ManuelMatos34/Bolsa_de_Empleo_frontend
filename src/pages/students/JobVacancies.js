import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import VacanciesStudents from '../../components/students/VacanciesStudents'
import Filter from '../../components/Filter'
import { getOfeByCa } from '../../services/services'
import { filterJobs, getUserCookies } from '../../helpers/Helpers'

const JobVacancies = () => {
    const [data, setData] = useState(null);
    const stdId = getUserCookies();
    const userCa = stdId[0].Ca_ID;
    
    const [jobTitleFilter, setJobTitleFilter] = useState('');
    const [contractTypeFilter, setContractTypeFilter] = useState('');
    const [modalityFilter, setModalityFilter] = useState('');

    const getVacancies = async () => {
        try {
            let getResponse = await getOfeByCa(userCa);
            let response = getResponse.data;

            if (response.message === 0) {
                response = false;
            }

            setData(filterJobs(response, jobTitleFilter, contractTypeFilter, modalityFilter));

        } catch (error) {
            // Manejo de errores
            console.error("error", error);
            setData(false);
        }
    };

    useEffect(() => {
        getVacancies();
    }, [jobTitleFilter, contractTypeFilter, modalityFilter]);


    return (
        <div>
            <Header />
            <div className="container-fluid mt-3">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 right-col-size">
                        <div className="mt-2">
                            <Filter
                                jobTitleFilter={jobTitleFilter}
                                setJobTitleFilter={setJobTitleFilter}
                                contractTypeFilter={contractTypeFilter}
                                setContractTypeFilter={setContractTypeFilter}
                                modalityFilter={modalityFilter}
                                setModalityFilter={setModalityFilter}
                            />
                        </div>
                        <div className='mt-1'>
                            <VacanciesStudents data={data} />
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JobVacancies
