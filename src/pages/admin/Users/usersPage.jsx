import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/users/userlist")
      .then((res) => {
        setUsers(res.data.userlist);
        setUserLogged(true);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, [userLogged]);

  function deleteuser(firstName) {
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + "/api/users/" + firstName)
      .then(() => {
        setUserLogged(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 flex flex-col items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl ">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          User Management
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-indigo-500 text-white border-b border-gray-300">
                <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                  Profile
                </th>
                <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                  First Name
                </th>
                <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                  Last Name
                </th>
                <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                  Email
                </th>
                <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                  Phone
                </th>
                <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                  WhatsApp
                </th>
                <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                  User Type
                </th>
                <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                  Verified
                </th>
                <th className="px-6 py-3 text-left font-medium border-r border-gray-300">
                  Disabled
                </th>
                <th className="px-6 py-3 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } border-b border-gray-300`}
                >
                  <td className="px-6 py-4 border-r border-gray-300 flex items-center">
                    {user.image ? (
                      <img
                        src={user.image}
                        alt={user.firstName}
                        className="w-12 h-12 object-cover rounded-full shadow-md"
                      />
                    ) : (
                      <span className="text-gray-400 italic">No image</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                    {user.firstName}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                    {user.lastName}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                    {user.phone}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                    {user.whatsapp}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                    {user.userType}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                    <span
                      className={`${
                        user.emailVerified ? "text-green-500" : "text-red-500"
                      } font-semibold`}
                    >
                      {user.emailVerified ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                    <span
                      className={`${
                        user.disabled ? "text-red-500" : "text-green-500"
                      } font-semibold`}
                    >
                      {user.disabled ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <button
                      onClick={() => deleteuser(user.firstName)}
                      className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
