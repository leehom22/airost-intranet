import React from "react";
import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator";
const Card = ({ title, _id, column, handleDragStart, assignee }) => {
    return (
        <>
        <DropIndicator beforeId={_id} column={column} />
        <motion.div
            layout
            layoutId={_id}
            draggable="true"
            onDragStart={(e) => handleDragStart(e, { title, _id, column })}
            className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
        >
            <p className="text-sm text-neutral-100">{title}</p>
            <p className="text-sm text-neutral-100">{assignee}</p>
        </motion.div>
        </>
    );
    };
export default Card;