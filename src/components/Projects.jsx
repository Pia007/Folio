import React from 'react';
import { Row, Col } from 'reactstrap';
import ProjectCard from './ProjectCards';
import hero from './images/hero.png';

function Projects(props) {
    return (
        <React.Fragment>
            <Row className='text-center'>
                <ProjectCard 
                    proImg=''
                    proTitle=""
                    proDescription=""
                    proLive=""
                    proRepo=""
                />
            </Row>
        </React.Fragment>
    );
}

export default Projects;