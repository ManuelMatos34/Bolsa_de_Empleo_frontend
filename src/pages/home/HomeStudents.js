import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/sidebar/Sidebar'

const HomeStudents = () => {
    return (
        <div>
            <div style={{ position: "fixed", backgroundColor: "#0C4770", width: "100%" }}>
                <Header />
            </div>
            <div className="row" style={{ height: "100vh", paddingTop:55, margin: 0, overflowY: "auto" }}>
                <div className="col-md-2" style={{ backgroundColor: "white" }}>
                    <Sidebar />
                </div>
                <div className="col-md-10" style={{ backgroundColor: "#F6FBFF" }}>
                    <div style={{ overflow: "hidden", height: "100%" }}>
                        <h1>hello world</h1>
                        {/* Aquí colocarías el contenido de la página */}
                    </div>
                </div>
            </div>
            <div style={{ position: "fixed", bottom:0,width: "100%", backgroundColor: "#0C4770" }}>
                <Footer />
            </div>
        </div>
    )
}

export default HomeStudents
