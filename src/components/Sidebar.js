import React from 'react';
import * as faicon from 'react-icons/fa';
import * as aiicon from 'react-icons/ai';

export const Sidebar = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <aiicon.AiFillHome />,
    cName: 'side-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <faicon.FaCartPlus />,
    cName: 'side-text'
  }
];