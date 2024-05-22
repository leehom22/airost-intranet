import React from "react";
import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator";
import CardDetailsModal from "./CardDetailsModal";
import { BsPersonCircle } from "react-icons/bs";
import moment from "moment/moment";
import consts from "../../../consts/consts";
const Card = ({ handleDragStart, card }) => {
    const priorityConsts = consts.priorityConsts;
    return (
        <>
        <DropIndicator beforeId={card._id} column={card.column} />
        <motion.div
            layout
            layoutId={card._id}
            draggable="true"
            onDragStart={(e) => handleDragStart(e, card)}
            onClick={()=>document.getElementById(`card-modal-${card._id}`).showModal()}
            className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing flex flex-col gap-1"
        >
            <p className="text-sm text-neutral-100">{card.title}</p>
            <div className="flex flex-row gap-1">
                <p className={"text-xs w-min text-neutral-100 rounded-lg p-1 bg-neutral-900 text-neutral-400"}>
                    {moment(card.dueDate).format("DD/MM/YYYY")}
                </p>
                {/* <div className="badge badge-ghost">{moment(card.dueDate).format("DD/MM/YYYY")}</div> */}
                <p className={`text-xs w-min text-neutral-100 rounded-lg p-1 ${priorityConsts[card.priority]?.bgColor}`}>
                    {priorityConsts[card.priority]?.text}
                </p>
            </div>
            <p className="text-xs text-neutral-400 flex flex-row gap-1 items-center"><BsPersonCircle/>{card.assignee}</p>
        </motion.div>
        <CardDetailsModal card={card}/>
        </>
    );
    };
export default Card;