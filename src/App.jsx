import TestComponent from "./components/test/test.jsx";
import AdminPage from "./pages/admin/adminPage.jsx";
import HomePage from "./pages/client/homePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPages from "./pages/login/loginfinalPage.jsx";
import SignUp from "./pages/signup/signUp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route path="/*" element={<HomePage />}></Route>
        <Route path="/admin/*" element={<AdminPage />}></Route>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/signup" element={<SignUp />} />
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
