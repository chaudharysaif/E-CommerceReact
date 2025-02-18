import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProduct() {
    const [name, setName] = useState("")
    const [image, setImage] = useState(null)
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const navigate = useNavigate();

    async function insertProduct() {
        // let product = { name, image, price, category };
    
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);
        formData.append('price', price);
        formData.append('category', category);
    
        // if (image) {
        //     formData.append('image', image); // Ensure the image is appended
        // } else {
        //     alert("Please select an image.");
        //     return;
        // }
    
        const response = await axios.post("http://127.0.0.1:8000/api/addproduct", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        alert("Product Added to Database")
        navigate("/addproduct");
    }
    
    return (
        <div>
            <div className="container p-4 mt-5 col-sm-8" style={{ backgroundColor: "#f5f8fd", borderRadius: "10px" }}>
                <div className="container d-grid gap-2 w-50 text-start">
                    <h1 className="text-center mb-0" style={{ fontWeight: "600" }}>Add Product</h1>
                    <br />
                    <div className='d-grid gap-2'>
                        <div className='mt-2'>
                            <label htmlFor="label">Name:</label>
                            <br />
                            <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} required name="name" />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="label">Image</label>
                            <br />
                            <input type="file" className="form-control" onChange={(e) => { setImage(e.target.files[0]) }} required name="image" />

                        </div>
                        <div className=" mt-3">
                            <label htmlFor="label">Price:</label>
                            <br />
                            <input type="text" className="form-control" onChange={(e) => { setPrice(e.target.value) }} required name="price" />

                        </div>
                        <div className=" mt-3">
                            <label htmlFor="label">Category:</label>
                            <br />
                            <input type="text" className="form-control" onChange={(e)=>{ setCategory(e.target.value) }} required name="category" />

                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-success mt-4" onClick={insertProduct}>Add Product</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';

// function Sidebar() {
//     return (
//         <div>
//             <div className='position-fixed' id="layoutSidenav side">
//                 <div id="layoutSidenav_nav">
//                     <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
//                         <div className="sb-sidenav-menu">
//                             <div className="nav">
//                                 <div className="sb-sidenav-menu-heading"></div>
//                                 <Link className="nav-link" to="/dashboard">
//                                     <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
//                                     Dashboard
//                                 </Link>

//                                 <Link className="nav-link" to="{{ url('admin/category') }}">
//                                     <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
//                                     Category
//                                 </Link>

//                                 <div className="sb-sidenav-menu-heading"></div>

//                                 <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts"
//                                     aria-expanded="false" aria-controls="collapseLayouts">
//                                     <div className="sb-nav-link-icon"><i className="fas fa-book"></i></div>
//                                     Product
//                                     <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
//                                 </Link>
//                                 <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
//                                     <nav className="sb-sidenav-menu-nested nav">
//                                         <Link className="nav-link" to="/addproduct">Add Product</Link>
//                                         <Link className="nav-link" to="#">View Product</Link>
//                                     </nav>
//                                 </div>


//                                 <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages"
//                                     aria-expanded="false" aria-controls="collapsePages">
//                                     <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
//                                     Posts
//                                     <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
//                                 </Link>
//                                 <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
//                                     <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
//                                         <Link className="nav-link" to="{{ url('admin/posts/create') }}">Add Posts</Link>
//                                         <Link className="nav-link" to="{{ url('admin/posts') }}">View Posts</Link>
//                                     </nav>
//                                 </div>

                                
//                             </div>
//                         </div>
//                         <div className="sb-sidenav-footer">
//                             <div className="small">Logged in as:</div>
//                             Start Bootstrap
//                         </div>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Sidebar
