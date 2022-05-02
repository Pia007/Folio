import React from 'react';
import { Row, Col } from "reactstrap";
import Socials from "../components/Socials";
import mailImg from '../images/mail.svg';
import phoneImg from '../images/phone.svg';
import pinImg from '../images/location.svg';

const ContactInfo = () => {
    return (
        <>
            <Col className="p-0 ">
                <p className="contactText p-1 pb-0">
                    Reach out if you have any questions or just want to say, "Hi"! I am open to
                    discussing new projects and opportunities.
                </p>
                <Row className="mb-1">
                    <Col className="d-flex my-1">
                        <p className="p-1 sm-py-0 mb-0">
                            <img src={mailImg} alt="envelope" /> 
                        </p>
                        <a className="p-1 mb-md-1 contactText" href="mailto:info@hostahealthcareheroes.org"> piatorain@gmail.com </a>
                    </Col>
                </Row>
                <Row className="">
                    <Col className="d-flex mb-1">
                        <p className="p-1 sm-py-0 mb-0">
                            <img src={phoneImg} alt="phone" /> 
                        </p>
                        <a role="button" className="p-1 mb-md-1 contactText text-decoration-none" href="tel:+19084005335" >(908) 400-5335</a> 
                    </Col>
                </Row>
                <Row className="">
                    <Col className="d-flex my-1">
                        <p className="p-0 px-1 mb-0">
                            <img src={pinImg} alt="location" /> 
                        </p>
                        <p className='p-1'> Las Vegas Metropolitan Area</p>
                    </Col>
                </Row>
                {/* <Socials /> */}
            </Col>
        </>
    );
}

export default ContactInfo;