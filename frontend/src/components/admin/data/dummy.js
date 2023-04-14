import React from 'react';
import { AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { MdPersonRemove } from 'react-icons/md';
import {BsPersonFillAdd} from 'react-icons/bs'
import { IoMdContacts } from 'react-icons/io';
import {GoTasklist} from 'react-icons/go'
import avatar from './avatar.jpg'
import { GrLocation } from 'react-icons/gr';

export const links = [
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

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar,
  }
]

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);


export const employeesGrid = [
  { headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry },

  { field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center' },
  { field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center' },
];
