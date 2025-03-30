


import { BsPersonCircle } from "react-icons/bs";
import { IoMdCreate } from "react-icons/io";
import moment from "moment/moment";
import consts from "../../../consts/consts";
import { useState } from "react";
import CardTitle from "./cardDetails/CardTitle";


const CardDetailsModal = ({card}) => {

    const [details,setDetail]=useState() //added
    const [isEditing, setIsEdting] = useState(false); //added

    const priorityConsts = consts.priorityConsts;
    return ( 
    <dialog id={`card-modal-${card._id}`} className="modal">
        <div className="modal-box bg-neutral-800 flex flex-col gap-1">
            <CardTitle value={card.title}/> 
            <p className="py-4">{card.description}</p>   {/*Description*/}
            <div className="flex flex-row gap-1">
                <p className={"text-xs w-min text-neutral-100 rounded-lg p-1 bg-neutral-900 text-neutral-400"}>
                    {moment(card.dueDate).format("DD/MM/YYYY")} {/*Due Date*/}
                </p>
                <p className={`text-xs w-min text-neutral-100 rounded-lg p-1 ${priorityConsts[card.priority]?.bgColor}`}>
                    {priorityConsts[card.priority]?.text} {/*Priority*/}
                </p>
            </div>
            <p className="text-xs text-neutral-400 flex flex-row gap-1 items-center"><BsPersonCircle/>{card.assignee}</p> 
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