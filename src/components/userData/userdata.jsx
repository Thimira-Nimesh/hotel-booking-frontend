import axios from "axios";
import { useState, useEffect } from "react";

function UserTag(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [userFound, setUserFound] = useState(false);

  useEffect(
    (id) => {
      const token = localStorage.getItem("token");
      if (token != null) {
        axios
          .get(import.meta.env.VITE_BACKEND_URL + "/api/users/" + id, {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
            console.log(res.data.user.firstName);

            setName(res.data.user.firstName);
            setUserFound(true);
          });
      } else {
        setName("");
      }
    },
    [userFound]
  );

  return (
    <div className="absolute right-8 flex items-center space-x-4 bg-blue-600 p-3 rounded-lg shadow-md">
      <img
        className="rounded-full w-16 h-16 border-2 border-white"
        src={props.imageLink}
        alt="User Profile"
      />
      <div className="flex flex-raw items-center">
        <span className="text-white text-lg font-semibold">
          {name || "Guest"}
        </span>
        {userFound && (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setUserFound(false);
            }}
            className="text-blue-200 hover:text-white hover:bg-blue-700 transition-colors px-3 py-1 mt-1 rounded-lg text-sm font-medium ml-5"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default UserTag;
