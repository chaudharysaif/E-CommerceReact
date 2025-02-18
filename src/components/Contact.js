import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
    return (
        <div>
            <Navbar contactactive="info" />
            <div className="" style={{ height: "450px", backgroundColor: "#eaeaea" }}>
                <div className="text-center pt-5">
                    <h1 style={{ fontSize: "4vw", fontFamily: 'Times New Roman' }}>Contact With Us</h1>
                    <hr className='container' />
                    <h5 className='mt-4'>Have any queries?</h5>
                    <h2 className='fw-semibold'>We are here to help</h2>
                    <hr className='container' style={{ width: "100px" }} />
                </div>
                <div className="container mt-5">
                    <div className="card mb-3 m-auto" style={{ maxWidth: "100%", height: "501px" }}>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src="homedisplay.webp" className="img-fluid rounded-start" alt="..."
                                    style={{ height: "500px", width: "625px" }} />
                            </div>

                            <div className="col-md-6">
                                <div className="card-body p-0">

                                    <div className="container mt-3">
                                        <label htmlFor="label">Name:</label>
                                        <br />
                                        <input type="text" className="form-control" required placeholder="name"
                                            name="name" />
                                    </div>

                                    <div className="container mt-3">
                                        <label htmlFor="label">Email:</label>
                                        <br />
                                        <input type="email" className="form-control" required placeholder="example@gmail.com"
                                            aria-describedby="emailHelp" id="email" name="email" />
                                    </div>

                                    <div className="container mt-3">
                                        <label htmlFor="label">Subject:</label>
                                        <br />
                                        <input type="text" className="form-control" required placeholder="subject"
                                            name="subject" />
                                    </div>

                                    <div className="container mt-3">
                                        <label htmlFor="label">Message:</label><br />
                                        <textarea className="form-control" required name="message" type="text" id="labelname"
                                            style={{ width: "100%", height: "150px" }}></textarea>
                                    </div>
                                    <button className="btn btn-success mt-4 mx-3 px-4" style={{ borderRadius: 0 }}>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: "400px" }}></div>

            <Footer />
        </div>
    )
}

export default Contact
