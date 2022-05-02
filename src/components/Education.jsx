import React from 'react';
import { Row, Col } from 'reactstrap';
import { EduHeader, EduItem, EduMajor }  from './Items';

const Education = () => {
    return (
        <>
            <Row className='justify-content-between  p-2'>
                <Col className='text-center'><h2>Education</h2></Col>
                <div className='d-lg-flex my-2'>
                    <Col xs={12} lg={6} className='my-3'>
                        <EduHeader type='Bootcamp' />
                        <Col md={12} lg={10} className='mx-auto my-3'>
                            <div className='my-2'>
                                <EduItem 
                                    name='Nucamp Coding Bootcamp'
                                />
                                <Col>
                                    <div className='px-3 my-1'>
                                        <EduMajor 
                                            course='Full Stack Web Development'
                                        />
                                    </div>
                                </Col>
                            </div>
                            <div className='my-2'>
                                <EduItem 
                                    name='Reskill Americans'
                                />
                                <Col>
                                    <div className='px-3 my-1'>
                                        <EduMajor 
                                            course='Frontend Web Developer'
                                        />
                                    </div>
                                </Col>
                            </div>
                            <div className='my-2'>
                                <EduItem 
                                    name='freeCodeCamp'
                                />
                                <Col>
                                    <div className='px-3 my-1'>
                                        <EduMajor 
                                            course='Responsive Web Design'
                                        />
                                    </div>
                                    <div className='px-3 my-1'>
                                        <EduMajor 
                                            course='JavaScript Algorithms & Data Structures'
                                        />
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Col>
                    <Col xs={12} lg={6} className='eduCol my-3'>
                        <EduHeader type='College' />
                        <Col md={12} lg={10} className='mx-auto my-3'>
                            <div className='my-2'>
                                <EduItem 
                                    name='Drew University'
                                />
                                <Col>
                                    <div className='px-3 my-1'>
                                        <EduMajor 
                                            course='BA Biochemistry & Molecular Biology'
                                        />
                                    </div>
                                </Col>
                            </div>
                            <div className='my-2'>
                                <EduItem 
                                    name='Union County College'
                                />
                                <Col>
                                    <div className='px-3 my-1'>
                                        <EduMajor 
                                            course='AS Chemistry'
                                        />
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Col>
                </div>
            </Row>
        </>
    )
}

export default Education