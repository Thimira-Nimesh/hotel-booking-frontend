import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaPlus } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function GetGallery() {
  const [gallerylist, setGallerylist] = useState([]);
  const [galleryIsLoaded, setIsGalleryIsLoaded] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  if (token == null) {
    navigate("/login");
  }

  useEffect(() => {
    if (!galleryIsLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/gallery")
        .then((res) => {
          console.log(res.data.gallerylist);
          setGallerylist(res.data.gallerylist);
          setIsGalleryIsLoaded(true);
        });
    }
  }, [galleryIsLoaded]);

  function deleteItem(galleryId) {
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + "/api/gallery/" + galleryId, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        toast.success("Gallery Item Deleted Successfully");
        setIsGalleryIsLoaded(false);
      });
  }

  function handlePlusClicked() {
    navigate("/admin/add-gallery");
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <button
        className="w-[60px] h-[60px] rounded-full text-3xl  bg-green-400 flex justify-center items-center text-center fixed bottom-5 right-5"
        onClick={handlePlusClicked}
      >
        <FaPlus color="white" />
      </button>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Gallery Items
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-4 text-left font-semibold">Gallery ID</th>
              <th className="p-4 text-left font-semibold">Name</th>
              <th className="p-4 text-left font-semibold">Image</th>
              <th className="p-4 text-left font-semibold">Description</th>
              <th className="p-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {gallerylist.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4 text-gray-800">{item.galleryId}</td>
                <td className="p-4 text-gray-800">{item.name}</td>
                <td className="p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded shadow-sm"
                  />
                </td>
                <td className="p-4 text-gray-800">{item.description}</td>
                <td className="px-6 py-4 border-b flex">
                  <Link
                    className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors ml-2"
                    to={"/admin/update-gallery"}
                    state={item}
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition-colors ml-2"
                    onClick={() => deleteItem(item.galleryId)}
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
