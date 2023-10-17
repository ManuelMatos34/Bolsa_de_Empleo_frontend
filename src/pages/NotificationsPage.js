import React from 'react'
import Notifications from '../components/Notifications'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/sidebar/Sidebar'


const NotificationsPage = () => {
    return (
        <div>
            <div style={{ position: "fixed", backgroundColor: "#0C4770", width: "100%" }}>
                <Header />
            </div>
            <div className="row" style={{ height: "100vh", paddingTop: 55, margin: 0, overflowY: "hidden" }}>
                <div className="col-md-2" style={{ backgroundColor: "white" }}>
                    <Sidebar />
                </div>
                <div className="col-md-10" style={{ backgroundColor: "#F6FBFF" }}>
                    <div>
                        <Notifications />
                    </div>
                </div>
            </div>
            <div style={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: "#0C4770" }}>
                <Footer />
            </div>
        </div>
    )
}

export default NotificationsPage
