import axios from "axios";
import { useState } from "react";

export default function AdminGallery() {
  const [galleryId, setGalleryId] = useState(0);
  const [name, setName] = useState("");
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState("");

  function handlesubmit() {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/gallery", {
        galleryId: galleryId,
        name: name,
        image: image,
        description: description,
      })
      .then((result) => {
        res.json({
          result,
        });
      })
      .catch((err) => {
        res.json({ err });
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Add Gallery Item
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Gallery ID
        </label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded"
          value={galleryId}
          onChange={(e) => setGalleryId(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {image.map((img, index) => (
        <div className="mb-4" key={index}>
          <label className="block text-gray-700 font-medium mb-2">
            Image URL {index + 1}
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={img}
            onChange={(e) => handleImageChange(index, e.target.value)}
            required
          />
        </div>
      ))}

      <button
        type="button"
        className="w-full mb-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handleAddImageField}
      >
        Add Another Image
      </button>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      <button
        onClick={handlesubmit}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Add Gallery Item
      </button>
    </div>
  );
}
