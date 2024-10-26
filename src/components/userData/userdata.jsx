import axios from "axios";
import { useState } from "react";

function UserTag(props) {
  const [name, setName] = useState("");

  const token = localStorage.getItem("token");

  if (token != null) {
    console.log(token);
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/users/", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setName(res.data.user.firstName);
      });
  }

  return (
    <div className="absolute right-0 flex items-center cursor-pointer mr-8 ">
      <img className="rounded-full w-[75px] h-[75px] " src={props.imageLink} />
      <span className="text-white ml-[5px] text-xl ">{name}</span>
    </div>
  );
}
export default UserTag;
