// import React, { useState } from "react";
// import axios from "axios";
// function Login({ setLoginUser }) {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };
//   const login = () => {
//     const { email, password } = user;
//     if (email && password) {
//       axios.post("http://localhost:5500/api/auth/login", user).then((res) => {
//         console.log(res);
//         alert(res.data.message);
//         setLoginUser(res.data.user);
//       });
//     } else {
//       alert("enter all fills");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="email"
//         value={user.email}
//         name="email"
//         onChange={handleChange}
//         placeholder="email"
//       />
//       <input
//         type="password"
//         value={user.password}
//         name="password"
//         placeholder="password"
//         onChange={handleChange}
//       />

//       <button onClick={login}>Login</button>
//       <button>Register</button>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const history = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:5500/api/auth/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history("/");
    });
  };

  return (
    <div className="login">
      <form action="">
        <h1>Login</h1>

        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        ></input>
        <button className="button" onClick={login}>
          Login
        </button>
        <div>or</div>
        <button className="button" onClick={() => history("/register")}>
          Register
        </button>
      </form>
      {/* <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <button className="button" onClick={login}>
        Login
      </button>
      <div>or</div>
      <button className="button" onClick={() => history("/register")}>
        Register
      </button> */}
    </div>
  );
};

export default Login;
