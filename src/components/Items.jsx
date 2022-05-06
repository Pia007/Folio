import React from 'react'
import { Row, Col, ListGroupItem } from 'reactstrap';
import caretImg from '../images/caret-right.svg';
import point from '../images/point.svg';
import bullet from '../images/pointFilled.svg';

export const SocialLink = ({ title, link, alt, icon, img, src, alt2 }) => {
    return (
        <ListGroupItem className="my-md-1 p-0 social-holder">
            <a  
                className="btn social-link align-content-center p-0 social" 
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

export const SocialIcon = ({ title, link, alt, icon, img, src }) => {
    return (
        <ListGroupItem className="my-md-1 p-0 social-holder">
            <a  
                className="btn social-link align-content-center p-0 social" 
                title={title} 
                target='_blank' 
                rel='noreferrer'    
                href={link} alt={alt} 
            >
                <img 
                    src={src} 
                    alt={alt} 
                    className="img-fluid my-2" 
                    style={{width: '1rem', height: '1rem'}}
                />
            </a>
        
        </ListGroupItem>
    )
}

export const EduHeader = ({ type }) => {
    return (
        <>
            <h3 className='text-lg-center'>{ type }</h3>
        </>
    )
}

export const SkillItem = ({ logo, name, logoStyle }) => {
    return (
        <>
            <Col xs={6} sm={4} md={3} lg={2} className='text-center mb-3'>
                <img src={logo} alt='html-5' className={logoStyle}/>
                <h5 className='skill-text m-1'>{name}</h5>
            </Col>
        </>
    )
}


