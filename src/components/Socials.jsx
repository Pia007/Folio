import React from 'react';
import { SocialLink, SocialIcon } from './Items';
import { Row, Col } from 'reactstrap';
import polyworkIcon from '../images/polywork.svg';
import  Zoom  from 'react-reveal/Zoom';

// SOCIAL MEDIA
export const Socials = () => {
    return (
        <React.Fragment>
            <SocialLink
                title='LinkedIn'
                link='https://www.linkedin.com/in/pia-torain-dev/'
                alt='linkedin'
                icon='fa fa-linkedin fa-lg my-1 py-1 linkedin'
            />
            <SocialLink
                title='Github'
                link='https://github.com/Pia007/'
                alt='github'
                icon='fa fa-github fa-lg my-1 py-1 github'
            />
            <SocialLink
                title='Twitter'
                link='https://twitter.com/FeenixRizn'
                alt='twitter'
                icon='fa fa-twitter fa-lg my-1 py-1 twitter'
            />
            <SocialIcon
                src={polyworkIcon}
                title='Polywork'
                link='https://www.polywork.com/feenixrizn'
                alt='polywork'
            />
        </React.Fragment>
    )
}

// SOCIAL MEDIA ROW
export const SocialRow = () => {
    return (
        <React.Fragment>
            <Row className='p-0 my-2 d-md-none'>
                <Col className='p-0 mb-0'>
                    <ul className='d-flex d-inline-flex  justify-content-between list-unstyled mb-0 py-1 shadow-none social-ul'>
                        <Socials/>
                    </ul>
                </Col>
            </Row>
        </React.Fragment>
    )
}

// SOCIAL MEDIA COLUMN
export const SocialColumn = () => {
    return ( 
        <div className='d-none d-md-block d-flex align-content-end position-fixed' style={{ width:'5%', bottom: '10px', left: '0'}}>
            <Col className='p-0 mb-0 d-flex justify-content-start align-content-end sticky-bottom'>
                <Zoom delay={2100}>
                    <ul className='d-flex d-inline-flex flex-column justify-content-end list-unstyled mb-0 py-1 shadow-none social-ul'>
                        <Socials/>
                    </ul>
                </Zoom>
            </Col>
        </div>
    )
}