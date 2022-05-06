import React, { useState } from 'react';
import { Col, Card, CardTitle, CardImg, CarImgOverlay, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, CardImgOverlay } from 'reactstrap';
import close from '../images/close.svg';
import unlock from '../images/unlock.svg';

const StackItem = ({ stack }) => {
    return (
        <div className='' style={{paddingRight: '12px'}}><span className='m-0 p-1 modal-info border border-primary'>{stack}</span></div>
    )
}

const ProjectCard = ({ project }) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    
    return (
        <React.Fragment>
            <Card className="p-card shadow-none p-2 bg-primary" onClick={toggleModal}>
                <CardImg top className="cd-img" width="100%" src={project.image} alt={project.title} />
                <CardImgOverlay className='p-0 w-100 middle'>
                    <div className='w-100 my-2 my-sm-3 my-md-2 my-lg-2 my-xl-4 text-center'><img src={unlock} alt='view modal' className='m-auto'/></div>
                    
                </CardImgOverlay>
                {/* <CardBody className="p-1 card-body">
                    <a href={project.live} target='_blank' alt={project.title} rel='noreferrer'>
                        <CardTitle className="text-primary mb-2">{project.title}</CardTitle>
                    </a>
                </CardBody> */}
            </Card>

            <Modal size='lg' centered scrollable isOpen={modal} toggle={toggleModal} className='modal-info' style={{borderRadius: '10px'}}>
                <div onClick={toggleModal} className='modal-header d-flex p-3' >
                    <h3 className='mb-0 p-auto modalTitle'>{project.title}</h3>
                    <button className='btn btn-lg btn-primary p-0 btnClose' onClick={toggleModal}>
                        <img src={close} alt='close' className='img-fluid mb-1 close' style={{width: '1rem', height: '1rem'}}/>
                    </button>
                </div>
                <ModalBody className='shadow-none'>
                    <div className='mb-2'>
                        <img className='img-fluid modalImg border border-primary' src={project.image} alt={project.title} style={{borderRadius: '10px'}}/>
                    </div>
                    <h4 className='mb-1' style={{fontWeight: '400'}}>{project.type}</h4>
                    <h5 className='mb-1' style={{fontWeight: '400'}}>{project.role}</h5>
                    <div className='my-3 mx-0  d-flex'>
                        {project.stack.one && <StackItem stack={project.stack.one}/>}
                        {project.stack.two && <StackItem stack={project.stack.two}/>}
                        {project.stack.three && <StackItem stack={project.stack.three}/>}
                        {project.stack.four && <StackItem stack={project.stack.four}/>}
                    </div>
                    <p className=''>{project.description}</p>
                    <p className=''>Challenges: {project.challenges}</p>
                </ModalBody>
                <ModalFooter className='p-2' >
                    {project.live && 
                        <a className='p-1 text-decoration-none'
                            href={project.live}
                            alt={project.title}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {/* Live  */}
                            <i className="fa fa-external-link fa-2x modal-link" />
                        </a>
                    }
                    <a className='p-1 text-decoration-none'
                        href={project.repo}
                        alt={project.title}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className="fa fa-github fa-2x modal-link" />
                        {/* Code */}
                    </a>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
}

export default ProjectCard;