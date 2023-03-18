import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./Components/Account";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Blog from "./Components/Blog";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import ProductDetail from "./Components/ProductDetail";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./Components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./Components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import AdminOrders from "./pages/Admin/AdminOrders";
import CategoryProduct from "./Components/CategoryProduct";
import Search from "./Components/Search";
import Types from "./Components/Types";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/types/:type" element={<Types />} />
          <Route path="/types/:type/:cat" element={<Types />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forgot-password" element={<ForgotPasssword />} />
          <Route path="/category/:slug" element={<CategoryProduct />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
            <Route path="user/orders" element={<Orders />} />
            <Route path="user/profile" element={<Profile />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-category" element={<CreateCategory />} />
            <Route path="admin/create-product" element={<CreateProduct />} />
            <Route path="admin/product/:slug" element={<UpdateProduct />} />
            <Route path="admin/products" element={<Products />} />
            <Route path="admin/users" element={<Users />} />
            <Route path="admin/orders" element={<AdminOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
