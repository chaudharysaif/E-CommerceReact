import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { GiPriceTag } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdOutlineLockPerson } from "react-icons/md";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Navbar homeactive="info" />
            <div
                className="d-flex align-items-center"
                style={{
                    backgroundImage: "url('homeimage3.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    fontFamily: "georgia",
                }}
            >
                <div className="container text-white fw-bolder text-md-start text-center">
                    <div className="row">
                        <div className="col-md-6 offset-md-1">
                            <h1 className="fw-semibold my-3" style={{ fontSize: "50px" }}>
                                Welcome to <br /> Clothing Palette
                            </h1>
                            <h1 className="fw-bold my-3" style={{ fontSize: "50px" }}>
                                "Where Fashion Dreams <br /> Come True"
                            </h1>
                            <h3 className="my-3">20% Off On All Products</h3>
                            <div className="my-4">
                                <button className="btn btn-light p-3 px-4 m-3 fw-semibold" style={{ borderRadius: "0" }}>
                                    SHOP NOW
                                </button>
                                <button className="btn btn-outline-light mx-4 m-3 p-3 px-4 fw-semibold" style={{ borderRadius: "0" }}>
                                    FIND MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-5 p-5">
                <div className="row g-4 justify-content-center">
                    {/* Card 1 */}
                    <div className="col-12 col-md-4">
                        <div
                            className="d-flex flex-column justify-content-end p-3 text-white"
                            style={{
                                backgroundImage: "url('homeshirt1.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "55vh",
                                borderRadius: "10px",
                                opacity: "0.9",
                            }}
                        >
                            <h2 className="fw-semibold">20% off on above ₹9999</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-12 col-md-4">
                        <div
                            className="d-flex flex-column justify-content-end p-3 text-white"
                            style={{
                                backgroundImage: "url('homedisplay2.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "55vh",
                                borderRadius: "10px",
                                opacity: "0.9",
                            }}
                        >
                            <h2 className="fw-semibold">20% off on above ₹9999</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-12 col-md-4">
                        <div
                            className="d-flex flex-column justify-content-end p-3 text-white"
                            style={{
                                backgroundImage: "url('homedisplay3.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "55vh",
                                borderRadius: "10px",
                                opacity: "0.9",
                            }}
                        >
                            <h2 className="fw-semibold">20% off on above ₹9999</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container my-5 p-5' style={{ backgroundColor: "#f5f7f9" }}>
                <div className="row justify-content-center">
                    <div className='text-center col-md-3 my-4'>
                        <div className='mb-3'><BsGlobeCentralSouthAsia size={65} /></div>
                        <h4 className='fw-semibold'>Worldwide Shipping</h4>
                        <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                    </div>

                    <div className='text-center col-md-3 my-4'>
                        <div className='mb-3'><GiClothes size={65} /></div>
                        <h4 className='fw-semibold'>Best Quality</h4>
                        <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div className='text-center col-md-3 my-4'>
                        <div className='mb-3'><GiPriceTag size={65} /></div>
                        <h4 className='fw-semibold'>Best Offers</h4>
                        <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                    </div>

                    <div className='text-center col-md-3 my-4'>
                        <div className='mb-3'><MdOutlineLockPerson size={65} /></div>
                        <h4 className='fw-semibold'>Secure Payments</h4>
                        <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                    </div>
                </div>
            </div>

            <div className="my-5 p-5 text-light" style={{ backgroundColor: "#2e7db0", fontFamily: "georgia" }}>
                <div className="row ">
                    <div className="col-12 col-md-5 col-lg-4 m-3 text-center m-auto">
                        <img src="homedisplay4.jpg" alt="Zipper Image" className='img-fluid'/>
                    </div>
                    <div className="col-md-7" >
                        <div>
                            <h1 className='fw-bold my-2'>Special Edition</h1>
                            <h4 className='my-3 fw-semibold'>Limited Time Offer</h4>
                            <h5>Buy This Zipper Hoodie At 20% Discount!</h5>
                            <h1 className='mt-4 fw-semibold '>Custom Zipper Hoodie</h1>
                            <h5 className=''>Hoodie</h5>
                            <h5 className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis officiis illum,<br /> similique id
                                animi odit maiores, beatae nulla quod molestias sequi maxime? Facere <br /> natus architecto nemo at rem
                                amet quidem!</h5>
                            <h5 className="mt-3">₹ 5499.00 /-</h5>
                        </div>

                        <div className="my-4">
                            <Link to="/product"><button className="btn btn-light p-2 px-3 fw-semibold" style={{ borderRadius: "0" }}>SHOP NOW</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 p-5" style={{ backgroundColor: "#f5f7f9" }}>
                <div>
                    <div className="text-center">
                        <h3>Testimonials</h3>
                        <h1>What Our Customers Say</h1>
                    </div>
                    <div className="row mt-3 p-0 d-flex justify-content-center">
                        <div className="col-12 col-md-4 col-lg-3 m-4 p-5" style={{ backgroundColor: "#ffffff" }}>
                            <img src="tester1.jpeg" alt="Rounded Profile" className='rounded-circle img-fluid my-2' width={"100"} /> <span> <h5 className='m-0'>John Marith</h5></span>
                            <small className='text-secondary'>Bussiness Man</small>
                            <p><FaStar size={20} /><FaStar size={20} /><FaStar size={20} /><FaStar size={20} /><FaStar size={20} /></p>
                            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt accusantium quas nemo. Tempore tempora minima iusto alias temporibus perspiciatis quisquam in culpa veritatis iste, corrupti et veniam! Officia, expedita!
                            </p>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 m-4 p-5" style={{ backgroundColor: "#ffffff" }}>
                            <img src="tester2.jpg" alt="Rounded Profile" className='rounded-circle img-fluid my-2' width={"100"} /> <span><h5 className='m-0'>Tom Lathan</h5></span>
                            <small className='text-secondary'>Software Developer</small>
                            <p><FaStar size={20} /><FaStar size={20} /><FaStar size={20} /><FaStar size={20} /><FaRegStar size={20} /></p>
                            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt accusantium quas nemo. Tempore tempora minima iusto alias temporibus perspiciatis quisquam in culpa veritatis iste, corrupti et veniam! Officia, expedita!
                            </p>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 m-4 p-5" style={{ backgroundColor: "#ffffff" }}>
                            <img src="tester3.jpg" alt="Rounded Profile" className='rounded-circle img-fluid my-2' width={"100"} /> <span><h5 className='m-0'>Harry Brook</h5></span>
                            <small className='text-secondary'>Cricketer</small>
                            <p><FaStar size={20} /><FaStar size={20} /><FaStar size={20} /><FaStar size={20} /><FaStar size={20} /></p>
                            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt accusantium quas nemo. Tempore tempora minima iusto alias temporibus perspiciatis quisquam in culpa veritatis iste, corrupti et veniam! Officia, expedita!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>

    )
}

export default Home
