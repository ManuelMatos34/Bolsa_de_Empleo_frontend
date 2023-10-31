import React from 'react'
import Footer from '../../components/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/Header'

const HomeAdmins = () => {
  return (
    <div className="d-flex flex-column">
            <Header />
            <div className="container-fluid">
                <div className="row p-col-size">
                    <div className="col-md-2 col-12 d-flex flex-column left-col-size">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 col-12 bg-second-color d-flex flex-column right-col-size">
                        <div className="container">
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
  )
}

export default HomeAdmins
