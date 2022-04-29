import React, { useState } from 'react';
import { Card, CardTitle, CardImg, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProjectCard = ({ project }) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    
    return (
        <React.Fragment>
            <Card className="p-card shadow-none p-2 border-1" onClick={toggleModal}>
                <CardImg top className="cd-img" width="100%" src={project.image} alt={project.title} />
                <CardBody className="p-1 card-body">
                    <a href={project.live} target='_blank' alt={project.title} rel='noreferrer'>
                        <CardTitle className="text-primary mb-2">{project.title}</CardTitle>
                    </a>
                </CardBody>
            </Card>

            <Modal centered scrollable isOpen={modal} toggle={toggleModal} className='' >
                <ModalHeader toggle={toggleModal} className='bg-success text-primary'>{project.title}</ModalHeader>
                <ModalBody className=''>
                    <img className='img-fluid modalImg' src={project.image} alt={project.title} style={{borderRadius: '10px'}}/>
                    <p className='my-3'>{project.subtitle}</p>
                    <p className=''>{project.description}</p>
                </ModalBody>
                <ModalFooter className='p-2'>
                    <a className='p-1'
                        href={project.live}
                        alt={project.title}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className="fa fa-solid fa-link fa-2x" />
                    </a>
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