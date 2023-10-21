import React from 'react'

const Footer = () => {
    return (
        <footer className="position-fixed bottom-0 w-100" style={{ backgroundColor: "#0C4770", color: "white" }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center text-muted">
                        <p style={{color:"white"}} className="m-2">Copyright &copy; UNPHU 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
