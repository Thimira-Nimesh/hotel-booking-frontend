import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserTag({ id, imageLink }) {
  const [name, setName] = useState("");
  const [userFound, setUserFound] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setName(res.data.user.firstName);
          setUserFound(true);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setUserFound(false);
        });
    }
  }, [id]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserFound(false);
    setName("");
  };

  return (
    <div className="flex sm:flex-row sm:absolute sm:right-8 items-center sm:space-x-4 bg-blue-600 p-3 rounded-lg shadow-md">
      <img
        className="rounded-full w-12 h-12 sm:w-16 sm:h-16 border-2 border-white"
        src={imageLink || "/default-avatar.png"}
        alt="User Profile"
      />
      <div className="flex sm:flex-row items-center mt-2 sm:mt-0">
        <span className="text-white text-base sm:text-lg font-semibold">
          {name || "Guest"}
        </span>
        {userFound ? (
          <button
            onClick={handleLogout}
            className="text-white bg-blue-500 hover:bg-blue-700 transition duration-300 py-1 px-3 sm:py-2 sm:px-4 rounded-md mt-2 sm:mt-0 sm:ml-4"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="text-white bg-blue-500 hover:bg-blue-700 transition duration-300 py-1 px-3 sm:py-2 sm:px-4 rounded-md mt-2 sm:mt-0 sm:ml-4">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="text-white bg-blue-500 hover:bg-blue-700 transition duration-300 py-1 px-3 sm:py-2 sm:px-4 rounded-md mt-2 sm:mt-0 sm:ml-4">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default UserTag;
