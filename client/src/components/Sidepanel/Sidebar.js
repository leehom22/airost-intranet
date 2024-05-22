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
  },
  {
    title: 'Project Tracking',
    path: '/projects/tracking',
    icon: <faicon.FaChartLine/>,
    cName: 'side-text'
  },
  {
    title: 'Events',
    path: '/events',
    icon: <aiicon.AiFillCalendar />,
    cName: 'side-text'
  },
  {
    title: 'Documentation',
    path: '/doc',
    icon: <faicon.FaFilePdf />,
    cName: 'side-text'
  },

  
];