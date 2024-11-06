import UserTag from "../userData/userdata.jsx";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-blue-600 h-[100px] flex items-center justify-between px-6 shadow-lg">
      {/* Hotel Name */}
      <h1 className="text-white text-3xl font-semibold tracking-wide">
        Ocean Serenity Inn
      </h1>

      <div className="flex items-center space-x-4">
        {/* Login Button */}

        {/* User Tag */}
        <UserTag />
      </div>
    </header>
  );
}

export default Header;
