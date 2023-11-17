import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/Footer'
import CompaniesAdmin from '../../components/admins/CompaniesAdmin'
import FilterCompanies from '../../components/admins/FilterCompanies'
import { getAllcompanies } from '../../services/services'
import { filterComp } from '../../helpers/Helpers'

const CompaniesPages = () => {
    const [data, setData] = useState(null);

    const [approve, setApprove] = useState(null);
    const [search, setSearch] = useState(null);

    useEffect(() => {
        const getSkills = async () => {
            try {
                let getResponse = await getAllcompanies();
                let response = getResponse.data;
                setData(filterComp(response, search, approve));
            } catch (error) {
                // Manejo de errores
                setData(null);
            }
        };
        getSkills();
    }, [search, approve]);
    return (
        <div>
            <Header />
            <div className="container-fluid mt-3">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 right-col-size">
                        <div className='mt-1'>
                            <FilterCompanies
                                approve={approve}
                                setApprove={setApprove}
                                search={search}
                                setSearch={setSearch}
                            />
                        </div>
                        <div className='mt-1'>
                            <CompaniesAdmin data={data} />
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CompaniesPages