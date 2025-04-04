import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ViewProductCard from './ViewProductCard';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

function ViewProduct() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState();

    const api = `http://127.0.0.1:8000/api/viewallproduct?page=${currentPage}`;

    const getProduct = async () => {
        setLoading(true);
        try {
            const result = await axios.get(api);
            console.log("Product", result.data.data.data);
            setProduct(result.data.data.data);
            setLoading(false);
            setTotalPage(result.data.total_page);
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
    }, [currentPage])

    function nextPage() {
        setCurrentPage(currentPage + 1);
        getProduct();
    }

    function prevPage() {
        setCurrentPage(currentPage - 1);
        getProduct();
    }

    return (
        <>
            <div className='mt-2'>
                <h1 className='text-center mb-0 p-2'>All Product</h1>
                {
                    loading ? (
                        <div className="d-flex justify-content-center align-items-center vh-100">
                            {loading && <Loader />}
                        </div>
                    ) : (
                        <>
                            <div className="container table-responsive">
                                <table className='table border text-center table-light table-striped'>
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
                                        product.map((productData) => {
                                            // return <ViewProductCard key={product.id} productData={product} />
                                            return (
                                                <tbody>
                                                    <tr>
                                                        <td className='py-4'>{productData.id}</td>
                                                        <td className='p-1'><img src={productData.image ? productData.image : "default"} height={"70"} width={"60"} /> </td>
                                                        <td className='py-4'>{productData.name}</td>
                                                        <td className='py-4'>{productData.price}</td>
                                                        <td className='py-4'>{productData.category}</td>
                                                        <td className='py-4'><Link to={"/admin/updateproduct/" + productData.id}> <button className='btn btn-primary btn-sm'>Update</button></Link></td>
                                                        <td className='py-4'><Link> <button className='btn btn-danger btn-sm' onClick={() => { deleteProduct(productData.id) }}>Delete</button></Link></td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })
                                    }
                                    {/* </div> */}
                                </table>

                                <div className="container my-4">
                                    <div className="container-fluid d-flex justify-content-between">
                                        <button className="text-center btn btn-secondary px-4 mx-4" style={{ height: "40px", borderRadius: "0" }}
                                            onClick={() => { prevPage() }}
                                            disabled={currentPage === 1}
                                        >
                                            Prev
                                        </button>

                                        <div className="text-center my-auto"><h6 className='m-0 fw-semibold'>{currentPage} Page of {totalPage} </h6></div>

                                        <button className="text-center btn btn-secondary px-4 mx-4" style={{ height: "40px", borderRadius: "0" }}
                                            onClick={() => { nextPage() }}
                                            disabled={currentPage === totalPage}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

            </div>
        </>
    )
}

export default ViewProduct
