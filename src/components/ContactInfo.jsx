import React from 'react';
import { Row, Col } from 'reactstrap';
import mailImg from '../images/mail.svg';
import phoneImg from '../images/phone.svg';
import smsImg from '../images/sms.svg';
import pinImg from '../images/location.svg';

const ContactInfo = () => {
    return (
        <React.Fragment>
            <Col className='p-0 '>
                <p className='contact-text p-1 pb-0'>
                    Reach out if you have any questions or just want to say, "Hi"! I am open to
                    discussing new projects and opportunities.
                </p>
                <Row>
                    <Col className='d-flex'>
                        <p className='p-1 sm-py-0 mb-0'>
                            <img src={mailImg} alt='envelope'/> 
                        </p>
                        <a className='p-1 mb-md-1 contact-text-link' href='mailto:piatorain@gmail.com'> piatorain@gmail.com </a>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex'>
                        <p className='p-1 sm-py-0 mb-0'>
                            <img src={phoneImg} alt='phone'/> 
                        </p>
                        <a role='button' className='p-1 mb-md-1 contact-text-link text-decoration-none' href='tel:+19084005335' >(908) 400-5335</a> 
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex'>
                        <p className='p-1 sm-py-0 mb-0'>
                            <img src={smsImg} alt='phone'/> 
                        </p>
                        <a role='button' className='p-1 mb-md-1 contact-text-link text-decoration-none' href='sms:+19084005335' >Text Me</a> 
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex'>
                        <p className='p-0 px-1 mb-0'>
                            <img src={pinImg} alt='location'/> 
                        </p>
                        <p className='p-1 contact-text'> Las Vegas Metropolitan Area</p>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    );
}

export default ContactInfo;