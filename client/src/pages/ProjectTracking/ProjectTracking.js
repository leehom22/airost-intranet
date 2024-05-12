import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'

export const ProjectTracking = () => {
    const getProjects = async () => {
        return axios.get('http://localhost:4000/projects')
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err))
        }
    const projects = useQuery({
        queryKey:["projects"],
        queryFn: getProjects,
    })
    console.log(projects.data)
return (
    <div className="p-10">
    <h1 className="text-4xl font-extrabold mb-3">Projects</h1>
    <div className="flex flex-col gap-2">
        {
        projects.isLoading
            ? "Loading"
            : projects.data.map(project => 
                <Link to={`/projects/tracking/${project.projectId}`} state={{projectId: project.projectId}}>
                    <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-neutral-800 dark:border-gray-700 dark:hover:bg-neutral-700">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </Link>
            )
        }
    </div>
    </div>
    // <Board />

);
};

export default ProjectTracking;