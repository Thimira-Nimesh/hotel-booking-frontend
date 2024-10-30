import axios from "axios";
import { useEffect, useState } from "react";
import uploadMedia from "../../../utils/mediaUpload";

export default function AddRoom() {
  const [roomId, setRoomId] = useState("");
  const [category, setCategory] = useState("");
  const [maxGuests, setMaxGuests] = useState(3);
  const [available, setAvailable] = useState(true);
  const [img, setImg] = useState([]);
  const [specialDescription, setSpecialDescription] = useState("");
  const [notes, setNotes] = useState("");

  const handleRoomSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload images if there are any
      const uploadedImages = await Promise.all(
        img.map(async (file) => {
          const imageUrl = await uploadMedia(file);
          return imageUrl;
        })
      );

      // Send room data to the backend
      await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/rooms", {
        roomId,
        category,
        maxGuests,
        available,
        img: uploadedImages,
        specialDescription,
        notes,
      });

      alert("Room added successfully!");

      // Reset form fields
      setRoomId("");
      setCategory("");
      setMaxGuests(3);
      setAvailable(true);
      setImg([]);
      setSpecialDescription("");
      setNotes("");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to add room.");
    }
  };

  const handleImageChange = (e) => {
    setImg(Array.from(e.target.files));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <form
        onSubmit={handleRoomSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-[500px]"
      >
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
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            required
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter room category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter maximum guests"
            value={maxGuests}
            onChange={(e) => setMaxGuests(Number(e.target.value))}
            required
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={available}
            onChange={(e) => setAvailable(e.target.value === "true")}
            required
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
            Room Images
          </label>
          <input
            id="img"
            type="file"
            multiple
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleImageChange}
            required
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter any special description"
            value={specialDescription}
            onChange={(e) => setSpecialDescription(e.target.value)}
            required
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter any additional notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Room
        </button>
      </form>
    </div>
  );
}
