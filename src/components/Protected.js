import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Protected(props) {
    let Cmp = props.Cmp;
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("auth_token")) {
            navigate("/login");
        }
    },[])

    return (
        <div>
            <Cmp />
        </div>
    )
}

// function Protected({ Cmp }) {
//     const isLoggedIn = localStorage.getItem("auth_token"); // Check if user is logged in
//     return isLoggedIn ? <Cmp /> : <Navigate to="/login" />;
//   }
export default Protected
