import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
// new changes
const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");




  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://localhost:7174/api/user/login", {
        user_tab_id: 0,
        user_id: userId,
        user_pswd: password,
        employee_tab_id: "string",
      created_by: "string",
      ip_address: "string"
      });
      alert("Login successful");
      console.log(res.data);
    } catch (err) {
      alert("Login failed");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
