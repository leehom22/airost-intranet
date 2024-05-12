import { BsPersonCircle } from "react-icons/bs";
import moment from "moment/moment";
import consts from "../../../consts/consts";
const CardDetailsModal = ({card}) => {
    const priorityConsts = consts.priorityConsts;
    return ( 
    <dialog id={`card-modal-${card._id}`} className="modal">
        <div className="modal-box bg-neutral-800 flex flex-col gap-1">
            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="py-4">{card.description}</p>
            <div className="flex flex-row gap-1">
                <p className={"text-xs w-min text-neutral-100 rounded-lg p-1 bg-neutral-900 text-neutral-400"}>
                    {moment(card.dueDate).format("DD/MM/YYYY")}
                </p>
                <p className={`text-xs w-min text-neutral-100 rounded-lg p-1 ${priorityConsts[card.priority]?.bgColor}`}>
                    {priorityConsts[card.priority]?.text}
                </p>
            </div>
            <p className="text-xs text-neutral-400 flex flex-row gap-1 items-center"><BsPersonCircle/>{card.assignee}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
    </dialog> 
);
}
 
export default CardDetailsModal;