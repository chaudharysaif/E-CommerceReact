import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import Loader from './Loader';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Product() {
    const [product, setProduct] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filterProduct, setFilterProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getProduct() {
        setLoading(true);

        const token = localStorage.getItem("auth_token"); // Retrieve the token from localStorage

        try {
            const productData = await axios.get("http://127.0.0.1:8000/api/viewallproduct", {
                headers: {
                    "Authorization": `Bearer ${token}`, // Send the token in the Authorization header
                    "Accept": "application/json"
                }
            });

            setProduct(productData.data.data);
            setFilterProduct(productData.data.data);
            console.log(productData.data.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    }

    // async function getProduct() {
    //     setLoading(true);
    //     const token = localStorage.getItem("auth_token") || "";
    //     const productData = await axios.get("http://127.0.0.1:8000/api/viewallproduct", {
    //         headers: {
    //             "Authorization": `Bearer ${token}`, // Send the token in the Authorization header
    //             "Accept": "application/json"
    //         }
    //     });
    //     setProduct(productData.data.data);
    //     setFilterProduct(productData.data.data);
    //     console.log(productData.data.data);
    //     setLoading(false);
    // }

    useEffect(() => {
        getProduct();
    }, [])

    const changeCategory = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);

        if (category === "all") {
            setFilterProduct(product);
        }
        else {
            const filtered = product.filter(item => item.category === category);
            setFilterProduct(filtered);
        }
    }

    async function addCart(id) {
        const token = localStorage.getItem("auth_token") || "";
        console.log(token)
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/addcart/" + id, { id }, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(response.data);
            alert("product added to cart successfully!");
        } catch (error) {
            console.error("Error adding product to cart:", error);
            alert("Failed to add product to cart.");
        }
    }

    return (
        <div>
            <Navbar productactive="info" />
            {
                loading ? (
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <Loader />
                    </div>
                ) : (
                    <>

                        <h1 className='text-center p-4 text-secondary fw-semibold' style={{ fontFamily: "-moz-initial" }}>CLOTHES ARE THE SPIRIT OF FASHION.</h1>
                        <div className="p-4" style={{ backgroundColor: "#f5f7f9" }}>
                            <h1 className='container text-center' style={{ fontSize: "50px", fontFamily: "-moz-initial" }}>SHOP</h1>
                            <div className="container mb-3 d-flex justify-content-between text-secondary">
                                <div>
                                    <select className="form-select w-100 text-secondary border-3" value={selectedCategory} onChange={changeCategory}>
                                        <option value="all">All</option>
                                        <option value="shirt">Shirt</option>
                                        <option value="pant">Pant</option>
                                        <option value="jeans">Jeans</option>
                                        <option value="tshirt">T-Shirt</option>
                                        <option value="hoodie">Hoodie</option>
                                        <option value="jacket">Jacket</option>
                                    </select>
                                </div>

                                <div>
                                    <select className="form-select w-100 text-secondary border-3">
                                        <option value="default">Default Sorting</option>
                                        <option value="high">Price High to Low</option>
                                        <option value="low">Price Low to High</option>
                                        <option value="atoz">A - Z</option>
                                    </select>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    {
                                        filterProduct.length > 0 ? (
                                            filterProduct.map((productData) => {
                                                return (
                                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2" key={productData.id}>
                                                        <div className='p-3 shadow-sm bg-white rounded text-center'>
                                                            <Link to={"/viewproduct/" + productData.id}> <div className='container m-auto'><img
                                                                src={productData.image}
                                                                alt="Product"
                                                                className="img-fluid rounded"
                                                                style={{ width: "100%", height: "250px", objectFit: "contain" }}
                                                            />
                                                            </div> </Link>
                                                            <div className="mx-3"><div className='fw-semibold my-1'> {productData.name} </div>
                                                                <div className='fw-bold my-1'> ₹{productData.price} </div>
                                                                <div className='my-1 text-secondary'>{productData.category.charAt(0).toUpperCase() + productData.category.slice(1)}</div>
                                                                <div className='my-1'><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /></div>
                                                                <button className="container btn mt-1 p-2" style={{ backgroundColor: "#0dcaf0" }} onClick={() => { addCart(productData.id) }}>Add to cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        ) : (
                                            <div className="text-center">No products found for this category.</div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
                )
            }
        </div >
    )
}

export default Product
