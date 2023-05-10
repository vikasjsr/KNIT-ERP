import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";

import { BsPersonFillAdd } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { GoTasklist } from "react-icons/go";
import avatar from "./avatar.jpg";

export const links = [
  {
    title: "Manage Admin",
    links: [
      {
        name: "Create Admin",
        icon: <BsPersonFillAdd />,
        path: "createadmin",
      },
      {
        name: "Modify Admin",
        icon: <GoTasklist />,
        path: "getadmin",
      },
    ],
  },
  {
    title: "Manage Faculty",
    links: [
      {
        name: "Add Faculty",
        icon: <AiOutlineShoppingCart />,
        path: "addfaculty",
      },
      {
        name: "Modify Faculty",
        icon: <IoMdContacts />,
        path: "getfaculty",
      },
    ],
  },
  {
    title: "Manage Students",
    links: [
      {
        name: "Add Student",
        icon: <AiOutlineStock />,
        path: "addstudent",
      },
      {
        name: "Modify Student",
        icon: <AiOutlineAreaChart />,
        path: "getstudent",
      },
    ],
  },
  {
    title: "Manage Others",
    links: [
      {
        name: "Add Department",
        icon: <AiOutlineStock />,
        path: "adddepartment",
      },
      {
        name: "Add Subject",
        icon: <AiOutlineAreaChart />,
        path: "addsubject",
      },
      {
        name: "Get Subject",
        icon: <AiOutlineAreaChart />,
        path: "getsubject",
      },
      {
        name: "Create Notice",
        icon: <AiOutlineBarChart />,
        path: "createnotice",
      },
      {
        name: "Get Notice",
        icon: <AiOutlineBarChart />,
        path: "getnotice",
      },
    ],
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];
