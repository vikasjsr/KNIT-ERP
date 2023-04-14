import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./context/contextProvider";
import MainHome from "./components/MainHome";
import Login from "./components/login/Login";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Test from "./test/Test";
import AdminHome from "./components/admin/AdminHome";
import FacultyHome from "./components/faculty/FacultyHome";
import StudentHome from "./components/student/StudentHome";
import AxiosInstance from "./utils/axios";

const App = () => {

  useEffect(() => {
    if(window.location.pathname === "/login") return;
    (async () => {
      try{
        const resp = await AxiosInstance.get("/api/v1/me");
      // console.log(resp.status)
      }
      catch(err){
        console.log("Not logged in")
        window.location.pathname = "/login";

      }
    })()
  }, []);

  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          {/* Main Home page */}
          <Route path="/" element={<MainHome />} />

          {/* login route */}
          <Route path="/login" element={<Login />} />

          {/* Admin Route */}

          <Route path="/dashboard/admin/*" element={<AdminHome />} />

          <Route path="/dashboard/faculty/*" element={<FacultyHome />} />

          <Route path="/dashboard/student/*" element={<StudentHome />} />

          <Route path="/test" element={<Test />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
