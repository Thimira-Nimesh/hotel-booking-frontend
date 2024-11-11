import UserTag from "../userData/userdata.jsx";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-blue-600 flex items-center justify-between p-4 sm:p-6 lg:p-8 shadow-lg">
      {/* Hotel Name */}
      <h1 className="text-white text-lg sm:text-2xl lg:text-3xl font-semibold tracking-wide">
        Ocean Serenity Inn
      </h1>

      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* User Tag */}
        <UserTag />
      </div>
    </header>
  );
}

export default Header;
