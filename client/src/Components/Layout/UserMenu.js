import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div>
        <div>
          <h4>Dashboard</h4>
          <NavLink to="/dashboard/user/profile">Profile</NavLink>
          <NavLink to="/dashboard/user/orders">Orders</NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
