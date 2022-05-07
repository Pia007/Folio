import React from 'react';
import { Row } from 'reactstrap';

const Current = () => {
    return (
        <React.Fragment>
            <Row className='mt-3'>
                <h2 className='project-text' style={{fontWeight: '400'}}>Currently Working On?</h2>
                <h3 className='text'> I am currently working on improving my <span className='text-primary'>JavaScript</span> skills and building <span className='text-primary'>Fullstack Web Applications</span>.</h3>
            </Row>
        </React.Fragment>
    )
}

export default Current;