import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import uploadMedia from "../../../utils/mediaUpload.js";
import { getDownloadURL } from "firebase/storage";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [features, setFeatures] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const token = localStorage.getItem("token");
  if (token == null) {
    Navigate("/login");
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // function handleCategories() {
  //   axios
  //     .post(import.meta.env.VITE_BACKEND_URL + "/api/category", {
  //       name: name,
  //       price: price,
  //       features: features,
  //       description: description,
  //       image: image,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }

  function handlesubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");

    const featuresArray = features.split(",");
    console.log(featuresArray);

    uploadMedia(image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);

        const categoryInfo = {
          name: name,
          price: price,
          features: featuresArray,
          description: description,
          image: url,
        };

        axios
          .post(
            import.meta.env.VITE_BACKEND_URL + "/api/category",
            categoryInfo,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          )
          .then((res) => {
            console.log(res);
          });
      });
    });
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Add Category
        </h2>

        <form onSubmit={handlesubmit}>
          {/* Category Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="name"
            >
              Category Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter category name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter price"
              value={price}
              onChange={(e) => {
                setPrice(Number(e.target.value));
              }}
            />
          </div>

          {/* Features */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="features"
            >
              Features
            </label>
            <textarea
              id="features"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter features (comma separated)"
              value={features}
              onChange={(e) => {
                setFeatures(e.target.value);
              }}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter category description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>

          {/* Image */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="image"
            >
              Add Image
            </label>
            <input
              id="image"
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={handleImageChange}
            />
          </div>

          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}
