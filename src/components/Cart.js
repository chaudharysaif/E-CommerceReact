import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import Footer from './Footer';

function Cart() {
    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function getCartProduct() {
        try {
            const token = localStorage.getItem("auth_token");
            setLoading(true);
            const response = await axios.get("http://127.0.0.1:8000/api/getcartproduct", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Accept": "application/json"
                },
            });
            setCart(response.data.data);
            setPrice(response.data.totalPrice)
            setLoading(false);
            console.log("Cart API Response:", response.data);

        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    }

    useEffect(() => {
        getCartProduct();
    }, [])

    async function quantity(id, value) {
        try {
            const token = localStorage.getItem("auth_token") || "";
            const response = await axios.post("http://127.0.0.1:8000/api/updatequantity/", {
                cart_id: id,
                quantity: value,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error adding product to cart:", error);
            alert("Failed to update quantity.");
        }
        getCartProduct();
    }

    async function removeProduct(id) {
        console.log(id)
        try {
            const token = localStorage.getItem("auth_token") || "";
            const data = await axios.delete("http://127.0.0.1:8000/api/removecart/" + id, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            console.log(data)
        } catch (error) {
            console.error("Product didnt remove", error)
        }
        getCartProduct();
    }

    const totalPrice = cart.reduce((total, item) => total + (item.products?.price * item.quantity || 0), 0);

    return (
        <div>
            <Navbar />
            {
                loading ? (
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <Loader />
                    </div>
                ) : (
                    <>
                        {
                            cart.length > 0 ?
                                <div className='p-4 mt-4'>
                                    <h1 className="text-center my-3">CART</h1>

                                    <div className="container table-responsive">
                                        <table className='table text-center border rounded'>
                                            <thead>
                                                <tr>
                                                    {/* <td style={{ backgroundColor: "#f5f7f9" }}></td> */}
                                                    <td className='fw-semibold p-3 fs-5' colSpan={2} style={{ backgroundColor: "#f5f7f9" }}>PRODUCT</td>
                                                    <td className='fw-semibold p-3 fs-5' style={{ backgroundColor: "#f5f7f9" }}>PRICE</td>
                                                    <td className='fw-semibold p-3 fs-5' style={{ backgroundColor: "#f5f7f9" }}>QUANTITY</td>
                                                    <td className='fw-semibold p-3 fs-5' style={{ backgroundColor: "#f5f7f9" }}>TOTAL</td>
                                                    <td style={{ backgroundColor: "#f5f7f9" }}></td>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    cart.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className="py-2 d-flex justify-content-end">
                                                                <img
                                                                    src={item.products?.image || "default.jpg"}
                                                                    height="110"
                                                                    width="85"
                                                                    alt="Product"
                                                                />
                                                            </td>
                                                            <td className="py-5">{item.products?.name}</td>
                                                            <td className="py-5">₹ {item.products?.price}</td>
                                                            <td className="py-5">
                                                                <input
                                                                    className='px-2'
                                                                    type="number"
                                                                    style={{ width: "60px" }}
                                                                    value={item.quantity}
                                                                    min={1}
                                                                    max={10}
                                                                    onChange={(e) => { quantity(item.id, e.target.value) }}
                                                                />
                                                            </td>
                                                            <td className="py-5">₹ {(item.products?.price * item.quantity).toFixed(2)}</td>
                                                            <td className="py-5">
                                                                <button className="btn btn-danger btn-sm" onClick={() => removeProduct(item.id)} >
                                                                    Remove
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="container table-responsive border-1 w-50 mt-5">
                                        <table className='container table text-center border w-75'>
                                            <thead>
                                                <tr>
                                                    <td colSpan={2} className='fw-semibold fs-4 text-center border-1' style={{ backgroundColor: "#f5f7f9" }}>CART TOTAL</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='p-3'>Total</td>
                                                    <td className='p-3'>₹ {totalPrice.toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td className='p-3'>SubTotal</td>
                                                    <td className='p-3'>₹ {totalPrice.toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}> <Link to="/checkout"> <button className="container p-3 my-1 btn btn-success" style={{ borderRadius: "0" }}>CHECKOUT</button> </Link> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                :
                                <div className='d-flex justify-content-center align-items-center vh-100'>
                                    <h3 className='fw-semibold mx-2 shadow p-2 px-4'>No items in cart!</h3>
                                    <img src="/empty-cart.png" alt="Empty Cart" height={200} />
                                </div>
                        }
                    </>
                )
            }
            <Footer />
        </div>
    )
}

export default Cart
