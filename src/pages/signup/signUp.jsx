import axios from "axios";
import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
// import LoginPages from "../login/loginfinalPage";
import "../signup/signup.css";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-900 pic-bg3">
      <div className="absolute inset-0 bg-black opacity-40 w-full h-[830px] justify-center items-center"></div>
      <div className="backdrop-blur-md p-8 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              placeholder="Enter your first name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              placeholder="Enter your last name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2">
              Upload Profile Picture
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
            />
          </div>

          {/* <div className="flex justify-between mb-4">
            <label className="text-white text-sm font-medium flex items-center">
              <input
                type="checkbox"
                checked={emailVerified}
                onChange={(e) => setEmailVerified(e.target.checked)}
                className="mr-2"
              />
              Email Verified
            </label>
            <label className="text-white text-sm font-medium flex items-center">
              <input
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
                className="mr-2"
              />
              Disabled
            </label>
          </div> */}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {isLoading ? (
              <div className="border-t-2 border-t-white w-[20px] h-[20px] rounded-full animate-spin"></div>
            ) : (
              "Sign-Up"
            )}
          </button>

          <p className="text-center text-white text-sm mt-4">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-400">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
