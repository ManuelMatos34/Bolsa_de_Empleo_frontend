import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/Footer'
import AdminConfig from '../../components/admins/AdminConfig'

const AdminConfigPage = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid mt-3">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 right-col-size">
                        <div className='mt-5 container'>
                            <AdminConfig />
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdminConfigPage
