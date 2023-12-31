import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import Applications from '../../components/students/Applications'

const StudentsApplications = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid mt-3">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 right-col-size">
                        <Applications />
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StudentsApplications
