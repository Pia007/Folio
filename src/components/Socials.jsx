import React from 'react'
import { Row, Col, ListGroupItem } from 'reactstrap';
import polyworkIcon from '../images/polywork.svg';

const Socials = () => {
    return (
        <>
            <Row className="">
                <Col className="py-0 mb-0">
                    <Col className="d-flex d-inline-flex justify-content-between list-unstyled mb-0 py-1 shadow-none social-ul">
                        <ListGroupItem className="p-0 social-holder">
                            <a 
                                className="btn btn-outline-white social-link align-content-center p-0 social" 
                                title="LinkedIn" 
                                target='_blank' 
                                rel='noreferrer' 
                                href="https://www.linkedin.com/in/pia-torain-dev/" alt="LinkedIn" 
                            >
                                <i className="fa fa-linkedin fa-2x my-1 py-1 linkedin"/>
                            </a>
                        </ListGroupItem>
                        <ListGroupItem className="p-0">
                            <a 
                                className="btn btn-outline-white social-link align-content-center p-0 social" 
                                title="GitHub" 
                                target='_blank' 
                                rel='noreferrer'  
                                href="https://github.com/Pia007/" alt="GitHub"
                            >
                                <i className="fa fa-github fa-2x my-1 py-1 github"/>
                            </a>
                        </ListGroupItem>
                        <ListGroupItem className="p-0">
                            <a 
                                className="btn social-link align-content-center p-0 social" 
                                title="Polywork" 
                                target='_blank' 
                                rel='noreferrer' 
                                href="https://www.polywork.com/feenixrizn" alt="Polywork"
                            >
                                <img 
                                    src={polyworkIcon} 
                                    alt='polywork icon' 
                                    className="img-fluid my-2" 
                                    style={{width: '2rem', height: '2rem'}}
                                />
                            </a>
                        </ListGroupItem>
                        <ListGroupItem className="p-0">
                            <a 
                                className="container btn social-link align-content-center p-0 social" 
                                title="Twitter" 
                                target='_blank' 
                                rel='noreferrer' 
                                href="https://twitter.com/FeenixRizn" alt="Twitter"
                            >
                                <i className="fa fa-twitter fa-2x my-1 py-1 twitter" />
                            </a>
                        </ListGroupItem>
                    </Col>
                </Col>
            </Row>
        </>
    )
}

export default Socials