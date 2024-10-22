const bookings = [
  {
    bookingId: 1,
    roomId: 101,
    email: "guest1@example.com",
    status: "Confirmed",
    reason: "Vacation",
    checkInDate: new Date("2024-10-22"),
    checkOutDate: new Date("2024-10-25"),
    notes: "Late check-in requested",
    timestamp: new Date("2024-10-20T10:00:00Z"),
  },
  {
    bookingId: 2,
    roomId: 102,
    email: "guest2@example.com",
    status: "Pending",
    reason: "Business trip",
    checkInDate: new Date("2024-11-01"),
    checkOutDate: new Date("2024-11-05"),
    notes: "Need airport transfer",
    timestamp: new Date("2024-10-21T12:30:00Z"),
  },
  {
    bookingId: 3,
    roomId: 103,
    email: "guest3@example.com",
    status: "Cancelled",
    reason: "Health issues",
    checkInDate: new Date("2024-10-30"),
    checkOutDate: new Date("2024-11-03"),
    notes: "Cancelled by guest",
    timestamp: new Date("2024-10-19T14:45:00Z"),
  },
  {
    bookingId: 4,
    roomId: 104,
    email: "guest4@example.com",
    status: "Confirmed",
    reason: "Honeymoon",
    checkInDate: new Date("2024-12-15"),
    checkOutDate: new Date("2024-12-20"),
    notes: "Sea view room requested",
    timestamp: new Date("2024-10-22T16:00:00Z"),
  },
];

export default function AdminBookings() {
  return (
    <>
      <div className="w-full">
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Booking Id</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">
                Check-in Date
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Check-out Date
              </th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Reason</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => {
              return (
                <tr key={index}>
                  <td>{booking.bookingId}</td>
                  <td>{booking.email}</td>
                  <td>{booking.checkInDate.toDateString()}</td>
                  <td>{booking.checkOutDate.toDateString()}</td>
                  <td>{booking.status}</td>
                  <td>{booking.reason}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
