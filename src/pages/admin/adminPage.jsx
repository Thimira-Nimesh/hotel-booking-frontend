import { Link, Route, Routes } from "react-router-dom";

import { CiBookmarkCheck } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import {
  MdRoomService,
  MdOutlineFeedback,
  MdOutlineCategory,
} from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import AdminBookings from "./bookingsPage";
import AdminCategories from "./categoriesPage";
import AdminRooms from "./roomsPage";
import AdminUsers from "./usersPage";
import AdminFeedback from "./feedbackPage";
import AdminGallery from "./galleryPage";

export default function AdminPage() {
  return (
    <div className="w-full max-h-[100vh] overflow-hidden overflow-y-hidden flex">
      {/* Sidebar */}
      <div className="w-[18%] bg-blue-600 h-[100vh] flex flex-col gap-4 p-6">
        {/* Bookings Link */}
        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <Link to="/admin/bookings" className="flex items-center gap-2">
            {" "}
            <CiBookmarkCheck /> Bookings
          </Link>
        </div>
        {/* Categories Link */}
        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <Link className="flex items-center gap-2" to={"/admin/categories"}>
            <MdOutlineCategory />
            Categories
          </Link>
        </div>
        {/* Rooms Link */}
        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <Link className="flex items-center gap-2" to={"/admin/rooms"}>
            <MdRoomService />
            Rooms
          </Link>
        </div>
        {/* Users Link */}
        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <Link className="flex items-center gap-2" to={"/admin/users"}>
            <BiUser />
            Users
          </Link>
        </div>
        {/* Feedbacks Link */}
        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <Link className="flex items-center gap-2" to={"/admin/feedbacks"}>
            <MdOutlineFeedback />
            Feedbacks
          </Link>
        </div>
        {/* GalleryItems Link */}
        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <Link className="flex items-center gap-2" to={"/admin/gallery"}>
            <CiImageOn />
            GalleryItems
          </Link>
        </div>
      </div>
      {/* Main Content Area */}
      <div className="w-[82%] bg-blue-400 h-[100vh] overflow-y-scroll">
        <Routes path="/">
          <Route path="/bookings" element={<AdminBookings />} />
          <Route path="/categories" element={<AdminCategories />} />
          <Route path="/rooms" element={<AdminRooms />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/feedbacks" element={<AdminFeedback />} />
          <Route path="/gallery" element={<AdminGallery />} />
        </Routes>
      </div>
    </div>
  );
}
