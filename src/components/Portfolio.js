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
                <div key={project.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={project.image} alt={project.name} />
                        <CardImgOverlay>
                        
                        <CardTitle>{project.name}</CardTitle>
                        
                        </CardImgOverlay>
                    </Card>
                    <h3>{project.name}</h3>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className="row">
                    <h1 className="title text-center">MY <span className="text-primary ">PORTFOLIO</span></h1>
                </div>
                <div className='row'>
                    <div className="col">
                        {projectCard}
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
