function UserTag(props) {
  console.log(props);
  const name = props.name;

  return (
    <div className="absolute right-0 flex items-center cursor-pointer mr-8 ">
      <img className="rounded-full w-[75px] h-[75px] " src={props.imageLink} />
      <span className="text-white ml-[5px] text-xl ">{props.name}</span>
    </div>
  );
}
export default UserTag;
