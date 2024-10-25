import axios from "axios";
import { useState } from "react";

export default function AddFeedback() {
  const [feedbackId, setFeedbackId] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  function handleFeedback() {
    axios
      .post("http://localhost:5000/api/feedback", {
        feedbackId: feedbackId,
        userId: userId,
        userName: userName,
        feedbackText: feedbackText,
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
          Add Feedback
        </h2>

        {/* Feedback ID */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="feedbackId"
          >
            Feedback ID
          </label>
          <input
            id="feedbackId"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter feedback ID"
            value={feedbackId}
            onChange={(e) => setFeedbackId(e.target.value)}
          />
        </div>

        {/* User ID */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="userId"
          >
            User ID
          </label>
          <input
            id="userId"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter user ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>

        {/* User Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="userName"
          >
            User Name
          </label>
          <input
            id="userName"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        {/* Feedback Text */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="feedbackText"
          >
            Feedback Text
          </label>
          <textarea
            id="feedbackText"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your feedback"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleFeedback}
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
}
