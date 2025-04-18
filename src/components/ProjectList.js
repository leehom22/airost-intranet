import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
    return ( 
        <div className="project-list w-10/12">
        {projects.map((project) => (
          <div className="project-preview" key={project.id}>
            {/* <Link style={{textDecoration: 'none'}} to={`/projects/${project.id}` }> */}
            <Link style={{textDecoration: 'none'}} to={`` }>
            <h2>{ project.title }</h2>
            { !!project.advisor ? (
              <p>Advised by { project.advisor } | Lead by { project.lead } | { project.category }</p>
            ) : (
              <p>{ project.lead ? `Lead by ${project.lead}` : '' } { project.category ? `| ${project.category}`: '' }</p>
            )}
            </Link>
          </div>
        ))}
      </div>
     );
}
 
export default ProjectList;