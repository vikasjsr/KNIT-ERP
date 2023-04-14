import React from "react";
import { Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, ThemeSettings } from "../componentsCommon";

import { useStateContext } from "../../context/contextProvider";

import TakeAttendence from "./pages/TakeAttendence";
import { GetStudent } from "../admin/pages";
import UploadMarks from "./pages/UploadMarks";
import { links } from "./pages/data";

const FacultyHome = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className="relative flex dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            className="p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray"
            style={{ background: "#0284c7", borderRadius: "50%" }}
            onClick={() => setThemeSettings(true)}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className="fixed bg-white w-72 sidebar dark:bg-secondary-dark-bg ">
          <Sidebar links={links} />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar links={links} />
        </div>
      )}

      <div
        className={`dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full
              ${activeMenu ? "md:ml-72" : "flex-2"}`}
      >
        <div className="fixed w-full md:static bg-main-bg dark:bg-main-dark-bg navbar ">
          <Navbar />
        </div>

        <div>
          <div>
            {themeSettings && <ThemeSettings />}
            This is faculty page
            
            <Routes>



              {/* <Route path="/takeattendence" element={<TakeAttendence />} />
              <Route path="/uploadmarks" element={<UploadMarks />} /> */}
              {/* <Route path="/getstudents" element={<GetStudent />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyHome;
