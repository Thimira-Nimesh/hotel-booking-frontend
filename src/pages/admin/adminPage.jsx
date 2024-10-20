import { Link, Route, Routes } from "react-router-dom";
import Rooms from "./roomsPage";
import Bookings from "./bookingsPage";
import Categories from "./categoriesPage";
import { CiBookmarkCheck } from "react-icons/ci";
import {
  BiCategory,
  BiRoom,
  BiUser,
  BiFeedback,
  BiImage,
} from "react-icons/bi";

export default function AdminPage() {
  return (
    <div className="w-full max-h-[100vh] overflow-hidden overflow-y-hidden flex">
      <div className="w-[25%] bg-amber-900 h-[100vh] flex flex-col gap-6 p-4">
        <div className="text-white text-[30px] flex items-center gap-4 hover:text-black hover:font-bold">
          <CiBookmarkCheck />
          <Link to={"/admin/bookings"}>Bookings</Link>
        </div>
        <div className="text-white text-[30px] flex items-center gap-4 hover:text-black hover:font-bold">
          <BiCategory />
          <Link to={"/admin/categories"}>Categories</Link>
        </div>
        <div className="text-white text-[30px] flex items-center gap-4 hover:text-black hover:font-bold">
          <BiRoom />
          <Link to={"/admin/rooms"}>Rooms</Link>
        </div>
        <div className="text-white text-[30px] flex items-center gap-4 hover:text-black hover:font-bold">
          <BiUser />
          <Link to={"/admin/users"}>Users</Link>
        </div>
        <div className="text-white text-[30px] flex items-center gap-4 hover:text-black hover:font-bold">
          <BiFeedback />
          <Link to={"/admin/feedbacks"}>Feedbacks</Link>
        </div>
        <div className="text-white text-[30px] flex items-center gap-4 hover:text-black hover:font-bold">
          <BiImage />
          <Link to={"/admin/galleryItem"}>Gallery Items</Link>
        </div>
      </div>
      <div className="w-[80%] bg-blue-400 h-[100vh]"></div>
    </div>
  );
}
