import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="w-full h-[100vh] bg-red-400">
      <div>
        <Link className="mr-12" to={"/admin/rooms"}>
          Rooms
        </Link>
        <Link to={"/admin/bookings"}>bookings</Link>
      </div>
      <Routes path="/*">
        <Route
          path="/rooms"
          element={
            <div>
              <h1>Rooms Page</h1>
            </div>
          }
        />
        <Route
          path="/bookings"
          element={
            <div>
              <h1>Bookings Page</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
