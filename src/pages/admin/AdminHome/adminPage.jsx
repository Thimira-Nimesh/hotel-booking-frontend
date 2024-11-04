import { Link, Route, Routes } from "react-router-dom";

import { CiBookmarkCheck } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import {
  MdRoomService,
  MdOutlineFeedback,
  MdOutlineCategory,
} from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import AdminBookings from "../Bookings/bookingsPage";
import AdminCategories from "../categories/categoriesPage";
import AdminRooms from "../Rooms/roomsPage";
import AdminUsers from "../Users/usersPage";
import AdminFeedback from "../feedback/feedbackPage";
import AdminGallery from "../Gallery/galleryPage";
import CategoriesPage from "../categories/categories";
import AddCategory from "../categories/categoriesPage";
import GetGallery from "../Gallery/GalleryList";
import GetRooms from "../Rooms/rooms";
import UpdateCategory from "../categories/updateCategory";
import UpdateGallery from "../Gallery/galleryListUpdate";
import UpdateRoom from "../Rooms/updateRooms";

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
          <Link className="flex items-center gap-2" to={"/admin/view-rooms"}>
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
          <Link className="flex items-center gap-2" to={"/admin/view-gallery"}>
            <CiImageOn />
            GalleryItems
          </Link>
        </div>
      </div>
      {/* Main Content Area */}
      <div className="w-[82%] bg-blue-400 h-[100vh] overflow-y-scroll">
        <Routes path="/">
          <Route path="/bookings" element={<AdminBookings />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/add-categories" element={<AddCategory />} />
          <Route path="/update-categories" element={<UpdateCategory />} />
          <Route path="/add-rooms" element={<AdminRooms />} />
          <Route path="/view-rooms" element={<GetRooms />} />
          <Route path="/update-rooms" element={<UpdateRoom />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/feedbacks" element={<AdminFeedback />} />
          <Route path="/add-gallery" element={<AdminGallery />} />
          <Route path="/view-gallery" element={<GetGallery />} />
          <Route path="/update-gallery" element={<UpdateGallery />} />
        </Routes>
      </div>
    </div>
  );
}
