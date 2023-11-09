import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/Footer'
import CompaniesAdmin from '../../components/admins/CompaniesAdmin'
import FilterCompanies from '../../components/admins/FilterCompanies'

const HomeAdmins = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid mt-3">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 right-col-size">
                        <div className='mt-1'>
                            <FilterCompanies />
                        </div>
                        <div className='mt-1'>
                            <CompaniesAdmin />
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeAdmins