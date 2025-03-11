import React from "react";
import { Link } from "react-router-dom";
import useGetProjects from "../Projects/hooks/useGetProjects";

export const ProjectTracking = () => {
  const { data: projects, isLoading, isError } = useGetProjects();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      
      {isLoading ? (
        <div className="flex flex-col gap-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          ))}
        </div>
      ) : isError ? (
        <div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-lg text-center">
          <p className="text-red-700 dark:text-red-400">Unable to load projects. Please try again later.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {projects?.map((project) => (
            <Link 
              to={`/projects/tracking/${project.projectId}`} 
              state={{ projectId: project.projectId }} 
              key={project.projectId}
              className="block transition-colors"
            >
              <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h2>
                {project.description && (
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectTracking;