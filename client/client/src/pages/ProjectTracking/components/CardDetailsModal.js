import { BsPersonCircle } from "react-icons/bs";
import { IoMdCreate } from "react-icons/io";
import moment from "moment/moment";
import consts from "../../../consts/consts";
import { useState } from "react";
import CardTitle from "./cardDetails/CardTitle";
import CardDescription from "./cardDetails/CardDescription";
import { useSelector } from "react-redux";
import CardDueDate from "./cardDetails/CardDueDate";
import CardPriority from "./cardDetails/CardPriority";
import CardAsignee from "./cardDetails/CardAsignee";


const CardDetailsModal = ({card}) => {

    const priorityConsts = consts.priorityConsts;
    
    return ( 
    <dialog id={`card-modal-${card._id}`} className="modal">
        <div className="modal-box bg-neutral-800 flex flex-col gap-1">
            <CardTitle value={card.title} id={card._id}/> 
            <CardDescription value={card.description} id={card._id}/>
            <div className="flex flex-row gap-1">
                <CardDueDate value={card.dueDate} id={card._id}/>
                <CardPriority value={card.priority} id={card._id}/>
            </div>
            <CardAsignee value={card.assignee} id={card._id}/> 
            {/*Assignee*/}
            <p className="text-xs text-neutral-400 flex flex-row gap-1 items-center"><IoMdCreate/>{card.createdBy}</p>
            {/*Created By (No need to eidt)*/}

            {/*Save Button*/}

            {/*Cancel Button*/}
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
    </dialog> 
);
}
 
export default CardDetailsModal;