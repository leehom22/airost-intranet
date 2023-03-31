import React from 'react';
import * as faicon from 'react-icons/fa';
import * as aiicon from 'react-icons/ai';
import * as cgicon from "react-icons/cg";
export const Sidebar = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <cgicon.CgProfile />,
    cName: 'side-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <aiicon.AiFillProject />,
    cName: 'side-text'
  }
];