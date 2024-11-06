import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [userLogged, setUserLogged] = useState(false);

  // Fetch users when the component loads
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/users/userlist")
      .then((res) => {
        setUsers(res.data.usersList);
        console.log(res.data.usersList);
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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Current Users
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-gray-600">Profile Picture</th>
                <th className="px-4 py-2 text-gray-600">First Name</th>
                <th className="px-4 py-2 text-gray-600">Last Name</th>
                <th className="px-4 py-2 text-gray-600">Email</th>
                <th className="px-4 py-2 text-gray-600">Phone</th>
                <th className="px-4 py-2 text-gray-600">WhatsApp</th>
                <th className="px-4 py-2 text-gray-600">User Type</th>
                <th className="px-4 py-2 text-gray-600">Email Verified</th>
                <th className="px-4 py-2 text-gray-600">Disabled</th>
                <th className="px-4 py-2 text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b">
                  {" "}
                  {/* Use user.id if available */}
                  <td className="px-6 py-4 border-b text-gray-800">
                    {user.image ? (
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    ) : (
                      "No image available"
                    )}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{user.firstName}</td>
                  <td className="px-4 py-2 text-gray-700">{user.lastName}</td>
                  <td className="px-4 py-2 text-gray-700">{user.email}</td>
                  <td className="px-4 py-2 text-gray-700">{user.phone}</td>
                  <td className="px-4 py-2 text-gray-700">{user.whatsapp}</td>
                  <td className="px-4 py-2 text-gray-700">{user.userType}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {user.emailVerified ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    {user.disabled ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    <button
                      onClick={() => {
                        deleteuser(user.firstName);
                      }}
                      className="bg-red-500 rounded-lg px-4 py-1 ml-2 text-white"
                    ></button>
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
