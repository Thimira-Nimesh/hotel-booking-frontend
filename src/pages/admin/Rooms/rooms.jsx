import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";

export default function GetRooms() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [isRoomLoaded, setIsRoomLoaded] = useState(false);

  const token = localStorage.getItem("token");
  if (token == null) {
    navigate("/login");
  }

  useEffect(() => {
    if (!isRoomLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/rooms")
        .then((res) => {
          console.log(res.data.roomslist);
          setRooms(res.data.roomslist);
          setIsRoomLoaded(true);
        })
        .catch((err) => {
          toast.error("Error Deleting Room");
        });
    }
  }, [isRoomLoaded]);

  function deleteRoom(roomId) {
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + "/api/rooms/" + roomId, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        toast.success("Room Deleted Successfully..");
        setIsRoomLoaded(false);
      });
  }

  function handlePlusClicked() {
    navigate("/admin/add-rooms");
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <button
        className="w-[60px] h-[60px] rounded-full text-3xl  bg-green-400 flex justify-center items-center text-center fixed bottom-5 right-5"
        onClick={handlePlusClicked}
      >
        <FaPlus color="white" />
      </button>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Rooms List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
              <th className="py-3 px-6 text-left">Room ID</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Max Guests</th>
              <th className="py-3 px-6 text-left">Available</th>
              <th className="py-3 px-6 text-left">Images</th>
              <th className="py-3 px-6 text-left">Special Description</th>
              <th className="py-3 px-6 text-left">Notes</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.roomId} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 text-gray-700">{room.roomId}</td>
                <td className="py-3 px-6 text-gray-700">{room.category}</td>
                <td className="py-3 px-6 text-gray-700">{room.maxGuests}</td>
                <td className="py-3 px-6 text-gray-700">
                  {room.available ? "Yes" : "No"}
                </td>
                <td className="py-3 px-6 text-gray-700">
                  {room.img && room.img.length > 0
                    ? room.img.map((url, index) => (
                        <img
                          key={index}
                          src={url}
                          alt={`Room ${room.roomId}`}
                          className="w-10 h-10 inline-block mr-2 rounded"
                        />
                      ))
                    : "No Image"}
                </td>
                <td className="py-3 px-6 text-gray-700">
                  {room.specialDescription || "N/A"}
                </td>
                <td className="py-3 px-6 text-gray-700">
                  {room.notes || "N/A"}
                </td>
                <td className="py-3 px-6 text-center flex">
                  <Link
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    to={"/admin/update-rooms"}
                    state={room}
                  >
                    <FaEdit />
                  </Link>
                  <button
                    onClick={() => deleteRoom(room.roomId)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
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
  );
}
