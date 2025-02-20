import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

function Navbar(props) {

    const navigate = useNavigate()

    // Logout Function
    function logout() {
        localStorage.removeItem("auth_token");
        console.log("Data cleared from localStorage");
        navigate("/login")
    }

    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-1">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-4" to="#"><img src="/cplogo.jpg" alt="logo" height={55} width={60} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                            {
                                localStorage.getItem("auth_token") ?
                                    <>
                                        <li className="nav-item"><Link className={`nav-link fw-semibold text-${props.homeactive}`} aria-current="page" to="/home">HOME</Link></li>
                                        <li className="nav-item"><Link className={`nav-link fw-semibold text-${props.productactive}`} to="/product">SHOP</Link></li>
                                        <li className="nav-item"><Link className={`nav-link fw-semibold text-${props.aboutactive}`} to="/about">ABOUT</Link></li>
                                        <li className="nav-item"><Link className={`nav-link fw-semibold text-${props.contactactive}`} to="/contact">CONTACT</Link></li>
                                    </>
                                    :
                                    <>
                                        <div className="dropdown mx-4 d-flex justify-content-end">
                                            <Link className="btn btn-outline-success dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Account
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" to="/signup">Sign up</Link></li>
                                                <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                            </ul>
                                        </div>
                                    </>
                            }

                        </ul>
                        <div className='text-center d-flex ms-4 justify-content-center'>
                            <span className='m-2'><Link to={"/cart"}><IoBag size={27} color='black' className='d-flex justify-content-center' /></Link></span>

                            {localStorage.getItem("auth_token") ?
                                <Nav className='p-0 d-flex justify-content-center'>
                                    <NavDropdown className='p-0' title={<FaUserAlt size={22} color='black' />}>
                                        <NavDropdown.Item> Profile </NavDropdown.Item>
                                        <NavDropdown.Item onClick={logout}> Logout </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar