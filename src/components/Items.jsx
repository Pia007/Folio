import React from 'react'
import { Row, Col, ListGroupItem } from 'reactstrap';
import caretImg from '../images/caret-right.svg';
import point from '../images/point.svg';
import bullet from '../images/pointFilled.svg';

export const SocialLink = ({ title, link, alt, icon, img, src, alt2 }) => {
    return (
        <ListGroupItem className="my-md-1 p-0 social-holder">
            <a  
                className="btn  social-link align-content-center p-0 social" 
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
        className="btn  social-link align-content-center p-0 social" 
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

export const EduItem = ({ name }) => {
    return (
        <>
            <div className='d-flex'>
                <img src={caretImg} alt='caret-right'/>
                <h4 className='mb-0'>{ name }</h4>
            </div>
        </>
    )
}

export const EduMajor = ({ course}) => {
    return (
        <div className='d-flex ml-2'>
            <img src={point} alt='point'/>
            <p className='mb-0'>{ course }</p>
        </div>
    )
}

export const ExpItem = ({ role, company, date, name, textOne, textTwo, textThree }) => {
    return (
        <>
            <Row className=''>
                <h3 className='mb-1'>{role}</h3>
                <h4 className='mb-1'>{company}</h4>
                <h5 className='mb-1'>{date}</h5>
                <h5>{name}</h5>
                <div className='d-flex px-3'>
                    <img className='img-fluid' src={bullet} alt='point'/>
                    <p className='mb-0'>{textOne}</p>
                </div>
                <div className='d-flex px-3'>
                    <img className='img-fluid' src={bullet} alt='point'/>
                    <p className='mb-0'>{textTwo}</p>
                </div>
                <div className='d-flex px-3'>
                    <img className='img-fluid' src={bullet} alt='point'/>
                    <p className='mb-0'>{textThree}</p>
                </div>
            </Row>
        </>
    )
}

export const SkillItem = ({ logo, name, logoStyle }) => {
    return (
        <>
            <Col xs={6} sm={4} md={3} lg={2} className='text-center mb-2'>
                <img src={logo} alt='html-5' className={logoStyle}/>
                <p className='skill-text m-1'>{name}</p>
            </Col>
        </>
    )
}


