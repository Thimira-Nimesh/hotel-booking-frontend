import axios from "axios";
import { useState } from "react";

export default function AddBooking() {
  const [bookingId, setBookingId] = useState("");
  const [roomId, setRoomId] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Pending");
  const [reason, setReason] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [notes, setNotes] = useState("");

  function handleBooking() {
    axios
      .post("http://localhost:5000/api/bookings", {
        bookingId: bookingId,
        roomId: roomId,
        email: email,
        status: status,
        reason: reason,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
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
          Add Booking
        </h2>

        {/* Booking ID */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="bookingId"
          >
            Booking ID
          </label>
          <input
            id="bookingId"
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter booking ID"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
          />
        </div>

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

        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="status"
          >
            Status
          </label>
          <select
            id="status"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Reason */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="reason"
          >
            Reason
          </label>
          <textarea
            id="reason"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        {/* Check-In Date */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="checkInDate"
          >
            Check-In Date
          </label>
          <input
            id="checkInDate"
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>

        {/* Check-Out Date */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="checkOutDate"
          >
            Check-Out Date
          </label>
          <input
            id="checkOutDate"
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="notes"
          >
            Notes
          </label>
          <textarea
            id="notes"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Additional notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleBooking}
        >
          Add Booking
        </button>
      </div>
    </div>
  );
}
