import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from './Sidebar';
import ViewProductCard from './ViewProductCard';

function AdminSearch() {

    const [data, setData] = useState([]);

    async function search(key) {
        if (key.length > 0) {
            let result = await axios.get("http://127.0.0.1:8000/api/searchproduct/" + key);
            setData(result.data.data);
            console.log("result", result);
        }
    }

    return (
        <div>
            <div className='container mt-3'>
                <h1 className='text-center'>Search Componenet</h1>
                <br />
                <input className='container w-50 form-control' type="text" onChange={(e) => { search(e.target.value) }} placeholder='search product' />

                <div className="container mt-3">
                    {
                        data.length > 0 ?
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
                                    data.map((product) => {
                                        return <ViewProductCard key={product.id} productData={product} />
                                    })
                                }
                                {/* </div> */}
                            </table>
                            :
                            null
                    }
                </div>
            </div>
        </div>

    )
}

export default AdminSearch
