import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebLayout from "./WebLayout";
import AdminLayout from "./AdminLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Normal Website Routes */}
          <Route path="/*" element={<WebLayout />} />

          {/* Admin Dashboard Routes */}
          <Route path="/admin/*" element={<AdminLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Product from './components/Product';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Dashboard from './AdminPanel/Dashboard';
// import Protected from './components/Protected';
// import AddProduct from './AdminPanel/AddProduct';
// import ViewProduct from './AdminPanel/ViewProduct';
// import UpdateProduct from './AdminPanel/UpdateProduct';
// import AdminSearch from './AdminPanel/AdminSearch';
// import AdminNavbar from './AdminPanel/AdminNavbar';
// import Sidebar from './AdminPanel/Sidebar';

// function App() {
//   return (
//     <div className="App">
//       <div className="">
//         <Router>
//           <Routes>
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             {/* Protected Routes */}
//             <Route path="/home" element={<Protected Cmp={Home} />} />
//             <Route path="/product" element={<Protected Cmp={Product} />} />
//             <Route path="/about" element={<Protected Cmp={About} />} />
//             <Route path="/contact" element={<Protected Cmp={Contact} />} />
//           </Routes>
//         </Router>
//       </div>

//       <div className="mt-5">
//         <Router>
//           <AdminNavbar />
//           <div className="row">
//             <div className="col-md-2">
//               <Sidebar />
//             </div>
//             <div className="col-md-10">
//               <Routes>
//                 {/* Dashboard */}
//                 <Route path="/dashboard" element={<Protected Cmp={Dashboard} />} />
//                 <Route path="/addproduct" element={<Protected Cmp={AddProduct} />} />
//                 <Route path="/viewproduct" element={<Protected Cmp={ViewProduct} />} />
//                 <Route path={"/updateproduct/:id"} element={<Protected Cmp={UpdateProduct} />} />
//                 <Route path="/adminsearch" element={<Protected Cmp={AdminSearch} />} />
//               </Routes>
//             </div>
//           </div>
//         </Router>
//       </div>
//     </div>
//   );
// }

// export default App;
