import React from 'react';
import { Row, Col, ListGroupItem } from "reactstrap";

const ContactInfo = () => {
    return (
        <Col lg={4} className="p-2">
            <p className="contactText">
                Reach out if you have any questions or just want to say, "Hi"! I am open to
                discussing new projects and opportunities.
            </p>
            <Row className="mb-1">
                <Col className="d-flex">
                    <p className="p-1 mb-0">
                        <i className="fa fa-envelope-o text-primary envelope"/> 
                    </p>
                    <a className="p-1 mb-md-1 contactText" href="mailto:info@hostahealthcareheroes.org"> piatorain@yahoo.com </a>
                </Col>
            </Row>
            <Row className="">
                <Col className="d-flex">
                    <p className="p-1 mb-0">
                        <i className="fa fa-phone text-primary phone"/>
                    </p>
                    <a role="button" className="px-1 py-1 mb-md-1 contactText text-decoration-none" href="tel:+19084005335" >(908) 400-5335</a> 
                </Col>
            </Row>
            
            <Row className="">
                <Col className="py-1 mb-0">
                    <Col className="d-flex d-inline-flex justify-content-between list-unstyled mb-0 py-1 shadow-none social-ul">
                        <ListGroupItem className="p-0 px-1 social-holder">
                            <a className="btn btn-outline-white social-link align-content-center p-0" title="LinkedIn"  href="https://www.linkedin.com/in/pia-torain-dev/" alt="LinkedIn" >
                                <i className="fa fa-linkedin fa-lg mt-0 py-2 linkedin"/>
                            </a>
                        </ListGroupItem>
                        <ListGroupItem className="p-0">
                            <a className="btn btn-outline-white social-link align-content-center p-0 social" title="GitHub"  href="https://github.com/Pia007/" alt="GitHub">
                                <i className="fa fa-github fa-lg mt-0 py-2 github"/>
                            </a>
                        </ListGroupItem>
                        <ListGroupItem className="p-0 px-1">
                            <a className="btn btn-outline-white social-link align-content-center p-0 social" title="Twitter" href="https://twitter.com/FeenixRizn" alt="Twitter">
                                <i className="fa fa-twitter fa-lg mt-0 py-2 twitter" />
                            </a>
                        </ListGroupItem>
                    </Col>
                </Col>
            </Row>
        </Col>
    );
}

export default ContactInfo;