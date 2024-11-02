import axios from "axios";
import e from "cors";
import { useState } from "react";
import { Form, Navigate } from "react-router-dom";
import uploadMedia from "../../../utils/mediaUpload";
import { getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";

export default function AdminGallery() {
  const [galleryId, setGalleryId] = useState(0);
  const [name, setName] = useState("");
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");
  if (token == null) {
    Navigate("/login");
  }

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  function handlesubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    uploadMedia(image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);

        const galleryInfo = {
          galleryId: galleryId,
          name: name,
          image: url,
          description: description,
        };

        axios
          .post(
            import.meta.env.VITE_BACKEND_URL + "/api/gallery",
            galleryInfo,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          )
          .then((res) => {
            console.log(res);
            setIsLoading(false);
            toast.success("Gallery Created Successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add Gallery Item
        </h2>
        <form onSubmit={handlesubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Gallery ID
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              value={galleryId}
              onChange={(e) => setGalleryId(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Add Image
            </label>
            <input
              id="image"
              type="file"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              onChange={handleImage}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex items-center justify-center"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="border-t-2 border-t-white w-5 h-5 rounded-full animate-spin"></div>
            ) : (
              <span>Add Gallery</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
