import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import axios from 'axios';

function Signup() {

    useEffect(() => {
        if (localStorage.getItem("auth_token")) {
            navigate("/home");
        }
    }, [])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    async function signUp() {
        let user = { name, email, password };

        try {
            let response = await axios.post("http://127.0.0.1:8000/api/signup", user, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            let result = response.data;
            console.log("Result:", result);
            // if (result.token) {
            //     localStorage.setItem("auth_token", result.token);
            //     navigate("/login");
            // } else {
            //     alert("Token doesn't generated");
            // }
        } catch (error) {
            console.error("Signup failed:", error);
            // localStorage.removeItem("auth_token");
            alert("Something went wrong. Please try again.");
        }
    }

    return (
        <>
            <Navbar />
            <div className="container p-4 mt-5 w-50" style={{ backgroundColor: "#f5f8fd", borderRadius: "10px" }}>
                <div className="container d-grid gap-2 w-50 text-start">
                    <h1 className="text-center mt-1 mb-0" style={{ fontWeight: "600" }}>SIGN UP</h1>
                    <br />
                    <div className='d-grid gap-2'>
                        <label htmlFor="label">Name:</label>
                        <br />
                        <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} required placeholder="name" name="name" />

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
                        <div className=" mt-3">
                            <label htmlFor="label">Confirm Password:</label>
                            <br />
                            <input type="password" className="form-control" required placeholder="confirm password" name="cpassword" />

                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-success mt-4" onClick={signUp}>SIGNUP</button>

                        </div>

                        <div className="text-center mt-2">
                            <span>Already have an account? <Link to="/login">login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
