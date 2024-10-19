import UserTag from "../userData/userdata.jsx";

function Header() {
  return (
    <header className="w-full  bg-blue-500 flex h-[100px] relative items-center p-[10px]">
      <h1 className="text-white text-[30px] ">Natural Beauty Villa</h1>
      <UserTag
        imageLink="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg"
        name="Blake 99"
      />
    </header>
  );
}

export default Header;
