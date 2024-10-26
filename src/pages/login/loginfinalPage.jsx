import { Link, Route, Routes } from "react-router-dom";
import "../login/login.css";
import SignUp from "../signup/signUp";
import { useState } from "react";
import axios from "axios";

export default function LoginPages() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    axios
      .post("http://localhost:5000/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);

        if (res.data.user.userType == "customer") {
          window.location.href = "/";
        } else if (res.data.user.userType == "admin") {
          window.location.href = "/admin";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className=" flex items-center justify-center w-full h-[100vh] pic-bg">
      <div className=" p-8 rounded-lg shadow-lg w-[400px] h-[400px] backdrop-blur-md">
        <h2 className="text-2xl font-semibold text-center text-white mb-6 p-15">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-sm font-medium mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
            defaultValue={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-center text-white text-sm mt-4">
          Don't have an account? <Link to={"/signup"}> Sign up</Link>
        </p>
      </div>
      <Routes path="/">
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
