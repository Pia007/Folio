import React, { Component } from 'react';
import { PROJECTS } from '../shared/projects';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS
        }
    }
    render() {
        const projectCard = this.state.projects.map(project => {
            return (
                <div key={project.id} className="col-md-4 m-0">
                    <Card className="p-card shadow-none m-1">
                        <CardImg top className="cd-img" width="100%" src={project.image} alt={project.name} />
                        <CardBody className="p-1 card-body">
                            <CardTitle className="text-primary mb-3">{project.title}</CardTitle>
                        </CardBody>
                    </Card>
                    
                </div>
            );
        });
        return (
            <div className='container'>
                <div className="row px-5 py-10 mx-auto text-center">
                    <h1 className="title text-center">MY <span className="text-primary">PORTFOLIO</span></h1>
                </div>
                <div className='row text-center'>
                    {projectCard}
                </div>
            </div>
        );
    }
}

export default Portfolio;
