import React, { useState } from "react";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

function Account() {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <h1>Register</h1>
      <Register />
    </div>
  );
}

export default Account;
