import React from "react";
import { Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, ThemeSettings } from "../componentsCommon";
import {
  CreateAdmin,
  GetAdmin,
  DeletAdmin,
  AddFaculty,
  GetFaculty,
  DeleteFaculty,
  AddStudent,
  DeleteStudent,
  GetStudent,
  AddDepartment,
  AddSubject,
  CreateNotice,
  GetSubject,
  GetNotice,
} from "./pages";

import { useStateContext } from "../../context/contextProvider";

import { AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { MdPersonRemove } from 'react-icons/md';
import {BsPersonFillAdd} from 'react-icons/bs'
import { IoMdContacts } from 'react-icons/io';
import {GoTasklist} from 'react-icons/go'

const links = [
  {
    title: 'Manage Admin',
    links: [
      {
        name: 'Create Admin',
        icon: <BsPersonFillAdd />,
        path:'createadmin'
      },
      {
        name: 'Get Admin',
        icon: <GoTasklist />,
        path:'getadmin'
      },
      {
        name: 'Delete Admin',
        icon: <MdPersonRemove />,
        path:'deleteadmin'
      },
    ],
  },
  {
    title: 'Manage Faculty',
    links: [
      {
        name: 'Add Faculty',
        icon: <AiOutlineShoppingCart />,
        path:'addfaculty'
      },
      {
        name: 'Get All Faculty',
        icon: <IoMdContacts />,
        path:'getfaculty'

      },
      {
        name: 'Delete Faculty',
        icon: <IoMdContacts />,
        path:'deletefaculty'
      },
    ],
  },
  {
    title: 'Manage Students',
    links: [
      {
        name: 'Add Student',
        icon: <AiOutlineStock />,
        path:'addstudent'
      },
      {
        name: 'Get Student',
        icon: <AiOutlineAreaChart />,
        path:'getstudent'
      },

      {
        name: 'Delete Student',
        icon: <AiOutlineBarChart />,
        path:'deletestudent'
      },
      
    ],
  },
  {
    title: 'Manage Others',
    links: [
      {
        name: 'Add Department',
        icon: <AiOutlineStock />,
        path:'adddepartment'
      },
      {
        name: 'Add Subject',
        icon: <AiOutlineAreaChart />,
        path:'addsubject'
      },
      {
        name: 'Get Subject',
        icon: <AiOutlineAreaChart />,
        path:'getsubject'
      },
      {
        name: 'Create Notice',
        icon: <AiOutlineBarChart />,
        path:'createnotice'
      },
      {
        name: 'Get Notice',
        icon: <AiOutlineBarChart />,
        path:'getnotice'
      },      
    ],
  },
];

const AdminHome = () => {
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
          <Sidebar links={links}/>
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar links={links}/>
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
              <Route path="/deleteadmin" element={<DeletAdmin />} />

              {/* manage faculty by admin */}

              <Route path="/addfaculty" element={<AddFaculty />} />
              <Route path="/getfaculty" element={<GetFaculty />} />
              <Route path="/deletefaculty" element={<DeleteFaculty />} />

              {/* manage students by admin*/}

              <Route path="/addstudent" element={<AddStudent />} />
              <Route path="/getstudent" element={<GetStudent />} />
              <Route path="/deletestudent" element={<DeleteStudent />} />

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
