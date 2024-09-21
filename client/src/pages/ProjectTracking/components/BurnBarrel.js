import React, { useState }from "react";
import {FiTrash}  from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { Button, message, Space } from 'antd';
import useProjectBoardMutation from "../hooks/useProjectBoardMutation";

const BurnBarrel = ({ setCards, cards, projectId, user }) => {
    const [active, setActive] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const projectBoardMutation = useProjectBoardMutation({projectId: projectId, cards: cards});

    const handleDragOver = (e) => {
        e.preventDefault();
        setActive(true);
    };
    
    const handleDragLeave = () => {
        setActive(false);
    };
    
    const handleDragEnd = (e) => {
        const cardId = e.dataTransfer.getData("cardId");
        const selectedCard = cards.find((c) => c._id == cardId);
        console.log("selectedCard: ",selectedCard)
        console.log("user: ",user)
        const userIsCreator = selectedCard.createdBy != user.email; 
        if(userIsCreator && !user.position?.includes("admin")){
            errorDeleteNotification();
            setActive(false);
            return;
        }
        setCards((pv) => pv.filter((c) => c._id !== cardId));
        projectBoardMutation.mutate();
        successDeleteNotification();
        setActive(false);
    };

    const errorDeleteNotification = () => {
        messageApi.open({
          type: 'error',
          content: 'Only creator or admin can delete this',
        });
    };

    const successDeleteNotification = () => {
        messageApi.open({
          type: 'success',
          content: 'Task deleted successfully',
        });
    };


    
    return (
        <>
            {contextHolder}
            <div
            onDrop={handleDragEnd}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
                active
                ? "border-red-800 bg-red-800/20 text-red-500"
                : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
            }`}
            >
            {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
            </div>
        </>
    );
    };

export default BurnBarrel;