import Header from "../../components/header/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="w-full h-screen bg-blue-700 flex flex-col items-center">
        <div className="border border-white bg-white h-[100px] w-[700px] rounded-lg flex justify-center items-center">
          <input className="" type="date"></input>
          <input type="date"></input>
          <select>
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Luxery</option>
          </select>
          <button>Book Now</button>
        </div>
        <h1 className="text-white text-[50px]">
          Welcome to the Natural Beauty Villa
        </h1>
      </div>
    </>
  );
}
