import Header from "../../components/header/header";
import { Link, Route, Routes } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="w-full bg-green-400 h-[50px]">
        <div className="border border-white"></div>
      </div>
    </>
  );
}
