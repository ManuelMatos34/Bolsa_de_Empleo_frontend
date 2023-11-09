import React from 'react'
import Charts from '../../components/admins/charts/Charts'
import Header from '../../components/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/Footer'

const StatsPage = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid mt-3">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 right-col-size">
                        <div>
                            <Charts />
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StatsPage

