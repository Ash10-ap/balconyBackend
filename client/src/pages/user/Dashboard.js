import React from "react";
import { useAuth } from "../../context/auth";
import UserMenu from "../../Components/Layout/UserMenu";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <div>
      <div>
        <div>
          <UserMenu />
        </div>
        <div>
          <h3>{auth?.user?.name}</h3>
          <h3>{auth?.user?.email}</h3>
          <h3>{auth?.user?.address}</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
