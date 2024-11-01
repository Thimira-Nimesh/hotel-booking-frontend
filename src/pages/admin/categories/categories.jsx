import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CategoriesPage() {
  const token = localStorage.getItem("token");

  if (token == null) {
    window.location.href = "/login";
  }

  const [categories, setCategories] = useState([]);
  const [categoryIsLoaded, setCategoryIsLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!categoryIsLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/category")
        .then((res) => {
          console.log(res.data.categories);
          setCategories(res.data.categories);
          setCategoryIsLoaded(true);
        })
        .catch((err) => {
          toast.error("Error Deleting Category");
        });
    }
  }, [categoryIsLoaded]);

  function deleteItem(name) {
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + "/api/category/" + name, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        toast.success("Category Deleted Successfully");
        setCategoryIsLoaded(false);
      });
  }

  function handlePlusClicked() {
    // window.location.href = "/admin/add-categories";
    navigate("/admin/add-categories");
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <button
        className="w-[60px] h-[60px] rounded-full text-3xl  bg-green-400 flex justify-center items-center text-center fixed bottom-5 right-5"
        onClick={handlePlusClicked}
      >
        <FaPlus color="white" />
      </button>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Categories</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-700 bg-white border border-gray-200">
          <thead className="bg-gray-50 text-gray-700 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4 border-b">Name</th>
              <th className="px-6 py-4 border-b">Price</th>
              <th className="px-6 py-4 border-b">Features</th>
              <th className="px-6 py-4 border-b">Description</th>
              <th className="px-6 py-4 border-b">Image</th>
              <th className="px-6 py-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 border-b text-gray-800">
                  {category.name}
                </td>
                <td className="px-6 py-4 border-b text-gray-800">
                  {category.price}
                </td>
                <td className="px-6 py-4 border-b text-gray-800">
                  {category.features && category.features.length > 0 ? (
                    <ul className="list-disc pl-4">
                      {category.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  ) : (
                    "No features available"
                  )}
                </td>
                <td className="px-6 py-4 border-b text-gray-800">
                  {category.description}
                </td>
                <td className="px-6 py-4 border-b text-gray-800">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                  ) : (
                    "No image available"
                  )}
                </td>
                <td className="px-6 py-4 border-b">
                  <button
                    className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition-colors"
                    onClick={() => deleteItem(category.name)}
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
