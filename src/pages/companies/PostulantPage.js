import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PostulantInfo from '../../components/companies/PostulantInfo'
import { useLocation } from 'react-router-dom';

const PostulantPage = () => {
    const location = useLocation();
    const { data } = location.state || {};
    return (
        <div>
            <Header />
            <div className="container-fluid mt-3">
                <div className="row">
                    <main className="right-col-size">
                        <PostulantInfo data={data} />
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PostulantPage
