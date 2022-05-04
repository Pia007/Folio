import React from 'react'
import { Row, Col } from 'reactstrap';
import { SocialLink, SocialIcon } from './Items';
import polyworkIcon from '../images/polywork.svg';

const Socials = () => {
    return (
        <>
            <Row className="p-0 my-2 d-md-none">
                <Col className="p-0 mb-0">
                    <Col className="d-flex d-inline-flex  justify-content-between list-unstyled mb-0 py-1 shadow-none social-ul">
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
                    </Col>
                </Col>
            </Row>
        </>
    )
}

export default Socials