import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/Footer'
import CompVanacies from '../../components/companies/CompVanacies'
import VacanciesFilter from '../../components/companies/VacanciesFilter'
import CompanyModals from '../../components/companies/modals/CompanyModals'
import { filterJobsComp, getUserCookies } from '../../helpers/Helpers'
import { getOfeByComp } from '../../services/services'

const VacanciePage = () => {

    const [data, setData] = useState(null);
    const [searchJob, setSearchJob] = useState(null);
    const [status, setStatus] = useState(null);
    const dataUser = getUserCookies();
    const compId = dataUser[0]?.Comp_ID;

    useEffect(() => {
        const getOfByComp = async () => {
            try {
                let getResponse = await getOfeByComp(compId);
                let response = getResponse.data;

                if (response.message === "Registro no encontrado") {
                    response = null;
                }
                setData(filterJobsComp(response, searchJob, status));
            } catch (error) {
                // Manejo de errores
                setData(null);
            }
        };
        getOfByComp();
    }, [searchJob, status]);

    return (
        <div>
            <CompanyModals />
            <Header />
            <div className="container-fluid mt-3">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 right-col-size">
                        <div className='mt-1'>
                            <VacanciesFilter
                                searchJob={searchJob}
                                setSearchJob={setSearchJob}
                                status={status}
                                setStatus={setStatus}
                            />
                        </div>
                        <div className='mt-1'>
                            <CompVanacies data={data} />
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default VacanciePage
