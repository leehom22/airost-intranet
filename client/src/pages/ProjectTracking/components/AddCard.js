import React, { useState } from "react";
import { FiPlus} from "react-icons/fi";
import { motion } from "framer-motion";
import useProjectBoardMutation from "../hooks/useProjectBoardMutation";
const AddCard = ({ column, setCards, addNewCard }) => {
    const [text, setText] = useState("");
    const [assignee, setAssignee] = useState()
    const [adding, setAdding] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!text.trim().length) return;
    
        const newCard = {
        column,
        title: text.trim(),
        assignee: assignee,
        };
        
        setCards((pv) => [...pv, newCard]);
        addNewCard()
        setAdding(false);
    };
    
    return (
        <>
        {adding ? (
            <motion.form layout onSubmit={handleSubmit}>
            <div className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 
                    text-sm text-neutral-50 placeholder-violet-300 focus:outline-0
                    grid grid-cols-3 gap-3">
                <input type="text"
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                    placeholder="Add new task..."
                    className="input input-bordered w-full max-w-xs input-xs bg-neutral-800 col-span-3"
                />
                <textarea className="textarea textarea-bordered textarea-xs col-span-3 bg-neutral-800" placeholder="Description"></textarea>
                <div className="grid grid-cols-2 gap-1 col-span-3">
                    <button className="btn btn-xs">Priority</button>
                    <button className="btn btn-xs">Due Date</button>
                </div>
                <select
                        onChange={(e)=> setAssignee(e.target.value)} 
                        className="select select-bordered select-xs w-full max-w-xs bg-neutral-800 col-span-3">
                        <option>Nipuhawanj</option>
                        <option>Nigma</option>
                    </select>
                <div className="mt-1.5 flex items-center justify-end gap-1.5 col-span-3">
                    <button
                    onClick={() => setAdding(false)}
                    className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                    >
                    Close
                    </button>
                    <button
                    type="submit"
                    className="btn btn-xs"
                    >
                    <span>Add</span>
                    <FiPlus />
                    </button>
                </div>
            </div>
            </motion.form>
        ) : (
            <motion.button
            layout
            onClick={() => setAdding(true)}
            className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
            <span>Add card</span>
            <FiPlus />
            </motion.button>
        )}
        </>
    );
    };

export default AddCard;