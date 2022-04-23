import React from 'react';
import { Row, Col, ListGroupItem } from "reactstrap";

const ContactInfo = () => {
    return (
        // <div className='containter'>
            <Col  className="p-2">
                <p className="contactText p-1 pb-0">
                    Reach out if you have any questions or just want to say, "Hi"! I am open to
                    discussing new projects and opportunities.
                </p>
                <Row className="mb-1">
                    <Col className="d-flex">
                        <p className="p-1 sm-py-0 mb-0">
                            <i className="fa fa-envelope-o fa-2x text-primary envelope"/> 
                        </p>
                        <a className="p-1 mb-md-1 contactText" href="mailto:info@hostahealthcareheroes.org"> piatorain@yahoo.com </a>
                    </Col>
                </Row>
                <Row className="">
                    <Col className="d-flex">
                        <p className="p-1 sm-py-0 mb-0">
                            <i className="fa fa-phone fa-2x mr-2 text-primary phone"/>
                        </p>
                        <a role="button" className="px-2 py-1 mb-md-1 contactText text-decoration-none" href="tel:+19084005335" >(908) 400-5335</a> 
                    </Col>
                </Row>
                
                <Row className="">
                    <Col className="py-0 mb-0">
                        <Col className="d-flex d-inline-flex justify-content-between list-unstyled mb-0 py-1 shadow-none social-ul">
                            <ListGroupItem className="p-0 social-holder">
                                <a className="btn btn-outline-white social-link align-content-center p-0 social" title="LinkedIn"  href="https://www.linkedin.com/in/pia-torain-dev/" alt="LinkedIn" >
                                    <i className="fa fa-linkedin fa-2x mt-0 py-1 linkedin"/>
                                </a>
                            </ListGroupItem>
                            <ListGroupItem className="p-0">
                                <a className="btn btn-outline-white social-link align-content-center p-0 social" title="GitHub"  href="https://github.com/Pia007/" alt="GitHub">
                                    <i className="fa fa-github fa-2x mt-0 py-1 github"/>
                                </a>
                            </ListGroupItem>
                            <ListGroupItem className="p-0">
                                <a className="btn social-link align-content-center p-0 social" title="Twitter" href="https://twitter.com/FeenixRizn" alt="Twitter">
                                    <i className="fa fa-twitter fa-2x mt-0 py-1 twitter" />
                                </a>
                            </ListGroupItem>
                        </Col>
                    </Col>
                </Row>
            </Col>
        // </div>
    );
}

export default ContactInfo;