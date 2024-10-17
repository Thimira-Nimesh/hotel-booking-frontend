function UserTag(props) {
  console.log(props);
  const name = props.name;
  return (
    <div>
      <img src={props.imageLink2} style={{ width: "50px" }} />
      <h1>{props.name2}</h1>
    </div>
  );
}
export default UserTag;
