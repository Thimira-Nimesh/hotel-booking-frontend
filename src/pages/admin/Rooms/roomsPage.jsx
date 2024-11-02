import axios from "axios";
import { useEffect, useState } from "react";
import uploadMedia from "../../../utils/mediaUpload";
import { Navigate } from "react-router-dom";
import e from "cors";
import { getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";

export default function AddRoom() {
  const [roomId, setRoomId] = useState("");
  const [category, setCategory] = useState("");
  const [maxGuests, setMaxGuests] = useState(3);
  const [available, setAvailable] = useState(true);
  const [img, setImg] = useState([]);
  const [specialDescription, setSpecialDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");
  if (token == null) {
    Navigate("/login");
  }

  const handleImageChange = (e) => {
    setImg(e.target.files[0]);
  };

  function handleRoomSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    uploadMedia(img).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);

        const roomDetails = {
          roomId: roomId,
          category: category,
          maxGuests: maxGuests,
          available: available,
          img: url,
          specialDescription: specialDescription,
          notes: notes,
        };

        axios
          .post(import.meta.env.VITE_BACKEND_URL + "/api/rooms", roomDetails, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            console.log(res);
            setIsLoading(false);
          })
          .catch((err) => {
            toast.error("Gallery Adding Error..."), err;
          });
      });
    });
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Room Details
        </h2>
        <form onSubmit={handleRoomSubmit}>
          {/* Room ID */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="roomId"
            >
              Room ID
            </label>
            <input
              id="roomId"
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter room category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* Max Guests */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="maxGuests"
            >
              Maximum Guests
            </label>
            <input
              id="maxGuests"
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter maximum guests"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
            />
          </div>

          {/* Availability */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="available"
            >
              Available
            </label>
            <select
              id="available"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={available}
              onChange={(e) => setAvailable(e.target.value === "true")}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* Images */}
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="img"
            >
              Upload Images
            </label>
            <input
              id="img"
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={handleImageChange}
            />
          </div>

          {/* Special Description */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="specialDescription"
            >
              Special Description
            </label>
            <textarea
              id="specialDescription"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter any special description"
              value={specialDescription}
              onChange={(e) => setSpecialDescription(e.target.value)}
            />
          </div>

          {/* Notes */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="notes"
            >
              Notes
            </label>
            <textarea
              id="notes"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter any additional notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            {isLoading ? (
              <div className="border-t-2 border-t-white w-[20px] min-h-[20px] rounded-full animate-spin  items-center "></div>
            ) : (
              <span>Add Room</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
