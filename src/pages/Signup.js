import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    user_pswd: "",
    employee_tab_id: "",
    created_by: "",
    ip_address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:7174/api/user/register", formData);
      alert("User registered");
      console.log(res.data);
    } catch (err) {
      alert("Registration failed");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Signup</h2>
        <input name="user_id" placeholder="User ID" onChange={handleChange} />
        <input name="user_pswd" placeholder="Password" type="password" onChange={handleChange} />
        <input name="employee_tab_id" placeholder="Employee ID" onChange={handleChange} />
        <input name="created_by" placeholder="Created By" onChange={handleChange} />
        <input name="ip_address" placeholder="IP Address" onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
