import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { username, email, password, mobile } = user;
    if (username && email && password && mobile) {
      axios
        .post("http://localhost:5500/api/auth/register", user)
        .then((res) => console.log(res));
    } else {
      alert("enter all fills");
    }
  };

  return (
    <div>
      <input
        type="email"
        value={user.email}
        name="email"
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        value={user.password}
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={user.username}
        placeholder="username"
      />
      <input
        type="text"
        name="mobile"
        onChange={handleChange}
        value={user.mobile}
        placeholder="mobile"
      />
      <button onClick={register}>Register</button>

      <button>Login</button>
    </div>
  );
}

export default Register;
