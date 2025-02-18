import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { GiPriceTag } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { MdOutlineLockPerson } from "react-icons/md";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

function Home() {
    return (
        <div>
            <Navbar homeactive="info" />
            <div style={{
                backgroundImage: "url('pexels-mallonymedia-4903412.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "85vh"
            }}></div>

            <div className='container mt-4 p-5'>
                <div className="row justify-content-center text-light" style={{ fontFamily: "sans-serif" }}>
                    <div className='col-md-4 d-flex flex-column' style={{
                        backgroundImage: "url('homeshirt1.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "55vh",
                        maxWidth: "28%",
                        opacity: "0.8"
                    }}>
                        <div className='mt-auto ms-2'>
                            <h2 className='fw-semibold'>20% off on above ₹9999</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum.</p>
                        </div>
                    </div>

                    <div className='col-md-4 mx-4 d-flex flex-column' style={{
                        backgroundImage: "url('homedisplay2.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "55vh",
                        maxWidth: "28%",
                        opacity: 0.8,
                    }}>
                        <div className='mt-auto ms-2'>
                            <h2 className='fw-semibold'>20% off on above ₹9999</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum.</p>
                        </div>
                    </div>

                    <div className='col-md-4 d-flex flex-column' style={{
                        backgroundImage: "url('homedisplay3.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "55vh",
                        maxWidth: "28%",
                        opacity: "0.8"
                    }}>
                        <div className='mt-auto ms-2' style={{ zIndex: 1 }}>
                            <h2 className='fw-semibold'>20% off on above ₹9999</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-4 p-5' style={{ backgroundColor: "#f5f7f9" }}>
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

            <Footer />

        </div>

    )
}

export default Home
