import { Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ViewProduct from "./components/ViewProduct";
import Profile from "./components/Profile";

const WebLayout = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Protected Cmp={Home} />} />
            <Route path="/product" element={<Protected Cmp={Product} />} />
            <Route path="/viewproduct/:id" element={<Protected Cmp={ViewProduct} />} />
            <Route path="/cart" element={<Protected Cmp={Cart} />} />
            <Route path="/checkout" element={<Protected Cmp={Checkout} />} />
            <Route path="/about" element={<Protected Cmp={About} />} />
            <Route path="/contact" element={<Protected Cmp={Contact} />} />
            <Route path="/profile" element={<Protected Cmp={Profile} />} />
        </Routes>
    );
};

export default WebLayout;
