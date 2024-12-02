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
import AdminRooms from "../Rooms/roomsPage";
import AdminFeedback from "../feedback/feedbackPage";
import AdminGallery from "../Gallery/galleryPage";
import CategoriesPage from "../categories/categories";
import AddCategory from "../categories/categoriesPage";
import GetGallery from "../Gallery/GalleryList";
import GetRooms from "../Rooms/rooms";
import UpdateCategory from "../categories/updateCategory";
import UpdateGallery from "../Gallery/galleryListUpdate";
import UpdateRoom from "../Rooms/updateRooms";
import ViewUsers from "../Users/usersPage";

export default function AdminPage() {
  return (
    <div className="flex w-full max-h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-[16%] bg-blue-700 h-screen flex flex-col gap-6 p-6 shadow-lg">
        <h2 className="text-white text-2xl font-semibold mb-6">
          Ocean Serenity
        </h2>

        <div className="text-white text-[20px] hover:font-bold flex items-center gap-2">
          <Link to="/admin/bookings" className="flex items-center gap-2">
            {" "}
            <CiBookmarkCheck /> Bookings
          </Link>
        </div>
        {/* Categories Link */}
        <div className="text-white text-[20px] hover:font-bold flex items-center gap-2">
          <Link className="flex items-center gap-2" to={"/admin/categories"}>
            <MdOutlineCategory />
            Categories
          </Link>
        </div>
        {/* Rooms Link */}
        <div className="text-white text-[20px] hover:font-bold flex items-center gap-2">
          <Link className="flex items-center gap-2" to={"/admin/view-rooms"}>
            <MdRoomService />
            Rooms
          </Link>
        </div>
        {/* Users Link */}
        <div className="text-white text-[20px] hover:font-bold flex items-center gap-2">
          <Link className="flex items-center gap-2" to={"/admin/users"}>
            <BiUser />
            Users
          </Link>
        </div>
        {/* Feedbacks Link */}
        <div className="text-white text-[20px] hover:font-bold flex items-center gap-2">
          <Link className="flex items-center gap-2" to={"/admin/feedbacks"}>
            <MdOutlineFeedback />
            Feedbacks
          </Link>
        </div>
        {/* GalleryItems Link */}
        <div className="text-white text-[20px] hover:font-bold flex items-center gap-2">
          <Link className="flex items-center gap-2" to={"/admin/view-gallery"}>
            <CiImageOn />
            GalleryItems
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-[82%] bg-gray-100 h-screen overflow-y-auto p-6">
        <Routes>
          <Route path="/bookings" element={<AdminBookings />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/add-categories" element={<AddCategory />} />
          <Route path="/update-categories" element={<UpdateCategory />} />
          <Route path="/add-rooms" element={<AdminRooms />} />
          <Route path="/view-rooms" element={<GetRooms />} />
          <Route path="/update-rooms" element={<UpdateRoom />} />
          <Route path="/users" element={<ViewUsers />} />
          <Route path="/feedbacks" element={<AdminFeedback />} />
          <Route path="/add-gallery" element={<AdminGallery />} />
          <Route path="/view-gallery" element={<GetGallery />} />
          <Route path="/update-gallery" element={<UpdateGallery />} />
        </Routes>
      </div>
    </div>
  );
}
