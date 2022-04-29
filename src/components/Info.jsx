import { useState } from 'react';
import { Row, Col, ButtonGroup } from "reactstrap";
import Skills from "../components/Icons";
import myPic from '../images/female1.png';
import { Accordion } from '../components/Accordion';


const RenderAbout = () => {
    return (
        <div className='m-2' >
            <p className="my-auto my-lg-5" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptates dolore minus expedita eos, modi quaerat harum placeat quos deserunt aperiam nobis perspiciatis et, incidunt totam rem corrupti beatae enim voluptate. Maxime quidem vero enim neque perspiciatis nihil aperiam necessitatibus impedit omnis doloremque esse, adipisci sequi architecto, veritatis, illo veniam molestias natus. Sapiente tempora provident facere voluptate porro quas ipsum.
            </p>    
        </div>
    )
}

const RenderSkills = () => {
    return (
        <div className="text-center p-2 formHolder">
            <Skills />
        </div>
    );
}


const RenderTraining = () => {
    return (
        <div className="p-2">
            <Accordion 
                name='Nucamp Coding Bootcamp'
                description='Full Stack Web Development Certificate -  April 2022'
                titleHolder='p-0 d-flex justify-content-between'
            /> 
            <Accordion 
                name='Reskill Americans'
                description=' Frontend Web Developer Certificate - October 2021'
                titleHolder='p-0 d-flex justify-content-between'
            /> 
            <Accordion 
                name= 'Drew University'
                description='Bachelor of Arts in Biochemistry & Molecular Biology - 2009'
                titleHolder='p-0 d-flex justify-content-between'
            /> 
        </div>
    );
}

const RenderOther = () => {
    return (
        <div className="text-center p-2">
            <p className="my-auto my-lg-5" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptates dolore minus expedita eos, modi quaerat harum placeat quos deserunt aperiam nobis perspiciatis et, incidunt totam rem corrupti beatae enim voluptate. Maxime quidem vero enim neque perspiciatis nihil aperiam necessitatibus impedit omnis doloremque esse, adipisci sequi architecto, veritatis, illo veniam molestias natus. Sapiente tempora provident facere voluptate porro quas ipsum.
            </p>
        </div>
    );
}


const Info = () => {
    const [ content, setContent ] = useState('aboutMe');

    return (
        <div className='container '>
            
            <Row className="justify-content-between formHolder p-2">
                {/* <Row xs={12} className="text-center"> */}
                    <Col md={4} className="text-center ">
                        <Col  className=''>
                            <img 
                                src={myPic}  
                                alt='Pia Torain'
                                className="img-fluid " 
                                style={{ borderRadius: '50%', border: '3px solid #fff' }}
                            />
                        </Col>
                        <Col className='my-2'>
                            <button className="btn btn-primary">
                                <span>Resume </span>
                                <i className='fa fa-download '/>
                            </button>
                        </Col>
                    </Col>          
                    <Col md={8} className="text-center mt-2 mt-md-0 p-2 ">
                        <ButtonGroup className='container text-center p-0 border-radius-0'>
                            <button onClick={() => { setContent('aboutMe') }} className='btn btn-success p-1 abtBtn' style={{borderRadius: '0'}}>Summary</button>
                            <button onClick={() => { setContent('mySkills') }} className='btn btn-info p-1 abtBtn'>Skills</button>
                            <button onClick={() => { setContent('myTraining') }} className='btn btn-warning p-1 abtBtn'>Training</button>
                            <button onClick={() => { setContent('otherExperiences') }} className='btn btn-secondary p-1 abtBtn' style={{borderRadius: '0'}}>Other </button>
                            {/* <button onClick={() => { setContent('funFacts') }} className='btn btn-outline-success p-0 py-1 abtBtn'>Hobbies</button> */}
                        </ButtonGroup>
    

                        <div className='container mt-3 '>
                            { 
                                (content === 'aboutMe') ? <RenderAbout /> : null 
                            }
                            {
                                (content === 'mySkills') ? <RenderSkills /> : null 
                            }
                            {
                                (content === 'myTraining') ? <RenderTraining /> : null 
                            }
                            {
                                (content === 'otherExperiences') ? <RenderOther /> : null 
                            }
                            {/* {
                                (content === 'funFacts') ? <RenderFunFacts /> : null 
                            } */}
                        </div>
                    </Col>
            </Row>
        </div>
    )
}

export default Info;