import { Link } from "react-router-dom";
import "../HomePage/homePage.css";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Main container with a sea view background */}
      <div className="w-full h-[100vh] bg-cover bg-center flex flex-col items-center justify-center text-white pic-bg2">
        {/* Overlay for a slightly darkened effect on the background */}
        <div className="absolute inset-0 bg-black opacity-40 w-full h-screen justify-center items-center top-[100px]"></div>

        {/* Content container to center everything */}
        <div className="relative z-10 flex flex-col items-center space-y-4 justify-center">
          <h1 className="text-4xl font-bold">Welcome to Ocean Serenity Inn </h1>
          <p className="text-lg">Experience luxury and comfort by the sea.</p>

          {/* Buttons for navigation */}
          <div className="flex space-x-4 mt-4">
            <Link to="/aboutus">
              <button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition ease-in-out duration-300">
                About Us
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition ease-in-out duration-300">
                Contact
              </button>
            </Link>
            <Link to="/staff">
              <button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition ease-in-out duration-300">
                Staff
              </button>
            </Link>
            <Link to="/reviews">
              <button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition ease-in-out duration-300">
                Reviews
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
