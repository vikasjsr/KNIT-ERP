import React from "react";
import { Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, ThemeSettings } from "../componentsCommon";
import {
  CreateAdmin,
  GetAdmin,
  AddFaculty,
  GetFaculty,
  AddStudent,
  GetStudent,
  AddDepartment,
  AddSubject,
  CreateNotice,
  GetSubject,
  GetNotice,
} from "./pages";

import { useStateContext } from "../../context/contextProvider";
import { links } from "./data/dummy";

const AdminHome = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className="relative flex dark:bg-main-dark-bg overflow-x-hidden">
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
            <Routes>
              {/* manage admin by admin*/}

              <Route path="/createadmin" element={<CreateAdmin />} />
              <Route path="/getadmin" element={<GetAdmin />} />

              {/* manage faculty by admin */}

              <Route path="/addfaculty" element={<AddFaculty />} />
              <Route path="/getfaculty" element={<GetFaculty />} />

              {/* manage students by admin*/}

              <Route path="/addstudent" element={<AddStudent />} />
              <Route path="/getstudent" element={<GetStudent />} />

              {/* manage others by admin */}

              <Route path="/adddepartment" element={<AddDepartment />} />
              <Route path="/addsubject" element={<AddSubject />} />
              <Route path="/createnotice" element={<CreateNotice />} />
              <Route path="/getsubject" element={<GetSubject />} />
              <Route path="/getnotice" element={<GetNotice />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
