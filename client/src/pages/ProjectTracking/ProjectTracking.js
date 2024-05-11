import React, { useEffect, useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import axios from 'axios'
import Board from "./components/Board";

export const ProjectTracking = () => {
return (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="h-5/6 w-11/12 rounded-lg bg-neutral-900 text-neutral-50">
        <Board />
        </div>
    </div>
);
};

export default ProjectTracking;