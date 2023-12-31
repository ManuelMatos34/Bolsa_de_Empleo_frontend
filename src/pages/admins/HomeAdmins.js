import React from 'react'
import Footer from '../../components/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/Header'
import AdminPage from '../../components/admins/AdminPage'

const HomeAdmins = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid mt-3">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 right-col-size">
                        <AdminPage />
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeAdmins
