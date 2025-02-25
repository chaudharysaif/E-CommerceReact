import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
    return (
        <div>
            <Navbar aboutactive="info" />

            <div className="container p-4 my-5 p-md-5 mb-4 rounded text-body-emphasis img-fluid" style={{ backgroundImage: "url('aboutus.jpg')", backgroundPosition: "bottom", backgroundSize: "cover" }}>
                <div className="col-lg-6 px-0">
                    <h1 className="display-4 fst-italic">Title of a longer featured about post</h1>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                </div>
            </div>

            <div className="container-fluid" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="container">
                    <div className="row featurette my-5 p-5">
                        <div className="col-md-6">
                            <hr className='container' />
                            <h2 className="featurette-heading fw-bold text-center my-2">Who We Are</h2>
                            <p className="lead mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias culpa reiciendis, iste explicabo, id fugiat corrupti obcaecati exercitationem, perspiciatis officiis nostrum unde sequi quas dicta soluta ratione earum minus! Nisi, animi at voluptatum, dolores aliquid quas quam sapiente aperiam necessitatibus asperiores.</p>
                        </div>
                        <div className="col-md-6">
                            <img src="/ecomabout.jpeg" alt="discussion" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-between lead">
                    <div className="col-12 col-md-3">
                        <hr />
                        <h2 className='fw-bold my-3'>How It Started</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur elit. Ab quasi ipsa totam. Corrupti quam eaque voluptatum, quis ipsum praesentium dolores!</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <hr />
                        <h2 className='fw-bold my-3'>How It Works</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur elit. Ab quasi ipsa totam. Corrupti quam eaque voluptatum, quis ipsum praesentium dolores!</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <hr />
                        <h2 className='fw-bold my-3'>Why Choose Us</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur elit. Ab quasi ipsa totam. Corrupti quam eaque voluptatum, quis ipsum praesentium dolores!</p>
                    </div>
                </div>
            </div>

            <div className="my-5 p-5" style={{ backgroundColor: "#f5f7f9" }}>
                <div className='lead'>
                    <div className="text-center">
                        <hr className='container w-25' />
                        <h5>A few words about</h5>
                        <h1 className='fw-bold my-3'>OUR TEAM</h1>
                        <p className='container text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque hic, reiciendis ipsam aspernatur nam impedit eaque quaerat ipsum voluptas voluptatibus provident suscipit deleniti eum fugit debitis repudiandae iste eos.</p>
                    </div>
                    <div className="row mt-3 p-0 d-flex justify-content-center text-center">
                        <div className="col-12 col-md-3 col-lg-2 m-4 py-3" style={{ backgroundColor: "#ffffff" }}>
                            <img src="tester1.jpeg" alt="Rounded Profile" className='rounded-circle img-fluid my-2' width={"150"} /> <span> <h5 className='m-0'>John Marith</h5></span>
                            <small className='text-secondary'>Founder- CEO</small>
                           
                        </div>
                        <div className="col-12 col-md-3 col-lg-2 m-4 py-3" style={{ backgroundColor: "#ffffff" }}>
                            <img src="tester2.jpg" alt="Rounded Profile" className='rounded-circle img-fluid my-2' width={"150"} /> <span><h5 className='m-0'>Tom Lathan</h5></span>
                            <small className='text-secondary'>Lead Developer</small>
                            
                        </div>
                        <div className="col-12 col-md-3 col-lg-2 m-4 py-3" style={{ backgroundColor: "#ffffff" }}>
                            <img src="tester3.jpg" alt="Rounded Profile" className='rounded-circle img-fluid my-2' width={"150"} /> <span><h5 className='m-0'>Harry Brook</h5></span>
                            <small className='text-secondary'>Intern Designer</small>
                            
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About
