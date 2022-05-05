import { PROJECTS } from '../shared/projects';
import ProjectCard from './ProjectCard';


const ProjectCards = () => {
    const projects = PROJECTS;

    const projectList = projects.map(project => {
        return (
            <div key={project.id} className="col-md-6 m-0 p-2">
                <ProjectCard project={project} />
            </div>
        );
    });
    return (
        <>
            <div className="row">
                {projectList}
            </div>
            
        </>
    )
}

export default ProjectCards;
