import React from 'react'
import Notifications from '../components/Notifications'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/sidebar/Sidebar'


const NotificationsPage = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid mt-3">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 right-col-size">
                        <Notifications />
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotificationsPage
