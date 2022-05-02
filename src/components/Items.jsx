import React from 'react'
import { Col } from 'reactstrap';
import caretImg from '../images/caret-right.svg';
import point from '../images/point.svg';


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

