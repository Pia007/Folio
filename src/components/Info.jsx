import React from 'react';
import { Row, Col } from "reactstrap";
import myPic from '../images/female1.png';




const Info = () => {
    return (
        <div className='container '>
            
            <Row className="">
                {/* <Row xs={12} className="text-center"> */}
                    <Col md={6} className="text-center">
                        <Col  className='m-2'>
                        <img 
                            src={myPic}  
                            alt='Pia Torain'
                            className="img-fluid " 
                            style={{ borderRadius: '50%', border: '3px solid #fff' }}
                        />
                        {/* <li className="list-item">
                            <span className="">Name: </span>
                            <span className="">Pia Torain</span>   
                        </li>
                        <li className="list-item">
                            <span className="">Language: </span>  
                            <span className="">English</span> 
                        </li>
                        <li className="list-item">
                            <span className="">Availability: </span>  
                            <span className="">For Hire</span> 
                        </li> */}
                        </Col>
                    </Col>
               
                    <Col md={6} className="text-center p-2">
                        {/* <ul className="col"> */}
                        <div className='m-2' >
                            <p className="my-auto my-lg-5" >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptates dolore minus expedita eos, modi quaerat harum placeat quos deserunt aperiam nobis perspiciatis et, incidunt totam rem corrupti beatae enim voluptate. Maxime quidem vero enim neque perspiciatis nihil aperiam necessitatibus impedit omnis doloremque esse, adipisci sequi architecto, veritatis, illo veniam molestias natus. Sapiente tempora provident facere voluptate porro quas ipsum.
                            </p>    
                        </div>
                        {/* </ul> */}
                    </Col>
                {/* </Row> */}
            </Row>
        </div>
    )
}

export default Info;