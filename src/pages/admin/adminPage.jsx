import { Link, Route, Routes } from "react-router-dom";
import Rooms from "./roomsPage";
import Bookings from "./bookingsPage";
import Categories from "./categoriesPage";

export default function AdminPage() {
  return (
    <div className="w-full h-[100vh] bg-red-400">
      <div>
        <Link className="mr-12" to={"/admin/rooms"}>
          Rooms
        </Link>
        <Link className="mr-12" to={"/admin/bookings"}>
          bookings
        </Link>
        <Link to={"/admin/categories"}>categories</Link>
      </div>
      <Routes path="/*">
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
