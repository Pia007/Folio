import React from 'react';
import { Row, Col } from 'reactstrap';
import { ExpItem }  from './Items';

const Experience = () => {
    return (
        <>
            <Row className='justify-content-between  p-2'>
                <Col className='text-center'><h2>Experience</h2></Col>
                <div className='d-lg-flex my-2'>
                    <ExpItem 
                        role='Frontend Web Developer - Intern'
                        company='Reskill Americans - Remote'
                        date='May 2021 - August 2021'
                        name='Social Media App One'
                        textOne='description'
                        textTwo='description'
                        textThree='description'
                    />
                </div>
            </Row>
            <Row className='justify-content-between  p-2'>
                <div className='d-lg-flex my-2'>
                    <ExpItem 
                        role='Frontend Web Developer'
                        company='Capstone Project'
                        date='April 2022'
                        name='Host a Healthcare Hero'
                        textOne='description'
                        textTwo='description'
                        textThree='description'
                    />
                </div>
            </Row>
            <Row className='justify-content-between  p-2'>
                <Col className='text-center'><h2>Other Experiences</h2></Col>
                <div className='d-lg-flex my-2'>
                    <ExpItem 
                        role='Research Laboratory Technician'
                        company='Pharmaceutical Product Development - Las Vegas, NV'
                        date='Oct 2020 - March 2022'
                        // name='Social Media App One'
                        textOne='description'
                        textTwo='description'
                        textThree='description'
                    />
                </div>
            </Row>
            <Row className='justify-content-between  p-2'>
                <div className='d-lg-flex my-2'>
                    <ExpItem 
                        role='Clinical Research Technician'
                        company='Validated Claims Support, Teaneck, NJ'
                        date='July 2019 - August 2020'
                        name='Social Media App One'
                        textOne='description'
                        textTwo='description'
                        textThree='description'
                    />
                </div>
            </Row>
        </>
    )
}

export default Experience;