import Header from "../../components/header/header";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./loginPage";
import Register from "./registerPage";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="w-full bg-green-400 h-[50px]">
        <div className="border border-white">
          <Link className="mr-12" to={"/login"}>
            Login
          </Link>
          <Link to={"/register"}>Register</Link>
        </div>
        <Routes path={"/*"}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}
