import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Profile() {

    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [activeTab, setActiveTab] = useState("profile");

    async function account() {
        try {
            let token = localStorage.getItem("auth_token");

            const result = await axios.get("http://127.0.0.1:8000/api/profile", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json",
                },
            });

            setUser(result.data.data);
            console.log("result", result.data.data);
        } catch (error) {
            console.log("Error", error);
            alert("User Not Found!");
        }
    }

    useEffect(() => {
        account();
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container text-center w-50 my-4">
                <h2 className='my-2 m-auto py-2 w-50 text-light bg-info'>Personal Information</h2>
                <hr className='container' />
                <h2 className='fw-semibold fw-semibold '>{user.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : null}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="container my-5">
                <div className="justify-content-center m-auto w-75">
                    <div className="row" style={{ backgroundColor: "#f8f9fa" }}>
                        <div className="col-12 col-md-4 p-0 border">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <div className="mx-3">
                                    <li><h4 className='fw-semibold'>{user.name}</h4></li>
                                    <li><h6>{user.email}</h6></li>
                                </div> */}
                                <li className={`nav-item fs-5 p-1 ${activeTab === 'profile' ? "bg-info" : ""}`}
                                    onClick={() => setActiveTab('profile')} >
                                    <Link className='nav-link mx-3'>Account</Link>
                                </li>
                                <li className={`nav-item fs-5 p-1 ${activeTab === 'password' ? "bg-info" : ""}`}
                                    onClick={() => setActiveTab('password')}>
                                    <Link className='nav-link mx-3'>Password</Link>
                                </li>
                                <li className={`nav-item fs-5 p-1 ${activeTab === 'order' ? "bg-info" : ""}`}
                                    onClick={() => setActiveTab('order')}>
                                    <Link className='nav-link mx-3'>Orders</Link>
                                </li>
                                <li className={`nav-item fs-5 p-1 ${activeTab === 'review' ? "bg-info" : ""}`}
                                    onClick={() => setActiveTab('review')}>
                                    <Link className='nav-link mx-3'>Reviews</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-8 p-2">
                            {/* <h3 className='my-2 ms-3 fw-semibold'>
                                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                            </h3> */}
                            {
                                activeTab === 'profile' && (

                                    <div className="container-fluid">
                                        <div className='mt-1 mx-2'>
                                            <label htmlFor="label" className='fs-5' >Name: </label> <br />
                                            <input type="text" value={user.name} onChange={(e) => { setName(e.target.value) }} className='form-control w-75' name='name' />
                                        </div>

                                        <div className='my-3 mx-2'>
                                            <label htmlFor="label" className='fs-5' >Email: </label> <br />
                                            <input type="email" value={user.email} onChange={(e) => { setEmail(e.target.value) }} className='form-control w-75' name='email' />
                                        </div>

                                        <div className='my-3 mx-2'>
                                            <label htmlFor="label" className='fs-5' >Date of Birth </label> <br />
                                            <input type="date" className='form-control w-75' name='dob' />
                                        </div>

                                        <div className='my-3 mx-2'>
                                            <label htmlFor="label" className='fs-5' >Phone: </label> <br />
                                            <input type="tel" className='form-control w-75' name='phone' />
                                        </div>

                                        <div className="mb-2 mt-4">
                                            <button className="btn btn-info ms-3 px-3">Update Profile</button>
                                        </div>
                                    </div>
                                )
                            }

                            {
                                activeTab === 'password' && (
                                    <div className="container-fluid">
                                        <div className='mt-1 mx-2'>
                                            <label htmlFor="label" className='fs-5' >Current Password: </label> <br />
                                            <input type="password" value={user.password} className='form-control w-75' name='name' />
                                        </div>

                                        <div className='my-2 mx-2'>
                                            <label htmlFor="label" className='fs-5' >New Password: </label> <br />
                                            <input type="password" value={user.password} className='form-control w-75' name='email' />
                                        </div>

                                        <div className='my-2 mx-2'>
                                            <label htmlFor="label" className='fs-5' >Confirm Password: </label> <br />
                                            <input type="password" value={user.password} className='form-control w-75' name='email' />
                                        </div>

                                        <div className="mb-2 mt-4">
                                            <button className="btn btn-info ms-3 px-3">Change Password</button>
                                        </div>
                                    </div>
                                )
                            }

                            {
                                activeTab === 'order' && (
                                    <div className="container-fluid">
                                        <h3>Will be update soon...</h3>
                                    </div>
                                )
                            }

                            {
                                activeTab === 'review' && (
                                    <div className="container-fluid">
                                        <h3>Will be update soon...</h3>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Profile
