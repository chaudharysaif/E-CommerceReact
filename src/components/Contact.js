import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
    return (
        <div>
            <Navbar contactactive="info" />
            <div className="" style={{ height: "450px"}}>
                <div className="text-center pt-5">
                    <h1 style={{ fontSize: "4vw", fontFamily: 'Times New Roman' }}>Contact With Us</h1>
                    <hr className='container' />
                    <h5 className='mt-4'>Have any queries?</h5>
                    <h2 className='fw-semibold'>We are here to help</h2>
                    <hr className='container' style={{ width: "100px" }} />
                </div>
                <div className="container mt-5 d-flex justify-content-end align-items-center" style={{
                    backgroundImage: "url('contactus.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "700px"
                }}>
                    <div className="col-12 col-md-6 me-4">
                        <div className=" card-body gap-2 p-0 ">
                            <div className="container m-3">
                                <label className='my-1' htmlFor="label">Name:</label>
                                
                                <input type="text" className="form-control" required placeholder="name"
                                    name="name" />
                            </div>

                            <div className="container m-3">
                                <label className='my-1' htmlFor="label">Email:</label>
                                
                                <input type="email" className="form-control" required placeholder="example@gmail.com"
                                    aria-describedby="emailHelp" id="email" name="email" />
                            </div>

                            <div className="container m-3">
                                <label className='my-1' htmlFor="label">Subject:</label>
                                
                                <input type="text" className="form-control" required placeholder="subject"
                                    name="subject" />
                            </div>

                            <div className="container m-3">
                                <label className='my-1' htmlFor="label">Message:</label>
                                <textarea className="form-control" required name="message" type="text" id="labelname"
                                    style={{ width: "100%", height: "150px" }}></textarea>
                            </div>
                            <button className="btn btn-success m-4 mx-5 px-3" style={{ borderRadius: 0 }}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: "600px" }}></div>

            <Footer />
        </div>
    )
}

export default Contact
