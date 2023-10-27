import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import ConfigStudent from '../../components/students/ConfigStudent'


const HomeStudents = () => {
    return (
        <div className="d-flex flex-column">
            <Header />
            <div className="container-fluid">
                <div className="row p-col-size">
                    <div className="col-md-2 col-12 d-flex flex-column left-col-size">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 col-12 bg-second-color d-flex flex-column right-col-size">
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
