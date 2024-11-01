import TestComponent from "./components/test/test.jsx";
import AdminPage from "./pages/admin/AdminHome/adminPage.jsx";
import HomePage from "./pages/client/homePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPages from "./pages/login/loginfinalPage.jsx";
import SignUp from "./pages/signup/signUp.jsx";
import GetRooms from "./pages/admin/Rooms/rooms.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Routes path="/">
        <Route path="/*" element={<HomePage />}></Route>
        <Route path="/admin/*" element={<AdminPage />}></Route>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/clientrooms" element={<GetRooms />} />
        <Route path="/test" element={<TestComponent />} />
        <Route
          path="/*"
          element={<div className="w-full h-[100vh] bg-red-500"></div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
