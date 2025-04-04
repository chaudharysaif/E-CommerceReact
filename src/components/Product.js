import React, { useEffect, useState } from 'react';
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
    const [selectedSort, setSelectedSort] = useState("default");
    const [sortedProduct, setSortedProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState();

    async function getProduct() {
        setLoading(true);

        const token = localStorage.getItem("auth_token");

        try {
            const productData = await axios.get(`http://127.0.0.1:8000/api/viewallproduct?page=${currentPage}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json"
                }
            });

            setProduct(productData.data.data.data);
            setFilterProduct(productData.data.data.data);
            setSortedProduct(productData.data.data.data);
            setTotalPage(productData.data.total_page);

            console.log("Retrun product", productData.data.data.data);
            console.log("Current page", currentPage);
            console.log("Total page", productData.data.total_page);
        } catch (error) {
            console.log("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProduct();
    }, [currentPage])


    const changeCategory = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);

        let filtered = category === "all" ? [...product] : product.filter(item => item.category === category);
        setFilterProduct(filtered);
        setSortedProduct(filtered);
    };

    const sort = (e) => {
        const sortValue = e.target.value;
        setSelectedSort(sortValue);

        let sorted = [...filterProduct];

        if (sortValue === "default") {
            setSortedProduct([...filterProduct]);
        } else if (sortValue === "high") {
            sorted.sort((a, b) => b.price - a.price);
        } else if (sortValue === "low") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortValue === "atoz") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortValue === "ztoa") {
            sorted.sort((a, b) => b.name.localeCompare(a.name));
        }

        setSortedProduct(sorted);
    };


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

    function nextPage() {
        setCurrentPage(currentPage + 1);
        getProduct();
    }

    function prevPage() {
        setCurrentPage(currentPage - 1);
        getProduct();
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
                        <h1 className='text-center p-5 text-secondary fw-semibold' style={{ fontFamily: "-moz-initial" }}>CLOTHES ARE THE SPIRIT OF FASHION.</h1>
                        <div className="p-5" style={{ backgroundColor: "#f5f7f9" }}>
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
                                    <select className="form-select w-100 text-secondary border-3" value={selectedSort} onChange={sort}>
                                        <option value="default">Default Sorting</option>
                                        <option value="high">Price High to Low</option>
                                        <option value="low">Price Low to High</option>
                                        <option value="atoz">A - Z</option>
                                        <option value="ztoa">Z - A</option>
                                    </select>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    {
                                        sortedProduct.length > 0 ? (
                                            sortedProduct.map((productData) => {
                                                return (
                                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3" key={productData.id}>
                                                        <div className='p-3 shadow-sm bg-white rounded text-center'>
                                                            <Link to={"/viewproduct/" + productData.id}> <div className='container m-auto'><img
                                                                src={productData.image}
                                                                alt="Product"
                                                                className="img-fluid rounded"
                                                                style={{ width: "100%", height: "250px", objectFit: "contain" }}
                                                            />
                                                            </div> </Link>
                                                            <div className="mx-3">
                                                                <div className='my-1 text-secondary'>{productData.category.charAt(0).toUpperCase() + productData.category.slice(1)}</div>
                                                                <div className='fw-semibold my-1 fs-5'> {productData.name} </div>
                                                                <div className='fw-semibold my-1'> ₹{productData.price} </div>
                                                                <div className='my-1'><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /></div>
                                                                <button className="container btn mt-2 p-2" style={{ backgroundColor: "#0dcaf0" }} onClick={() => { addCart(productData.id) }}>Add to cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        ) : (
                                            <div className="text-center fs-4 fw-semibold">No products found for this category!</div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="container my-5">
                            <div className="container-fluid d-flex justify-content-between">
                                <button className="text-center btn btn-info px-4 mx-4" style={{ height: "40px", borderRadius: "0" }}
                                    onClick={() => { prevPage() }}
                                    disabled={currentPage === 1}
                                >
                                    Prev
                                </button>

                                <div className="text-center my-auto"><h6 className='m-0 fw-semibold'>{currentPage} Page of {totalPage} </h6></div>

                                <button className="text-center btn btn-info px-4 mx-4" style={{ height: "40px", borderRadius: "0" }}
                                    onClick={() => { nextPage() }}
                                    disabled={currentPage === totalPage}
                                >
                                    Next
                                </button>
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
