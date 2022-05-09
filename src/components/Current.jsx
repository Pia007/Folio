import React from 'react';
import { Row } from 'reactstrap';
import { Fade } from 'react-reveal';

const Current = () => {
    return (
        <React.Fragment>
            <Row className='mt-3'>
                <Fade delay={800}>
                    <h2 className='project-text' style={{fontWeight: '400'}}>Currently Working On?</h2>
                </Fade>
                <Fade bottom delay={800}>
                    <h3 className='text'> I am currently working on improving my <span className='text-primary'>JavaScript</span> skills and building <span className='text-primary'>Fullstack Web Applications</span>.</h3>
                </Fade>
            </Row>
        </React.Fragment>
    )
}

export default Current;