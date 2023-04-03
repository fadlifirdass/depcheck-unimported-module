import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import DashboardLogin from "./pages/DashboardLogin";
import ManageAddProduct from "./pages/ManageAddProduct";
import ManageEditProduct from "./pages/ManageEditProduct";
import ManageProducts from "./pages/ManageProducts";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/dashboard" element={<DashboardLogin/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/manageproducts" element={<ManageProducts/>} />
        <Route path="/addproducts" element={<ManageAddProduct/>} />
        <Route path="/manageproducts/edit/:id" element={<ManageEditProduct/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
