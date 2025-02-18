import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"

function AdminNavbar(props) {

    const navigate = useNavigate("")

    const user = JSON.parse(localStorage.getItem('user-info'));

    function logout() {
        localStorage.removeItem("user-info");
        console.log("Data cleared from localStorage");
        navigate("/login")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Clothing Pallette</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 text-light mb-lg-0">
                            {
                                localStorage.getItem('user-info') ?
                                    <>

                                        <Nav>
                                        <li className='p-2' ><Link className="dropdown-item" to="/admin/adminsearch">Search</Link></li>
                                            <NavDropdown title={user && user.name}>
                                                <NavDropdown.Item> Profile </NavDropdown.Item>
                                                <NavDropdown.Item onClick={logout}> Logout </NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
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
            </nav>
        </div>
    )
}

export default AdminNavbar