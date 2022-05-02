import React from 'react';
import { Col, ListGroupItem } from 'reactstrap';
import polyworkIcon from '../images/polywork.svg';

const SideLinks = () => {
    return ( 
        <div className='d-none d-md-block w-15% d-flex align-content-end position-fixed' style={{ width:'10%', bottom: '0', left: '0'}}>
            <Col className="p-0 mb-0 d-flex justify-content-end align-content-end sticky-bottom">
                <Col className="d-flex d-inline-flex flex-column justify-content-end list-unstyled mb-0 py-1 shadow-none social-ul">
                    <ListGroupItem className="my-md-1 p-0 social-holder">
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
                    <ListGroupItem className="my-md-1 p-0">
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
                    <ListGroupItem className="my-md-1 p-0">
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
                    <ListGroupItem className="my-md-1 p-0">
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
        </div>
    )
}

export default SideLinks