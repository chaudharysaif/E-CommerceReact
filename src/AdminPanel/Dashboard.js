import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import UserDataCard from './UserDataCard';
import Loader from '../components/Loader';

function Dashboard() {

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const api = "http://127.0.0.1:8000/api/testapigetuser";

    const getData = async () => {
        setLoading(true);
        try {
            const user = await axios.get(api);
            console.log(user.data.data);
            setUserData(user.data.data);
            setLoading(false);
        } catch (error) {
            console.log("Error Message:", error.message);
            console.log("Error Status:", error.result.status);
            console.log("Error Data:", error.result.data);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='mt-3'>
            <h1 className='text-center'>All Users</h1>
            <div className="text-center">
                {loading && <Loader />}
            </div>
            <div className="container">
                <div className="container row row-cols-md-4">
                    {
                        userData.map((user) => {
                            return <UserDataCard key={user.id} data={user} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard
