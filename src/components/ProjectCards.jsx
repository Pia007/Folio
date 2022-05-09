import React from 'react';
import { PROJECTS } from '../shared/projects';
import ProjectCard from './ProjectCard';
import Fade from 'react-reveal/Fade';


const ProjectCards = () => {
    const projects = PROJECTS;

    const projectList = projects.map(project => {
        return (
            <div key={project.id} className='col-md-6 m-0 p-2'>
                <Fade bottom delay={1300}>
                    <ProjectCard project={project} />
                </Fade>
            </div>
        );
    });
    return (
        <React.Fragment>
            <div className='row'>
                {projectList}
            </div>
            
        </React.Fragment>
    )
}

export default ProjectCards;
