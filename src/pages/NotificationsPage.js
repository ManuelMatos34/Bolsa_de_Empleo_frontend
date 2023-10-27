import React from 'react'
import Notifications from '../components/Notifications'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/sidebar/Sidebar'


const NotificationsPage = () => {
    return (
        <div className="d-flex flex-column">
            <Header />
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-2 col-12 d-flex flex-column">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 col-12 bg-second-color d-flex flex-column">
                        <div className=" container ">
                            <Notifications />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotificationsPage
