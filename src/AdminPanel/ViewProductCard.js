import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

async function deleteProduct(id) {
    console.log(id)

    let data = await axios.delete("http://127.0.0.1:8000/api/deleteproduct/" + id, {
        method: "DELETE"
    });
    console.log(data)
}


function ViewProductCard({ productData }) {
    return (
        <>
            {/* <div className="card p-3 shadow">
        <div>
            {productData.image} 
            ID: {productData.id} 
            Name: {productData.name} 
            Price: {productData.price} 
            Category: {productData.category} 
        </div>
      </div> */}

            <tbody>
                <tr>
                    <td className='py-4'>{productData.id}</td>
                    <td className='p-1'><img src={productData.image ? productData.image  : "default"} height={"70"} width={"60"} /> </td>
                    <td className='py-4'>{productData.name}</td>
                    <td className='py-4'>{productData.price}</td>
                    <td className='py-4'>{productData.category}</td>
                    <td className='py-4'><Link to={"/admin/updateproduct/" + productData.id}> <button className='btn btn-primary btn-sm'>Update</button></Link></td>
                    <td className='py-4'><Link> <button className='btn btn-danger btn-sm' onClick={() => { deleteProduct(productData.id) }}>Delete</button></Link></td>
                </tr>
            </tbody>

        </>

    )
}

export default ViewProductCard
