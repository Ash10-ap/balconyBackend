import React from "react";
import AdminMenu from "../../Components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <div>
      <div>
        <AdminMenu />
      </div>
      <div>
        <div>
          <h3> Admin Name : {auth?.user?.name}</h3>
          <h3> Admin Email : {auth?.user?.email}</h3>
          <h3> Admin Contact : {auth?.user?.phone}</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
