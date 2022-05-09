import React from 'react'
import { Col, ListGroupItem } from 'reactstrap';
import Fade from 'react-reveal/Fade';

// SOCIAL MEDIA ICONS
export const SocialLink = ({ title, link, alt, icon, img, src, alt2 }) => {
    return (
        <ListGroupItem className='my-md-1 p-0 social-holder'>
            <a  
                className='btn social-link align-content-center p-0 social' 
                title={title} 
                target='_blank' 
                rel='noreferrer' 
                href={link} alt={alt} 
            >
                <i className={icon}/>
                
            </a>
        </ListGroupItem>
    )
}

// SOCIAL MEDIA ICONS
export const SocialIcon = ({ title, link, alt, icon, img, src }) => {
    return (
        <ListGroupItem className='my-md-1 p-0 social-holder'>
            <a  
                className='btn social-link align-content-center p-0 social' 
                title={title} 
                target='_blank' 
                rel='noreferrer'    
                href={link} alt={alt} 
            >
                <img 
                    src={src} 
                    alt={alt} 
                    className='img-fluid my-2' 
                    style={{width: '1rem', height: '1rem'}}
                />
            </a>
        </ListGroupItem>
    )
}

// SKILL LOGOS
export const SkillItem = ({ logo, name, logoStyle }) => {
    return (
        <React.Fragment>
                <Col xs={6} sm={4} md={3} lg={2} className='text-center mb-3'>
                    <Fade bottom delay={800}>
                        <img src={logo} alt='html-5' className={logoStyle}/>
                        <p className='text m-1'>{name}</p>
                    </Fade>
                </Col>
        </React.Fragment>
    );
}





