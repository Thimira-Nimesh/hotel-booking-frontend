import axios from "axios";
import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
// import LoginPages from "../login/loginfinalPage";

export default function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [whatsapp, setWhatsapp] = useState();
  const [phone, setPhone] = useState();
  const [userType, setUserType] = useState("user");
  const [emailVerified, setEmailVerified] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  if (token == null) {
    navigate("/login");
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  function handleSubmit() {
    e.preventDefault();
    setIsLoading(true);
    console.log("Form Submitted");

    uploadMedia(image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);

        const userInfo = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          image: url,
          whatsapp: whatsapp,
          phone: phone,
          userType: userType,
          emailVerified: emailVerified,
          disabled: disabled,
        };

        axios
          .post(import.meta.env.VITE_BACKEND_URL + "/api/users", userInfo, {
            headers: {
              Authorization: "bearer " + token,
            },
          })
          .then((res) => {
            console.log(res);
            setIsLoading(false);
          });
      });
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your last name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          {/* Image */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="image"
            >
              Upload Profile Picture
            </label>
            <input
              id="image"
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={handleImageChange}
            />
          </div>

          {/* WhatsApp */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="whatsapp"
            >
              WhatsApp
            </label>
            <input
              id="whatsapp"
              type="text"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your WhatsApp number"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          {/* User Type */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="userType"
            >
              User Type
            </label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => {
                setUserType(e.target.value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          {/* Email Verified */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              <input
                id="emailVerified"
                type="checkbox"
                checked={emailVerified}
                onChange={(e) => setEmailVerified(e.target.checked)}
                className="mr-2"
              />
              Email Verified
            </label>
          </div>

          {/* Disabled */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              <input
                id="disabled"
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
                className="mr-2"
              />
              Disabled
            </label>
          </div>

          <button
            className="w-full px-4 mt-4  bg-blue-500 text-white py-2 rounded hover:bg-blue-600 flex justify-center "
            type="submit"
          >
            {isLoading ? (
              <div className="border-t-2 border-t-white w-[20px] min-h-[20px] rounded-full animate-spin  items-center "></div>
            ) : (
              <span>Sign-Up</span>
            )}
          </button>

          <p className="text-center text-gray-500 text-sm mt-4">
            Already have an account? <Link to={"/login"}> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
