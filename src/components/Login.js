import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("auth_token")) {
            navigate("/home");
        }
    }, [])

    async function login() {
        let user = { email, password };
        console.log(user);

        try {
            let response = await axios.post("http://127.0.0.1:8000/api/login", user);

            let result = response.data;
            if (result.status === true) {
                localStorage.setItem("auth_token", result.token);
                navigate("/home");
            } else {
                alert(result.error);
            }
        } catch (error) {
            localStorage.removeItem("auth_token");
            if (error.response && error.response.status === 422) {
                let errors = error.response.data.errors;
                let errorMessages = Object.values(errors).flat().join("\n");
                alert(errorMessages);
            } else {
                console.log("Login failed:", error);
                alert("An error occurred. Please try again.");
            }
        }
    }

    return (
        <>
            <Navbar />
            <div className="container p-4 w-50" style={{ backgroundColor: "#f5f8fd", borderRadius: "10px", marginTop: "7%" }}>
                <div className="container d-grid gap-2 w-50 text-start">
                    <h1 className="text-center mt-1 mb-0" style={{ fontWeight: "600" }}>LOGIN</h1>
                    <br />

                    <div className='d-grid gap-2'>
                        <div className="mt-3">
                            <label htmlFor="label">Email:</label>
                            <br />
                            <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} required placeholder="example@gmail.com" name="email" />

                        </div>
                        <div className=" mt-3">
                            <label htmlFor="label">Password:</label>
                            <br />
                            <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} required placeholder="password" name="password" />

                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-success mt-4" onClick={() => { login() }}>Login</button>
                        </div>
                        <div className="text-center mt-2">
                            <span>Create an account? <Link to="/signup">signup</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
