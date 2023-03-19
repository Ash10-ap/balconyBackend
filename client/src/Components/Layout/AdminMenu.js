import React from "react";
import { NavLink, Link } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div>
        <div>
          <h4>Admin Panel</h4>
          <Link to="/dashboard/admin/create-category">Create Category</Link>
          <NavLink to="/dashboard/admin/create-product">Create Product</NavLink>
          <NavLink to="/dashboard/admin/products">Products</NavLink>
          <NavLink to="/dashboard/admin/orders">Orders</NavLink>
          <NavLink to="/dashboard/admin/users"> Users </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
