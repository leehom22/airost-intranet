import React from 'react';
import { useState } from 'react';
import './Projects.css';
import ProjectList from '../components/ProjectList';
import { projectsData } from '../data/project-data';

function Projects() {

  const [projects, setProjects] = useState(projectsData);

  return (
    <div className='Projects'>
      <h1 className='project-title'>Projects</h1>
        <ProjectList projects={ projects }></ProjectList>
    </div>
  );
}

export default Projects;