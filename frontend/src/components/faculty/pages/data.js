
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdPersonRemove } from 'react-icons/md';
import {BsPersonFillAdd} from 'react-icons/bs'
import { IoMdContacts } from 'react-icons/io';
import {GoTasklist} from 'react-icons/go'

export const links = [
    {
      title: 'Manage Students',
      links: [
        {
          name: 'Take Attendence',
          icon: <BsPersonFillAdd />,
          path:'takeattendence'
        },
        {
          name: 'Get Students',
          icon: <GoTasklist />,
          path:'getstudents'
        },
        {
          name: 'Upload Marks',
          icon: <MdPersonRemove />,
          path:'uploadmarks'
        },
      ],
    },
    
  ];