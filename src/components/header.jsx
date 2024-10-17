import UserTag from "./userdata.jsx";
function Header() {
  return (
    <header>
      <h1>Hotel management System Frontend</h1>
      <UserTag
        imageLink="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg"
        name="testing"
      />
      <UserTag
        imageLink2="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
        name2="testing"
      />
      <UserTag
        imageLink3="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg"
        name3="testing"
      />
      <UserTag
        imageLink4="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg"
        name4="testing"
      />
    </header>
  );
}

export default Header;
