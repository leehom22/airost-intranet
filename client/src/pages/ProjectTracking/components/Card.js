import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator";
import CardDetailsModal from "./CardDetailsModal";
import { BsPersonCircle } from "react-icons/bs";
import moment from "moment/moment";
import consts from "../../../consts/consts";
import { useSelector } from "react-redux";
import { setDate } from "./cardDetails/ReduxStore";

const Card = ({ handleDragStart, card }) => {
    const id=card._id
    const priorityConsts = consts.priorityConsts;
    const sharedValue=useSelector((state)=>state.shared.cards[id])
    const[titleTask,setTitle]=useState(card.title)
    const[descriptionTask,setDescription]=useState(card.description)
    const [dueDate,setDate]=useState(card.dueDate)
    const [priority,setPriority]=useState(card.priority)
    const [assignee,setAssignee]=useState(card.assignee)

    useEffect(() => {
        const { title, description, date, priority, assignee } = sharedValue || {};
    
        if (title) {
            setTitle(title);
            setDescription(description || card.description);
            setDate(date || card.dueDate);
            setPriority(priority || card.priority);
            setAssignee(assignee || card.assignee);
            console.log("From Card.js useEffect title", title);
        } else if (date) {
            setTitle(title||card.title);
            setDescription(description||card.description);
            setDate(date);
            setPriority(priority||card.priority);
            console.log("From Card.js useEffect date", date);
        } else if (priority) {
            setTitle(title||card.title);
            setDescription(description||card.description);
            setDate(dueDate||card.dueDate);
            console.log("From Card.js useEffect priority", priority);
            setPriority(priority);
        } else if (assignee) {
            setTitle(title||card.title);
            setDescription(description||card.description);
            setDate(dueDate||card.dueDate);
            setPriority(priority||card.priority);
            setAssignee(assignee);
            console.log("assignee changed: ", assignee);
        } else {
            setTitle(title||card.title);
            setDescription(description||card.description);
            setDate(dueDate||card.dueDate);
            setPriority(priority||card.priority);
            console.log("From Card.js useEffect else section");
        }
    }, [sharedValue]);
    

// useEffect(() => {
//     if (dueDate === null) {
//         setDate(card.date);
//     }
// }, [dueDate, card.date]);

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
            <p className="text-sm text-neutral-100">{titleTask}</p>
            <div className="flex flex-row gap-1">
                <p className={"text-xs w-min text-neutral-100 rounded-lg p-1 bg-neutral-900 text-neutral-400"}
                onClick={()=>{
                    console.log("Due date clicked",card.dueDate)
                }} >
                {moment(dueDate).format("DD/MM/YYYY")}
                </p>
                <p className={`text-xs w-min text-neutral-100 rounded-lg p-1 ${priorityConsts[priority]?.bgColor}`}>
                    {priorityConsts[priority]?.text}
                </p>
            </div>
            <p className="text-xs text-neutral-400 flex flex-row gap-1 items-center"><BsPersonCircle/>{assignee}</p>
        </motion.div>
        <CardDetailsModal card={card}/> {/*Pass object to Card Details Modal*/}
        </>
    );
    };
export default Card;