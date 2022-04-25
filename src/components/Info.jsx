import React from 'react';
import { Row, Col } from "reactstrap";




const Info = () => {
    return (
        <div className='container '>
            
            <Row className="row-content">
                {/* <Row xs={12} className="text-center"> */}
                    <Col md={6} className="text-center">
                        <li className="list-item">
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
                        </li>
                    </Col>
               
                    <Col md={6} className="text-center">
                        {/* <ul className="col"> */}
                            <li className="list-item">
                                <span className="">Location: </span>
                                <span className="">Las Vegas, NV</span>   
                            </li>
                            <li className="list-item">
                                <span className="">Phone: </span>  
                                <span className="">(908) 400-5335</span> 
                            </li>
                            <li className="list-item">
                                <span className="">Email: </span>  
                                <span className="">PiaTorain@yahoo.com</span> 
                            </li>
                        {/* </ul> */}
                    </Col>
                {/* </Row> */}
            </Row>
        </div>
    )
}

export default Info;