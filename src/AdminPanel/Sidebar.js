import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
// import './Sidebar.css';

function Sidebar() {
    return (
        <div>
            <div className="position-fixed d-flex flex-column me-2 flex-shrink-0 p-3 text-bg-dark" style={{ width: "250px", height: "94vh" }}>
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"><use to="#bootstrap"></use></svg>
                    <span className="fs-4">Sidebar</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link active" aria-current="page">
                            <svg className="bi pe-none me-2" width="16" height="16"><use to="#home"></use></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16"><use to="#speedometer2"></use></svg>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16"><use to="#table"></use></svg>
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/addproduct" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16"><use to="#grid"></use></svg>
                            Add Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/viewproduct" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16"><use to="#grid"></use></svg>
                            View Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16"><use to="#people-circle"></use></svg>
                            Customers
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>Saif</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><Link className="dropdown-item" to="#">New project...</Link></li>
                        <li><Link className="dropdown-item" to="#">Settings</Link></li>
                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                    </ul>
                </div>
            </div>

            {/* <div className='' id="layoutSidenav side">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading"></div>
                                <Link className="nav-link" to="/admin">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                                </Link>

                                <Link className="nav-link" to="{{ url('admin/category') }}">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Category
                                </Link>    

                                <div className="sb-sidenav-menu-heading"></div>

                                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts"
                                    aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book"></i></div>
                                    Product
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </Link>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="/admin/addproduct">Add Product</Link>
                                        <Link className="nav-link" to="/admin/viewproduct">View Product</Link>
                                    </nav>
                                </div>

                                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages"
                                    aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book"></i></div>
                                    Post
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </Link>
                                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <Link className="nav-link" to="/admin/addproduct">Add Post</Link>
                                        <Link className="nav-link" to="/admin/viewproduct">View Post</Link>
                                    </nav>
                                </div>
                                
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Start Bootstrap
                        </div>
                    </nav>
                </div>
            </div> */}
        </div>
    )
}

export default Sidebar
