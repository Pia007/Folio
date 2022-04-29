import React from 'react';
import { Row, Col } from 'reactstrap';
import htmlLogo from '../images/h5.svg';
import cssLogo from '../images/css3.svg';
import jsLogo from '../images/javascript.png';
import bootstrapLogo from '../images/bootstrap.svg';
import reactLogo from '../images/react.png';
import nodeLogo from '../images/node.png';
import reduxLogo from '../images/red.svg';
import mongoLogo from '../images/mongodb.svg';
import expressLogo from '../images/express2.png';

function Skills(props) {
    return (
        <Row className='my-1'>
            <Col xs={4}>
                <img src={htmlLogo} alt='html-5' className='img-fluid m-1' style={{ width: '50px', height: '49px'}}/>
            </Col>
            <Col xs={4}>
                <img src={cssLogo} alt='css-3' className='img-fluid m-1' style={{ width: '50px', height: '50px'}}/>
            </Col>
            <Col xs={4}>
                <img src={jsLogo} alt='javascipt' className='img-fluid m-1' style={{ width: '50px', height: '50px'}}/>
            </Col>
            <Col xs={4}>
                <img src={bootstrapLogo} alt='bootstrap' className='img-fluid m-1' style={{ width: '50px', height: '50px'}}/>
            </Col>
            <Col xs={4}>
                <img src={reactLogo} alt='react' className='img-fluid m-1' style={{ width: '50px', height: '50px'}}/>
            </Col>
            <Col xs={4}>
                <img src={reduxLogo} alt='redux' className='img-fluid m-1' style={{ width: '50px', height: '50px'}}/>
            </Col>
            <Col xs={4}>
                <img src={nodeLogo} alt='node' className='img-fluid m-1' style={{ width: '50px', height: '50px'}}/>
            </Col>
            <Col xs={4}>
                <img src={expressLogo} alt='express' className='img-fluid m-1' style={{ width: '50px', height: '50px'}}/>
            </Col>
            <Col xs={4}>
                <img src={mongoLogo} alt='mongodb' className='img-fluid m-1' style={{ width: '50px', height: '50px'}}/>
            </Col>
            
        </Row>
    );
}

export default Skills;