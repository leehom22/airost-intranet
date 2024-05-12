import React, { useState } from "react";
import { FiPlus} from "react-icons/fi";
import { motion } from "framer-motion";
import useProjectBoardMutation from "../hooks/useProjectBoardMutation";
import useFetchUsers from "../../../hooks/useFetchUsers";
import Datepicker from "react-tailwindcss-datepicker"; 

const AddCard = ({ column, setCards, addNewCard }) => {
    const [title, setTitle] = useState('');
    const [assignee, setAssignee] = useState('no_assignee')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [adding, setAdding] = useState(false);
    const [dueDate, setDueDate] = useState({
        startDate: null,
        endDate: null,
    });
    const users = useFetchUsers();
    console.log(users.data)
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!title.trim().length) return;
    
        const newCard = {
            column,
            title: title.trim(),
            assignee: assignee,
            description: description,
            priority: priority,
            dueDate: dueDate.startDate,
        };
        
        setCards((pv) => [...pv, newCard]);
        addNewCard()
        setDueDate({
            startDate: null,
            endDate: null,
        })
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
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                    placeholder="Add new task..."
                    className="input input-bordered w-full max-w-xs input-xs bg-neutral-800 col-span-3"
                />
                <textarea 
                    className="textarea textarea-bordered textarea-xs col-span-3 bg-neutral-800" 
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description">
                </textarea>
                <div className="h-min col-span-3">    
                        <Datepicker 
                            asSingle={true} 
                            value={dueDate} 
                            onChange={(newValue) => {
                                setDueDate(newValue); 

                                console.log(dueDate)
                            }} 
                        /> 
                    </div>
                    <select
                        onChange={(e)=> setPriority(e.target.value)} 
                        className="select select-bordered select-xs w-full max-w-xs bg-neutral-800 col-span-3">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                <select
                        onChange={(e)=> setAssignee(e.target.value)} 
                        className="select select-bordered select-xs w-full max-w-xs bg-neutral-800 col-span-3">
                            <option value="no_assignee">No assignee</option>
                            {users.data.map(user => {
                                return (<option value={user.email}>{user.name}</option>)
                            })}
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