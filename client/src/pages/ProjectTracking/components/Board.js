import React, { useEffect, useState } from "react";
import axios from 'axios'
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";
import { useQuery,useMutation, useQueryClient } from '@tanstack/react-query'
import useFetchUsers from "../../../hooks/useFetchUsers";


const Board = () => {
    const queryClient = useQueryClient()
    const [cards, setCards] = useState([]);
    const [hasChecked, setHasChecked] = useState(false)

    const getProjectBoard = async () => {
        return axios.get('http://localhost:4000/projects/tracking', {
            params: {projectId: 1}
        })
        .then(res => {
            let cardData = res.data.tasks;
            setCards(res.data.tasks)
            setHasChecked(true)
            return res.data
        })
        .catch(err => console.log(err))
    }
    const projectBoard = useQuery({
        queryKey:["projectBoard"],
        queryFn: getProjectBoard,
    })

    const users = useFetchUsers();

    return (
        <div className="flex h-full w-full gap-3 p-12 overflow-scroll">
        <Column
            title="Backlog"
            column="backlog"
            headingColor="text-neutral-500"
            cards={cards}
            setCards={setCards}
        />
        <Column
            title="TODO"
            column="todo"
            headingColor="text-yellow-200"
            cards={cards}
            setCards={setCards}
        />
        <Column
            title="In progress"
            column="doing"
            headingColor="text-blue-200"
            cards={cards}
            setCards={setCards}
        />
        <Column
            title="Done"
            column="done"
            headingColor="text-emerald-200"
            cards={cards}
            setCards={setCards}
        />
        <BurnBarrel setCards={setCards} cards={cards} />
        </div>
    );
    };

export default Board;