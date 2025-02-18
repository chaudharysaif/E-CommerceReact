import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

function Navbar(props) {

    const navigate = useNavigate()

    // const token = localStorage.getItem("auth_token");
    // let user = null;
    // try {
    //     user = token ? token : null;
    //     console.log("Parsed user token:", user);
    // } catch (error) {
    //     console.error("Error processing token:", error);
    //     localStorage.removeItem("auth_token");
    // }

    // Logout Function
    function logout() {
        localStorage.removeItem("auth_token");
        console.log("Data cleared from localStorage");
        navigate("/login")
    }

    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">CLOTHING PALETTE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
                    </div>
                </div>

                <Link to={"/cart"}><IoBag size={25} color='black' /></Link>

                {localStorage.getItem("auth_token") ?
                    <Nav>
                        <NavDropdown title={<FaUserAlt size={20} color='black' />}>
                            <NavDropdown.Item> Profile </NavDropdown.Item>
                            <NavDropdown.Item onClick={logout}> Logout </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    :
                    null
                }
                {/* <div className="dropdown mx-5 d-flex justify-content-end">
                    <Link className="btn btn-outline-success dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {user.name}
                    </Link>

                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/">Profile</Link></li>
                        <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                    </ul>
                </div> */}
            </nav>
        </div>
    )
}

export default Navbar