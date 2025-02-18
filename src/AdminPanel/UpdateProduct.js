import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateProduct(props) {
    const [product, setProduct] = useState([])
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const navigate = useNavigate();
    const { id } = useParams();

    async function fetchProduct() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/getproduct/" + id);
            setProduct(response.data.data);
            setName(response.data.data.name);
            setImage(response.data.data.image);
            setPrice(response.data.data.price);
            setCategory(response.data.data.category);
            console.log("Response product", response)
        } catch (error) {
            console.error("Error fetching product:", error.message);
        }
    }
    useEffect(() => {
        fetchProduct();
    }, []);

    async function editProduct(id) {

        const formData = new FormData();
        if (image instanceof File) {
            formData.append('image', image); // Handle new file upload
        }
        formData.append('name', name)
        formData.append('price', price)
        formData.append('category', category)

        const result = await axios.post("http://127.0.0.1:8000/api/updateproduct/" + id, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        });
        console.log("Data", formData);
        alert("Product Updated Sucessfully")
        fetchProduct();
    }

    return (
        <div>
            <div className="container p-4 mt-5 col-sm-8" style={{ backgroundColor: "#f5f8fd", borderRadius: "10px" }}>
                <div className="container d-grid gap-2 w-50 text-start">
                    <h1 className="text-center mb-0" style={{ fontWeight: "600" }}>Update Product</h1>
                    <br />
                    <div className='d-grid gap-2'>
                        <div className='mt-2'>
                            <label htmlFor="label">Name:</label>
                            <br />
                            <input type="text" className="form-control" defaultValue={name} onChange={(e) => { setName(e.target.value) }} required name="name" />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="label">Image</label>
                            <br />
                            <input type="file" className="form-control" onChange={(e) => { setImage(e.target.files[0]) }} required name="image" />

                        </div>
                        <div className=" mt-3">
                            <label htmlFor="label">Price:</label>
                            <br />
                            <input type="text" className="form-control" defaultValue={price} onChange={(e) => { setPrice(e.target.value) }} required name="price" />

                        </div>
                        <div className=" mt-3">
                            <label htmlFor="label">Category:</label>
                            <br />
                            <input type="text" className="form-control" defaultValue={category} onChange={(e) => { setCategory(e.target.value) }} required name="category" />

                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-success mt-4" onClick={() => { editProduct(id) }} >Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct
