import React from 'react'

function UserDataCard({data}) {
    return (
        <div>
            <div className="card p-3 my-3 shadow">
                <div>
                    ID: {data.id} <br />
                    Name: {data.name} <br />
                    Email: {data.email} <br />
                    <button className='btn btn-primary btn-sm my-3'>View Details</button>
                </div>
            </div>
        </div>
    )
}

export default UserDataCard
