import { Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";
import Dashboard from "./AdminPanel/Dashboard";
import AddProduct from "./AdminPanel/AddProduct";
import ViewProduct from "./AdminPanel/ViewProduct";
import UpdateProduct from "./AdminPanel/UpdateProduct";
import AdminSearch from "./AdminPanel/AdminSearch";
import AdminNavbar from "./AdminPanel/AdminNavbar";
import Sidebar from "./AdminPanel/Sidebar";

const AdminLayout = () => {
    return (
        <div className="admin-container mt-5">
            <AdminNavbar />
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <Routes>
                        <Route path="/" element={<Protected Cmp={Dashboard} />} />
                        <Route path="/addproduct" element={<Protected Cmp={AddProduct} />} />
                        <Route path="/viewproduct" element={<Protected Cmp={ViewProduct} />} />
                        <Route path="/updateproduct/:id" element={<Protected Cmp={UpdateProduct} />} />
                        <Route path="/adminsearch" element={<Protected Cmp={AdminSearch} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
