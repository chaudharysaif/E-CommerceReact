import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios';
import Loader from './Loader';

function Checkout() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0); // Total with Backend
    const [loading, setLoading] = useState(false);

    // TotalPrice of Product in cart with frontend (optional)
    let totalPrice = items.reduce((sum, user) => {
        return sum + user.carts.reduce((total, cart) => {
            return total + (cart.quantity * (cart.products.price || 0));
        }, 0);
    }, 0);

    const token = localStorage.getItem("auth_token") || "";

    async function checkoutProduct() {
        try {
            setLoading(true);
            let result = await axios.get("http://127.0.0.1:8000/api/getcheckoutproduct", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json"
                }
            });
            setItems(result.data.data);
            setTotal(result.data.totalPrice);
            console.log("totalPrice" , result.data.totalPrice)
            console.log("Results", result.data.data)
        } catch (error) {
            console.log("Error", error)
            alert(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        checkoutProduct();
    }, [])


    return (
        <div>
            <Navbar />

            {
                loading ?
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <Loader />
                    </div>
                    : (

                        <div className="container p-5 mt-5 w-100" style={{ backgroundColor: "#f5f8fd", borderRadius: "10px" }}>
                            <h1 className="text-center mt-1 mb-0 text-secondary fw-bold">CHECKOUT</h1>
                            <hr />
                            <h5 className='p-4 m-0'>Billing Details</h5>

                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <div className="row g-3 px-4">
                                        {
                                            items.map(item => (
                                                <div key={item.id} className='row g-3 m-0'>
                                                    <div className="col-12 p-0">
                                                        <label>Name <span className='text-danger'>*</span></label>
                                                        <input type="text" defaultValue={item.name} className="form-control p-2" style={{ borderRadius: 0 }} required />
                                                    </div>

                                                    <div className="col-12 p-0">
                                                        <label>Email <span className='text-danger'>*</span></label>
                                                        <input type="email" defaultValue={item.email} className="form-control p-2" style={{ borderRadius: 0 }} required />
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        <div className="col-12">
                                            <label>Address <span className='text-danger'>*</span></label>
                                            <textarea className='form-control p-2' style={{ borderRadius: 0 }} required></textarea>
                                        </div>

                                        <div className="col-12">
                                            <label>State <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control p-2" style={{ borderRadius: 0 }} required />
                                        </div>

                                        <div className="col-12">
                                            <label>City <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control p-2" style={{ borderRadius: 0 }} required />
                                        </div>

                                        <div className="col-12">
                                            <label>PIN Code <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control p-2" style={{ borderRadius: 0 }} required />
                                        </div>

                                        <div className="col-12">
                                            <label>Phone no <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control p-2" style={{ borderRadius: 0 }} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4 mt-4 mt-lg-0" style={{ fontFamily: "sans-serif" }}>
                                    <div className="border text-center">
                                        <h4 className='p-2 fw-semibold  m-0'>Your Order</h4>
                                        <div className="table-responsive p-2">
                                            <table className="table m-0">
                                                <thead>
                                                    <tr>
                                                        <td className='fs-5 fw-semibold py-2 text-center' style={{ backgroundColor: "#f5f7f9" }}>Product</td>
                                                        <td className='fs-5 fw-semibold py-2 text-end' style={{ backgroundColor: "#f5f7f9" }}>Subtotal</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        items.map(item => (
                                                            item.carts.map(cartdata => (
                                                                <tr key={cartdata.id}>
                                                                    <td>{cartdata.products?.name} X {cartdata.quantity}</td>
                                                                    <td>{cartdata.products?.price * cartdata.quantity}.00</td>
                                                                </tr>
                                                            ))
                                                        ))
                                                    }
                                                    <tr>
                                                        <td className="fw-bold p-3">Total</td>
                                                        <td className="fw-bold p-3">{total}.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="container  btn btn-success mt-4" style={{borderRadius:"0"}}>Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
            }

            <Footer />
        </div>
    )
}

export default Checkout
