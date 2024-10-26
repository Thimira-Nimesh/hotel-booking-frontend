import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [categoryIsLoaded, setCategoryIsLoaded] = useState(false);

  useEffect(() => {
    if (!categoryIsLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/category")
        .then((res) => {
          console.log(res);
          setCategories(res.data.categories);
          setCategoryIsLoaded(true);
        });
    }
  }, [categoryIsLoaded]);

  function deleteItem(name) {
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + "/api/category/" + name)
      .then(() => {
        setCategoryIsLoaded(false);
      });
  }

  return (
    <div>
      <h2>Categories</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Features</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.name}>
              <td>{category.name}</td>
              <td>{category.price}</td>
              <td>
                {category.features && category.features.length > 0 ? (
                  <ul>
                    {category.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                ) : (
                  "No features available"
                )}
              </td>
              <td>{category.description}</td>
              <td>
                {category.image ? (
                  <img src={category.image} alt={category.name} width="50" />
                ) : (
                  "No image available"
                )}
              </td>
              <td>
                <button onClick={() => deleteItem(category.name)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
