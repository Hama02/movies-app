import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      setError(null);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, ...loginData } = inputs;
      await login(loginData);
      setError(null);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  const togglerHandler = (event) => {
    if (event.target.id === "login") {
      event.target.style.color = "#ff4350";
      document.getElementById("signup").style.color = "white";
      document.querySelector(".login").style.display = "flex";
      document.querySelector(".signup").style.display = "none";
    } else {
      event.target.style.color = "#ff4350";
      document.getElementById("login").style.color = "white";
      document.querySelector(".login").style.display = "none";
      document.querySelector(".signup").style.display = "flex";
    }
  };

  return (
    <div className="user">
      <div className="container">
        <form>
          <div className="selector">
            <h3 id="login" onClick={(e) => togglerHandler(e)}>
              Login
            </h3>
            <h3 style={{ color: "#ff4350" }}>|</h3>
            <h3 id="signup" onClick={(e) => togglerHandler(e)}>
              Sign Up
            </h3>
          </div>
          <div className="info login">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <h3>Forget Password</h3>
          </div>
          <div className="info signup" style={{ display: "none" }}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button type="submit" onClick={handleRegister}>
              Sign Up
            </button>
          </div>
          {err && <p style={{ color: "#ff4350" }}>{err}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
