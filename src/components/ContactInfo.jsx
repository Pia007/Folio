import React from 'react';
import { Row, Col } from "reactstrap";

const ContactInfo = () => {
    return (
        <>
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
            </Col>
        </>
    );
}

export default ContactInfo;