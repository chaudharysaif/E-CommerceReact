import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'
import axios from 'axios';
import ViewProductCard from './ViewProductCard';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

function ViewProduct() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const api = "http://127.0.0.1:8000/api/viewallproduct";

    const getProduct = async () => {
        setLoading(true);
        try {
            const result = await axios.get(api);
            console.log(result.data.data);
            setProduct(result.data.data);
            setLoading(false);
        } catch (error) {
            console.log("Error Message: ", error.message);
        }
    }

    async function deleteProduct(id) {
        console.log(id)

        let data = await axios.delete("http://127.0.0.1:8000/api/deleteproduct/" + id, {
            method: "DELETE"
        });
        console.log(data)
        getProduct();
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>
            <div className='mt-2'>
                <h1 className='text-center mb-0 p-2'>All Product</h1>
                <div className="text-center">
                    {loading && <Loader />}
                </div>
                <div className="container table-responsive">
                    <table className='table border table-light table-striped'>
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Category</td>
                                <td colSpan={2}>Operation</td>
                            </tr>
                        </thead>
                        {/* <div className="row row-cols-md-1 my-3 offset-1"> */}
                        {
                            product.map((product) => {
                                return <ViewProductCard key={product.id} productData={product} />

                            })
                        }
                        {/* </div> */}
                    </table>
                </div>

            </div>
        </>
    )
}

export default ViewProduct
