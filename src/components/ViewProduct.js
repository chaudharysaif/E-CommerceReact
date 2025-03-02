import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CiStar } from 'react-icons/ci';
import Footer from './Footer';
import Navbar from './Navbar';

function ViewProduct(props) {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    async function fetchProduct() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/getproduct/" + id);
            setProduct(response.data.data);
            // setName(response.data.data.name);
            // setImage(response.data.data.image);
            // setPrice(response.data.data.price);
            // setCategory(response.data.data.category);
            console.log("Response product", response)
        } catch (error) {
            console.error("Error fetching product:", error.message);
        }
    }
    useEffect(() => {
        fetchProduct();
    }, []);

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
            <Navbar/>
            <div className="container">
                <div className="p-3 d-flex row justify-content-center">
                    <div className='col-md-6'>
                        <img src={product?.image ? product?.image : "default"} alt="" height={"700"} width={"600"} />
                    </div>
                    <div className="col-md-6 my-auto">
                        <div style={{ width: "80%" }}>
                            <div className='fs-5 text-secondary'>{product?.category ? product?.category.charAt(0).toUpperCase() + product?.category.slice(1) : ""}</div>
                            <div className='fw-semibold fs-2 mb-2'>{product?.name}</div>
                            <span className="fw-semibold fs-4 mt-2">₹ {product?.price}/-</span>
                            <div className='my-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi sapiente error dignissimos corporis recusandae beatae dolores enim deserunt perspiciatis. Expedita, tenetur. Optio consequatur corporis saepe quam nemo, similique ea nobis eius quasi eos illo doloremque, modi dicta pariatur minus quis autem? Enim illo commodi nesciunt adipisci velit dolorem quas!</div>
                            <div className='my-2'><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /></div>
                            <button className="container btn my-2 p-2" style={{ backgroundColor: "#0dcaf0" }} onClick={() => { addCart(product?.id) }}>Add to cart</button>
                        </div>

                        <div className='my-4 fw-semibold'>
                            <h5 className='fw-semibold my-3'>Free Shipping on orders over ₹5999!</h5>
                            <h6> <input type="checkbox" checked/>&nbsp; No-Risk Money Back Gurantee</h6>
                            <h6> <input type="checkbox" checked/>&nbsp; No Hassle Refunds</h6>
                            <h6> <input type="checkbox" checked/>&nbsp; Security Payments</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores cumque quibusdam quae, perferendis debitis, sapiente corporis qui quisquam consectetur omnis illum ipsam commodi laborum voluptatibus expedita. Illo quo, repudiandae ratione perferendis, sequi rerum laborum officiis, qui alias culpa quas sed non. Eaque neque optio inventore fugit aut laboriosam eum, laudantium dolorum fuga aspernatur ratione amet. Molestiae sequi facilis.</p>
            </div>
            <Footer />
        </div>
    )
}

export default ViewProduct
