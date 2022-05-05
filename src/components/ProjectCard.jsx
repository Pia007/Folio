import React, { useState } from 'react';
import { Col, Card, CardTitle, CardImg, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const StackItem = ({ stack }) => {
    return (
        <div className='' style={{paddingRight: '12px'}}><span className='m-0 p-1 bg-primary'>{stack}</span></div>
    )
}

const ProjectCard = ({ project }) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    
    return (
        <React.Fragment>
            <Card className="p-card shadow-none p-2" onClick={toggleModal}>
                <CardImg top className="cd-img" width="100%" src={project.image} alt={project.title} />
                {/* <CardBody className="p-1 card-body">
                    <a href={project.live} target='_blank' alt={project.title} rel='noreferrer'>
                        <CardTitle className="text-primary mb-2">{project.title}</CardTitle>
                    </a>
                </CardBody> */}
            </Card>

            <Modal size='lg' centered scrollable isOpen={modal} toggle={toggleModal} className='' >
                <ModalHeader toggle={toggleModal} className='bg-info text-primary'>{project.title}</ModalHeader>
                <ModalBody className=''>
                    <Col>
                        <img className='img-fluid modalImg' src={project.image} alt={project.title} style={{borderRadius: '10px'}}/>
                    </Col>
                    <div className='m-1 ml-0 mt-3 d-flex'>
                        {project.stack.one && <StackItem stack={project.stack.one}/>}
                        {project.stack.two && <StackItem stack={project.stack.two}/>}
                        {project.stack.three && <StackItem stack={project.stack.three}/>}
                        {project.stack.four && <StackItem stack={project.stack.four}/>}
                    </div>
                    <p className=' modal-info'>{project.description}</p>
                    <p className='modal-info'>Challenges: {project.challenges}</p>
                </ModalBody>
                <ModalFooter className='p-2'>
                    {project.live && 
                        <a className='p-1'
                            href={project.live}
                            alt={project.title}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i className="fa fa-external-link fa-2x" />
                        </a>
                    }
                    <a className='p-1'
                        href={project.repo}
                        alt={project.title}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className="fa fa-github fa-2x " />
                    </a>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
}

export default ProjectCard;