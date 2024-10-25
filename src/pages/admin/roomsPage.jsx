import axios from "axios";
import { useState } from "react";

export default function AddRoom() {
  const [roomId, setRoomId] = useState("");
  const [category, setCategory] = useState("");
  const [maxGuests, setMaxGuests] = useState(3);
  const [available, setAvailable] = useState(true);
  const [img, setImg] = useState("");
  const [specialDescription, setSpecialDescription] = useState("");
  const [notes, setNotes] = useState("");

  function handleRoomSubmit() {
    axios
      .post("http://localhost:5000/api/rooms", {
        roomId: roomId,
        category: category,
        maxGuests: maxGuests,
        available: available,
        img: img.split(","), // assuming comma-separated URLs
        specialDescription: specialDescription,
        notes: notes,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Add Room
        </h2>

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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="img"
          >
            Room Images (comma-separated URLs)
          </label>
          <input
            id="img"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter image URLs"
            value={img}
            onChange={(e) => setImg(e.target.value)}
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
          onClick={handleRoomSubmit}
        >
          Add Room
        </button>
      </div>
    </div>
  );
}
