import UserTag from "../userData/userdata.jsx";

function Header() {
  return (
    <header className="w-full bg-blue-600 h-[100px] flex items-center justify-between px-6 shadow-lg">
      {/* Hotel Name */}
      <h1 className="text-white text-3xl font-semibold tracking-wide">
        Ocean Serenity Inn
      </h1>

      {/* User Tag */}
      <UserTag
        imageLink="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg"
        className="flex items-center space-x-4"
      />
    </header>
  );
}

export default Header;
