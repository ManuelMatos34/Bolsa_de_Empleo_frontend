import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import ConfigStudent from '../../components/students/ConfigStudent'


const HomeStudents = () => {
    return (
        <div className="d-flex flex-column">
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-12 bg-white d-flex flex-column">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 col-12 bg-second-color d-flex flex-column">
                        <div className="mt-4 container">
                            <ConfigStudent />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeStudents
